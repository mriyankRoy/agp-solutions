import ProjectCard from "./ProjectCard";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectCarousel({ projects: projectsProp }) {
  const projects = projectsProp || []; 
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const GAP_SIZE = 24; 

  const getCardStepSize = () => {
    const container = scrollContainerRef.current;
    if (!container) return { step: 0 };
    const card = container.querySelector(".card-content");
    return card ? { step: card.offsetWidth + GAP_SIZE } : { step: 0 };
  };
  
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const { step } = getCardStepSize();
    if (!container || step === 0) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const newScrollLeft = direction === "left"
        ? Math.max(0, container.scrollLeft - step)
        : Math.min(maxScroll, container.scrollLeft + step);

    container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  };

  const updateScrollState = () => {
    const container = scrollContainerRef.current;
    const { step } = getCardStepSize();
    if (!container || step === 0) return;
    setActiveIndex(Math.round(container.scrollLeft / step));
    setCanScrollLeft(container.scrollLeft > 5);
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 5); 
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const handleResize = () => updateScrollState();
    const initialCheck = setTimeout(updateScrollState, 100);
    container.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(initialCheck);
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", handleResize);
    };
  }, [projects.length]);

  if (projects.length === 0) return null;

  return (
    <div className="relative w-full px-4 md:px-16"> 
      <div className="relative">
        
        {/* --- LEFT ARROW (Eye-catching glassmorphism) --- */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 md:-left-14 top-1/2 -translate-y-1/2 z-30
                       w-12 h-12  items-center justify-center rounded-full
                       bg-white/80 backdrop-blur-md border-2 border-[#44444E]/20 text-[#44444E]
                       shadow-xl transition-all duration-300 group hover:bg-[#CF0F0F] hover:text-white
                       hover:scale-110 active:scale-95 hidden sm:flex"
          >
            <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
          </button>
        )}

        {/* --- RIGHT ARROW --- */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 md:-right-14 top-1/2 -translate-y-1/2 z-30
                       w-12 h-12  items-center justify-center rounded-full
                       bg-white/80 backdrop-blur-md border-2 border-[#44444E]/20 text-[#44444E]
                       shadow-xl transition-all duration-300 group hover:bg-[#CF0F0F] hover:text-white
                       hover:scale-110 active:scale-95 hidden sm:flex"
          >
            <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </button>
        )}
        
        {/* --- TRACK --- */}
        <div className="relative overflow-hidden">
          <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto scrollbar-hide py-4 snap-x snap-mandatory">
            {projects.map((proj) => (
              <div key={proj.id} className="snap-start flex-shrink-0 card-content-wrapper">
                <div className="card-content">
                  <ProjectCard project={proj} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- DOTS --- */}
        <div className="flex justify-center gap-3 mt-6">
          {projects.map((_, i) => (
            <div key={i} className={`h-2 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-8 bg-[#CF0F0F]' : 'w-2 bg-[#44444E]/30'}`} />
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .card-content-wrapper { min-width: 100%; }
        @media (min-width: 640px) { .card-content-wrapper { min-width: calc(50% - 12px); } }
        @media (min-width: 1024px) { .card-content-wrapper { min-width: calc(33.333% - 16px); } }
        .card-content { width: 100%; height: 100%; }
      `}</style>
    </div>
  );
}