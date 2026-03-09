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
    [project?.imageUrls]
  );

  const showPrev = useCallback(
    (e) => {
      e?.stopPropagation();
      if (project?.imageUrls) {
        setCurrentIndex(
          (prev) =>
            (prev - 1 + project.imageUrls.length) % project.imageUrls.length
        );
      }
    },
    [project?.imageUrls]
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
            <X size={40} className="group-hover:rotate-90 transition-transform" />
          </button>

          <div className="max-w-7xl w-full flex flex-col items-center gap-6" onClick={(e) => e.stopPropagation()}>
            <div className="relative flex items-center justify-center group px-16 md:px-24">
              <button onClick={showPrev} className="cursor-pointer absolute left-0 text-white/20 hover:text-[#BF092F] transition-all p-2 z-[110] hover:scale-110">
                <ChevronLeft size={60} strokeWidth={1} />
              </button>
              <div className="relative border border-white/10 shadow-2xl rounded-2xl overflow-hidden">
                <img src={project.imageUrls[currentIndex]} className="max-h-[65vh] w-auto block select-none" alt="Technical View" />
              </div>
              <button onClick={showNext} className="cursor-pointer absolute right-0 text-white/20 hover:text-[#BF092F] transition-all p-2 z-[110] hover:scale-110">
                <ChevronRight size={60} strokeWidth={1} />
              </button>
            </div>
            <div className="w-full max-w-4xl bg-[#44444E] border border-white/10 p-6 rounded-2xl shadow-2xl">
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-4 w-1 bg-[#BF092F]" />
                    <h4 className="text-white font-black uppercase tracking-widest text-sm">Field Documentation View</h4>
                  </div>
                  <p className="text-white/60 leading-relaxed">Project: {project.name}</p>
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
            <nav className="flex items-center gap-2 mb-6 overflow-x-auto whitespace-nowrap scrollbar-hide pb-2">
  <button 
    onClick={() => navigate("/")} 
    className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors px-2 py-1"
  >
    <Home size={12} />
    <span className="text-[9px] tracking-widest uppercase font-bold">Home</span>
  </button>
  
  <span className="text-white/20 text-[9px]">/</span>
  
  <button 
    onClick={() => navigate("/projects")} 
    className="text-[9px] tracking-widest uppercase text-white/50 hover:text-white transition-colors px-2 py-1"
  >
    Registry
  </button>
  
  <span className="text-white/20 text-[9px]">/</span>
  
  <button 
    onClick={() => navigate(`/projects?type=${project.type}`)} 
    className="text-[9px] tracking-widest uppercase text-white/50 hover:text-white transition-colors px-2 py-1"
  >
    {project.type}
  </button>
  
  <span className="text-white/20 text-[9px]">/</span>
  
  <span className="text-[9px] tracking-widest uppercase bg-[#BF092F] text-white px-3 py-1 rounded-full font-bold">
    {project.name.length > 20 ? `${project.name.substring(0, 20)}...` : project.name}
  </span>
</nav>
            <h1 className={`font-semibold text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-[-0.02em] max-w-4xl transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
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
          <aside className="lg:col-span-4 space-y-8">
            <div className="rounded-2xl bg-[#44444E] shadow-2xl border-t-4 border-[#BF092F] sticky top-28 overflow-hidden">
              <div className="p-8 border-b border-white/10">
                <div className="flex items-center gap-3 mb-8">
                  <Layers size={16} className="text-[#BF092F]" />
                  <h2 className="text-[12px] text-white tracking-[0.4em] uppercase font-bold">Technical Specs</h2>
                </div>
                <div className="space-y-4">
                  {specs.map((spec, i) => (
                    <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-[#BF092F]/50 transition-colors">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[#BF092F]">{spec.icon}</span>
                        <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">{spec.label}</span>
                      </div>
                      <p className="text-white font-bold tracking-wide">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 bg-black/20">
                <button onClick={() => navigate(`/projects?type=${project.type}`)} className="cursor-pointer w-full py-4 bg-[#BF092F] text-white text-[11px] font-bold uppercase tracking-[0.3em] rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:text-[#44444E] transition-all shadow-lg">
                  <ArrowLeft size={14} /> Back to {project.type}
                </button>
              </div>
            </div>
          </aside>

          <section className="lg:col-span-8 space-y-8">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-8 w-1 bg-[#BF092F]" />
                <h2 className="text-sm text-[#44444E] uppercase font-bold">Project Brief</h2>
              </div>
              <div className="space-y-6">
                {project.description.map((desc, idx) =>
                  Array.isArray(desc) ? (
                    <div key={idx} className="grid grid-cols-1 gap-4 mt-8 bg-gray-50 p-8 rounded-2xl border-l-4 border-[#BF092F]">
                      {desc.map((item, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <ArrowRight size={18} className="text-[#BF092F] mt-1 shrink-0" />
                          <p className="text-[#44444E] font-medium leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p key={idx} className="text-lg leading-relaxed text-gray-600 font-medium">{desc}</p>
                  )
                )}
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center justify-between mb-12 border-b border-gray-100 pb-8">
                <h2 className="border-l-4 border-[#BF092F] pl-4 text-[#44444E] uppercase text-sm font-bold">Field Documentation</h2>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold">Images: {project.imageUrls.length}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.imageUrls.map((url, i) => (
                  <div key={i} className="group relative h-72 rounded-2xl overflow-hidden border border-gray-100 cursor-pointer" onClick={() => openLightbox(i)}>
                    <img src={url} alt="Field view" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-[#44444E]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="text-white" size={32} />
                    </div>
                  </div>
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