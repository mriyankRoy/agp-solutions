import React, { useState, useEffect } from "react";
import FacilityCard from "./FacilityCard";
import { facilities } from "../../utils/facilities";
import { Factory, ChevronLeft } from "lucide-react";
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
    <div className="min-h-screen bg-[#F8F9FA] text-[#44444E] font-sans selection:bg-[#CF0F0F] selection:text-white">
      
      {/* 🏗️ CINEMATIC HERO SECTION */}
      <header className="relative h-[35vh] min-h-[400px] w-full flex items-end bg-[#44444E] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-0 bg-fixed" />
        
        {/* Animated Red Beams */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#CF0F0F] to-transparent animate-pulse" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse delay-700" />
        </div>

        <div className="container mx-auto px-6 mb-24 relative z-20">
          <button 
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 text-white/70 hover:text-[#CF0F0F] mb-6 transition-colors"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">Company Overview</span>
          </button>
          
          <h1 className={`text-4xl md:text-7xl font-black text-white leading-tight transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            STRATEGIC <span className="text-[#CF0F0F]">FACILITIES</span>
          </h1>
          <p className="text-white/60 text-lg uppercase tracking-[0.2em] font-medium mt-2">
            Global Infrastructure & Production Hubs
          </p>
        </div>
      </header>

      {/* 🏭 MAIN CONTENT AREA - OVERLAP SECTION */}
      <main className="container mx-auto px-4 md:px-6 -translate-y-24 relative z-30">
        
        {/* Sub-heading/Context */}
        <div className="flex items-center justify-between mb-8 text-[#44444E]">
            <h2 className="text-xs font-bold uppercase tracking-widest border-l-4 border-[#CF0F0F] pl-4">
                Operational Units
            </h2>
            <div className="text-5xl font-black text-white/50 select-none">02</div>
        </div>

        {/* Facilities Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {visibleFacilities.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>

        {/* Technical Footer Section to fill void space */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200 pt-12">
            <div className="flex flex-col gap-3">
                <Factory className="text-[#CF0F0F]" size={32} />
                <h3 className="text-xl font-black text-[#44444E]">PRECISION SCALE</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Integrated manufacturing processes ensuring high-volume output with surgical accuracy across all units.</p>
            </div>
            <div className="bg-[#44444E] p-8 text-white rounded-sm md:col-span-2 flex flex-col justify-center">
                <h3 className="text-2xl font-black mb-2 uppercase italic text-[#CF0F0F]">Unified Quality Standard</h3>
                <p className="text-white/70">Every facility operates under the same rigorous ISO certifications and engineering protocols, delivering identical excellence regardless of location.</p>
            </div>
        </div>
      </main>

      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </div>
  );
}