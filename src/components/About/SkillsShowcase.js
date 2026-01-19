import React, { useState, useEffect, useRef } from "react";
import { skills } from "../../utils/skills";
import {
  ShieldCheck,
  ArrowRight,
  Layers,
} from "lucide-react";
import { useNavigate } from "react-router";
import { CORE_TENETS } from "../../utils/constants";

export default function SkillsShowcase() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // SCROLL ANIMATION LOGIC
  const sectionRef = useRef(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Search-friendly reveal logic
  const revealClass = (active, delay = "duration-1000") =>
    `transition-all ${delay} ease-[cubic-bezier(0.22,1,0.36,1)] ${
      active ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
    }`;

  useEffect(() => {
    setImageLoaded(false);
    const timer = setTimeout(() => setImageLoaded(true), 50);
    return () => clearTimeout(timer);
  }, [selected]);

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
        <span
          className={`text-[8px] font-black uppercase tracking-[0.3em] mb-1 ${
            selected === actualIndex ? "text-[#BF092F]" : "text-white/20"
          }`}
        >
          MODULE 0{actualIndex + 1}
        </span>
        <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] transition-all">
          {skill.title}
        </h3>
      </div>

      <div
        className={`w-1.5 h-1.5 rounded-full transition-all ${
          selected === actualIndex
            ? "bg-[#BF092F] scale-125 shadow-[0_0_8px_#BF092F]"
            : "bg-white/10"
        }`}
      />

      {selected === actualIndex && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#BF092F]" />
      )}
    </button>
  );

  return (
    <section ref={sectionRef} className="relative py-12 bg-transparent mt-20 pt-20 border-t border-gray-100">
      <div className="relative mx-auto w-full">
        {/* --- HEADER SECTION --- */}
        <div className={`mb-12 ${revealClass(hasRevealed)}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-8 w-1 bg-[#BF092F]" />
            <h2 className="text-sm text-[#44444E] uppercase font-bold tracking-wider">
              Technical Capabilities
            </h2>
            <div className="hidden md:block h-px flex-grow ml-8 bg-gray-100" />
          </div>
          <h3 className="text-2xl md:text-4xl font-semibold text-[#44444E] leading-tight uppercase tracking-tight">
            Engineering <span className="text-[#BF092F]">Toolkit</span> &
            Standards
          </h3>
        </div>

        {/* --- MAIN CHASSIS --- */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl rounded-2xl overflow-hidden border border-gray-100 bg-[#44444E] ${revealClass(hasRevealed, "duration-1000 delay-200")}`}>
          {/* LEFT TERMINAL */}
          <div className="lg:col-span-3 bg-[#44444E] flex flex-col border-r border-white/5">
            <div className="p-6 border-b border-white/10 bg-black/20">
              <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">
                Module Index A
              </h4>
            </div>
            {firstHalf.map((skill, index) => renderTab(skill, index))}
          </div>

          {/* CENTER VIEWPORT */}
          <div className="lg:col-span-6 relative bg-white overflow-hidden">
            <div className="relative aspect-square md:aspect-video lg:aspect-auto lg:h-[600px] bg-[#1A1A1E]">
              <div
                className="absolute inset-0 z-10 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              <img
                src={skills[selected].image}
                alt={skills[selected].title}
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              />

              <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-10 bg-gradient-to-t from-black/95 via-black/70 to-transparent">
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="text-[#BF092F]" size={16} />
                  <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">
                    Skill: {skills[selected].title}
                  </span>
                </div>
                <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed tracking-wide max-w-lg italic border-l-2 border-[#BF092F] pl-5">
                  {skills[selected].description}
                </p>
              </div>

              <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-30">
                <div
                  className="h-full bg-[#BF092F] transition-all duration-700 ease-out"
                  style={{ width: imageLoaded ? "100%" : "0%" }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT TERMINAL */}
          <div className="lg:col-span-3 bg-[#44444E] flex flex-col">
            <div className="p-6 border-b border-white/10 bg-black/20">
              <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">
                Module Index B
              </h4>
            </div>
            {secondHalf.map((skill, index) => renderTab(skill, index + 5))}

            <div className="mt-auto p-8 bg-black/30 border-t border-white/5">
              <div className="flex items-center gap-3 text-white/40 mb-3">
                <ShieldCheck size={16} className="text-[#BF092F]" />
                <span className="text-[9px] font-black uppercase tracking-widest">
                  System Verified
                </span>
              </div>
              <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.3em] leading-relaxed">
                Compliant with ISO 9001:2015 <br /> Engineering Protocols.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CORE TENETS - Staggered Reveal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-12">
        {CORE_TENETS.map((tenet, idx) => (
          <div
            key={idx}
            className={`bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-[#BF092F]/20 transition-all group ${revealClass(hasRevealed)}`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            <tenet.icon
              className="text-[#44444E] group-hover:text-[#BF092F] transition-colors mb-6"
              size={28}
            />
            <h4 className="text-sm font-bold text-[#44444E] uppercase tracking-tighter mb-4">
              {tenet.title}
            </h4>
            <p className="text-[10px] font-bold text-gray-400 uppercase leading-relaxed tracking-widest">
              {tenet.desc}
            </p>
          </div>
        ))}
      </div>

      {/* QUALITY PROVEN CTA */}
      <div className={`bg-[#44444E] p-12 rounded-2xl text-white relative overflow-hidden group ${revealClass(hasRevealed, "duration-1000 delay-500")}`}>
        <ShieldCheck
          size={180}
          className="absolute -right-10 -bottom-10 text-white/5 rotate-12 transition-transform group-hover:rotate-0 duration-700"
        />
        <div className="relative z-10 max-w-2xl">
          <h3 className="text-3xl font-black uppercase italic text-[#BF092F] mb-4">
            Quality Proven
          </h3>
          <p className="text-white/50 text-[11px] font-bold uppercase tracking-widest leading-loose">
            Every Art GenPower project is backed by technical excellence. We
            maintain 100% control over engineering protocols, meeting our
            'Zero-Tolerance' failure policy.
          </p>
          <button
            onClick={() => navigate("/projects")}
            className="cursor-pointer mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-[#BF092F] transition-colors"
          >
            View Standards <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}