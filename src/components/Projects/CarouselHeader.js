import React from "react";

// Carousel Header Component
export const CarouselHeader = () => {
  return (
    <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="flex gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
        <h1 className="font-mono text-xs sm:text-sm md:text-md font-semibold tracking-widest text-gray-400 uppercase">
          Our Projects
        </h1>
      </div>
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-pretty text-white leading-tight">
        Cutting-edge power solutions engineered for excellence
      </p>
    </div>
  );
};
