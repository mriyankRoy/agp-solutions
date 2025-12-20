import React, { useRef, useEffect, useState } from "react";
import {
  Zap,
  ShieldCheck,
  Settings,
  Factory,
  ChevronRight,
  Activity,
  Cpu,
  Box,
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
      className="relative py-32 bg-[#F8F9FA] overflow-hidden"
    >
      {/* 🏁 BACKGROUND CHASSIS */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      {/* Scanning Red Beam Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#CF0F0F]/20 to-transparent animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* 🏗️ INDUSTRIAL HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-24 border-l-4 border-[#CF0F0F] pl-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="flex items-center gap-3 mb-4">
              <Activity size={16} className="text-[#CF0F0F] animate-pulse" />
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em]">System_Capabilities // v2025.01</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#44444E] uppercase tracking-tighter leading-none">
              Engineering <br/> <span className="text-[#CF0F0F]">Excellence</span>
            </h1>
          </div>
          
          <p className="max-w-md text-gray-400 font-bold uppercase tracking-widest text-[11px] leading-loose pb-2">
            Delivering high-performance power modules, E-Houses, and bespoke industrial enclosures through surgical technical precision and global manufacturing scale.
          </p>
        </div>

        {/* 📊 TECHNICAL METRICS STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-20 border border-gray-200 bg-white">
          {[
            { value: "850+", label: "Units Delivered" },
            { value: "UAE/IND", label: "Production Hubs" },
            { value: "100%", label: "FAT Certified" },
            { value: "ISO", label: "Quality Standards" },
          ].map((stat, i) => (
            <div key={i} className="p-8 border-r last:border-r-0 border-gray-200 flex flex-col items-center md:items-start group hover:bg-[#44444E] transition-all duration-500">
               <span className="text-3xl font-black text-[#44444E] group-hover:text-white transition-colors">{stat.value}</span>
               <span className="text-[9px] font-black text-[#CF0F0F] uppercase tracking-[0.3em] mt-1">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* 🛠️ FEATURES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
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
        <div className="relative group overflow-hidden">
          <div className="absolute inset-0 bg-[#44444E] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
          <div className="relative border-4 border-[#44444E] p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-black text-[#44444E] group-hover:text-white uppercase tracking-tighter transition-colors">
                Initiate Technical <span className="text-[#CF0F0F]">Consultancy</span>
              </h2>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mt-2">
                Connect with our UK engineering hub for bespoke system architecture.
              </p>
            </div>

            <div className="flex gap-4">
               <button className="px-10 py-5 bg-[#CF0F0F] text-white text-[11px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-[#44444E] transition-all duration-500">
                  Request Specs
               </button>
               <button className="px-10 py-5 border-2 border-[#44444E] text-[#44444E] group-hover:border-white group-hover:text-white text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500">
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
      className={`group relative bg-white border border-gray-200 transition-all duration-700 cursor-pointer overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } hover:shadow-2xl hover:-translate-y-3`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Top Banner with Monospaced Metadata */}
      <div className="bg-[#F8F9FA] px-4 py-2 border-b border-gray-100 flex justify-between items-center group-hover:bg-[#44444E] transition-colors">
         <span className="text-[8px] font-mono text-gray-400 group-hover:text-white/40 uppercase">Ref_ID: {index + 101}</span>
         <div className="flex gap-1">
            <div className="w-1 h-1 bg-gray-200 group-hover:bg-[#CF0F0F]" />
            <div className="w-1 h-1 bg-gray-200 group-hover:bg-white" />
         </div>
      </div>

      {/* Industrial Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={feature.image}
          alt={feature.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-[#44444E]/40 group-hover:bg-transparent transition-all duration-700" />
        
        {/* Floating Icon Overlap */}
        <div className="absolute -bottom-6 left-6 w-14 h-14 bg-[#CF0F0F] flex items-center justify-center text-white shadow-xl group-hover:rotate-[360deg] transition-transform duration-700">
          <Settings size={24} />
        </div>
      </div>

      {/* Content Chassis */}
      <div className="p-8 pt-12">
        <h3 className="text-lg font-black text-[#44444E] uppercase tracking-tighter mb-4 group-hover:text-[#CF0F0F] transition-colors leading-tight">
          {feature.title}
        </h3>

        <p className="text-[11px] font-bold text-gray-400 uppercase leading-relaxed tracking-wider mb-8 h-12 overflow-hidden">
          {feature.description}
        </p>

        {/* Certifications Registry */}
        <div className="flex flex-wrap gap-2 mb-8">
          {feature.certifications?.map((cert, i) => (
            <span key={i} className="text-[8px] font-black px-2 py-1 bg-gray-100 text-gray-500 uppercase tracking-widest border border-transparent group-hover:border-gray-200">
              {cert}
            </span>
          ))}
        </div>

        {/* Footer Technical Detail */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
           <span className="text-[9px] font-black text-[#CF0F0F] uppercase tracking-[0.3em]">Deploy Solution</span>
           <ChevronRight size={16} className="text-gray-300 group-hover:text-[#CF0F0F] group-hover:translate-x-2 transition-all" />
        </div>
      </div>

      {/* Shimmer Effect */}
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out" />
    </div>
  );
}