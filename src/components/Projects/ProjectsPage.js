import React, { useState, useEffect } from "react";
import { projects } from "../../utils/projects";
import ProjectCarousel from "./ProjectCarousel";
import { useLocation } from "react-router";
import { Filter, Home } from "lucide-react";

const types = ["All", "Enclosure", "E-House", "Power-Pack", "Cooling-Shelter"];

export default function ProjectsPage() {
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
    <div className="min-h-screen bg-white text-black pt-0 overflow-hidden">
      {/* --- HERO SECTION --- */}
      <div className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 bg-[#44444E] opacity-95"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] "></div>
        {/* Animated background pattern (Subtle dots/texture) */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              animation: "drift 20s linear infinite", // Requires custom CSS for @keyframes drift
            }}
          ></div>
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl">
            <nav
              className={`mb-6 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              <ol className="inline-flex items-center space-x-2 text-sm font-medium text-white/80">
                <li className="flex items-center gap-1">
                  <Home className="w-4 h-4" /> Home
                </li>
                <li className="text-white/50 px-2">&gt;</li>
                <li className="px-4 py-1 bg-[#CF0F0F] text-white rounded-full font-semibold">
                  Projects
                </li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
              Pioneering Projects
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Discover our signature engineered solutions delivered worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 flex-shrink-0 lg:block hidden">
          <div className="bg-white shadow-2xl rounded-3xl p-6 border border-[#CF0F0F]/10 sticky top-6 h-fit">
            <h2 className="text-2xl font-extrabold mb-5 border-b pb-3 text-[#44444E] flex items-center gap-3">
              <Filter size={24} className="text-[#CF0F0F]" /> Filter
            </h2>
            <ul className="space-y-2">
              {types.map((type) => (
                <li
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`cursor-pointer px-4 py-3 rounded-xl transition-all duration-300 ${
                    selectedType === type
                      ? "bg-[#CF0F0F] text-white font-semibold"
                      : "text-[#44444E] hover:bg-[#44444E]/10"
                  }`}
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main
          className={`w-full lg:w-3/4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* ALIGNED HEADING: Matches Carousel padding */}
          <div className="px-4 md:px-16 mb-7">
            <h2 className="text-3xl font-bold text-black border-l-4 border-[#CF0F0F] pl-4">
              {selectedType} Projects
            </h2>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="space-y-12">
              <ProjectCarousel projects={filteredProjects} />
            </div>
          ) : (
            <div className="mx-4 md:mx-16 bg-[#44444E]/10 p-10 rounded-2xl text-center border-l-4 border-[#CF0F0F]">
              <p className="text-2xl text-[#44444E] font-bold">
                No Projects Found
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
