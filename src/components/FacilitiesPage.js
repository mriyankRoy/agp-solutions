import React, { useEffect, useRef, useState } from "react";
import { facilities } from "../utils/facilities";
import { ShieldCheck, Activity, Crosshair, Box, MapPin, Maximize, Zap, CheckCircle2, ChevronRight } from "lucide-react";
import { Link } from "react-router";

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
        
        {/* 🏗️ HEADER SECTION */}
        <div className="mb-10 md:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-8 w-1 bg-[#BF092F]" />
            <Activity size={14} className="text-[#BF092F] animate-pulse" />
            <h2 className="text-sm text-[#44444E] uppercase font-bold tracking-[0.4em]">
              Global Infrastructure
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h3 className="text-3xl md:text-5xl font-semibold text-[#44444E] leading-tight uppercase tracking-tight">
              The <span className="text-[#BF092F]">Engine</span> <br className="hidden md:block" /> of Production
            </h3>
            <p className="max-w-md text-gray-400 font-bold uppercase tracking-widest text-[10px] leading-relaxed pb-1 border-l-2 border-gray-100 pl-6 lg:ml-8">
              Deployment Log // 2025.Q4 <br />
              Precision manufacturing via ISO-certified high-capacity terminals.
            </p>
          </div>
        </div>

        {/* 🎢 SCROLL CONTAINER */}
        <div ref={containerRef} className="relative w-full" style={{ height: sectionHeight }}>
          <div className="sticky top-[5vh] md:top-[12vh] h-[90vh] md:h-[80vh] flex items-center justify-center">
            
            <div className="flex flex-col md:flex-row gap-0 w-full shadow-2xl rounded-2xl md:rounded-[2rem] overflow-hidden border border-gray-100 bg-white h-full max-w-[1400px]">
              
              {/* LEFT VIEWPORT */}
              <div className="flex-[0.8] md:flex-[1.2] bg-[#1A1A1E] p-4 md:p-8 flex flex-col relative overflow-hidden">
                <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-30">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#BF092F] animate-ping" />
                      <span className="text-[10px] font-mono text-white uppercase tracking-widest">Live_Terminal_Feed</span>
                    </div>
                  </div>
                  <Crosshair size={20} className="text-white/20" />
                </div>

                <div className="relative flex-grow bg-black rounded-2xl overflow-hidden border border-white/5 group">
                  {facilities.map((c, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 bg-cover bg-center transition-all duration-[1.2s] cubic-bezier(0.4, 0, 0.2, 1)"
                      style={{
                        opacity: i === activeIndex ? 1 : 0,
                        backgroundImage: `url(${c.facilityImg[0]})`,
                        transform: i === activeIndex ? "scale(1)" : "scale(1.15)",
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1E] via-transparent to-black/40" />
                </div>

                <div className="mt-8 flex items-center gap-6">
                  <span className="text-[10px] font-mono text-[#BF092F] font-bold">0{activeIndex + 1}</span>
                  <div className="flex-grow h-[1px] bg-white/10 relative">
                    <div 
                      className="absolute inset-y-0 left-0 bg-[#BF092F] transition-all duration-300 shadow-[0_0_15px_#BF092F]"
                      style={{ width: `${progresses[activeIndex]}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-white/20">0{facilities.length}</span>
                </div>
              </div>

              {/* RIGHT INTERFACE */}
              <div className="flex-1 flex flex-col bg-white overflow-hidden border-l border-gray-100">
                <div className="p-6 md:p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
                  <div className="flex items-center gap-3">
                    <Box size={16} className="text-[#BF092F]" />
                    <span className="text-xs font-black text-[#44444E] uppercase tracking-[0.3em]">Facility Directory</span>
                  </div>
                  <div className="flex gap-1">
                    {facilities.map((_, i) => (
                      <div key={i} className={`h-1 w-4 rounded-full transition-all ${i === activeIndex ? "bg-[#BF092F]" : "bg-gray-200"}`} />
                    ))}
                  </div>
                </div>
                
                <div className="flex-grow flex flex-col px-4 md:px-8 py-4 overflow-y-auto custom-scrollbar">
                  {facilities.map((c, i) => {
                    const isActive = i === activeIndex;
                    const itemProgress = progresses[i] ?? 0;
                    return (
                      <Link
                        key={i}
                        to={`/facilities/${c.id}`}
                        className={`relative mb-6 p-6 md:p-8 pl-10 md:pl-12 rounded-3xl transition-all duration-500 flex flex-col border ${
                          isActive 
                            ? "bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] border-[#BF092F]/10 opacity-100" 
                            : "opacity-30 grayscale blur-[1px] scale-[0.98]"
                        }`}
                      >
                        {/* 🚀 MODERN INDIVIDUAL VERTICAL PROGRESS 🚀 */}
                        <div className="absolute left-4 md:left-6 top-8 bottom-8 w-[2px]">
                          <div className="absolute inset-0 bg-gray-100/50 rounded-full" />
                          <div 
                            className="absolute top-0 left-0 w-full rounded-full transition-all duration-150 ease-out"
                            style={{ 
                              height: `${itemProgress}%`,
                              background: `linear-gradient(to bottom, #BF092F, #ff4d6d)`,
                              boxShadow: isActive ? '0 0 10px rgba(191,9,47,0.3)' : 'none'
                            }} 
                          >
                            {isActive && itemProgress > 0 && itemProgress < 100 && (
                                <div className="absolute bottom-0 -left-[4px] w-[10px] h-[10px] bg-white border-[3px] border-[#BF092F] rounded-full shadow-[0_0_12px_#BF092F] z-20">
                                    <div className="absolute inset-0 rounded-full bg-[#BF092F] animate-ping opacity-30" />
                                </div>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full border ${isActive ? "text-[#BF092F] border-[#BF092F]/20 bg-[#BF092F]/5" : "text-gray-400 border-gray-100"}`}>
                            {isActive ? "SYSTEM_ONLINE" : "STANDBY"}
                          </span>
                          <span className="text-[10px] font-black text-gray-300">NODE_0{i + 1}</span>
                        </div>
                        
                        <h4 className="text-2xl font-bold text-[#44444E] uppercase tracking-tighter mb-2">
                          {c.title}
                        </h4>

                        <div className="flex items-center gap-2 text-gray-400 mb-6">
                          <MapPin size={12} className="text-[#BF092F]" />
                          <span className="text-[10px] font-bold uppercase tracking-widest">{c.location}</span>
                        </div>

                        <div className={`grid grid-cols-2 gap-4 mb-6 transition-all duration-700 delay-100 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                          <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100">
                            <div className="flex items-center gap-2 mb-1">
                              <Maximize size={12} className="text-gray-400" />
                              <span className="text-[8px] font-bold text-gray-400 uppercase">Total Area</span>
                            </div>
                            <span className="text-xs font-black text-[#44444E]">{c.totalArea}</span>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100">
                            <div className="flex items-center gap-2 mb-1">
                              <Zap size={12} className="text-gray-400" />
                              <span className="text-[8px] font-bold text-gray-400 uppercase">Capacity</span>
                            </div>
                            <span className="text-xs font-black text-[#44444E]">{c.productionCapacity}</span>
                          </div>
                        </div>

                        {isActive && (
                          <div className="space-y-2 mb-6 animate-in fade-in slide-in-from-left-4 duration-700">
                            {c.highlights.slice(0, 3).map((text, idx) => (
                              <div key={idx} className="flex items-center gap-3 text-gray-500">
                                <CheckCircle2 size={12} className="text-[#BF092F] flex-shrink-0" />
                                <span className="text-[10px] font-medium leading-tight">{text}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                          <span className="text-[9px] font-black text-[#BF092F] uppercase tracking-[0.2em]">Explore Analytics</span>
                          <ChevronRight size={16} className={`transition-transform duration-300 ${isActive ? "translate-x-0 text-[#BF092F]" : "-translate-x-4 opacity-0"}`} />
                        </div>
                      </Link>
                    );
                  })}
                </div>
                
                <div className="p-6 bg-[#1A1A1E] text-white flex items-center justify-between">
                   <div className="flex items-center gap-2">
                      <ShieldCheck size={14} className="text-[#BF092F]" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Verified Infrastructure</span>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="h-1 w-8 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-[#BF092F] animate-progress" style={{ width: '65%' }} />
                      </div>
                      <span className="text-[10px] font-mono text-white/20 tracking-tighter">AGP.SYS.04</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #eee; border-radius: 10px; }
      `}</style>
    </section>
  );
}