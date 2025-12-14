import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { MapPin, Tag, X } from "lucide-react"; 
import { projects } from "../../utils/projects";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Ensure id matches string form
  const project = projects.find((p) => String(p.id) === id);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);
  
  // New state for scroll animations
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const openLightbox = (src) => {
    setCurrentImg(src);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImg(null);
    document.body.style.overflow = "unset";
  };

  // Setup scroll and visibility effects
  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    const handleEsc = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset"; 
    };
  }, []); 

  if (!project)
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center pt-24">
        <p className="text-xl text-[#CF0F0F] font-semibold">Project not found.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-white text-black pt-20 sm:pt-24 lg:pt-0 overflow-hidden">

      {/* BACKGROUND GRID (Subtle White/Black) */}
      <div className="-z-10 absolute inset-0 
           bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]
           bg-[size:40px_40px]
           before:content-[''] before:absolute before:inset-0 
           before:bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.02),transparent_60%)]
      "></div>

      {/* 🔍 LIGHTBOX MODAL (Matching ProductDetailPage styling) */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button: X icon from Lucide React */}
          <button
            onClick={closeLightbox}
            className="
              absolute top-6 right-6 text-white hover:text-[#CF0F0F] p-2 
              rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-200 z-[60]
            "
            aria-label="Close image viewer"
          >
            <X className="w-8 h-8" strokeWidth={2.5} />
          </button>

          {/* Enlarged Image Container */}
          <div 
            className="p-4 max-w-7xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImg}
              alt="Enlarged Project Image"
              className="w-full h-full object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
      
      {/* 💥 HERO HEADER SECTION (Dark background for contrast) */}
      <div className="relative mb-16 overflow-hidden">
        {/* Background set to primary dark color */}
        <div className="absolute inset-0 bg-[#44444E] opacity-95"></div>

        {/* ANGLED ACCENT DIV - New sharp, modern visual element */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white transform -skew-y-1 translate-y-1/2 z-10 shadow-xl"></div>
        
        {/* Animated pattern (Dark/White) */}
        <div
          className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] "
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>

        {/* Animated light beams (White/Red) */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"></div>
          <div
            className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#CF0F0F] to-transparent animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-6 py-24 sm:py-32">
          <div className="max-w-4xl">
            
            {/* Project Type Pill (Red/White - High Contrast) */}
            <div
              className={`inline-block px-4 py-1 bg-[#CF0F0F] text-white rounded-full text-sm font-medium mb-6 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              <span className="flex items-center gap-2">
                <Tag size={16} /> {project.type}
              </span>
            </div>

            {/* Title */}
            <h1
              className={`text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight transition-all duration-1000 delay-150 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {project.name}
            </h1>
            
            {/* Location */}
            <div
              className={`text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl flex items-center gap-3 transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
            >
                <MapPin size={22} className="text-[#CF0F0F] flex-shrink-0" /> {project.location}
            </div>
            
          </div>
        </div>
      </div>
      
      {/* PAGE CONTENT */}
      <div className="max-w-6xl mx-auto px-4 pb-7 sm:px-6 lg:px-8 relative z-20">

        {/* Back Button (More defined shadow/hover) */}
        <button
          onClick={() => navigate(-1)}
          className="
            mb-12 inline-flex items-center 
            px-6 py-3 rounded-xl 
            bg-white text-[#44444E] font-medium 
            hover:bg-[#CF0F0F] hover:text-white 
            transition-all duration-300
            shadow-xl border border-[#44444E]/10
            transform hover:scale-[1.03] hover:shadow-2xl
          "
        >
          &larr; Back to Projects
        </button>


        {/* Gallery Section (Image Hover Glow Added) */}
        <section 
            className={`mb-16 transition-all duration-1000 delay-500 ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
            }`}
        >
          <h2 className="text-3xl font-extrabold mb-8 text-[#44444E] border-l-4 border-[#CF0F0F] pl-4">
            Project Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.imageUrls.map((url, i) => (
              <div 
                key={i} 
                className="relative group cursor-zoom-in"
                onClick={() => openLightbox(url)}
              >
                <img
                  src={url}
                  alt={`${project.name}-${i}`}
                  className="
                    w-full h-64 object-cover 
                    rounded-2xl shadow-xl 
                    transition-all duration-300 
                    transform group-hover:scale-[1.02]
                    border-4 border-white 
                  "
                />
                {/* Red Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_20px_rgba(207,15,15,0.0)] group-hover:shadow-[0_0_20px_rgba(207,15,15,0.8)] transition-shadow duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Description Section (Card Polish and Shadow) */}
        <section 
            className={`max-w-4xl transition-all duration-1000 delay-700 ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
            }`}
        >
          <h2 className="text-3xl font-extrabold mb-8 text-[#CF0F0F] border-l-4 border-[#44444E] pl-4">Project Details</h2>
          
          <div className="space-y-8 text-lg leading-relaxed">
            {project.description.map((desc, idx) =>
              Array.isArray(desc) ? (
                // UL: White card with Red accent bar and Inner Shadow
                <ul
                  key={idx}
                  className="list-none space-y-3 p-6 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl border-l-8 border-[#CF0F0F] shadow-inner shadow-black/5"
                >
                  {desc.map((d, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#44444E]/90">
                      {/* List Bullet: Dark Gray dot */}
                      <span className="mt-2 w-2 h-2 bg-[#44444E] rounded-full flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              ) : (
                // Paragraph: Simple text with shadow/hover effect and inner shadow
                <p 
                    key={idx} 
                    className="text-[#44444E] bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 shadow-inner shadow-black/5"
                >
                    {desc}
                </p>
              )
            )}
          </div>
        </section>

      </div>
    </div>
  );
}