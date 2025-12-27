import React from "react";
import { partners } from "../utils/partners";
import { Activity, ShieldCheck, Box, Zap } from "lucide-react";

export default function TrustedPartners() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* --- ALIGNMENT CONTAINER (Matches Video/Product Container) --- */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* 🏗️ INDUSTRIAL HEADER: Exactly aligned with Product Registry header */}
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
              Standardized integration with world-class component manufacturers
              and engineering specialists globally.
            </p>
          </div>
        </div>

        {/* 2. LOGO GRID CHASSIS (Synchronized Shadow and Border Radius) */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative aspect-[3/2] bg-white border-r border-b border-gray-100 flex flex-col items-center justify-center p-8 transition-all duration-500 hover:bg-white hover:border-10 hover:border-gray-500 hover:rounded-2xl"
            >
              {/* Technical Cell Coordinates */}
              <span className="absolute top-4 left-4 text-[8px] font-mono font-bold text-gray-300 group-hover:text-white/20 uppercase tracking-widest">
                NODE_0{index + 1}
              </span>
              <Box
                className="absolute top-4 right-4 text-gray-100 group-hover:text-[#BF092F]/40 transition-colors"
                size={14}
              />

              {/* Logo - Synchronized Scaling and Grayscale */}
              <img
                src={partner.logo}
                alt={partner.name}
                /* Added rounded-2xl here */
                className="w-full max-h-12 md:max-h-16 object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />

              {/* Hover Metadata Display */}
              <div className="absolute bottom-4 left-0 w-full px-4 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-300 text-center">
                <span className="text-[9px] font-black text-[#BF092F] uppercase tracking-[0.3em]">
                  Verified_Partner
                </span>
              </div>
            </div>
          ))}

          {/* FILLER CELL - Technical Data / Supply Chain Status */}
          {/* <div className="hidden lg:flex aspect-[3/2] bg-gray-50 border-b border-gray-100 items-center justify-center p-8">
            <div className="text-center">
              <Zap
                size={20}
                className="text-[#BF092F] mx-auto mb-3 opacity-30 animate-pulse"
              />
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-tight">
                Sync_Status: <br />
                <span className="text-[#44444E]">Active_Supply</span>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
