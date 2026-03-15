import React, { useState, useEffect, useRef } from "react";
import { skills } from "../../utils/skills";
import { ShieldCheck, Layers } from "lucide-react";
import { CORE_TENETS } from "../../utils/constants";

export default function SkillsShowcase() {
  const [selected, setSelected] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHasRevealed(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setImageLoaded(false);
    const timer = setTimeout(() => setImageLoaded(true), 50);
    return () => clearTimeout(timer);
  }, [selected]);

  const revealClass = (active, delay = "duration-1000") =>
    `transition-all ${delay} ease-[cubic-bezier(0.22,1,0.36,1)] ${
      active ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
    }`;

  const firstHalf = skills.slice(0, 5);
  const secondHalf = skills.slice(5);

  const renderTab = (skill, actualIndex) => (
    <button
      key={actualIndex}
      onClick={() => setSelected(actualIndex)}
      className={`cursor-pointer group relative px-6 py-5 text-left transition-all duration-300 border-b border-white/5 flex items-center justify-between ${
        selected === actualIndex
          ? "bg-white text-[#44444E]"
          : "bg-transparent text-white/40 hover:text-white hover:bg-white/5"
      }`}
    >
      <div className="flex flex-col">
        <span className={`text-[8px] font-black uppercase tracking-[0.3em] mb-1 ${selected === actualIndex ? "text-[#BF092F]" : "text-white/20"}`}>
          MODULE 0{actualIndex + 1}
        </span>
        <h3 className="text-[11px] font-bold uppercase tracking-[0.2em]">{skill.title}</h3>
      </div>
      <div className={`w-1.5 h-1.5 rounded-full transition-all ${selected === actualIndex ? "bg-[#BF092F] scale-125" : "bg-white/10"}`} />
      {selected === actualIndex && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#BF092F]" />}
    </button>
  );

  return (
    <section ref={sectionRef} className="relative py-12 bg-transparent mt-10 md:mt-20 border-t border-gray-100">
      <div className="relative mx-auto w-full px-4 md:px-0">
        
        {/* --- HEADER --- */}
        <div className={`mb-8 md:mb-12 ${revealClass(hasRevealed)}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-8 w-1 bg-[#BF092F]" />
            <h2 className="text-sm text-[#44444E] uppercase font-bold tracking-wider">Technical Capabilities</h2>
          </div>
          <h3 className="text-2xl md:text-4xl font-semibold text-[#44444E] uppercase">
            Engineering <span className="text-[#BF092F]">Toolkit</span>
          </h3>
        </div>

        {/* --- MOBILE ONLY TABS --- */}
        <div className="lg:hidden flex overflow-x-auto pb-4 mb-4 gap-2 scrollbar-hide snap-x">
          {skills.map((skill, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className={`shrink-0 px-5 py-2.5 rounded-full text-[10px] font-bold uppercase border transition-all ${
                selected === idx ? "bg-[#BF092F] border-[#BF092F] text-white" : "bg-white border-gray-200 text-gray-400"
              }`}
            >
              {skill.title}
            </button>
          ))}
        </div>

        {/* --- MAIN CHASSIS --- */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden border border-gray-100 bg-[#44444E] ${revealClass(hasRevealed, "delay-200")}`}>
          
          {/* LEFT TERMINAL (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-3 bg-[#44444E] flex-col border-r border-white/5">
            <div className="p-6 border-b border-white/10 bg-black/20">
              <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Index A</h4>
            </div>
            {firstHalf.map((skill, index) => renderTab(skill, index))}
          </div>

          {/* CENTER VIEWPORT (Adaptive) */}
          <div className="lg:col-span-6 relative aspect-[4/5] md:aspect-video lg:aspect-auto lg:h-[600px] bg-[#1A1A1E]">
            <img
              src={skills[selected].image}
              alt={skills[selected].title}
              className={`w-full h-full object-cover transition-all duration-1000 ${imageLoaded ? "opacity-60 scale-100" : "opacity-0 scale-105"}`}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 bg-gradient-to-t from-black via-black/40 to-transparent">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="text-[#BF092F]" size={16} />
                <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Skill: {skills[selected].title}</span>
              </div>
              <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed max-w-lg italic border-l-2 border-[#BF092F] pl-5">
                {skills[selected].description}
              </p>
            </div>
          </div>

          {/* RIGHT TERMINAL (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-3 bg-[#44444E] flex-col">
            <div className="p-6 border-b border-white/10 bg-black/20">
              <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Index B</h4>
            </div>
            {secondHalf.map((skill, index) => renderTab(skill, index + 5))}
            <div className="mt-auto p-8 bg-black/30 border-t border-white/5">
              <div className="flex items-center gap-3 text-white/40 mb-3">
                <ShieldCheck size={16} className="text-[#BF092F]" />
                <span className="text-[9px] font-black uppercase tracking-widest">System Verified</span>
              </div>
              <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]">Compliant with ISO Protocols.</p>
            </div>
          </div>
        </div>

        {/* --- CORE TENETS (Mobile Adaptive) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 md:mt-12">
          {CORE_TENETS.map((tenet, idx) => (
            <div key={idx} className={`bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 flex md:block items-center gap-4 ${revealClass(hasRevealed)}`} style={{ transitionDelay: `${idx * 150}ms` }}>
              <tenet.icon className="text-[#BF092F] mb-0 md:mb-6 shrink-0" size={24} />
              <div>
                <h4 className="text-xs md:text-sm font-bold text-[#44444E] uppercase mb-1 md:mb-4">{tenet.title}</h4>
                <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">{tenet.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}