import React, { useEffect, useRef, useState } from "react";
import { facilities } from "../utils/facilities";
import { ShieldCheck, ArrowRight, Activity, Crosshair, Box } from "lucide-react";

export default function FacilitiesPage() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progresses, setProgresses] = useState(() => Array(facilities.length).fill(0));

  const sectionHeight = facilities.length * 100 + "vh";

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / (rect.height - window.innerHeight)));

      const index = Math.floor(progress * facilities.length);
      setActiveIndex(Math.min(index, facilities.length - 1));

      const segmentSize = 1 / facilities.length;
      setProgresses(facilities.map((_, i) => {
        const local = ((progress - (i * segmentSize)) / segmentSize) * 100;
        return Math.min(100, Math.max(0, local));
      }));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-white py-12 md:py-24 overflow-visible">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* 🏗️ RESPONSIVE HEADER */}
        <div className="mb-10 md:mb-16">
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="h-6 md:h-8 w-1 bg-[#BF092F]" />
            <Activity size={12} className="text-[#BF092F] animate-pulse" />
            <h2 className="text-[10px] md:text-sm text-[#44444E] uppercase font-bold tracking-[0.3em] md:tracking-[0.4em]">
              Global Infrastructure
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-8">
            <h3 className="text-2xl md:text-5xl font-semibold text-[#44444E] leading-tight uppercase tracking-tight">
              The <span className="text-[#BF092F]">Engine</span> <br className="hidden md:block" /> of Production
            </h3>
            <p className="max-w-md text-gray-400 font-bold uppercase tracking-widest text-[8px] md:text-[10px] leading-relaxed pb-1 border-l-2 border-gray-100 pl-4 md:pl-6 lg:ml-8">
              Snapshot // 2025.Q4 <br />
              Deploying mission-critical enclosures from our ISO-certified global terminals.
            </p>
          </div>
        </div>

        {/* 🎢 SCROLL CONTAINER */}
        <div ref={containerRef} className="relative w-full" style={{ height: sectionHeight }}>
          <div className="sticky top-[5vh] md:top-[12vh] h-[90vh] md:h-[80vh] flex items-center justify-center">
            
            <div className="flex flex-col md:flex-row gap-0 w-full shadow-2xl rounded-2xl md:rounded-[2rem] overflow-hidden border border-gray-100 bg-white h-full max-w-[1400px]">
              
              {/* VIEWPORT: Full width on mobile, 1.6 flex on desktop */}
              <div className="flex-[0.8] md:flex-[1.6] bg-[#1A1A1E] p-4 md:p-8 flex flex-col relative overflow-hidden">
                <div className="absolute top-4 md:top-8 left-4 md:left-8 right-4 md:right-8 flex justify-between items-start z-30">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                      <Activity size={10} className="text-[#BF092F] animate-pulse" />
                      <span className="text-[8px] font-mono text-white/40 uppercase tracking-widest">Signal_Stable</span>
                    </div>
                    <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-tighter">Terminal_0{activeIndex + 1}</span>
                  </div>
                  <Crosshair size={20} className="text-white/10" />
                </div>

                <div className="relative flex-grow bg-black rounded-xl md:rounded-2xl overflow-hidden border border-white/5">
                  {facilities.map((c, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 bg-cover bg-center transition-all duration-[1s] ease-out"
                      style={{
                        opacity: i === activeIndex ? 1 : 0,
                        backgroundImage: `url(${c.facilityImg[0]})`,
                        transform: i === activeIndex ? "scale(1)" : "scale(1.1)",
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                </div>

                {/* Bottom Progress Rail */}
                <div className="mt-4 md:mt-8 flex items-center gap-4 md:gap-6">
                  <span className="text-[8px] md:text-[10px] font-mono text-white/20">0{activeIndex + 1}</span>
                  <div className="flex-grow h-[2px] bg-white/5 relative">
                    <div 
                      className="absolute inset-y-0 left-0 bg-[#BF092F] transition-all duration-300 shadow-[0_0_10px_rgba(191,9,47,0.8)]"
                      style={{ width: `${progresses[activeIndex]}%` }}
                    />
                  </div>
                  <span className="text-[8px] md:text-[10px] font-mono text-white/20">0{facilities.length}</span>
                </div>
              </div>

              {/* INTERFACE: Full width on mobile, flex-1 on desktop */}
              <div className="flex-1 flex flex-col bg-white overflow-hidden border-t md:border-t-0 md:border-l border-gray-100">
                <div className="p-4 md:p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Box size={14} className="text-[#BF092F]" />
                    <span className="text-[8px] md:text-[10px] font-black text-[#44444E] uppercase tracking-[0.2em] md:tracking-[0.3em]">Network Directory</span>
                  </div>
                  <div className="px-2 md:px-3 py-1 bg-white border border-gray-100 rounded-full">
                    <span className="text-[8px] font-bold text-gray-400 uppercase tracking-tighter">Node_Active</span>
                  </div>
                </div>
                
                <div className="flex-grow flex flex-col justify-center px-2 md:px-4 py-2">
                  {facilities.map((c, i) => {
                    const isActive = i === activeIndex;
                    const itemProgress = progresses[i] ?? 0;
                    return (
                      <div
                        key={i}
                        className={`relative my-1 md:my-2 p-4 md:p-8 rounded-xl md:rounded-3xl transition-all duration-700 flex flex-col justify-center flex-1 ${
                          isActive ? "bg-gray-50/80 shadow-sm border border-gray-100" : "opacity-20 grayscale"
                        }`}
                      >
                        {/* ⚡ VERTICAL PROGRESS BAR ⚡ */}
                        <div className="absolute left-[8px] md:left-[12px] top-4 md:top-8 bottom-4 md:bottom-8 w-[2px] md:w-[3px]">
                          <div className="absolute inset-0 bg-gray-100 rounded-full" />
                          <div 
                            className="absolute top-0 left-0 w-full rounded-full transition-all duration-300"
                            style={{ 
                              height: `${itemProgress}%`,
                              background: `linear-gradient(to bottom, #BF092F, #ff4d6d)`,
                            }} 
                          >
                            {isActive && itemProgress > 0 && itemProgress < 100 && (
                                <div className="absolute bottom-0 w-2 h-2 md:w-3 md:h-3 bg-white rounded-full -left-[3px] md:-left-[4.5px] border-2 border-[#BF092F] shadow-[0_0_8px_#BF092F] z-20" />
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-1 md:mb-2 pl-4 md:pl-6">
                          <span className={`text-[7px] md:text-[9px] font-black uppercase tracking-widest ${isActive ? "text-[#BF092F]" : "text-gray-400"}`}>
                            Ref_0{i + 1}
                          </span>
                        </div>
                        
                        <h4 className={`text-sm md:text-xl font-bold uppercase tracking-tight pl-4 md:pl-6 ${isActive ? "text-[#44444E]" : "text-gray-300"}`}>
                          {c.title}
                        </h4>

                        {isActive && (
                          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pl-4 md:pl-6 mt-1 md:mt-0">
                            <p className="hidden sm:block text-[11px] md:text-[12px] font-medium text-gray-500 line-clamp-2 md:line-clamp-none leading-relaxed mb-4 md:mb-8">
                              {c.desc}
                            </p>
                            
                            <div className="flex gap-2 md:gap-4 mb-4 md:mb-8">
                              <div className="p-2 md:p-4 bg-white rounded-lg md:rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center">
                                <span className="block text-[6px] md:text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Test</span>
                                <span className="text-[8px] md:text-xs font-bold text-[#44444E]">FAT_CERT</span>
                              </div>
                              <div className="p-2 md:p-4 bg-white rounded-lg md:rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center">
                                <span className="block text-[6px] md:text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Std</span>
                                <span className="text-[8px] md:text-xs font-bold text-[#44444E]">ISO_9001</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                
                <div className="p-4 md:p-8 bg-[#1A1A1E] text-white flex items-center justify-between">
                   <div className="flex items-center gap-2">
                      <ShieldCheck size={12} className="text-[#BF092F]" />
                      <span className="text-[7px] md:text-[9px] font-bold uppercase tracking-widest text-white/40">Verified</span>
                   </div>
                   <span className="text-[7px] md:text-[9px] font-mono text-white/20">AGP.SYS.04</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}