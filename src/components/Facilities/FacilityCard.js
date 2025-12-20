import React from "react";
import { useNavigate } from "react-router"; // Added for routing
import { MapPin, Maximize, ArrowRight, ShieldCheck, Activity } from "lucide-react";

export default function FacilityCard({ facility }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    // Navigates to /facilities/1, /facilities/2, etc.
    navigate(`/facilities/${facility.id}`);
  };

  return (
    <div 
      onClick={handleNavigation} // Card is now clickable for better UX
      className="rounded-xl group bg-white border border-gray-200 transition-all duration-500 flex flex-col relative hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] cursor-pointer"
    >
      
      {/* Top Industrial Accent Bar */}
      <div className="rounded-xl h-1.5 w-full bg-[#44444E] group-hover:bg-[#CF0F0F] transition-colors duration-300" />

      {/* 🖼️ IMAGE AREA */}
      <div className="rounded-xl relative h-64 overflow-hidden bg-gray-100 p-4">
        <div className="rounded-xl relative w-full h-full overflow-hidden border border-gray-200">
          <img
            src={facility.facilityImg[0]}
            alt={facility.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* 📄 DETAILS AREA */}
      <div className="p-8 flex-grow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity size={14} className="text-[#CF0F0F] animate-pulse" />
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Operational Unit</span>
          </div>
          <span className="text-[10px] font-mono text-gray-300">Facility - {facility.title}</span>
        </div>

        <h3 className="text-2xl font-black text-[#44444E] uppercase tracking-tighter mb-4 group-hover:text-[#CF0F0F] transition-colors">
          {facility.name}
        </h3>

        <div className="flex items-center gap-2 text-gray-500 mb-6">
          <MapPin size={14} className="text-[#CF0F0F]" />
          <span className="text-[11px] font-bold uppercase tracking-wider">{facility.location}</span>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
          {facility.description}
        </p>

        {/* 📊 TECHNICAL SPEC TABLE */}
        <div className="rounded-xl grid grid-cols-2 border border-gray-100 mb-8 bg-gray-50/50">
          <div className="rounded-xl flex flex-col p-4 border-r border-gray-100">
            <div className="flex items-center gap-2 text-gray-400 mb-1">
              <Maximize size={12} />
              <span className="text-[9px] font-black uppercase tracking-widest">Footprint</span>
            </div>
            <p className="text-xs font-black text-[#44444E] uppercase">{facility.area || "45,000"} SQ. FT.</p>
          </div>
          <div className="flex flex-col p-4">
            <div className="flex items-center gap-2 text-gray-400 mb-1">
              <ShieldCheck size={12} />
              <span className="text-[9px] font-black uppercase tracking-widest">Standard</span>
            </div>
            <p className="text-xs font-black text-[#44444E] uppercase">ISO 9001:2015</p>
          </div>
        </div>

        {/* ACTION BUTTON */}
        <button 
          onClick={(e) => {
            e.stopPropagation(); // Prevents double-triggering if the card also has an onClick
            handleNavigation();
          }}
          className="rounded-xl w-full flex items-center justify-center gap-3 py-4 bg-[#44444E] text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-[#CF0F0F] active:scale-95 shadow-lg hover:shadow-[#CF0F0F]/20"
        >
          View Unit Specs
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}