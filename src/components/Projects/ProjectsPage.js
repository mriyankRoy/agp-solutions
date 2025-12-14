import React, { useState, useEffect } from "react";
import { projects } from "../../utils/projects";
import ProjectCarousel from "./ProjectCarousel"; 
import { useLocation } from "react-router";
import { Filter } from 'lucide-react'; // Added icon for filter panel

const types = ["All", "Enclosure", "E-House", "Power-Pack", "Cooling-Shelter"];

export default function ProjectsPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const typeQuery = queryParams.get("type") || "All";

  const [selectedType, setSelectedType] = useState(typeQuery);
  const [isVisible, setIsVisible] = useState(false); // For entrance animations

  // Initial load and query param sync
  useEffect(() => {
    setIsVisible(true);
    if (typeQuery && types.includes(typeQuery)) {
      setSelectedType(typeQuery);
    }
  }, [typeQuery]);

  const filteredProjects =
    selectedType === "All"
      ? projects
      : projects.filter((p) => p.type === selectedType);

  return (
    <div className="min-h-screen bg-white text-black pt-0 overflow-hidden">
      
      {/* 💥 HIGH-IMPACT HERO SECTION - INCREASED PADDING (pt-40 and pb-32) */}
      <div className="relative pt-40 pb-32 mb-16 bg-[#44444E] overflow-hidden">
        {/* Animated Background Pattern (Subtle White Grid) */}
        <div 
          className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] "
        ></div>
        
        {/* Angled Accent Bottom (White transition) */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white transform -skew-y-1 translate-y-1/2 z-10 shadow-xl"></div>


        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Title: Pure White, maximum contrast */}
            <h1 
                className={`text-5xl sm:text-6xl font-extrabold text-white tracking-tight mb-4 transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
                }`}
            >
                Pioneering Projects
            </h1>
            {/* Subtitle: Red accent text */}
            <p 
                className={`text-xl sm:text-2xl text-[#CF0F0F] font-medium transition-all duration-1000 delay-200 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >
                Discover our signature engineered solutions worldwide.
            </p>
        </div>
      </div>


      {/* MAIN CONTENT AREA */}
      <div className="container mx-auto px-4 py-12"> 

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar - Premium Filter Panel (Desktop) */}
          <aside className="lg:w-72 w-full flex-shrink-0 lg:block hidden">
            {/* Premium Card Styling: Shadow, Rounded, and Inner Glow */}
            <div 
              className={`bg-white shadow-2xl rounded-3xl p-6 border border-[#CF0F0F]/10 lg:sticky lg:top-28 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-2xl font-extrabold mb-5 border-b pb-3 border-[#44444E]/20 text-[#44444E] flex items-center gap-3">
                <Filter size={24} className="text-[#CF0F0F]"/> Filter by Type
              </h2>
              <ul className="space-y-2">
                {types.map((type) => (
                  <li
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`cursor-pointer px-4 py-3 rounded-xl text-lg transition-all duration-300 ease-in-out relative group ${
                      selectedType === type
                        ? "bg-[#CF0F0F] text-white font-semibold shadow-lg shadow-[#CF0F0F]/40 transform scale-[1.03]"
                        : "text-[#44444E] hover:bg-[#44444E]/10 hover:text-black hover:pl-6"
                    }`}
                  >
                    {type}
                    {/* Hover accent for non-selected items */}
                    {selectedType !== type && (
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#CF0F0F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Horizontal Scroll Filter (Mobile/Tablet) */}
          <div className="lg:hidden w-full">
            <h3 className="text-lg font-bold mb-3 text-[#44444E]">Select Type:</h3>
            <div className="flex space-x-3 overflow-x-auto pb-2 -mx-4 px-4 sm:px-0">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`flex-shrink-0 px-5 py-2 rounded-full text-base font-medium transition-all duration-200 shadow-md ${
                    selectedType === type
                      ? "bg-[#CF0F0F] text-white shadow-lg shadow-[#CF0F0F]/40"
                      : "bg-[#44444E]/10 text-[#44444E] hover:bg-[#44444E]/20"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Carousel Content */}
          <main 
            className={`flex-1 min-w-0 transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Main Content Header */}
            <h2 className="text-4xl font-extrabold mb-10 text-black border-l-4 border-[#CF0F0F] pl-4">
              {selectedType} Projects
            </h2>

            {filteredProjects.length > 0 ? (
              <div className="space-y-12">
                {/* Ensure ProjectCarousel component is high quality */}
                <ProjectCarousel projects={filteredProjects} />
              </div>
            ) : (
              // Enhanced No Projects Found Message
              <div className="bg-[#44444E]/10 p-10 rounded-2xl text-center border-l-8 border-[#CF0F0F]">
                <p className="text-2xl text-[#44444E] font-semibold">
                  Sorry, no projects found under the **{selectedType}** category.
                </p>
                <p className="text-lg text-[#44444E]/80 mt-2">
                  Please try selecting a different project type.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}