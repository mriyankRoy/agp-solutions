import React, { useState, useEffect } from "react";
import FacilityCard from "./FacilityCard";
import { facilities } from "../../utils/facilities";
import { Factory, ChevronLeft, Home } from "lucide-react";
import { useNavigate } from "react-router";

export default function FacilitiesPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const visibleFacilities = facilities.slice(0, 2);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#44444E] font-sans selection:bg-[#BF092F] selection:text-white">
      
      {/* 🏗️ MATCHED FLOATING HERO SECTION */}
      <div className="pt-22 px-2 md:px-2">
        <header className="relative h-[28vh] min-h-[300px] w-full flex items-center bg-[#44444E] overflow-hidden rounded-2xl shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

          <div className="absolute top-0 right-0 p-4 opacity-10 z-10">
            <Factory size={450} className="text-white" />
          </div>

          {/* Animated Red Beams */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#BF092F] to-transparent animate-pulse" />
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse delay-700" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-20">
            {/* 🧭 ENHANCED HIERARCHICAL BREADCRUMB */}
            <nav className="flex items-center flex-wrap gap-3 mb-6">
              <button
                onClick={() => navigate("/")}
                className="group flex items-center gap-1 text-white/50 hover:text-white transition-colors"
              >
                <Home size={14} />
                <span className="text-[10px] md:text-xs tracking-widest uppercase">Home</span>
              </button>

              <span className="text-white/20 text-xs font-mono">{">"}</span>

              {/* ACTIVE PAGE: RED PILL DESIGN */}
              <button className="text-[10px] md:text-xs tracking-widest uppercase bg-[#BF092F] text-white px-4 py-1.5 rounded-2xl shadow-lg shadow-[#BF092F]/20 font-bold">
                Facilities
              </button>
            </nav>

            <h1
              className={`font-semibold text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-[-0.02em] max-w-4xl transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Strategic <span className="text-[#BF092F]">Facilities</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl tracking-wide leading-relaxed mt-2">
              Global Infrastructure & Production Hubs
            </p>
          </div>
        </header>
      </div>

      {/* 🏭 MAIN CONTENT AREA */}
      <main className="container mx-auto -translate-y-24 relative z-30">
        <div className="pt-30">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-8 w-1 bg-[#BF092F]" />
            <h2 className="text-sm text-[#44444E] uppercase tracking-[0.4em]">
              Operational Facility
            </h2>
          </div>

          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {visibleFacilities.map((facility) => (
              <div key={facility.id} className="px-0">
                <FacilityCard facility={facility} />
              </div>
            ))}
          </div>
        </div>

        {/* Technical Footer Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200 pt-12 pb-12 px-4 md:px-6">
          <div className="rounded-2xl flex flex-col gap-3">
            <Factory className="text-[#BF092F]" size={32} />
            <h3 className="text-xl text-[#44444E] font-bold">PRECISION SCALE</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Integrated manufacturing processes ensuring high-volume output
              with surgical accuracy across all units.
            </p>
          </div>
          <div className="rounded-2xl bg-[#44444E] p-8 text-white md:col-span-2 flex flex-col justify-center border-t-4 border-[#BF092F] shadow-xl">
            <h3 className="text-2xl mb-2 uppercase italic text-[#BF092F] font-bold">
              Unified Quality Standard
            </h3>
            <p className="text-white/70">
              Every facility operates under the same rigorous ISO certifications
              and engineering protocols, delivering identical excellence
              regardless of location.
            </p>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </div>
  );
}