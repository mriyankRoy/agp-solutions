import React from "react";
import { partners } from "../utils/partners";
import { Activity, ShieldCheck, Box, Zap } from "lucide-react";

export default function TrustedPartners() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* 🏗️ INDUSTRIAL HEADER */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-8 w-1 bg-[#BF092F]" />
            <Activity size={14} className="text-[#BF092F] animate-pulse" />
            <h2 className="text-sm text-[#44444E] uppercase font-bold tracking-[0.4em]">
              Alliance Network
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h3 className="text-3xl md:text-5xl font-semibold text-[#44444E] leading-tight uppercase tracking-tight">
              Strategic <br></br>
              <span className="text-[#BF092F]">Alliances</span>
            </h3>
            <p className="max-w-md text-gray-400 font-bold uppercase tracking-widest text-[10px] leading-relaxed pb-1 border-l-2 border-gray-100 pl-6 lg:ml-8">
              Our high-specification generator container and E-House (Electrical POD) solutions have been deployed in major industrial projects globally. We are proud to see our precision instruments installed in projects for world-class end-users.
            </p>
          </div>
        </div>

        {/* 2. LOGO GRID CHASSIS */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative aspect-[3/2] bg-white border-r border-b border-gray-100 flex flex-col items-center justify-center p-8 transition-all duration-500 hover:z-20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-1 cursor-crosshair overflow-hidden"
            >
              {/* --- NEW MODERN HOVER LAYER (Dynamic Glow) --- */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#BF092F]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

              {/* Technical Cell Coordinates */}
              <span className="absolute top-4 left-4 text-[8px] font-mono font-bold text-gray-300 group-hover:text-[#44444E] transition-colors uppercase tracking-widest z-10">
                PARTNER_0{index + 1}
              </span>

              <Box
                className="absolute top-4 right-4 text-gray-100 group-hover:text-[#BF092F] group-hover:rotate-12 transition-all duration-500 z-10"
                size={14}
              />

              {/* Logo - Synchronized Scaling */}
              <div className="relative z-10 w-full flex justify-center items-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-[80%] h-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                />
              </div>

              {/* Hover Metadata Display */}
              <div className="absolute bottom-4 left-0 w-full px-4 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-500 text-center z-10">
                <div className="flex items-center justify-center gap-1.5">
                  <span className="h-px w-3 bg-[#BF092F]/30" />
                  <span className="text-[9px] font-black text-[#BF092F] uppercase tracking-[0.3em]">
                    Verified_Partner
                  </span>
                  <span className="h-px w-3 bg-[#BF092F]/30" />
                </div>
              </div>

              {/* Decorative Accent (Modern Line) */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#BF092F] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
