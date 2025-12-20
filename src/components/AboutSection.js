import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Factory, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Globe, 
  Box, 
  Cpu 
} from "lucide-react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="about" className="relative bg-[#F8F9FA] py-24 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 🏗️ INDUSTRIAL HEADER CHASSIS */}
        <div className={`mb-20 border-l-4 border-[#CF0F0F] pl-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="flex items-center gap-3 mb-4">
            <Activity size={16} className="text-[#CF0F0F] animate-pulse" />
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em]">System_Overview // Corporate_Identity</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-[#44444E] uppercase tracking-tighter leading-none">
            Strategic <br/> <span className="text-[#CF0F0F]">Infrastructure</span>
          </h2>
        </div>

        {/* 🏭 MAIN CONTENT OVERLAP CARD */}
        <div className={`grid lg:grid-cols-12 gap-0 shadow-2xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Left Side: The "Identity" Block */}
          <div className="lg:col-span-8 bg-white p-10 md:p-16 border-t-4 border-[#44444E]">
            <h3 className="text-[11px] font-black text-[#CF0F0F] uppercase tracking-[0.4em] mb-8">Mission_Manifesto</h3>
            <p className="text-2xl md:text-3xl font-black text-[#44444E] uppercase tracking-tight leading-tight mb-8">
              Art GenPower Solutions Ltd bridges the gap between <span className="text-[#CF0F0F]">Global Scale</span> and <span className="text-gray-400">UK Engineering Precision.</span>
            </p>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs leading-loose mb-10">
              By integrating specialized manufacturing units in the UAE and India with our UK-based design hub, we deliver utility-grade E-Houses, acoustic enclosures, and bespoke power modules. We don't just supply equipment; we engineer the protective architecture for the world's most critical energy systems.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Stat mini label="FAT Tested" val="100%" />
              <Stat mini label="Manufacturing" val="Global" />
              <Stat mini label="Engineering" val="Bespoke" />
              <Stat mini label="Standards" val="ISO" />
            </div>
          </div>

          {/* Right Side: Technical Specs Block */}
          <div className="lg:col-span-4 bg-[#44444E] p-10 md:p-12 text-white flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <Box className="absolute -right-10 -bottom-10 text-white/5 size-48 transition-transform group-hover:rotate-12 duration-700" />
            
            <div className="relative z-10">
              <h4 className="text-xl font-black uppercase italic text-[#CF0F0F] mb-8 border-b border-white/10 pb-4">Core Deliverables</h4>
              <ul className="space-y-6">
                <TechItem icon={Zap} text="Bespoke Generator Enclosures" />
                <TechItem icon={Cpu} text="Utility-Grade E-Houses" />
                <TechItem icon={Factory} text="Switchgear & Control Modules" />
                <TechItem icon={ShieldCheck} text="Advanced Acoustic Treatment" />
              </ul>
            </div>

            <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
               <div className="text-[9px] font-mono text-white/40 uppercase tracking-widest leading-relaxed">
                 Registry_Ref: AGP_UK_2025 <br/>
                 Status: Operational_Elite
               </div>
            </div>
          </div>
        </div>

        {/* 🏗️ MANUFACTURING PARTNERSHIP STRIP */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
            <div className="bg-[#F1F2F4] p-8 flex items-center gap-6 group hover:bg-white transition-all border border-transparent hover:border-gray-200">
                <div className="w-16 h-16 bg-[#44444E] flex items-center justify-center text-[#CF0F0F]">
                    <Globe size={32} />
                </div>
                <div>
                    <h5 className="font-black text-[#44444E] uppercase text-sm tracking-widest">Global Reach</h5>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Direct manufacturing via UAE and India Hubs.</p>
                </div>
            </div>
            <div className="bg-[#F1F2F4] p-8 flex items-center gap-6 group hover:bg-white transition-all border border-transparent hover:border-gray-200">
                <div className="w-16 h-16 bg-[#CF0F0F] flex items-center justify-center text-white">
                    <ShieldCheck size={32} />
                </div>
                <div>
                    <h5 className="font-black text-[#44444E] uppercase text-sm tracking-widest">UK Quality Assurance</h5>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Final FAT and inspection conducted to UK standards.</p>
                </div>
            </div>
        </div>

        {/* EPIC CTA SECTION */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-gray-200 pt-12">
            <div className="flex gap-2">
                <div className="w-2 h-2 bg-[#CF0F0F]" />
                <div className="w-2 h-2 bg-[#44444E]" />
                <div className="w-2 h-2 bg-gray-300" />
            </div>
            <a
              href="/about"
              className="group flex items-center gap-6 px-10 py-5 bg-[#44444E] text-white hover:bg-[#CF0F0F] transition-all duration-500"
            >
              <span className="text-xs font-black uppercase tracking-[0.4em]">Explore Corporate Profile</span>
              <ArrowRight className="group-hover:translate-x-3 transition-transform" size={18} />
            </a>
        </div>
      </div>
    </div>
  );
}

/* Helper Components */
function Stat({ label, val }) {
  return (
    <div className="bg-[#F8F9FA] p-4 border border-gray-100">
      <div className="text-xs font-black text-[#CF0F0F] uppercase tracking-widest mb-1">{val}</div>
      <div className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">{label}</div>
    </div>
  );
}

function TechItem({ icon: Icon, text }) {
  return (
    <li className="flex items-center gap-4 group/item">
      <div className="w-8 h-8 bg-white/5 flex items-center justify-center group-hover/item:bg-[#CF0F0F] transition-colors">
        <Icon size={14} className="text-[#CF0F0F] group-hover/item:text-white" />
      </div>
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 group-hover/item:text-white transition-colors">{text}</span>
    </li>
  );
}