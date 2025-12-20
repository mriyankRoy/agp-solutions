import React, { useState } from "react";
import { ChevronDown, MapPin, ArrowRight } from "lucide-react";
import { facilities } from "../../utils/facilities";
import { Link, useNavigate } from "react-router";

const HeaderFacilitiesDropdown = () => {
  const [activeFacility, setActiveFacility] = useState(facilities[0].id);
  const navigate = useNavigate();
  const handleNavigation = () => {
    // Navigates to /facilities/1, /facilities/2, etc.
    navigate(`/facilities/${facility.id}`);
  };

  const currentFacility = facilities.find((f) => f.id === activeFacility);

  return (
    <div className="relative group">
      {/* --- TRIGGER --- */}
      <button
        onClick={() => navigate("/facilities")}
        className="inline-flex gap-2 items-center text-sm font-black uppercase tracking-[0.2em] text-[#44444E] hover:text-[#CF0F0F] transition-colors py-4"
      >
        Facilities
        <ChevronDown className="w-4 h-4 transition-transform duration-500 group-hover:rotate-180" />
      </button>

      {/* --- DROPDOWN CONTAINER --- */}
      <div className="absolute left-0 w-[550px] bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-sm border-t-4 border-[#CF0F0F] overflow-hidden opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-500 ease-out z-50">
        
        <div className="grid grid-cols-[200px_1fr]">
          
          {/* LEFT: FACILITY LIST (The Directory) */}
          <div className="bg-[#44444E] py-4">
            <div className="px-6 mb-4">
               <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Directory</p>
            </div>
            {facilities.slice(0, 3).map((f) => (
              <Link
                key={f.id}
                to={`/facilities`}
                onMouseEnter={() => setActiveFacility(f.id)}
                className={`group/item relative px-6 py-4 flex items-center justify-between transition-all ${
                  activeFacility === f.id
                    ? "bg-white text-[#44444E]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <span className="text-xs font-black uppercase tracking-widest transition-transform group-hover/item:translate-x-1">
                  {f.name || f.title}
                </span>
                {activeFacility === f.id && (
                  <div className="absolute right-0 w-1.5 h-full bg-[#CF0F0F]" />
                )}
              </Link>
            ))}
          </div>

          {/* RIGHT: PREVIEW PANEL (The Visual) */}
          <div className="relative p-6 bg-white overflow-hidden">
            {/* Subtle Grid Texture Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            {currentFacility && (
              <div className="relative animate-fadeIn">
                <div className="aspect-video w-full overflow-hidden rounded-sm mb-4 bg-gray-100">
                  <img 
                    src={currentFacility.facilityImg[0]} 
                    alt={currentFacility.title}
                    className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                
                <h4 className="text-xl font-black text-[#44444E] uppercase tracking-tight leading-none mb-2">
                  {currentFacility.title}
                </h4>
                
                <div className="flex items-center gap-2 text-[#CF0F0F] mb-4">
                  <MapPin size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    {currentFacility.location}
                  </span>
                </div>

                <Link 
                  onClick={handleNavigation}
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#44444E] hover:text-[#CF0F0F] transition-colors group/link"
                >
                  View Infrastructure <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeaderFacilitiesDropdown;