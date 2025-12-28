import React, { useState, useEffect } from "react";
import { projects } from "../../utils/projects";
import { useLocation, useNavigate } from "react-router";
import ProjectCard from "./ProjectCard";
import {
  Filter,
  Home,
  ArrowRight,
  Activity,
  ChevronRight,
  Briefcase,
  LayoutGrid,
} from "lucide-react";

const projectTypes = [
  "All",
  "Enclosure",
  "E-House",
  "Power-Pack",
  "Cooling-Shelter",
];

export default function ProjectsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const typeQuery = queryParams.get("type") || null;
  const isGeneralOverview = !typeQuery;

  const [selectedType, setSelectedType] = useState(typeQuery || "All");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
    if (typeQuery) {
      setSelectedType(typeQuery);
    } else {
      setSelectedType("All");
    }
  }, [typeQuery]);

  const filteredProjects =
    selectedType === "All"
      ? projects
      : projects.filter((p) => p.type === selectedType);

  /**
   * INDUSTRIAL OVERVIEW: Project Type Cards
   */
  const AllProjectsOverview = () => (
    <div className="container mx-auto px-4 md:px-6 py-7 relative z-10">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-8 w-1 bg-[#BF092F]" />
        <h2 className="text-sm text-[#44444E] uppercase tracking-[0.4em]">
          Deployment Sectors
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {projectTypes
          .filter((t) => t !== "All")
          .map((type, idx) => {
            const count = projects.filter((p) => p.type === type).length;
            return (
              <div
                key={idx}
                onClick={() => navigate(`/projects?type=${type}`)}
                className="group relative flex flex-col bg-white rounded-2xl shadow-xl border border-gray-100 cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-[#BF092F]/20"
              >
                <div className="absolute top-4 right-4 z-20">
                  <span className="text-[10px] font-mono font-bold text-gray-300 group-hover:text-[#BF092F] transition-colors tracking-widest uppercase">
                    LOG: {500 + idx}
                  </span>
                </div>

                <div className="h-48 bg-[#44444E] flex items-center justify-center relative overflow-hidden">
                  <Briefcase
                    size={120}
                    className="text-white opacity-5 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#BF092F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold text-[#44444E] tracking-tight group-hover:text-[#BF092F] transition-colors mb-3">
                      {type} Systems
                    </h3>
                    <p className="text-[12px] text-gray-400 tracking-widest leading-relaxed">
                      View active deployments and technical field logs.
                    </p>
                  </div>

                  <div className="mt-8 flex justify-between items-center pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <Activity size={14} className="text-[#BF092F]" />
                      <span className="text-[11px] font-bold text-[#44444E] uppercase tracking-widest">
                        {count} Projects
                      </span>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-gray-300 group-hover:text-[#BF092F] group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-[#44444E] font-sans selection:bg-[#BF092F] selection:text-white">
      {/* 🏗️ FLOATING HERO SECTION */}
      <div className="pt-22 px-2 md:px-2">
        <header className="shadow-xl relative h-[28vh] min-h-[300px] w-full flex items-center bg-[#44444E] overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#BF092F] to-transparent animate-pulse" />
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse delay-700" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-20">
            {/* 🧭 ENHANCED BREADCRUMB */}
            <nav className="flex items-center flex-wrap gap-3 mb-6">
              <button
                onClick={() => navigate("/")}
                className="group flex items-center gap-1 text-white/50 hover:text-white transition-colors"
              >
                <Home size={14} />
                <span className="text-[10px] md:text-xs tracking-widest uppercase">
                  Home
                </span>
              </button>

              <span className="text-white/20 text-xs font-mono">{">"}</span>

              <button
                onClick={() => navigate("/projects")}
                className={`text-[10px] md:text-xs tracking-widest uppercase transition-all duration-300 ${
                  isGeneralOverview
                    ? "bg-[#BF092F] text-white px-4 py-1.5 rounded-2xl shadow-lg shadow-[#BF092F]/20 font-bold"
                    : "text-white/50 hover:text-white"
                }`}
              >
                Project Registry
              </button>

              {!isGeneralOverview && (
                <>
                  <span className="text-white/20 text-xs font-mono">{">"}</span>
                  <button className="text-[10px] md:text-xs tracking-widest uppercase bg-[#BF092F] text-white px-4 py-1.5 rounded-2xl shadow-lg shadow-[#BF092F]/20 font-bold">
                    {selectedType}
                  </button>
                </>
              )}
            </nav>

            <h1
              className={`font-semibold text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-[-0.02em] max-w-4xl transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {isGeneralOverview ? "Engineering" : selectedType}{" "}
              <span className="text-[#BF092F]">
                {isGeneralOverview ? "Logs" : "Series"}
              </span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl tracking-wide leading-relaxed mt-4 max-w-3xl font-medium">
              {isGeneralOverview
                ? "Documenting global deployments and bespoke engineering solutions across critical power infrastructure."
                : `Technical data and delivery records for the ${selectedType} infrastructure range.`}
            </p>
          </div>
        </header>
      </div>

      <main className="container mx-auto -translate-y-12 relative z-30">
        {isGeneralOverview ? (
          <div className="pt-12">
            <AllProjectsOverview />
          </div>
        ) : (
          <div className="pt-20 px-4 flex flex-col lg:grid lg:grid-cols-12 gap-8 items-stretch">
            {/* SIDEBAR */}
            <aside className="lg:col-span-3 space-y-8 h-full">
              <div className="rounded-2xl bg-[#44444E] shadow-2xl border-t-4 border-[#BF092F] sticky top-28 overflow-hidden">
                <div className="p-8 border-b border-white/10">
                  <div className="flex items-center gap-3 mb-8">
                    <Filter size={16} className="text-[#BF092F]" />
                    <h2 className="text-[12px] text-white tracking-[0.4em] uppercase font-bold">
                      Filter Logs
                    </h2>
                  </div>
                  <ul className="space-y-2">
                    {projectTypes.map((type, idx) => (
                      <li
                        key={idx}
                        onClick={() => navigate(`/projects?type=${type}`)}
                        className={`cursor-pointer px-4 py-4 rounded-xl text-[12px] uppercase tracking-[0.2em] transition-all flex items-center justify-between group ${
                          selectedType === type
                            ? "bg-white/10 text-white border-l-4 border-[#BF092F]"
                            : "text-white/40 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {type}
                        <ChevronRight
                          size={14}
                          className={`transition-transform duration-300 ${
                            selectedType === type
                              ? "text-[#BF092F] translate-x-1"
                              : "opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 bg-black/20">
                  <LayoutGrid size={24} className="text-[#BF092F] mb-4" />
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] leading-relaxed font-bold">
                    Historical deployments are verified against ISO quality
                    protocols.
                  </p>
                </div>
              </div>
            </aside>

            {/* MAIN LISTING */}
            {/* Replace the carousel call in your Main Listing section with this: */}
            <section className="lg:col-span-9">
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 min-h-[600px]">
                <div className="flex items-center justify-between mb-12 border-b border-gray-100 pb-8">
                  <h2 className="tracking-widest border-l-4 border-[#BF092F] pl-4 text-[#44444E] uppercase text-sm font-bold">
                    Active Deployments
                  </h2>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold">
                    Records: {filteredProjects.length}
                  </span>
                </div>

                {filteredProjects.length > 0 ? (
                  /* --- GRID SYSTEM REPLACING CAROUSEL --- */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                ) : (
                  <div className="py-20 text-center">
                    <p className="text-gray-400 uppercase tracking-[0.3em] text-sm">
                      No Projects Found In This Category
                    </p>
                  </div>
                )}
              </div>
            </section>
          </div>
        )}
      </main>

      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </div>
  );
}
