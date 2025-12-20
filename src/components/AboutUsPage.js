import React, { useState, useEffect } from "react";
import { 
  Factory, 
  ChevronLeft, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Cpu, 
  Settings, 
  Box 
} from "lucide-react";
import { useNavigate } from "react-router";
import SkillsShowcase from "./SkillsShowcase";

export default function AboutUsPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const CORE_TENETS = [
    {
      icon: Cpu,
      title: "Bespoke Engineering",
      desc: "Specializing in E-Houses, power modules, and custom generator packaging tailored to extreme industrial specs."
    },
    {
      icon: Factory,
      title: "Global Production",
      desc: "Leveraging high-capacity manufacturing terminals to deliver large-scale infrastructure across UK and Europe."
    },
    {
      icon: ShieldCheck,
      title: "QA Compliance",
      desc: "Every project undergoes rigorous Factory Acceptance Testing (FAT) to ensure ISO-certified reliability."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#44444E] font-sans selection:bg-[#CF0F0F] selection:text-white">
      
      {/* 🏗️ CINEMATIC HERO SECTION */}
      <header className="relative h-[35vh] min-h-[500px] w-full flex items-end bg-[#44444E] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-0 bg-fixed" />
        
        {/* Animated Red Beams */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#CF0F0F] to-transparent animate-pulse" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse delay-700" />
        </div>

        <div className="container mx-auto px-6 mb-32 relative z-20">
          <button 
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 text-white/70 hover:text-[#CF0F0F] mb-6 transition-colors"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Corporate Profile</span>
          </button>
          
          <h1 className={`text-5xl md:text-8xl font-black text-white leading-tight uppercase tracking-tighter transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            ENGINEERING <span className="text-[#CF0F0F]">POWER</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base uppercase tracking-[0.4em] font-bold mt-4">
            Art GenPower Solutions Ltd // Bridging the gap
          </p>
        </div>
      </header>

      {/* 🏭 MAIN CONTENT AREA - OVERLAP SECTION */}
      <main className="container mx-auto px-6 -translate-y-24 relative z-30">
        
        {/* PRIMARY DESCRIPTION BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 bg-white p-12 shadow-2xl border-t-4 border-[#44444E]">
             <h2 className="text-[11px] font-black text-[#CF0F0F] uppercase tracking-[0.4em] mb-6 block">Company_Manifesto</h2>
             <p className="text-2xl md:text-4xl font-black text-[#44444E] leading-tight uppercase tracking-tight mb-8">
               Defining the standard for high-performance <br className="hidden md:block"/> containerized energy infrastructure.
             </p>
             <p className="text-gray-500 font-bold uppercase tracking-widest text-xs leading-loose mb-6">
               Art GenPower Solutions Ltd is a leading provider of engineered generator enclosures, E-Houses, and mechanical accessories. We bridge the gap between heavy-scale global production and surgical UK engineering standards, delivering mission-critical power modules for the world's most demanding sectors.
             </p>
             <div className="flex gap-4">
                <div className="px-4 py-2 bg-[#F8F9FA] border border-gray-200 text-[10px] font-black uppercase tracking-widest text-[#44444E]">UK Engineering HQ</div>
                <div className="px-4 py-2 bg-[#F8F9FA] border border-gray-200 text-[10px] font-black uppercase tracking-widest text-[#44444E]">Global Supply Chain</div>
             </div>
          </div>

          <div className="lg:col-span-4 bg-[#44444E] p-10 text-white relative overflow-hidden group">
            <Box className="absolute -right-6 -bottom-6 text-white/5 size-40 group-hover:rotate-12 transition-transform duration-700" />
            <h3 className="text-xl font-black uppercase italic text-[#CF0F0F] mb-6">Product Scope</h3>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
              <li className="flex items-center gap-3"><Zap size={14} className="text-[#CF0F0F]"/> Custom Acoustic Enclosures</li>
              <li className="flex items-center gap-3"><Zap size={14} className="text-[#CF0F0F]"/> Utility-Grade E-Houses</li>
              <li className="flex items-center gap-3"><Zap size={14} className="text-[#CF0F0F]"/> Electrical Switchgear Skids</li>
              <li className="flex items-center gap-3"><Zap size={14} className="text-[#CF0F0F]"/> Fuel & Exhaust Systems</li>
            </ul>
          </div>
        </div>

        {/* SKILLS / TECH SHOWCASE COMPONENT */}
        <div className="mt-20">
            <SkillsShowcase />
        </div>

        {/* 🖼️ IMAGE PLACEHOLDER: PRODUCTION TERMINAL */}
        <div className="mt-24 relative h-[500px] w-full bg-gray-200 border border-gray-300 overflow-hidden group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700" />
            <div className="w-full h-full flex flex-col items-center justify-center text-[10px] font-black text-gray-400 uppercase tracking-[0.5em]">
                <Factory size={48} className="mb-4 opacity-20" />
                [ Image_Ref: Main_Assembly_Terminal ]
            </div>
            <div className="absolute bottom-6 left-6 text-white z-20">
                <span className="text-[10px] font-mono opacity-50 block mb-1">UNIT_LOC // Terminal_01</span>
                <span className="text-xs font-bold uppercase tracking-widest">Global Manufacturing Hub</span>
            </div>
        </div>

        {/* CORE VALUES GRID */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_TENETS.map((tenet, idx) => (
              <div key={idx} className="bg-white p-10 border-b-4 border-gray-200 hover:border-[#CF0F0F] transition-all group">
                <tenet.icon className="text-[#44444E] group-hover:text-[#CF0F0F] transition-colors mb-6" size={32} />
                <h4 className="text-lg font-black text-[#44444E] uppercase tracking-tighter mb-4">{tenet.title}</h4>
                <p className="text-[11px] font-bold text-gray-400 uppercase leading-relaxed tracking-widest">
                  {tenet.desc}
                </p>
              </div>
            ))}
        </div>

        {/* 🖼️ SECONDARY IMAGES GRID */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-96 bg-gray-200 border border-gray-300 flex flex-col items-center justify-center text-[10px] font-black text-gray-400 uppercase tracking-[0.5em]">
                <Settings size={32} className="mb-4 opacity-20" />
                [ Image_Ref: Bespoke_Engineering_Process ]
            </div>
            <div className="h-96 bg-[#44444E] p-12 text-white flex flex-col justify-center relative overflow-hidden group">
                <ShieldCheck size={180} className="absolute -right-10 -bottom-10 text-white/5 rotate-12 transition-transform group-hover:rotate-0 duration-700" />
                <h3 className="text-3xl font-black uppercase italic text-[#CF0F0F] mb-4 relative z-10">Quality Proven</h3>
                <p className="text-white/50 text-[11px] font-bold uppercase tracking-widest leading-loose relative z-10">
                  Every Art GenPower project is backed by a legacy of technical excellence. We maintain 100% control over engineering protocols, ensuring that every enclosure delivered meets our internal 'Zero-Tolerance' failure policy.
                </p>
            </div>
        </div>

        {/* TECHNICAL CTA / FOOTER STATS */}
        <div className="mt-32 py-20 bg-[#44444E] relative overflow-hidden flex flex-col items-center justify-center text-center">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter relative z-10">
                Building the Future of <span className="text-[#CF0F0F]">Infrastructure</span>
            </h2>
            <p className="text-white/50 text-xs font-bold uppercase tracking-widest max-w-2xl mb-10 relative z-10 leading-relaxed">
                Connect with our engineering hub to discuss bespoke containerization, technical consultancy, or large-scale procurement.
            </p>
            <a
                href="mailto:info@artgenpower.com"
                className="relative z-10 px-12 py-4 bg-[#CF0F0F] text-white text-xs font-black uppercase tracking-[0.3em] hover:bg-white hover:text-[#44444E] transition-all duration-500"
            >
                Secure Connection // Contact Team
            </a>
        </div>

      </main>

      {/* Global Background Pattern */}
      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </div>
  );
}