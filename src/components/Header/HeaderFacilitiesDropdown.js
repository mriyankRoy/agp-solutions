import React, { useState } from "react";
import { ChevronDown, MapPin, ArrowRight } from "lucide-react";
import { facilities } from "../../utils/facilities";
import { Link, useNavigate } from "react-router";

const HeaderFacilitiesDropdown = () => {
  const [activeFacility, setActiveFacility] = useState(facilities[0].id);
  const navigate = useNavigate();

  // Updated: Accepts an ID so it can be used for any specific facility
  const handleNavigation = (id) => {
    navigate(`/facilities/${id}`);
  };

  const currentFacility = facilities.find((f) => f.id === activeFacility);

  return (
    <div className="relative group">
      {/* --- TRIGGER --- */}
      <button
        onClick={() => navigate("/facilities")}
        className="cursor-pointer inline-flex gap-1 items-center tracking-widest text-white hover:text-[#44444E] transition-colors py-4 text-[12px] font-bold uppercase whitespace-nowrap"
      >
        Facilities
        <ChevronDown className="w-4 h-4 transition-transform duration-500 group-hover:rotate-180" />
      </button>

      {/* --- DROPDOWN CONTAINER --- */}
      <div className="absolute left-0 w-[550px] bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl border-t-4 border-[#CF0F0F] overflow-hidden opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-500 ease-out z-50">
        <div className="grid grid-cols-[200px_1fr]">
          {/* LEFT: FACILITY LIST */}
          <div className="bg-[#44444E] py-6">
            {facilities.slice(0, 3).map((f) => (
              <div
                key={f.id}
                // Using div instead of Link to allow the onClick navigation logic
                onClick={() => handleNavigation(f.id)}
                onMouseEnter={() => setActiveFacility(f.id)}
                className={`group/item relative px-6 py-4 flex items-center justify-between transition-all cursor-pointer ${
                  activeFacility === f.id
                    ? "bg-white text-[#44444E]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <span className="text-xs tracking-widest transition-transform group-hover/item:translate-x-1">
                  {f.name || f.title}
                </span>
                {activeFacility === f.id && (
                  <div className="absolute right-0 w-1.5 h-full bg-[#CF0F0F]" />
                )}
              </div>
            ))}
          </div>

          {/* RIGHT: PREVIEW PANEL */}
          <div className="relative p-6 bg-white overflow-hidden">
            {currentFacility && (
              <div className="relative animate-fadeIn">
                <div 
                  className="aspect-video w-full overflow-hidden rounded-xl mb-4 bg-gray-100 cursor-pointer"
                  onClick={() => handleNavigation(currentFacility.id)}
                >
                  <img
                    src={currentFacility.facilityImg[0]}
                    alt={currentFacility.title}
                    className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                <h4 className="text-xl text-[#44444E] tracking-tight leading-none mb-2">
                  {currentFacility.title}
                </h4>

                <div className="flex items-center gap-2 text-[#CF0F0F] mb-4">
                  <MapPin size={14} />
                  <span className="text-[12px] tracking-widest">
                    {currentFacility.location}
                  </span>
                </div>

                <button
                  // Pass the current facility ID to the function
                  onClick={() => handleNavigation(currentFacility.id)}
                  className="cursor-pointer inline-flex items-center gap-2 text-[12px] tracking-widest text-[#44444E] hover:text-[#CF0F0F] transition-colors group/link"
                >
                  View Infrastructure{" "}
                  <ArrowRight
                    size={14}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderFacilitiesDropdown;