import React from "react";
import { useNavigate } from "react-router";

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
        <span className="inline-block px-2 py-1 text-xs font-semibold uppercase rounded-md bg-[#B45253] text-white">
          {project.type}
        </span>
        <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold truncate">
          {project.name}
        </h3>
        <div className="flex items-center gap-1.5 text-gray-300 text-xs sm:text-sm">
          <svg
            className="w-3.5 h-3.5 text-[#B45253] flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="truncate">{project.location}</span>
        </div>
      </div>
    </article>
  );
}
