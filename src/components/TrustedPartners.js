import React from "react";
import { partners } from "../utils/partners";
import { Activity, ShieldCheck, Box, Zap } from "lucide-react";

export default function TrustedPartners() {
  return (
    <section className="relative w-full py-24 bg-[#F8F9FA] overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* INDUSTRIAL HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-l-4 border-[#CF0F0F] pl-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Activity size={16} className="text-[#CF0F0F] animate-pulse" />
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em]">Trusted_Partners</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-[#44444E] uppercase tracking-tighter leading-none">
              Strategic <br/> <span className="text-[#CF0F0F]">Alliances</span>
            </h2>
          </div>
          
          <div className="max-w-xs text-right hidden md:block border-r-2 border-gray-200 pr-6">
            <p className="text-[10px] font-bold text-[#44444E]/60 uppercase tracking-widest leading-relaxed">
              Standardized integration with world-class component manufacturers and engineering specialists.
            </p>
          </div>
        </div>

        {/* LOGO GRID CHASSIS (Replaced Motion with Static Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-gray-200 shadow-2xl">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="group relative aspect-[3/2] bg-white border-r border-b border-gray-200 flex flex-col items-center justify-center p-8 transition-all duration-500 hover:bg-[#44444E]"
            >
              {/* Technical Cell Coordinates */}
              <span className="absolute top-3 left-3 text-[8px] font-mono text-gray-300 group-hover:text-white/20 uppercase">
                Node_0{index + 1}
              </span>
              <Box className="absolute top-3 right-3 text-gray-100 group-hover:text-[#CF0F0F]/20 transition-colors" size={14} />

              {/* Logo */}
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full max-h-16 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />

              {/* Hover Metadata Display */}
              <div className="absolute bottom-4 left-0 w-full px-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 text-center">
                <span className="text-[8px] font-black text-[#CF0F0F] uppercase tracking-[0.2em]">Validated Partner</span>
              </div>
            </div>
          ))}

          {/* FILLER CELL - Technical Data */}
          <div className="hidden lg:flex aspect-[3/2] bg-gray-50 border-r border-b border-gray-200 items-center justify-center p-8">
            <div className="text-center">
                <Zap size={24} className="text-[#CF0F0F] mx-auto mb-3 opacity-20" />
                <p className="text-[9px] font-mono text-gray-400 uppercase tracking-widest leading-tight">
                    Syncing... <br/>
                    Global_Supply_Chain
                </p>
            </div>
          </div>
        </div>

        {/* REGISTRY FOOTER */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-100 pt-8">
            <div className="flex items-center gap-6">
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-[#CF0F0F]" />
                    <div className="w-2 h-2 bg-[#44444E]" />
                    <div className="w-2 h-2 bg-gray-200" />
                </div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
                    Our Trusted Partners
                </p>
            </div>

            <div className="flex items-center gap-2 bg-[#44444E] px-4 py-2 text-white">
                <ShieldCheck size={14} className="text-[#CF0F0F]" />
                <span className="text-[9px] font-black uppercase tracking-widest">Compliance Verified</span>
            </div>
        </div>
      </div>
    </section>
  );
}