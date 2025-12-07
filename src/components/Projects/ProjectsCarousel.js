import { ScrollIndicator } from "./ScrollIndicator";
import { CarouselHeader } from "./CarouselHeader";
import { NavigationButtons } from "./NavigationButtons";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { useState, useRef, useEffect } from "react";
import { projects } from "../../utils/projects";

const ProjectsCarousel = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [dragDistance, setDragDistance] = useState(0);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth * 0.8;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragDistance(0);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    setDragDistance(Math.abs(walk));
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleCardClick = (project) => {
    if (dragDistance < 10) {
      setSelectedProject(project);
    }
  };

  const updateActiveIndex = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.firstChild
        ? carouselRef.current.firstChild.offsetWidth + 32
        : 450 + 32;
      const index = Math.round(scrollPosition / cardWidth);
      setActiveIndex(Math.min(Math.max(0, index), projects.length - 1));
    }
  };

  const scrollToIndex = (index) => {
    if (carouselRef.current && carouselRef.current.firstChild) {
      const cardWidth = carouselRef.current.firstChild.offsetWidth + 32;
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        scroll("left");
      } else if (e.key === "ArrowRight") {
        scroll("right");
      }
    };

    const carousel = carouselRef.current;

    window.addEventListener("keydown", handleKeyDown);
    if (carousel) {
      carousel.addEventListener("scroll", updateActiveIndex);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (carousel) {
        carousel.removeEventListener("scroll", updateActiveIndex);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gray-900 relative overflow-hidden sm:py-28 md:py-32 lg:py-36 xl:py-40"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <CarouselHeader />

        <div className="relative group">
          <NavigationButtons
            onScrollLeft={() => scroll("left")}
            onScrollRight={() => scroll("right")}
          />

          <div
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 overflow-x-auto scrollbar-hide py-3 sm:py-4 scroll-smooth px-4 sm:px-6 md:px-6 lg:px-8 xl:px-10"
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onCardClick={handleCardClick}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </div>
        </div>

        <ScrollIndicator
          projects={projects}
          activeIndex={activeIndex}
          onScrollToIndex={scrollToIndex}
        />
      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProjectsCarousel;
