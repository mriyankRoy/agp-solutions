import ProjectCard from "./ProjectCard";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, ArrowLeft } from "lucide-react";

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
    
    const index = Math.round(container.scrollLeft / step);
    setActiveIndex(index);
    setCanScrollLeft(container.scrollLeft > 10);
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10); 
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

  // Calculate progress for the blueprint bar
  const scrollProgress = ((activeIndex + 1) / projects.length) * 100;

  return (
    <div className="relative w-full"> 
      <div className="relative group">
        
        {/* --- INDUSTRIAL CONTROLS (Top Right Alignment) --- */}
        <div className="absolute -top-16 right-4 md:right-16 flex gap-2 z-30">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`w-12 h-12 flex items-center justify-center transition-all border-t-2
              ${canScrollLeft 
                ? "bg-[#44444E] border-[#CF0F0F] text-white hover:bg-[#CF0F0F]" 
                : "bg-gray-100 border-gray-200 text-gray-300 cursor-not-allowed"}`}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`w-12 h-12 flex items-center justify-center transition-all border-t-2
              ${canScrollRight 
                ? "bg-[#44444E] border-[#CF0F0F] text-white hover:bg-[#CF0F0F]" 
                : "bg-gray-100 border-gray-200 text-gray-300 cursor-not-allowed"}`}
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
        {/* --- TRACK WITH OVERFLOW MASK --- */}
        <div className="relative px-4 md:px-16 overflow-hidden">
          <div 
            ref={scrollContainerRef} 
            className="flex gap-6 overflow-x-auto scrollbar-hide py-8 snap-x snap-mandatory"
          >
            {projects.map((proj, idx) => (
              <div key={proj.id} className="snap-start flex-shrink-0 card-content-wrapper relative">
                {/* Visual Index Number (Industrial Aesthetic) */}
                <span className="absolute -top-2 left-0 text-[40px] font-black text-gray-100 select-none z-0">
                  0{idx + 1}
                </span>
                <div className="card-content relative z-10">
                  <ProjectCard project={proj} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- BLUEPRINT PROGRESS INDICATOR --- */}
        <div className="container mx-auto px-4 md:px-16 mt-8">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black text-[#44444E] uppercase tracking-widest w-12">
              {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
            
            <div className="flex-grow h-[2px] bg-gray-200 relative">
              <div 
                className="absolute top-0 left-0 h-full bg-[#CF0F0F] transition-all duration-500 ease-out"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
            
            <span className="text-[10px] font-black text-[#CF0F0F] uppercase tracking-widest">
              DEPLOYMENT TRACK
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        
        .card-content-wrapper { min-width: 100%; }
        @media (min-width: 768px) { .card-content-wrapper { min-width: calc(50% - 12px); } }
        @media (min-width: 1280px) { .card-content-wrapper { min-width: calc(33.333% - 16px); } }
        
        .card-content { width: 100%; height: 100%; }
      `}</style>
    </div>
  );
}