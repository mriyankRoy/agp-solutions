import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
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
        className="cursor-pointer inline-flex gap-1 items-center tracking-widest text-white hover:text-[#44444E] transition-colors py-4 text-[12px] font-bold uppercase whitespace-nowrap"
      >
        Projects
        <ChevronDown className="w-4 h-4 transition-transform duration-500 group-hover:rotate-180" />
      </button>

      {/* --- DROPDOWN CONTAINER --- */}
      <div className="absolute left-[-50px] w-[750px] bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl border-t-4 border-[#CF0F0F] overflow-hidden opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-500 ease-out z-50">
        <div className="grid grid-cols-[240px_1fr]">
          {/* LEFT: CATEGORY SIDEBAR (Industrial Sidebar) */}
          <div className="bg-[#44444E] py-6">
            <nav className="flex flex-col">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  onMouseEnter={() => setActiveType(type)}
                  onClick={() =>
                    navigate(`/projects?type=${encodeURIComponent(type)}`)
                  }
                  className={`cursor-pointer group/item relative px-6 py-4 flex items-center justify-between transition-all text-left ${
                    activeType === type
                      ? "bg-white text-[#44444E]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <span className="text-xs tracking-widest transition-transform group-hover/item:translate-x-1">
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
          <div className="relative p-8 bg-white overflow-hidden min-h-[350px] flex flex-col">
            <div className="relative animate-fadeIn h-full flex flex-col">
              {/* Header for Series */}
              <div className="mb-6 pb-4 border-b border-gray-100 flex justify-between items-end">
                <div>
                  <h4 className="text-2xl text-[#44444E] tracking-tight">
                    {activeType} Series
                  </h4>
                  <p className="text-[12px] text-[#CF0F0F] tracking-widest mt-1">
                    Technical Projects
                  </p>
                </div>
                <span className="text-4xl font-black text-gray-50 uppercase select-none leading-none">
                  SPEC
                </span>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-2 gap-3 rounded-xl">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => (
                    <Link
                      key={project.id}
                      to={`/projects/${project.id}`}
                      className="group/link flex items-center justify-between p-4 bg-gray-50 border border-transparent hover:border-[#CF0F0F] hover:bg-white transition-all duration-300 hover:rounded-xl"
                    >
                      <span className="text-xs text-[#44444E] tracking-wide group-hover/link:text-[#CF0F0F]">
                        {project.name}
                      </span>
                      <ArrowRight
                        size={14}
                        className="text-gray-300 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all"
                      />
                    </Link>
                  ))
                ) : (
                  <div className="col-span-2 py-10 text-center text-gray-300 text-xs tracking-widest border-2 border-dashed border-gray-100 rounded-xl">
                    NO ACTIVE DEPLOYMENTS
                  </div>
                )}
              </div>

              {/* View All Footer */}
              <button
                onClick={() => navigate(`/projects?type=${encodeURIComponent(activeType)}`)}
                className="cursor-pointer mt-auto pt-6 flex items-center gap-2 text-[12px] tracking-[0.2em] text-[#44444E] hover:text-[#CF0F0F] transition-colors"
              >
                Explore {activeType} Portfolio{" "}
                <ArrowRight
                  size={12}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderProjectsDropdown;