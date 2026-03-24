import React, { useState } from "react";
import { Link } from "react-router";
import {
  ChevronLeft,
  ChevronDown,
  Briefcase,
  CornerDownRight,
} from "lucide-react";
import { projects } from "../../utils/projects";

/**
 * ProjectsMobileDrawer
 * * DESIGN: Slide-over navigation for mobile project discovery.
 * SEO: Uses <nav> and <ul> for semantic crawling.
 * ROUTING: Uses '?type=' query params to trigger filtering on ProjectsPage.
 */
const ProjectsMobileDrawer = ({ isOpen, onClose, onCloseAll }) => {
  const [expandedCat, setExpandedCat] = useState(null);

  return (
    <div
      className={`fixed inset-0 z-[130] bg-[#44444E] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen
          ? "translate-x-0 opacity-100 visible"
          : "translate-x-full opacity-0 invisible"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Project Case Studies Menu"
    >
      <div className="h-full pt-28 flex flex-col relative">
        
        {/* HEADER: Back Button and Directory Title */}
        <div className="px-8 mb-8">
          <button
            onClick={onClose}
            className="text-white/40 mb-8 flex items-center gap-2 hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold group"
            aria-label="Back to previous menu"
          >
            <ChevronLeft size={16} aria-hidden="true" /> BACK
          </button>

          <div className="border-l-4 border-[#BF092F] pl-4">
            <h1 className="text-white text-2xl font-black uppercase tracking-tight">
              Case Studies
            </h1>
            <p className="text-white/30 text-[9px] uppercase tracking-[0.2em]">
              Engineering Excellence Portfolio
            </p>
          </div>
        </div>

        {/* NAVIGATION: Categorized Project Links */}
        <nav
          className="flex-1 overflow-y-auto custom-scrollbar px-6 pb-20"
          aria-label="Project Categories"
        >
          <ul className="space-y-3">
            {projects.map((cat) => {
              const isActive = expandedCat === cat.categoryId;

              return (
                <li
                  key={cat.categoryId}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "bg-white/5 border-white/10 shadow-lg"
                      : "bg-transparent border-transparent"
                  }`}
                >
                  {/* CATEGORY SELECTOR */}
                  <button
                    onClick={() =>
                      setExpandedCat(isActive ? null : cat.categoryId)
                    }
                    aria-expanded={isActive}
                    aria-controls={`project-submenu-${cat.categoryId}`}
                    className={`w-full flex items-center justify-between p-5 transition-all ${
                      isActive ? "text-white" : "text-white/60"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <Briefcase
                        size={18}
                        className={`${isActive ? "text-[#BF092F]" : "text-white/20"} transition-colors`}
                        aria-hidden="true"
                      />
                      <span className="text-[13px] font-bold uppercase tracking-wider">
                        {cat.categoryName}
                      </span>
                    </div>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-500 ${isActive ? "rotate-180 text-[#BF092F]" : "text-white/20"}`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* PROJECT LINKS PANEL */}
                  <div
                    id={`project-submenu-${cat.categoryId}`}
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive
                        ? "max-h-[2000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="px-6 pb-6 flex flex-col gap-2 border-t border-white/5 mt-1 pt-4">
                      {cat.projects.map((project) => (
                        <li key={project.id}>
                          {/* Individual Project Link */}
                          <Link
                            to={`/projects/${project.id}`}
                            onClick={onCloseAll}
                            className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                            title={`View case study: ${project.name}`}
                          >
                            <CornerDownRight
                              size={14}
                              className="text-[#BF092F]/40 group-hover:text-[#BF092F]"
                              aria-hidden="true"
                            />
                            <div className="flex flex-col">
                              <span className="text-white/80 group-hover:text-white text-[11px] font-bold tracking-wide transition-colors">
                                {project.name}
                              </span>
                              <span className="text-[8px] text-white/20 uppercase font-black group-hover:text-[#BF092F]">
                                Client: {project.client}
                              </span>
                            </div>
                          </Link>
                        </li>
                      ))}

                      {/* CATEGORY FILTER LINK: Directs to ProjectsPage with specific type filter */}
                      <li>
                        <Link
                          to={`/projects?type=${encodeURIComponent(cat.categoryName)}`}
                          onClick={onCloseAll}
                          className="mt-4 block py-4 rounded-xl bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] text-center hover:bg-[#BF092F] hover:border-[#BF092F] transition-all duration-300 group/link"
                          title={`Explore all ${cat.categoryName} projects`}
                        >
                          Explore {cat.categoryName} Portfolio
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* FOOTER: Fixed branding section */}
        <footer className="mt-auto py-10 flex flex-col items-center gap-4 border-t border-white/5 bg-[#44444E]/90 backdrop-blur-md">
          <div className="w-12 h-[1px] bg-[#BF092F]/30" aria-hidden="true" />
          <p className="text-white text-[9px] font-black tracking-[0.5em] uppercase opacity-40">
            Arc Engineering Solutions Ltd.
          </p>
        </footer>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 2px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #BF092F40; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default ProjectsMobileDrawer;