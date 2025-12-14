import ProjectCard from "./ProjectCard";
import { useState, useEffect, useRef } from "react";

export default function ProjectCarousel({ projects }) {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Scroll left/right
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const card = container.querySelector("article");
    const cardWidth = card ? card.offsetWidth : 400;
    const gap = 24;
    const amount = cardWidth + gap;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const newScrollLeft =
      direction === "left"
        ? Math.max(0, container.scrollLeft - amount)
        : Math.min(maxScroll, container.scrollLeft + amount);

    container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  };

  // Update arrows visibility and active index
  const updateScrollState = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const card = container.querySelector("article");
    const cardWidth = card ? card.offsetWidth : 400;
    const gap = 24;
    const index = Math.round(container.scrollLeft / (cardWidth + gap));
    setActiveIndex(index);

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 1);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();

    return () => container.removeEventListener("scroll", updateScrollState);
  }, []);

  const goToSlide = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const card = container.querySelector("article");
    const cardWidth = card ? card.offsetWidth : 400;
    const gap = 24;
    const scrollAmount = (cardWidth + gap) * index;

    container.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative w-full py-12 px-4 sm:px-6 lg:px-10">
      <div className="relative max-w-[1700px] mx-auto">
        {/* LEFT ARROW */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="
              absolute left-0 top-1/2 -translate-y-1/2 z-20
              w-14 h-14 flex items-center justify-center rounded-full
              shadow-xl transition-transform duration-300
              hover:scale-110 active:scale-95
              border border-white/20 backdrop-blur-xl
            "
            style={{ background: "linear-gradient(135deg, #CF0F0F, #44444E)" }}
          >
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* RIGHT ARROW */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="
              absolute right-0 top-1/2 -translate-y-1/2 z-20
              w-14 h-14 flex items-center justify-center rounded-full
              shadow-xl transition-transform duration-300
              hover:scale-110 active:scale-95
              border border-white/20 backdrop-blur-xl
            "
            style={{ background: "linear-gradient(135deg, #CF0F0F, #44444E)" }}
          >
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* CAROUSEL */}
        <div
          ref={scrollContainerRef}
          className="
            flex gap-6 overflow-x-auto scrollbar-hide
            px-2 sm:px-4 py-4 snap-x snap-mandatory
            cursor-grab active:cursor-grabbing
          "
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
            msOverflowStyle: "none",
          }}
        >
          {projects.map((proj) => (
            <div key={proj.id} className="snap-start flex-shrink-0">
              <ProjectCard project={proj} />
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="w-3 h-3 rounded-full transition-all duration-300"
              style={{
                background: i === activeIndex ? "#B45253" : "#44444E",
                transform: i === activeIndex ? "scale(1.4)" : "scale(1)",
                boxShadow:
                  i === activeIndex
                    ? "0 0 10px rgba(180,82,83,0.6)"
                    : "0 0 4px rgba(68,68,78,0.3)",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
