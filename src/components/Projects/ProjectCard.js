import React from "react";
import { useNavigate } from "react-router";
// Import the MapPin icon from lucide-react
import { MapPin } from "lucide-react"; 

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <article
      onClick={handleClick}
      className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl w-full sm:w-80 md:w-96 lg:w-[26rem] xl:w-[28rem] aspect-[4/3] cursor-pointer mx-auto group shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <img
          src={project.imageUrls[0]}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-4 sm:p-5 flex flex-col gap-2">
        <span className="inline-block px-2 py-1 text-xs font-semibold uppercase rounded-md bg-[#CF0F0F] text-white">
          {project.type}
        </span>
        <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold truncate">
          {project.name}
        </h3>
        {/* Updated Location Icon using Lucide React's MapPin */}
        <div className="flex items-center gap-1.5 text-gray-300 text-xs sm:text-sm">
          <MapPin 
            className="w-3.5 h-3.5 text-[#CF0F0F] flex-shrink-0"
            size={16} // Standard size, though w-3.5/h-3.5 classes will control it
          />
          <span className="truncate">{project.location}</span>
        </div>
        {/* End of updated section */}
      </div>
    </article>
  );
}