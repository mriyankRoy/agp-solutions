import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  MapPin,
  ArrowRight,
  ShieldCheck,
  Activity,
  Box,
  Factory,
  Zap,
} from "lucide-react";

export default function FacilityCard({ facility }) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="group relative flex flex-col h-full bg-white rounded-2xl shadow-xl border border-gray-100 cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-[#BF092F]/20"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => navigate(`/facilities/${facility.id}`)}
    >
      {/* 2. IMAGE SECTION - High-density Visual */}
      <div className="h-56 relative overflow-hidden bg-[#44444E]">
        <img
          src={facility.facilityImg[0]}
          alt={facility.name}
          className={`w-full h-full object-cover grayscale transition-all duration-1000 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

        {/* Badge Overlay */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          <div className="px-3 py-1 bg-[#BF092F] rounded-2xl text-white text-[9px] font-black uppercase tracking-widest shadow-lg">
            UNIT: {facility.id.toUpperCase()}
          </div>
        </div>
      </div>

      {/* 3. CONTENT AREA */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <Activity size={12} className="text-[#BF092F]" />
            <span className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em]">
              Manufacturing Hub
            </span>
          </div>
          <h3 className="text-xl font-bold text-[#44444E] tracking-tight group-hover:text-[#BF092F] transition-colors leading-tight mb-2">
            {facility.title}
          </h3>
          <div className="flex items-center gap-2 text-gray-500">
            <MapPin size={12} className="text-[#BF092F]" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
              {facility.location}
            </span>
          </div>
        </div>

        {/* 4. TECHNICAL SPEC GRID - No more void space */}
        <div className="grid grid-cols-2 gap-px bg-gray-100 border border-gray-100 rounded-xl overflow-hidden mb-6">
          <div className="bg-gray-50/50 p-4 flex flex-col group-hover:bg-white transition-colors">
            <span className="text-[8px] text-gray-400 uppercase font-black tracking-widest mb-1 flex items-center gap-1">
              <Box size={10} /> Footprint
            </span>
            <span className="text-[11px] font-bold text-[#44444E] uppercase">
              {facility.totalArea}
            </span>
          </div>
          <div className="bg-gray-50/50 p-4 flex flex-col group-hover:bg-white transition-colors">
            <span className="text-[8px] text-gray-400 uppercase font-black tracking-widest mb-1 flex items-center gap-1">
              <Zap size={10} /> Output
            </span>
            <span className="text-[11px] font-bold text-[#44444E] uppercase">
              {facility.productionCapacity.split(" ")[2]} TONS/YR
            </span>
          </div>
        </div>

        {/* 5. HIGHLIGHTS PREVIEW */}
        <div className="space-y-2 mb-8">
          {facility.highlights.slice(0, 2).map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="mt-1.5 w-1 h-1 bg-[#BF092F] shrink-0" />
              <p className="text-[12px] text-gray-500 leading-tight">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* 6. ACTION FOOTER */}
        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
          {/* <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-[#BF092F]" />
            <span className="text-[10px] font-black text-[#44444E] uppercase tracking-[0.2em]">
              Verified Terminal
            </span>
          </div> */}

          <div className="flex items-center gap-2 text-[#BF092F] font-black text-[10px] uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform">
            More Details
            <ArrowRight size={14} />
          </div>
        </div>
      </div>

      {/* 7. ACCENT PROGRESS BAR */}
      <div
        className={`absolute bottom-0 left-0 h-1 bg-[#BF092F] transition-all duration-700 ${
          hover ? "w-full" : "w-0"
        }`}
      />
    </div>
  );
}
