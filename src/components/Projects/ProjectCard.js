import React from "react";
import { useNavigate } from "react-router";
import { MapPin, Tag, ArrowRight } from "lucide-react"; // Added Tag and ArrowRight icons

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <article
      onClick={handleClick}
      // ENHANCEMENT 1: STATIC, HIGH-IMPACT HOVER (Removed tilt, maintained scale/shadow)
      className="relative isolate flex flex-col justify-end overflow-hidden 
                 rounded-2xl aspect-[4/3] cursor-pointer mx-auto group 
                 w-full sm:w-80 md:w-96 lg:w-[26rem] xl:w-[28rem] 
                 shadow-xl hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.5)] 
                 transition-all duration-500 ease-in-out
                 hover:scale-[1.03]" 
    >
      {/* 1. Image and Overlay */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <img
          src={project.imageUrls[0]}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Dark overlay for text readability (Stronger gradient on hover) */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent 
                     transition-opacity duration-300 group-hover:from-black/95" 
        />
        
        {/* ENHANCEMENT 2: Strong Red Border Glow on Hover */}
        <div 
          className="absolute inset-0 rounded-2xl border-4 border-transparent 
                     transition-all duration-300 pointer-events-none 
                     group-hover:border-[#CF0F0F] group-hover:shadow-[0_0_20px_rgba(207,15,15,0.9)]" 
        />
      </div>

      {/* 4. Content Container (Modern Bottom Section) */}
      <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-end h-full">
        
        <div className="flex flex-col gap-3 mt-auto">
             
            {/* Type Tag */}
            <span 
                className="inline-block px-3 py-1 text-xs font-semibold uppercase rounded-full 
                           bg-[#CF0F0F] text-white self-start tracking-wider 
                           transition-transform duration-300 group-hover:scale-[1.05]"
            >
              {project.type}
            </span>

            {/* Title */}
            <h3 className="text-white text-2xl lg:text-3xl font-extrabold leading-tight">
              {project.name}
            </h3>

            {/* Location & CTA (Accent Line & Info) */}
            <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/20">
                
                {/* Location Info */}
                <div className="flex items-center gap-1.5 text-gray-300 text-sm">
                    {/* Red Accent Line for Separator */}
                    <div className="w-1 h-4 bg-[#CF0F0F] flex-shrink-0" />
                    
                    <MapPin 
                        className="w-4 h-4 text-[#CF0F0F] flex-shrink-0"
                    />
                    <span className="truncate font-medium">{project.location}</span>
                </div>
                
                {/* Call to Action Arrow */}
                <ArrowRight 
                    size={24} 
                    className="text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#CF0F0F]"
                />
            </div>
        </div>
      </div>
    </article>
  );
}