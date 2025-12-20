import React, { useEffect, useRef, useState } from "react";
import { facilities } from "../utils/facilities";
import { ShieldCheck, ArrowRight, Monitor } from "lucide-react";

export default function GraphiteScrollingFeatures() {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progresses, setProgresses] = useState(() =>
    Array(facilities.length).fill(0)
  );
  const [containerHeight, setContainerHeight] = useState(3600);

  // --- STICKY LOGIC PRESERVED ---
  useEffect(() => {
    const base = Math.max(window.innerHeight * 3.6, 3600);
    const dynamic = Math.round(facilities.length * (window.innerHeight * 0.95));
    setContainerHeight(Math.max(base, dynamic));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let rafId = null;

    function onScroll() {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const top = Math.max(0, -rect.top);
        const scrollable = Math.max(1, rect.height - window.innerHeight);
        const pct = Math.min(1, Math.max(0, top / scrollable));

        const idx = Math.min(facilities.length - 1, Math.floor(pct * facilities.length));
        setActiveIndex(idx);

        const itemSize = 1 / facilities.length;
        const newProgresses = facilities.map((_, i) => {
          const start = i * itemSize;
          const end = start + itemSize;
          const local = (pct - start) / (end - start);
          return Math.round(Math.max(0, Math.min(1, local)) * 10000) / 100;
        });
        setProgresses(newProgresses);
      });
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  function activateCard(i) {
    const rect = containerRef.current.getBoundingClientRect();
    const scrollable = Math.max(0, rect.height - window.innerHeight);
    const targetPct = (i + 0.5) / facilities.length;
    const targetScroll = containerRef.current.offsetTop + targetPct * scrollable;
    window.scrollTo({ top: Math.max(0, Math.round(targetScroll - 24)), behavior: "smooth" });
  }

  return (
    <section className="bg-[#F8F9FA] px-6 md:px-16 lg:px-24 py-20">
      <div
        ref={containerRef}
        className="w-full relative"
        style={{ height: `${containerHeight}px` }}
      >
        {/* THE STICKY WRAPPER - Functionality Restored */}
        <div
          ref={stickyRef}
          className="sticky top-0 h-screen flex items-center justify-center"
        >
          <div className="flex flex-col md:flex-row gap-10 w-full max-w-[1300px] items-stretch">
            
            {/* 1. LEFT COLUMN: INDUSTRIAL VIEWPORT CHASSIS */}
            <div className="hidden md:flex flex-[1.3] bg-[#44444E] border border-neutral-800 shadow-2xl p-4 flex-col relative overflow-hidden h-[550px]">
              
              {/* Technical Dotted Overlay */}
              <div className="absolute inset-0 opacity-[0.1] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)", backgroundSize: "20px 20px" }}
              />

              {/* Viewport Header */}
              <div className="flex justify-between items-center mb-4 px-2">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#BF092F]" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.4em]">Optic Feed 0{activeIndex + 1}</span>
              </div>

              {/* Main Image Viewport */}
              <div className="relative flex-grow bg-black overflow-hidden border border-black shadow-2xl">
                {facilities.map((c, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out"
                    style={{
                      opacity: i === activeIndex ? 1 : 0,
                      transform: i === activeIndex ? "scale(1)" : "scale(1.1)",
                      filter: i === activeIndex ? "none" : "grayscale(0.5) brightness(0.4)",
                      backgroundImage: `url(${c.facilityImg[0]})`,
                    }}
                  />
                ))}
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent z-20">
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter">
                    {facilities[activeIndex]?.title}
                  </h3>
                </div>
              </div>

              {/* System Loader Line */}
              <div className="mt-4 h-1 bg-white/5 relative overflow-hidden">
                <div 
                  className="absolute inset-y-0 left-0 bg-[#BF092F] transition-all duration-300"
                  style={{ width: `${progresses[activeIndex]}%` }}
                />
              </div>
            </div>

            {/* 2. RIGHT COLUMN: INTERACTIVE TERMINAL LIST */}
            <div className="flex-1 flex flex-col justify-center gap-4">
              {facilities.map((c, i) => {
                const isActive = i === activeIndex;
                const progress = progresses[i] ?? 0;
                return (
                  <div
                    key={i}
                    onClick={() => activateCard(i)}
                    className={`relative p-6 transition-all duration-500 cursor-pointer border flex flex-col ${
                      isActive 
                        ? "bg-[#44444E] border-[#BF092F] translate-x-3 shadow-2xl" 
                        : "bg-white border-gray-100 opacity-60 hover:opacity-100"
                    }`}
                  >
                    {/* Vertical Progress Accent */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-100 overflow-hidden">
                      <div className="w-full bg-[#BF092F] transition-all duration-500" style={{ height: `${progress}%` }} />
                    </div>

                    <div className="flex items-center justify-between pl-2">
                      <div className="flex flex-col">
                        <span className={`text-[8px] font-black uppercase tracking-[0.3em] mb-1 ${isActive ? "text-[#BF092F]" : "text-gray-400"}`}>
                          Station {i + 1}
                        </span>
                        <h4 className={`text-sm font-black uppercase tracking-widest ${isActive ? "text-white" : "text-[#44444E]"}`}>
                          {c.title}
                        </h4>
                      </div>
                      <span className={`text-[10px] font-black ${isActive ? "text-white/40" : "text-gray-300"}`}>
                        {Math.round(progress)}%
                      </span>
                    </div>

                    {isActive && (
                      <div className="mt-4 pl-2 space-y-4 animate-in fade-in slide-in-from-top-1 duration-500">
                        <p className="text-[11px] font-bold text-white/70 uppercase leading-snug tracking-wider">
                          {c.desc}
                        </p>
                        <div className="flex items-center justify-between pt-3 border-t border-white/10">
                           <div className="flex items-center gap-2 text-[#BF092F]">
                              <ShieldCheck size={14} />
                              <span className="text-[9px] font-black uppercase tracking-tighter text-white/40">Verified Facility</span>
                           </div>
                           <ArrowRight size={18} className="text-white transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}