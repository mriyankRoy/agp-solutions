import React, { useState } from "react";
import { ChevronDown, ArrowRight, Layers } from "lucide-react";
import { projects } from "../../utils/projects";
import { Link, useNavigate } from "react-router";

const projectTypes = ["Enclosure", "E-House", "Power-Pack", "Cooling-Shelter"];

const HeaderProjectsDropdown = () => {
  const [activeType, setActiveType] = useState(projectTypes[0]);
  const navigate = useNavigate();

  // Filter projects based on hovered type
  const filteredProjects = projects.filter((p) => p.type === activeType);

  return (
    <div className="relative group">
      {/* --- TRIGGER --- */}
      <button
        onClick={() => navigate("/projects")}
        className="inline-flex gap-2 items-center text-sm font-black uppercase tracking-[0.2em] text-[#44444E] hover:text-[#CF0F0F] transition-colors py-4"
      >
        Projects
        <ChevronDown className="w-4 h-4 transition-transform duration-500 group-hover:rotate-180" />
      </button>

      {/* --- DROPDOWN CONTAINER --- */}
      <div className="absolute left-[-50px] w-[750px] bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-sm border-t-4 border-[#CF0F0F] overflow-hidden opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-500 ease-out z-50">
        
        <div className="grid grid-cols-[220px_1fr]">
          
          {/* LEFT: CATEGORY SIDEBAR (The Directory) */}
          <div className="bg-[#44444E] py-6">
            <div className="px-6 mb-4 flex items-center gap-2">
               <Layers size={14} className="text-[#CF0F0F]" />
               <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Classifications</p>
            </div>
            
            <nav className="flex flex-col">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  onMouseEnter={() => setActiveType(type)}
                  onClick={() => navigate(`/projects?type=${encodeURIComponent(type)}`)}
                  className={`group/item relative px-6 py-4 flex items-center justify-between transition-all text-left ${
                    activeType === type
                      ? "bg-white text-[#44444E]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <span className="text-xs font-black uppercase tracking-widest transition-transform group-hover/item:translate-x-1">
                    {type}
                  </span>
                  {activeType === type && (
                    <div className="absolute right-0 w-1.5 h-full bg-[#CF0F0F]" />
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* RIGHT: PROJECTS PREVIEW PANEL */}
          <div className="relative p-8 bg-white overflow-hidden min-h-[380px] flex flex-col">
            {/* Structural Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="relative animate-fadeIn h-full flex flex-col">
              {/* Header */}
              <div className="mb-6 pb-4 border-b border-gray-100 flex justify-between items-end">
                <div>
                  <h4 className="text-2xl font-black text-[#44444E] uppercase tracking-tight">
                    {activeType} Series
                  </h4>
                  <p className="text-[10px] font-bold text-[#CF0F0F] uppercase tracking-widest mt-1">
                    Deployment History
                  </p>
                </div>
                <span className="text-4xl font-black text-gray-50 uppercase select-none leading-none">
                  SPEC
                </span>
              </div>

              {/* Projects List */}
              <div className="grid grid-cols-2 gap-3">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => (
                    <Link
                      key={project.id}
                      to={`/projects/${project.id}`}
                      className="group/link flex items-center justify-between p-4 bg-gray-50 border border-transparent hover:border-[#CF0F0F] hover:bg-white transition-all duration-300"
                    >
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter mb-0.5 group-hover/link:text-[#CF0F0F]">
                          Ref: 00{project.id}
                        </span>
                        <span className="text-xs font-black text-[#44444E] uppercase tracking-wide">
                          {project.name}
                        </span>
                      </div>
                      <ArrowRight size={14} className="text-gray-300 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                    </Link>
                  ))
                ) : (
                  <div className="col-span-2 py-10 text-center text-gray-300 text-sm font-bold uppercase tracking-widest border-2 border-dashed border-gray-100">
                    No active projects in this series
                  </div>
                )}
              </div>

              {/* View All Footer */}
              <button 
                onClick={() => navigate("/projects")}
                className="mt-auto pt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#44444E] hover:text-[#CF0F0F] transition-colors group/all"
              >
                Explore Full {activeType} Portfolio <ArrowRight size={12} className="group-hover/all:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeaderProjectsDropdown;