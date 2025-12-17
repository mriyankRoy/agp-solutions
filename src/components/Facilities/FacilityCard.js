import React from "react";
import { MapPin, Maximize, ArrowRight, ShieldCheck, HardHat } from "lucide-react";

export default function FacilityCard({ facility }) {
  return (
    <div className="group bg-white shadow-2xl rounded-sm overflow-hidden border-t-4 border-[#CF0F0F] transition-all duration-500 flex flex-col">
      
      {/* 🖼️ IMAGE AREA WITH ZOOM EFFECT */}
      <div className="relative h-64 overflow-hidden bg-black">
        <img
          src={facility.image}
          alt={facility.name}
          className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-6">
           <p className="text-[#CF0F0F] text-xs font-black tracking-widest uppercase mb-1">Infrastructure Unit</p>
           <h3 className="text-2xl font-black text-white uppercase tracking-tight">{facility.name}</h3>
        </div>
      </div>

      {/* 📄 DETAILS AREA */}
      <div className="p-8 flex-grow">
        <div className="flex items-center gap-2 text-gray-400 mb-6">
          <MapPin size={16} className="text-[#CF0F0F]" />
          <span className="text-xs font-bold uppercase tracking-widest">{facility.location}</span>
        </div>

        <p className="text-gray-500 text-base leading-relaxed mb-8">
          {facility.description}
        </p>

        {/* 📊 TECHNICAL SPEC GRID (Matches Project Blueprint style) */}
        <div className="grid grid-cols-2 gap-4 border-t border-b border-gray-100 py-6 mb-8">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-gray-400">
              <Maximize size={14} />
              <span className="text-[10px] font-bold uppercase tracking-tighter">Footprint</span>
            </div>
            <p className="text-sm font-black text-[#44444E]">{facility.area || "45,000"} SQ. FT.</p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-gray-400">
              <ShieldCheck size={14} />
              <span className="text-[10px] font-bold uppercase tracking-tighter">Standard</span>
            </div>
            <p className="text-sm font-black text-[#44444E]">ISO 9001:2015</p>
          </div>
        </div>

        {/* ACTION BUTTON */}
        <button className="w-full flex items-center justify-between group/btn py-2 border-b-2 border-transparent hover:border-[#CF0F0F] transition-all duration-300">
          <span className="text-sm font-black uppercase tracking-widest text-[#44444E]">View Unit Specs</span>
          <ArrowRight size={20} className="text-gray-300 group-hover/btn:text-[#CF0F0F] group-hover/btn:translate-x-2 transition-all" />
        </button>
      </div>
    </div>
  );
}