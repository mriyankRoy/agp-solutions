import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Factory, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Globe, 
  Box, 
  Cpu,
  Layers
} from "lucide-react";
import { Link, useNavigate } from "react-router";


export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="about" className="relative bg-white py-24 overflow-hidden">

      {/* 1. MATCHED CONTAINER: px-4 md:px-6 for perfect alignment */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* 🏗️ INDUSTRIAL HEADER: Aligned with Features & Product Registry */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-8 w-1 bg-[#BF092F]" />
            <Activity size={14} className="text-[#BF092F] animate-pulse" />
            <h2 className="text-sm text-[#44444E] uppercase font-bold tracking-[0.4em]">
              Strategic Infrastructure
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h3 className="text-3xl md:text-5xl font-semibold text-[#44444E] leading-tight uppercase tracking-tight">
              Corporate <span className="text-[#BF092F]">Identity</span> <br className="hidden md:block"/> & Engineering
            </h3>
            <p className="max-w-md text-gray-400 font-bold uppercase tracking-widest text-[10px] leading-relaxed pb-1 border-l-2 border-gray-100 pl-6 lg:ml-8">
              System_Overview // AGP.UK.2025 // Delivering surgical precision through global manufacturing scale.
            </p>
          </div>
        </div>

        {/* 🏭 MAIN CONTENT CARD: Rounded-2xl and Matched Shadows */}
        <div className={`grid lg:grid-cols-12 gap-0 shadow-2xl rounded-2xl overflow-hidden border border-gray-100 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Left Side: The "Identity" Block */}
          <div className="lg:col-span-8 bg-white p-10 md:p-16 border-r border-gray-50">
            <h3 className="text-[11px] font-black text-[#BF092F] uppercase tracking-[0.4em] mb-8">Mission_Manifesto</h3>
            <p className="text-2xl md:text-3xl font-semibold text-[#44444E] uppercase tracking-tight leading-tight mb-8">
              Bridging the gap between <span className="text-[#BF092F]">Global Scale</span> <br/> and <span className="text-gray-400">UK Engineering Precision.</span>
            </p>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-[11px] leading-loose mb-10 max-w-2xl">
              By integrating specialized manufacturing units in the UAE and India with our UK design hub, we deliver utility-grade E-Houses, acoustic enclosures, and power modules. We engineer the protective architecture for critical energy systems.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Stat label="FAT Tested" val="100%" />
              <Stat label="Manufacturing" val="Global" />
              <Stat label="Engineering" val="Bespoke" />
              <Stat label="Standards" val="ISO" />
            </div>
          </div>

          {/* Right Side: Technical Specs Block (Matched to Features CTA style) */}
          <div className="lg:col-span-4 bg-[#44444E] p-10 md:p-12 text-white flex flex-col justify-between relative overflow-hidden group">
            <ShieldCheck size={200} className="absolute -right-10 -bottom-10 text-white/5 rotate-12 transition-transform group-hover:rotate-0 duration-1000" />
            
            <div className="relative z-10">
              <h4 className="text-xl font-black uppercase italic text-[#BF092F] mb-8 border-b border-white/10 pb-4">Core Deliverables</h4>
              <ul className="space-y-6">
                <TechItem icon={Zap} text="Generator Enclosures" />
                <TechItem icon={Cpu} text="Utility E-Houses" />
                <TechItem icon={Factory} text="Switchgear Modules" />
                <TechItem icon={Layers} text="Acoustic Treatment" />
              </ul>
            </div>

            <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
               <div className="text-[9px] font-mono text-white/40 uppercase tracking-[0.3em] leading-relaxed">
                 Registry_Ref: AGP_UK_STATUS_ELITE <br/>
                 Verified: 2025_PROTOCOLS
               </div>
            </div>
          </div>
        </div>

        {/* 🏗️ MANUFACTURING PARTNERSHIP STRIP: Rounded-xl buttons */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-8 rounded-2xl flex items-center gap-6 group hover:bg-white transition-all border border-transparent hover:border-gray-100 shadow-sm hover:shadow-xl">
                <div className="w-16 h-16 bg-[#44444E] rounded-xl flex items-center justify-center text-[#BF092F]">
                    <Globe size={32} />
                </div>
                <div>
                    <h5 className="font-bold text-[#44444E] uppercase text-sm tracking-widest">Global Reach</h5>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Direct manufacturing via UAE and India Hubs.</p>
                </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl flex items-center gap-6 group hover:bg-white transition-all border border-transparent hover:border-gray-100 shadow-sm hover:shadow-xl">
                <div className="w-16 h-16 bg-[#BF092F] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#BF092F]/20">
                    <ShieldCheck size={32} />
                </div>
                <div>
                    <h5 className="font-bold text-[#44444E] uppercase text-sm tracking-widest">UK Quality Assurance</h5>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Final FAT and inspection conducted to UK standards.</p>
                </div>
            </div>
        </div>

        {/* EPIC CTA SECTION: Matched to Category Overview navigation */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-gray-100 pt-12">
            <div className="flex gap-2">
                <div className="w-2 h-2 bg-[#BF092F]" />
                <div className="w-2 h-2 bg-[#44444E]" />
                <div className="w-2 h-2 bg-gray-200" />
            </div>
            <Link
              to={"/about"}
              className="group flex items-center gap-6 px-10 py-5 bg-[#BF092F] text-white rounded-xl shadow-lg shadow-[#BF092F]/20 hover:bg-[#44444E] transition-all duration-500"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Explore Corporate Profile</span>
              <ArrowRight className="group-hover:translate-x-3 transition-transform" size={18} />
            </Link>
        </div>
      </div>
    </div>
  );
}

/* Helper Components */
function Stat({ label, val }) {
  return (
    <div className="bg-gray-50 p-5 border border-gray-100 rounded-xl group hover:bg-white hover:shadow-lg transition-all">
      <div className="text-sm font-black text-[#BF092F] uppercase tracking-widest mb-1">{val}</div>
      <div className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">{label}</div>
    </div>
  );
}

function TechItem({ icon: Icon, text }) {
  return (
    <li className="flex items-center gap-4 group/item">
      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover/item:bg-[#BF092F] transition-all border border-white/10 group-hover/item:border-transparent">
        <Icon size={16} className="text-[#BF092F] group-hover/item:text-white transition-colors" />
      </div>
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 group-hover/item:text-white transition-colors">{text}</span>
    </li>
  );
}