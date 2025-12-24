import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowRight, MapPin, Container } from "lucide-react";

export default function ProjectCard({ project }) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <div
      className="group relative flex flex-col h-full bg-white rounded-2xl shadow-xl border border-gray-100 cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-[#BF092F]/20 hover:-translate-y-2 hover:scale-[1.02]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleNavigate}
    >

      {/* 2. IMAGE SECTION */}
      <div className="h-64 min-h-[16rem] relative overflow-hidden bg-gray-50 border-b border-gray-50">
        <img
          src={project.imageUrls[0]}
          alt={project.name}
          className={`w-full h-full object-cover grayscale transition-all duration-700 opacity-90 ${
            hover ? "grayscale-0 scale-110 opacity-100" : ""
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
      </div>

      {/* 3. CONTENT SECTION */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={14} className="text-[#BF092F]" />
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
              {project.location}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-[#44444E] tracking-tight group-hover:text-[#BF092F] transition-colors mb-3 leading-snug min-h-[3.5rem] line-clamp-2">
            {project.name}
          </h3>
          
          <p className="text-[12px] text-gray-400 tracking-widest leading-relaxed line-clamp-3 min-h-[3rem]">
            {project.description[0] || "Verified industrial deployment and technical installation record."}
          </p>
        </div>

        {/* 4. FOOTER ACTION */}
        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Container size={14} className="text-[#BF092F]" />
            <span className="text-[11px] font-bold text-[#44444E] uppercase tracking-widest">
              {project.type}
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-[#BF092F] font-bold text-[11px] uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform">
            View Log
            <ArrowRight size={16} />
          </div>
        </div>
      </div>

      {/* 5. HOVER ACCENT BAR */}
      <div className={`absolute bottom-0 left-0 h-1 bg-[#BF092F] transition-all duration-500 ${hover ? 'w-full' : 'w-0'}`} />
    </div>
  );
}