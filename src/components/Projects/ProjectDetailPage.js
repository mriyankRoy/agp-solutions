import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router";
import {
  MapPin,
  Tag,
  X,
  FileText,
  Calendar,
  Layers,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Home,
  Maximize2,
  ArrowLeft,
} from "lucide-react";
import { projects } from "../../utils/projects";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Updated logic: search through nested categories to find the specific project
  const project = projects
    .flatMap((cat) => cat.projects)
    .find((p) => String(p.id) === id);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [id]);

  const showNext = useCallback(
    (e) => {
      e?.stopPropagation();
      if (project?.imageUrls) {
        setCurrentIndex((prev) => (prev + 1) % project.imageUrls.length);
      }
    },
    [project?.imageUrls],
  );

  const showPrev = useCallback(
    (e) => {
      e?.stopPropagation();
      if (project?.imageUrls) {
        setCurrentIndex(
          (prev) =>
            (prev - 1 + project.imageUrls.length) % project.imageUrls.length,
        );
      }
    },
    [project?.imageUrls],
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, showNext, showPrev]);

  if (!project)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F9FA]">
        <h1 className="text-4xl font-bold text-[#44444E]">
          404 // LOG_NOT_FOUND
        </h1>
        <button
          onClick={() => navigate("/projects")}
          className="mt-6 px-8 py-3 bg-[#BF092F] text-white rounded-xl font-bold"
        >
          Return to Terminal
        </button>
      </div>
    );

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  const specs = [
    { label: "Client", value: project?.client, icon: <FileText size={16} /> },
    { label: "Category", value: project?.type, icon: <Tag size={16} /> },
    { label: "Location", value: project?.location, icon: <MapPin size={16} /> },
    { label: "Log ID", value: project?.id, icon: <Calendar size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-white text-[#44444E] font-sans selection:bg-[#BF092F] selection:text-white">
      {/* 🔍 ENHANCED LIGHTBOX */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A1A1E]/95 backdrop-blur-xl p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="cursor-pointer absolute top-10 right-10 text-white/50 hover:text-[#BF092F] transition-all z-[110] group"
          >
            <X
              size={40}
              className="group-hover:rotate-90 transition-transform"
            />
          </button>

          <div
            className="max-w-7xl w-full flex flex-col items-center gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex items-center justify-center group px-16 md:px-24">
              <button
                onClick={showPrev}
                className="cursor-pointer absolute left-0 text-white/20 hover:text-[#BF092F] transition-all p-2 z-[110] hover:scale-110"
              >
                <ChevronLeft size={60} strokeWidth={1} />
              </button>
              <div className="relative border border-white/10 shadow-2xl rounded-2xl overflow-hidden">
                <img
                  src={project.imageUrls[currentIndex]}
                  className="max-h-[65vh] w-auto block select-none"
                  alt="Technical View"
                />
              </div>
              <button
                onClick={showNext}
                className="cursor-pointer absolute right-0 text-white/20 hover:text-[#BF092F] transition-all p-2 z-[110] hover:scale-110"
              >
                <ChevronRight size={60} strokeWidth={1} />
              </button>
            </div>
            <div className="w-full max-w-4xl bg-[#44444E] border border-white/10 p-6 rounded-2xl shadow-2xl">
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-4 w-1 bg-[#BF092F]" />
                    <h4 className="text-white font-black uppercase tracking-widest text-sm">
                      Field Documentation View
                    </h4>
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    Project: {project.name}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-white/40 text-[12px] tracking-tighter">
                    {currentIndex + 1} / {project.imageUrls.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🏗️ HERO SECTION */}
      <div className="pt-22 px-2 md:px-2">
        <header className="shadow-xl relative h-[28vh] min-h-[300px] w-full flex items-center bg-[#44444E] overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

          <div className="container mx-auto px-4 md:px-6 relative z-20">
            {/* 🧭 NAVIGATION: Matched to ProjectsPage style */}
            <nav className="hidden md:flex items-center flex-wrap gap-3 mb-6">
              <button
                onClick={() => navigate("/")}
                className="cursor-pointer group flex items-center gap-1 text-white/50 hover:text-white transition-colors"
              >
                <Home size={14} />
                <span className="text-[10px] md:text-xs tracking-widest uppercase">
                  Home
                </span>
              </button>

              <span className="text-white/20 text-xs font-mono">{">"}</span>

              <button
                onClick={() => navigate("/projects")}
                className="cursor-pointer text-[10px] md:text-xs tracking-widest uppercase text-white/50 hover:text-white transition-colors"
              >
                Project Registry
              </button>

              <span className="text-white/20 text-xs font-mono">{">"}</span>

              <button
                onClick={() => navigate(`/projects?type=${project.type}`)}
                className="cursor-pointer text-[10px] md:text-xs tracking-widest uppercase text-white/50 hover:text-white transition-colors"
              >
                {project.type}
              </button>

              <span className="text-white/20 text-xs font-mono">{">"}</span>

              {/* ACTIVE PAGE: RED PILL DESIGN */}
              <button className="text-[10px] md:text-xs tracking-widest uppercase bg-[#BF092F] text-white px-4 py-1.5 rounded-2xl shadow-lg shadow-[#BF092F]/20">
                {project.name.length > 25
                  ? `${project.name.substring(0, 25)}...`
                  : project.name}
              </button>
            </nav>

            <h1
              className={`font-semibold text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-[-0.02em] max-w-4xl transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {project.name}
            </h1>
            <p className="text-white/60 text-lg md:text-xl tracking-wide leading-relaxed mt-4 max-w-3xl font-medium">
              Technical field log and deployment data for site ID: {project.id}.
            </p>
          </div>
        </header>
      </div>

      {/* 🏭 CONTENT AREA */}
      <main className="container mx-auto -translate-y-12 relative z-30 pb-20">
        <div className="pt-20 px-4 flex flex-col lg:grid lg:grid-cols-12 gap-8 items-stretch">
          {/* SIDEBAR: Expanded/Expandable Technical Specs */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="rounded-2xl bg-[#44444E] shadow-2xl border-t-4 border-[#BF092F] lg:sticky lg:top-28 overflow-hidden transition-all duration-500">
              {/* MOBILE TOGGLE HEADER */}
              <div
                className="p-6 lg:p-8 flex flex-col gap-4 cursor-pointer lg:cursor-default border-b border-white/10"
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    const content = document.getElementById("specs-content");
                    const preview = document.getElementById("mobile-preview");
                    content.classList.toggle("hidden");
                    preview.classList.toggle("hidden"); // Toggles the preview visibility
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Layers size={16} className="text-[#BF092F]" />
                    <h2 className="text-[12px] text-white tracking-[0.4em] uppercase font-bold">
                      Technical Specs
                    </h2>
                  </div>
                  <ChevronRight
                    size={18}
                    className="text-white/40 lg:hidden transform rotate-90"
                  />
                </div>

                {/* 📱 MOBILE ONLY PREVIEW: Wrapped in 'mobile-preview' id to toggle */}
                <div
                  id="mobile-preview"
                  className="flex flex-col gap-3 lg:hidden border-t border-white/5 pt-4"
                >
                  <div className="flex items-center gap-2">
                    <FileText size={12} className="text-[#BF092F]" />
                    <span className="text-[10px] text-white/50 uppercase font-bold tracking-wider">
                      Client:
                    </span>
                    <span className="text-[10px] text-white font-bold">
                      {project?.client}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag size={12} className="text-[#BF092F]" />
                    <span className="text-[10px] text-white/50 uppercase font-bold tracking-wider">
                      Type:
                    </span>
                    <span className="text-[10px] text-white font-bold">
                      {project?.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* SPECS CONTENT */}
              <div id="specs-content" className="hidden lg:block">
                <div className="p-8 space-y-4">
                  {specs.map((spec, i) => (
                    <div
                      key={i}
                      className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-[#BF092F]/50 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[#BF092F]">{spec.icon}</span>
                        <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
                          {spec.label}
                        </span>
                      </div>
                      <p className="text-white font-bold tracking-wide">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-8 bg-black/20">
                  <button
                    onClick={() => navigate(`/projects?type=${project.type}`)}
                    className="cursor-pointer w-full py-4 bg-[#BF092F] text-white text-[11px] font-bold uppercase tracking-[0.3em] rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:text-[#44444E] transition-all shadow-lg"
                  >
                    <ArrowLeft size={14} /> Back to {project.type}
                  </button>
                </div>
              </div>
            </div>
          </aside>

          <section className="lg:col-span-8 space-y-8">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-8 w-1 bg-[#BF092F]" />
                <h2 className="text-sm text-[#44444E] uppercase font-bold">
                  Project Brief
                </h2>
              </div>
              <div className="space-y-6">
                {project.description.map((desc, idx) =>
                  Array.isArray(desc) ? (
                    <div
                      key={idx}
                      className="grid grid-cols-1 gap-4 mt-8 bg-gray-50 p-8 rounded-2xl border-l-4 border-[#BF092F]"
                    >
                      {desc.map((item, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <ArrowRight
                            size={18}
                            className="text-[#BF092F] mt-1 shrink-0"
                          />
                          <p className="text-[#44444E] font-medium leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p
                      key={idx}
                      className="text-lg leading-relaxed text-gray-600 font-medium"
                    >
                      {desc}
                    </p>
                  ),
                )}
              </div>
            </div>

            {/* 📸 ENHANCED FIELD DOCUMENTATION (Matched to Product Style & Matte Finished) */}
            <div className="bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-4">
              <div className="flex items-center justify-between px-4 pt-4 mb-2">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-1 bg-[#BF092F]" />
                  <h2 className="text-[#44444E] uppercase text-[12px] font-black tracking-widest">
                    Field Documentation
                  </h2>
                </div>
              </div>

              {/* MAIN VIEWPORT: Large Scale Display */}
              <div
                className="relative bg-[#f8f8f8] overflow-hidden group flex items-center justify-center cursor-zoom-in rounded-xl h-[400px] md:h-[600px] border border-gray-100"
                onClick={() => openLightbox(currentIndex)}
              >
                <div className="rounded-xl">
                  <img
                    src={project.imageUrls[currentIndex]}
                    className="rounded-2xl max-h-full max-w-full object-contain p-4 md:p-7 transition-all duration-700 group-hover:scale-105 filter sepia-[0.2] brightness-[0.9] contrast-[1.05] group-hover:sepia-0 group-hover:brightness-100 group-hover:contrast-100"
                    alt="Technical Field View"
                  />
                </div>

                {/* Navigation Controls */}
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      showPrev();
                    }}
                    className="pointer-events-auto cursor-pointer p-4 bg-white/90 text-[#44444E] hover:bg-[#BF092F] hover:text-white shadow-xl rounded-full transition-all -translate-x-10 group-hover:translate-x-0 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      showNext();
                    }}
                    className="pointer-events-auto cursor-pointer p-4 bg-white/90 text-[#44444E] hover:bg-[#BF092F] hover:text-white shadow-xl rounded-full transition-all translate-x-10 group-hover:translate-x-0 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>

              {/* THUMBNAIL TRACK */}
              <div className="flex gap-3 overflow-x-auto p-2 bg-gray-50 rounded-xl scrollbar-hide">
                {project.imageUrls.map((url, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`cursor-pointer flex-shrink-0 w-20 h-20 border-2 transition-all rounded-lg overflow-hidden relative ${
                      i === currentIndex
                        ? "border-[#BF092F] ring-4 ring-[#BF092F]/10"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    {/* Thumbnails share the same tint until selected or hovered */}
                    <img
                      src={url}
                      className={`rounded-lg w-full h-full object-cover transition-all filter ${
                        i === currentIndex
                          ? "sepia-0 brightness-100"
                          : "sepia-[0.3] brightness-[0.85]"
                      } hover:sepia-0 hover:brightness-100`}
                      alt="thumb"
                    />
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </div>
  );
}
