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

export const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;
  const [lightboxImage, setLightboxImage] = useState(null);

  const renderPoints = (points, level = 0) => {
    return (
      <ul className={`space-y-1`}>
        {points.map((point, idx) => (
          <li
            key={idx}
            className={`text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed`}
            style={{ paddingLeft: `${level * 20}px` }} // tab for subpoints
          >
            {typeof point === "string"
              ? point
              : Array.isArray(point)
              ? renderPoints(point, level + 1) // increase indent for subpoints
              : null}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-gray-900 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black rounded-2xl sm:rounded-3xl border border-gray-800 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 z-10 p-2 sm:p-2.5 md:p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:rotate-90"
          aria-label="Close"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>

        <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
          <img
            src={project.imageUrls[0]}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
          ></div>

          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 lg:p-8">
            <div className="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3 mb-2 sm:mb-3 md:mb-4">
              {project.type && (
                <span
                  className={`px-2.5 py-1.5 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-gradient-to-r ${project.color} rounded-full text-xs sm:text-sm font-bold text-white shadow-lg`}
                >
                  {project.type}
                </span>
              )}
              {project.location && (
                <span className="px-2.5 py-1.5 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-md rounded-full text-xs sm:text-sm font-semibold text-white flex items-center gap-1.5 sm:gap-2">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  {project.location}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1 sm:mb-2">
              {project.name}
            </h2>
          </div>
        </div>

        <div className="p-4 sm:p-5 md:p-6 lg:p-8 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h3
              className={`text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
            >
              Project Overview
            </h3>
            {Array.isArray(project.description) ? (
              renderPoints(project.description)
            ) : (
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                {project.description}
              </p>
            )}
          </div>

          {project.issue && (
            <div className="space-y-2 sm:space-y-3 md:space-y-4 p-4 sm:p-5 md:p-6 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-800">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 rounded-full"></span>
                Challenge
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.issue}
              </p>
            </div>
          )}

          {project.solvingMeasure && (
            <div className="space-y-2 sm:space-y-3 md:space-y-4 p-4 sm:p-5 md:p-6 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-800">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"></span>
                Solution
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.solvingMeasure}
              </p>
            </div>
          )}

          {project.conclusion && (
            <div className="space-y-2 sm:space-y-3 md:space-y-4 p-4 sm:p-5 md:p-6 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-800">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></span>
                Results
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.conclusion}
              </p>
            </div>
          )}

          {project.endUser && (
            <div className="space-y-2 sm:space-y-3 md:space-y-4 p-4 sm:p-5 md:p-6 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-800">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full"></span>
                End User
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.endUser}
              </p>
            </div>
          )}

          {project.imageUrls.length > 0 && (
            <div className="space-y-3 sm:space-y-4">
              <h3
                className={`text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent flex items-center gap-2`}
              >
                <Image className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400" />
                Project Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {project.imageUrls.map((url, idx) => (
                  <div
                    key={idx}
                    className="relative h-40 sm:h-48 md:h-56 lg:h-64 rounded-lg sm:rounded-xl overflow-hidden group cursor-zoom-in"
                    onClick={() => setLightboxImage(url)}
                  >
                    <img
                      src={url}
                      alt={`${project.name} ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {lightboxImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-zoom-out"
              onClick={() => setLightboxImage(null)}
            >
              <img
                src={lightboxImage}
                alt="Enlarged"
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              />
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
            <button
              onClick={onClose}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 md:py-4 bg-gradient-to-r ${project.color} rounded-lg sm:rounded-xl text-white text-sm sm:text-base font-bold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 hover:scale-105`}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
