import { ChevronLeft, ChevronRight } from "lucide-react";

export const NavigationButtons = ({ onScrollLeft, onScrollRight }) => {
  return (
    <>
      {/* Left Button */}
      <button
        onClick={onScrollLeft}
        className="
          absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-0 md:-left-6 lg:-left-8 xl:-left-10 z-30
          w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20
          rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black
          flex items-center justify-center text-white
          border border-red-500/30
          shadow-[0_0_20px_rgba(239,68,68,0.3),0_0_40px_rgba(239,68,68,0.1),inset_0_0_20px_rgba(239,68,68,0.1)]
          opacity-0 group-hover:opacity-100 transition-all duration-500
          hover:scale-110 hover:border-red-400/50
          hover:shadow-[0_0_30px_rgba(239,68,68,0.5),0_0_60px_rgba(239,68,68,0.3),inset_0_0_30px_rgba(239,68,68,0.2)]
          backdrop-blur-sm
         overflow-hidden
          before:absolute before:inset-0 before:bg-gradient-to-br before:from-red-500/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
          after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tr after:from-red-500/0 after:via-red-500/30 after:to-red-500/0 after:blur-xl after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500
        "
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 relative z-10 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
        
        {/* Animated ring */}
        <span className="absolute inset-0 rounded-full border-2 border-red-500/0 group-hover:border-red-500/50 scale-100 group-hover:scale-110 transition-all duration-500" />
      </button>

      {/* Right Button */}
      <button
        onClick={onScrollRight}
        className="
          absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-0 md:-right-6 lg:-right-8 xl:-right-10 z-30
          w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20
          rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black
          flex items-center justify-center text-white
          border border-red-500/30
          shadow-[0_0_20px_rgba(239,68,68,0.3),0_0_40px_rgba(239,68,68,0.1),inset_0_0_20px_rgba(239,68,68,0.1)]
          opacity-0 group-hover:opacity-100 transition-all duration-500
          hover:scale-110 hover:border-red-400/50
          hover:shadow-[0_0_30px_rgba(239,68,68,0.5),0_0_60px_rgba(239,68,68,0.3),inset_0_0_30px_rgba(239,68,68,0.2)]
          backdrop-blur-sm overflow-hidden
          before:absolute before:inset-0 before:bg-gradient-to-br before:from-red-500/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
          after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tr after:from-red-500/0 after:via-red-500/30 after:to-red-500/0 after:blur-xl after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500
        "
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 relative z-10 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
        
        {/* Animated ring */}
        <span className="absolute inset-0 rounded-full border-2 border-red-500/0 group-hover:border-red-500/50 scale-100 group-hover:scale-110 transition-all duration-500" />
      </button>
    </>
  );
};