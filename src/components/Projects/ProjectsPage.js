import React, { useState, useEffect } from "react";
import { projects } from "../../utils/projects";
import ProjectCarousel from "./ProjectCarousel"; 
import { useLocation } from "react-router";

const types = ["All", "Enclosure", "E-House", "Power-Pack", "Cooling-Shelter"];

export default function ProjectsPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const typeQuery = queryParams.get("type") || "All";

  const [selectedType, setSelectedType] = useState(typeQuery);

  useEffect(() => {
    if (typeQuery && types.includes(typeQuery)) {
      setSelectedType(typeQuery);
    }
  }, [typeQuery]);

  const filteredProjects =
    selectedType === "All"
      ? projects
      : projects.filter((p) => p.type === selectedType);

  return (
    <div className="min-h-screen bg-white text-black pt-20 sm:pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-10 text-center text-[#B45253] tracking-tight">
          Pioneering Projects
        </h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar - Modern Filter Panel (Desktop) */}
          <aside className="lg:w-72 w-full flex-shrink-0 lg:block hidden">
            <div className="bg-white shadow-xl rounded-2xl p-6 border border-[#44444E]/10 lg:sticky lg:top-28">
              <h2 className="text-xl font-bold mb-5 border-b pb-3 border-[#44444E]/20 text-[#44444E]">
                Filter by Type
              </h2>
              <ul className="space-y-2">
                {types.map((type) => (
                  <li
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`cursor-pointer px-4 py-2 rounded-xl text-lg transition-all duration-200 ease-in-out ${
                      selectedType === type
                        ? "bg-[#B45253] text-white font-semibold shadow-md shadow-[#B45253]/30 transform scale-105"
                        : "text-[#44444E] hover:bg-[#44444E]/10 hover:text-black"
                    }`}
                  >
                    {type}
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
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedType === type
                      ? "bg-[#B45253] text-white shadow-lg"
                      : "bg-[#44444E]/10 text-[#44444E] hover:bg-[#44444E]/20"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Carousel Content */}
          <main className="flex-1 min-w-0">
            <h2 className="text-3xl font-bold mb-8 text-black border-b pb-4 border-[#44444E]/20">
              {selectedType} Projects
            </h2>

            {filteredProjects.length > 0 ? (
              <div className="space-y-12">
                <ProjectCarousel projects={filteredProjects} />
              </div>
            ) : (
              <div className="bg-[#44444E]/5 p-8 rounded-xl text-center">
                <p className="text-xl text-[#44444E] font-medium">
                  Sorry, no projects found under the **{selectedType}** category.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
