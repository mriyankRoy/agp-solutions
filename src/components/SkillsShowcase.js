import React, { useState, useEffect } from "react";
import { skills } from "../utils/skills";
import { Zap, ArrowRight, Layers, ShieldCheck } from "lucide-react";

export default function SkillsTabs() {
  const [selected, setSelected] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    setImageLoaded(false);
    const timer = setTimeout(() => setImageLoaded(true), 50);
    return () => clearTimeout(timer);
  }, [selected]);

  const firstHalf = skills.slice(0, 5);
  const secondHalf = skills.slice(5);

  const renderTab = (skill, index, actualIndex) => (
    <button
      key={actualIndex}
      onClick={() => setSelected(actualIndex)}
      className={`group relative px-6 py-5 text-left transition-all duration-300 border-b border-white/5 flex items-center justify-between ${
        selected === actualIndex
          ? "bg-white text-[#44444E]"
          : "bg-transparent text-white/60 hover:text-white hover:bg-black/20"
      }`}
    >
      <div className="flex flex-col">
        <span className={`text-[8px] font-black uppercase tracking-[0.3em] mb-1 ${
          selected === actualIndex ? "text-[#BF092F]" : "text-white/20"
        }`}>
          MODULE 0{actualIndex + 1}
        </span>
        <h3 className="text-[11px] font-black uppercase tracking-widest transition-all">
          {skill.title}
        </h3>
      </div>

      {/* Industrial Indicator */}
      <div className={`w-1.5 h-1.5 rounded-full transition-all ${
        selected === actualIndex ? "bg-[#BF092F] scale-125 shadow-[0_0_8px_#BF092F]" : "bg-white/10"
      }`} />
      
      {/* Selected Accent Line */}
      {selected === actualIndex && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#BF092F]" />
      )}
    </button>
  );

  return (
    <section className="relative overflow-hidden py-24 bg-[#F8F9FA]">
      {/* Visual Watermark Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* --- HEADER SECTION (Industrial Style) --- */}
        <div className="mb-20">
          <nav className="flex items-center gap-2 text-[#44444E]/40 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
            <Zap size={14} className="text-[#BF092F]" />
            <span>TECHNICAL CAPABILITIES</span>
          </nav>
          <h2 className="text-4xl md:text-6xl font-black text-[#44444E] uppercase tracking-tighter leading-none">
            ENGINEERING <span className="text-[#BF092F]">TOOLKIT</span>
          </h2>
          <div className="w-24 h-2 bg-[#BF092F] mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl overflow-hidden border border-gray-200">
          
          {/* LEFT TERMINAL (Dark Sidebar) */}
          <div className="lg:col-span-3 bg-[#44444E] flex flex-col border-r border-white/10">
            <div className="p-6 border-b border-white/10">
              <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Module Index A</h4>
            </div>
            {firstHalf.map((skill, index) => renderTab(skill, index, index))}
          </div>

          {/* CENTER VIEWPORT (Main Display) */}
          <div className="lg:col-span-6 relative bg-white overflow-hidden border-r border-gray-100">
            <div className="relative aspect-square md:aspect-video lg:aspect-auto lg:h-[600px] bg-[#1A1A1E]">
              {/* Technical Dotted Overlay */}
              <div 
                className="absolute inset-0 z-10 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 1px)",
                  backgroundSize: "24px 24px"
                }}
              />

              <img
                src={skills[selected].image}
                alt={skills[selected].title}
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  imageLoaded ? "opacity-100 scale-100 grayscale-0" : "opacity-0 scale-105 grayscale"
                }`}
                onLoad={() => setImageLoaded(true)}
              />

              {/* Information Overlay (Bottom) */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-8 bg-gradient-to-t from-black/90 to-transparent">
                 <div className="flex items-center gap-3 mb-4">
                    <Layers className="text-[#BF092F]" size={18} />
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Operational Status: Active</span>
                 </div>
                 <p className="text-white/70 text-xs font-bold uppercase leading-relaxed tracking-wider max-w-lg">
                    {skills[selected].description}
                 </p>
              </div>

              {/* Progress Loading Bar (Signature Facility Element) */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-30">
                <div 
                  className="h-full bg-[#BF092F] transition-all duration-700 ease-out"
                  style={{ width: imageLoaded ? '100%' : '0%' }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT TERMINAL (Dark Sidebar) */}
          <div className="lg:col-span-3 bg-[#44444E] flex flex-col">
            <div className="p-6 border-b border-white/10">
              <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Module Index B</h4>
            </div>
            {secondHalf.map((skill, index) =>
              renderTab(skill, index + 5, index + 5)
            )}
            
            {/* Technical Verification Footer */}
            <div className="mt-auto p-8 bg-black/20 border-t border-white/10">
               <div className="flex items-center gap-3 text-white/40 mb-2">
                  <ShieldCheck size={16} />
                  <span className="text-[9px] font-black uppercase tracking-widest">System Verified</span>
               </div>
               <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest leading-tight">
                 All engineering workflows comply with ISO 9001:2015 standards.
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}