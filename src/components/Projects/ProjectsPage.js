import React, { useState, useEffect } from "react";
import { projects } from "../../utils/projects";
import ProjectCarousel from "./ProjectCarousel";
import { useLocation, useNavigate } from "react-router";
import { Filter, Home, LayoutGrid } from "lucide-react";

const types = ["All", "Enclosure", "E-House", "Power-Pack", "Cooling-Shelter"];

export default function ProjectsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const typeQuery = queryParams.get("type") || "All";

  const [selectedType, setSelectedType] = useState(typeQuery);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 50);
    if (typeQuery && types.includes(typeQuery)) setSelectedType(typeQuery);
    return () => clearTimeout(timer);
  }, [typeQuery]);

  const filteredProjects =
    selectedType === "All"
      ? projects
      : projects.filter((p) => p.type === selectedType);

  return (
    <div className="min-h-screen bg-[#F8F9FA] selection:bg-[#BF092F] selection:text-white pt-0 overflow-hidden">
      
      {/* 🏗️ INDUSTRIAL HERO SECTION */}
      <div className="relative h-[35vh] min-h-[450px] flex items-center bg-[#44444E] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
        
        {/* Carbon Fibre Texture Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-0 bg-fixed" />

        <div className="relative container mx-auto px-6 z-20 pt-20">
          <nav className="flex items-center gap-2 text-white/50 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <button onClick={() => navigate("/")} className="hover:text-[#BF092F] transition-colors flex items-center gap-1">
              <Home size={12}/> HOME
            </button>
            <span>/</span>
            <span className="text-[#BF092F]">ENGINEERING LOGS</span>
          </nav>

          <h1 className={`text-4xl md:text-7xl font-black text-white uppercase tracking-tighter transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Global Deployments
          </h1>
          <div className="w-24 h-2 bg-[#BF092F] mt-6" />
        </div>
      </div>

      {/* --- CONTENT AREA (Overlapping Hero) --- */}
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row gap-12 -translate-y-24 relative z-30">
        
        {/* SIDEBAR - Dark Command Center Style */}
        <aside className="w-full lg:w-1/4">
          <div className="bg-[#44444E] shadow-2xl border-t-4 border-[#BF092F] sticky top-28 overflow-hidden">
            <div className="p-6 border-b border-white/10 flex items-center gap-3">
              <Filter size={18} className="text-[#BF092F]" />
              <h2 className="text-xs font-black text-white uppercase tracking-[0.3em]">Project Logs</h2>
            </div>
            <nav className="flex flex-col">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-5 text-left text-[12px] font-black uppercase tracking-[0.2em] transition-all border-b border-white/5 flex items-center justify-between group ${
                    selectedType === type 
                      ? "bg-white text-[#44444E]" 
                      : "text-white/60 hover:text-white hover:bg-black/20"
                  }`}
                >
                  {type}
                  <span className={`w-2 h-2 rounded-full ${selectedType === type ? "bg-[#BF092F]" : "bg-white/10 group-hover:bg-white/30"}`} />
                </button>
              ))}
            </nav>
          </div>

          {/* Technical Note Box */}
          <div className="mt-8 p-6 bg-white border border-gray-200 shadow-xl hidden lg:block">
             <LayoutGrid size={24} className="text-[#44444E] mb-4" />
             <h4 className="text-[10px] font-black uppercase tracking-widest text-[#BF092F] mb-2">Technical Registry</h4>
             <p className="text-[10px] font-bold text-gray-500 uppercase leading-relaxed tracking-wider">
               All projects documented here comply with ISO-certified fabrication and engineering standards.
             </p>
          </div>
        </aside>

        {/* MAIN DISPLAY - Blueprint Style */}
        <main
          className={`w-full lg:w-3/4 bg-white p-8 md:p-12 shadow-2xl border-t-4 border-[#44444E] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="flex items-end justify-between mb-12 border-b border-gray-100 pb-6">
            <div>
              <h2 className="text-3xl font-black text-[#44444E] uppercase tracking-tighter">
                {selectedType === "All" ? "Complete Registry" : `${selectedType} Series`}
              </h2>
              <p className="text-[#BF092F] text-[10px] font-black uppercase tracking-[0.3em] mt-2">
                Active Records: {filteredProjects.length} Deployed
              </p>
            </div>
            <span className="text-5xl font-black text-gray-50 select-none hidden sm:block">ARCH</span>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="relative">
              <ProjectCarousel projects={filteredProjects} />
            </div>
          ) : (
            <div className="bg-[#44444E] p-12 text-center border-t-4 border-[#BF092F]">
              <p className="text-xs font-black text-white uppercase tracking-[0.5em]">
                No Projects Logged in this Category
              </p>
            </div>
          )}
        </main>
      </div>

      {/* Visual Watermark */}
      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </div>
  );
}