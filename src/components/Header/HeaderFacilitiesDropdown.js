import React, { useState } from "react";
import { 
  ChevronDown, 
  ArrowRight, 
  Building2 
} from "lucide-react";
import { facilities } from "../../utils/facilities";
import { useNavigate } from "react-router";
import { Link } from "react-router"; 

const HeaderFacilitiesDropdown = () => {
  const navigate = useNavigate();
  const [activeFacilityId, setActiveFacilityId] = useState(facilities[0]?.id);
  
  const currentFacility = facilities.find((f) => f.id === activeFacilityId) || facilities[0];

  const HoverEffect = () => (
    <>
      <span className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-xl scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] -z-10 border border-white/20 shadow-xl" aria-hidden="true" />
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-white group-hover:w-1/4 transition-all duration-300 ease-out rounded-full" aria-hidden="true" />
    </>
  );

  return (
    <div className="relative group">
      <Link
        to="/facilities"
        aria-haspopup="true"
        aria-expanded="false"
        className="relative cursor-pointer inline-flex items-center tracking-widest text-white hover:text-white transition-all duration-300 px-2 py-2 text-[12px] lg:text-[13px] uppercase font-medium whitespace-nowrap group focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg"
      >
        <HoverEffect />
        <span className="absolute inset-0 bg-[#BF092F]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20" aria-hidden="true" />
        Facilities
        <ChevronDown className="w-4 h-4 transition-transform duration-500 group-hover:rotate-180 ml-1" aria-hidden="true" />
      </Link>

      {/* DROPDOWN CONTAINER - Restored to smaller 550px width */}
      <div 
        className="absolute left-0 top-full pt-2 w-[550px] opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-500 z-50"
        role="menu"
        aria-label="Facilities Submenu"
      >
        <div className="bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl border-t-4 border-[#BF092F] overflow-hidden">
          
          <div className="grid grid-cols-[240px_1fr]">
            
            {/* 1. LEFT: DARK SIDEBAR (Matched to Products styling) */}
            <nav className="bg-[#44444E] py-6 overflow-y-auto max-h-[400px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Global Infrastructure Locations">
               
              {facilities.map((f) => (
                <Link
                  key={f.id}
                  to={`/facilities/${f.id}`}
                  onMouseEnter={() => setActiveFacilityId(f.id)}
                  className={`cursor-pointer w-full px-6 py-3 text-left transition-all relative block ${
                    activeFacilityId === f.id
                      ? "bg-white text-[#44444E]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-[11px] tracking-widest uppercase leading-tight font-medium">
                      {f.name || f.title}
                    </span>
                    <span className={`text-[9px] mt-1 ${activeFacilityId === f.id ? "text-gray-400" : "text-white/40"}`}>
                      {f.location}
                    </span>
                  </div>
                  {activeFacilityId === f.id && (
                    <div className="absolute right-0 top-0 h-full w-1 bg-[#BF092F]" />
                  )}
                </Link>
              ))}
            </nav>

            {/* 2. RIGHT: PREVIEW PANEL (White/Gray area) */}
            <aside className="p-6 flex flex-col justify-center bg-gray-50/30" aria-live="polite">
              {currentFacility && (
                <div className="animate-fadeIn space-y-4">
                  <div className="aspect-video rounded-xl overflow-hidden border border-[#44444E]/10 bg-white shadow-md">
                    <img
                      src={currentFacility.facilityImg?.[0] || "/default-facility.jpg"}
                      alt={`Arc Engineering ${currentFacility.title} facility`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-[9px] bg-[#BF092F] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
                      Production Centre
                    </span>
                    <h5 className="text-[13px] text-[#44444E] font-bold uppercase leading-tight">
                      {currentFacility.title}
                    </h5>
                    <p className="text-[10px] text-gray-500 line-clamp-2 leading-relaxed italic">
                      Specialized engineering facility in {currentFacility.location}.
                    </p>
                  </div>

                  <Link
                    to={`/facilities/${currentFacility.id}`}
                    className="cursor-pointer w-full py-3 bg-[#44444E] text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-[#BF092F] transition-colors flex items-center justify-center gap-2 group/btn"
                  >
                    View Specifications
                    <ArrowRight
                      size={12}
                      className="group-hover/btn:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              )}
            </aside>

          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { 
          background: #BF092F30; 
          border-radius: 10px; 
        }
      `}</style>
    </div>
  );
};

export default HeaderFacilitiesDropdown;