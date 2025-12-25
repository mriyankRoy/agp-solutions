import React, { useRef, useEffect, useState } from "react";
import {
  Settings,
  ArrowRight,
  Layers,
  ShieldCheck,
  Activity
} from "lucide-react";
import { useNavigate } from "react-router";
import { features } from "../utils/features";

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-white overflow-hidden"
    >
      
      {/* 1. MATCHED CONTAINER: Using px-4 md:px-6 to match ProductPage alignment */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        
        {/* 🏗️ INDUSTRIAL HEADER: Exactly aligned with Product Registry header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-8 w-1 bg-[#BF092F]" />
            <Activity size={14} className="text-[#BF092F] animate-pulse" />
            <h2 className="text-sm text-[#44444E] uppercase font-bold tracking-[0.4em]">
              Engineering Excellence
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h3 className="text-3xl md:text-5xl font-semibold text-[#44444E] leading-tight uppercase tracking-tight">
              Surgical <span className="text-[#BF092F]">Precision</span> <br className="hidden md:block"/> Global Scale
            </h3>
            <p className="max-w-md text-gray-400 font-bold uppercase tracking-widest text-[10px] leading-relaxed pb-1 border-l-2 border-gray-100 pl-6 lg:ml-8">
              Delivering high-performance power modules and bespoke industrial enclosures through ISO-certified technical protocols.
            </p>
          </div>
        </div>

        {/* 📊 TECHNICAL METRICS STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-20 rounded-2xl overflow-hidden border border-gray-100 shadow-xl bg-white">
          {[
            { value: "850+", label: "Units Delivered" },
            { value: "UAE/IND", label: "Production Hubs" },
            { value: "100%", label: "FAT Certified" },
            { value: "ISO", label: "Quality Standards" },
          ].map((stat, i) => (
            <div key={i} className="p-8 border-r last:border-r-0 border-gray-100 flex flex-col items-center md:items-start group hover:bg-[#44444E] transition-all duration-500">
               <span className="text-3xl font-bold text-[#44444E] group-hover:text-white transition-colors tracking-tighter">{stat.value}</span>
               <span className="text-[9px] font-black text-[#BF092F] uppercase tracking-[0.3em] mt-2">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* 🛠️ FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* ⚡ INDUSTRIAL CTA CHASSIS */}
        <div className="relative group overflow-hidden rounded-2xl bg-[#44444E] p-10 md:p-14 shadow-2xl">
          <ShieldCheck size={200} className="absolute -right-10 -bottom-10 text-white/5 rotate-12 transition-transform group-hover:rotate-0 duration-1000" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-black uppercase italic text-[#BF092F] mb-4">
                Initiate Technical Consultancy
              </h2>
              <p className="text-white/50 text-[11px] font-bold uppercase tracking-widest leading-loose max-w-xl">
                Connect with our UK engineering hub for bespoke system architecture and mission-critical power deployment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
               <button className="px-10 py-4 bg-[#BF092F] text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-white hover:text-[#44444E] transition-all duration-500 shadow-lg shadow-[#BF092F]/20">
                  Request Specs
               </button>
               <button className="px-10 py-4 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-white/10 transition-all duration-500">
                  Catalog_2025.PDF
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index, isVisible }) {
  const navigate = useNavigate();
  
  return (
    <div
      onClick={() => navigate(feature.link)}
      className={`group relative flex flex-col bg-white rounded-2xl shadow-xl border border-gray-100 cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute top-4 right-4 z-20">
        <span className="text-[10px] font-mono font-bold text-gray-300 group-hover:text-[#BF092F] transition-colors tracking-widest uppercase">
          ID: {100 + index}
        </span>
      </div>

      <div className="h-56 relative overflow-hidden bg-gray-50">
        <img
          src={feature.image}
          alt={feature.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-90"
        />
        <div className="absolute -bottom-6 left-6 w-12 h-12 bg-[#BF092F] flex items-center justify-center text-white shadow-xl transition-transform duration-700 group-hover:rotate-[360deg]">
          <Settings size={20} />
        </div>
      </div>

      <div className="p-8 pt-10 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-bold text-[#44444E] tracking-tight group-hover:text-[#BF092F] transition-colors mb-3">
            {feature.title}
          </h3>
          <p className="text-[12px] text-gray-400 tracking-widest leading-relaxed line-clamp-2">
            {feature.description}
          </p>
        </div>

        <div className="mt-8 flex justify-between items-center pt-6 border-t border-gray-100">
           <div className="flex items-center gap-2">
              <Layers size={14} className="text-[#BF092F]" />
              <span className="text-[11px] font-bold text-[#44444E] uppercase tracking-widest">Deploy_Solution</span>
           </div>
           <ArrowRight 
             size={18} 
             className="text-gray-300 group-hover:text-[#BF092F] group-hover:translate-x-1 transition-all" 
           />
        </div>
      </div>
    </div>
  );
}