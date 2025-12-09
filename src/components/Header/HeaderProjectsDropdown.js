import { ChevronRight, ChevronDown } from "lucide-react";
import { projects } from "../../utils/projects";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

const projectTypes = ["Enclosure", "E-House", "Power-Pack", "Cooling-Shelter"];

const HeaderProjectsDropdown = () => {
  const [activeType, setActiveType] = useState(null);
  const navigate = useNavigate();

  const handleCategoryClick = (type) => {
    navigate(`/projects?type=${encodeURIComponent(type)}`);
  };

  return (
    <div className="relative group">
      <button
        onClick={() => navigate("/projects")}
        className="inline-flex gap-1.5 items-center hover:text-red-500 hover:underline underline-offset-4 transition"
      >
        Projects
        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
      </button>

      <div className="absolute left-0 mt-4 w-[700px] bg-gradient-to-b from-gray-900/95 via-gray-800/80 to-gray-900/70 backdrop-blur-xl border border-gray-700/40 rounded-2xl shadow-lg overflow-hidden opacity-0 translate-y-3 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-50">
        <div className="h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 opacity-70" />

        <div className="grid grid-cols-[200px_1fr]">
          {/* Categories List */}
          <div className="bg-gray-800/90 border-r border-gray-700/40 py-6 px-4 flex flex-col gap-2">
            {projectTypes.map((type) => (
              <button
                key={type}
                onMouseEnter={() => setActiveType(type)}
                onClick={() => handleCategoryClick(type)}
                className={`border-gray-400 px-3 py-2 rounded-xl flex items-center justify-between transition-all border text-white ${
                  activeType === type
                    ? "bg-red-600 shadow-lg scale-[1.05]"
                    : "bg-gray-600 hover:bg-gray-700/30"
                }`}
              >
                {type.toUpperCase()}
                <ChevronRight
                  className={`transition-transform ${
                    activeType === type ? "opacity-100" : "opacity-0"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Items Panel */}
          <div className="p-6 min-h-[260px] bg-gray-600 backdrop-blur-sm grid grid-cols-1 gap-4">
            {!activeType && (
              <div className="text-gray-300 text-sm animate-fadeIn">
                Hover a category to see projects
              </div>
            )}

            {projectTypes.map(
              (type) =>
                activeType === type && (
                  <div key={type} className="grid grid-cols-2 gap-x-6 gap-y-4">
                    {projects
                      .filter((p) => p.type === type)
                      .map((project) => (
                        <Link
                          key={project.id}
                          to={`/projects/${project.id}`}
                          className="relative p-3 rounded-xl bg-gray-800/70 border border-gray-700/40 text-gray-200 hover:text-white hover:bg-red-600 transition-all shadow hover:shadow-lg flex items-center justify-center text-sm font-medium hover:scale-[1.05]"
                        >
                          {project.name}
                        </Link>
                      ))}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderProjectsDropdown;
