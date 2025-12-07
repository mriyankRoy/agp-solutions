import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  MapPin,
  Sparkles,
  X,
  Image,
} from "lucide-react";

// Project Card Component
export const ProjectCard = ({
  project,
  index,
  onCardClick,
  setHoveredIndex,
}) => {
  return (
    <div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={() => onCardClick(project)}
      className="flex-none w-[260px] sm:w-[300px] md:w-[360px] lg:w-[400px] xl:w-[450px] 2xl:w-[480px] group/card perspective-1000 cursor-pointer"
    >
      <div className="relative h-[380px] sm:h-[420px] md:h-[480px] lg:h-[520px] xl:h-[550px] 2xl:h-[580px] transform transition-all duration-700 hover:scale-[1.02] sm:hover:scale-105 ">
        <div
          className={`absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-r ${project.color} opacity-0 group-hover/card:opacity-100 blur-xl transition-opacity duration-500`}
        ></div>

        <div className="relative h-full bg-gradient-to-br from-gray-900 to-black rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-gray-800 group-hover/card:border-transparent transition-all duration-500 shadow-2xl">
          <div className="absolute inset-0">
            <img
              src={project.imageUrls[0]}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
              draggable="false"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover/card:opacity-40 transition-opacity duration-500`}
            ></div>
          </div>

          <div
            className={`absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-br ${project.color} opacity-30 blur-2xl group-hover/card:w-28 group-hover/card:h-28 sm:group-hover/card:w-36 sm:group-hover/card:h-36 md:group-hover/card:w-40 md:group-hover/card:h-40 lg:group-hover/card:w-48 lg:group-hover/card:h-48 transition-all duration-700`}
          ></div>

          <div className="relative h-full flex flex-col justify-between p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8">
            <div className="flex flex-wrap gap-1.5 sm:gap-2 transform transition-all duration-500 group-hover/card:translate-y-0 -translate-y-1 sm:-translate-y-2">
              {project.type && (
                <span
                  className={`px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-1.5 lg:px-4 lg:py-2 bg-gradient-to-r ${project.color} rounded-full text-[10px] sm:text-xs font-bold text-white shadow-lg backdrop-blur-sm border border-white/20`}
                >
                  {project.type}
                </span>
              )}
              {project.location && (
                <span className="px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-1.5 lg:px-4 lg:py-2 bg-white/10 backdrop-blur-md rounded-full text-[10px] sm:text-xs font-semibold text-white border border-white/20 flex items-center gap-1">
                  <MapPin className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />
                  {project.location}
                </span>
              )}
            </div>

            <div className="space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4">
              <div
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black bg-gradient-to-r ${project.color} bg-clip-text text-transparent opacity-20 group-hover/card:opacity-40 transition-opacity duration-500`}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white leading-tight transform transition-all duration-500 group-hover/card:translate-x-1 lg:group-hover/card:translate-x-2">
                {project.name}
              </h3>

              <p className="text-gray-300 text-[11px] sm:text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-3 transform transition-all duration-500 group-hover/card:text-white">
                {project.description}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onCardClick(project);
                }}
                className={`flex items-center gap-1 sm:gap-1.5 md:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 bg-gradient-to-r ${project.color} rounded-lg lg:rounded-xl text-white text-[11px] sm:text-xs md:text-sm lg:text-base font-bold transition-all duration-300 hover:gap-1.5 sm:hover:gap-2 md:hover:gap-3 hover:shadow-lg hover:shadow-red-500/50 opacity-0 group-hover/card:opacity-100 transform translate-y-4 group-hover/card:translate-y-0`}
              >
                View Project
                <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
              </button>
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 via-red-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl lg:rounded-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
