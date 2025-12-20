import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { MapPin, Tag, X, FileText, Calendar, Layers, ChevronLeft, ArrowRight } from "lucide-react"; 
import { projects } from "../../utils/projects";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => String(p.id) === id);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <div className="min-h-screen flex items-center justify-center text-[#CF0F0F]">Project not found.</div>;

  const openLightbox = (src) => {
    setCurrentImg(src);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  const specs = [
    { label: "Client", value: project.client || "Confidential", icon: <FileText size={18}/> },
    { label: "Category", value: project.type, icon: <Tag size={18}/> },
    { label: "Location", value: project.location, icon: <MapPin size={18}/> },
    { label: "Year", value: project.year || "2024", icon: <Calendar size={18}/> },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#44444E] font-sans selection:bg-[#CF0F0F] selection:text-white">
      
      {/* 🔍 LIGHTBOX */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 transition-all" onClick={closeLightbox}>
          <button className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform duration-300">
            <X size={40} />
          </button>
          <img src={currentImg} alt="Project" className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
        </div>
      )}

      {/* 🏗️ HERO SECTION - TIGHTENED HEIGHT */}
      {/* Changed h-[70vh] to h-[55vh] */}
      <header className="relative h-[30vh] min-h-[400px] w-full flex items-end bg-[#44444E] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
        {/* Added a slight parallax effect to the background texture */}
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-0 bg-fixed" />
        
        <div className="container mx-auto px-6 mb-24 relative z-20">
          <button 
            onClick={() => navigate("/projects")}
            className="group flex items-center gap-2 text-white/70 hover:text-[#CF0F0F] mb-6 transition-colors"
          >
            <ChevronLeft size={20} className="pb-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">Back to Portfolio</span>
          </button>
          
          {/* Tightened leading and text size slightly for better fit */}
          <h1 className={`text-4xl md:text-7xl font-black text-white leading-tight transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {project.name.split(' ').map((word, i) => (
              <span key={i} className={i % 2 === 0 ? "text-white" : "text-[#CF0F0F]"}>{word} </span>
            ))}
          </h1>
        </div>
      </header>

      {/* 📄 MAIN CONTENT AREA - INCREASED OVERLAP */}
      {/* Changed -translate-y-10 to -translate-y-24 to pull content up significantly */}
      <main className="container pt-20 mx-auto px-4 md:px-6 -translate-y-24 relative z-30">
        {/* Reduced gap from gap-12 to gap-8 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: THE NARRATIVE */}
          {/* Reduced padding from p-12 to p-8 md:p-10 */}
          <div className="lg:col-span-8 bg-white p-8 md:p-10 shadow-2xl rounded-sm border-t-4 border-[#CF0F0F]">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-[#CF0F0F] mb-6 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-[#CF0F0F]" /> Project Scope
            </h2>
            <div className="space-y-6">
              {project.description.map((desc, idx) => (
                Array.isArray(desc) ? (
                  // Tightened list spacing
                  <ul key={idx} className="grid grid-cols-1 gap-3 mt-6 bg-gray-50 p-6 rounded-sm">
                    {desc.map((item, i) => (
                      <li key={i} className="flex gap-3 text-base md:text-lg leading-snug items-start">
                        <ArrowRight size={18} className="text-[#CF0F0F] mt-1 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  // Slightly smaller font for denser reading
                  <p key={idx} className="text-lg md:text-xl leading-relaxed font-light text-[#44444E]">
                    {desc}
                  </p>
                )
              ))}
            </div>
          </div>

          {/* RIGHT: THE BLUEPRINT (TECHNICALS) */}
          <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-8 self-start">
            <div className="bg-[#44444E] text-white p-6 md:p-8 shadow-xl rounded-sm">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                <Layers className="text-[#CF0F0F]" size={20} /> Specification Data
              </h3>
              {/* Tightened spacing in specs */}
              <div className="space-y-5">
                {specs.map((spec, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-white/10 pb-3 group">
                    <div className="flex items-center gap-3">
                      <span className="p-1.5 bg-white/5 rounded text-[#CF0F0F] group-hover:bg-[#CF0F0F] group-hover:text-white transition-all">
                        {spec.icon}
                      </span>
                      <span className="text-white/50 font-medium uppercase text-xs tracking-widest">{spec.label}</span>
                    </div>
                    <span className="text-base font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA Box - Compacted */}
            <div className="bg-[#CF0F0F] p-6 text-white shadow-xl flex items-center justify-between group cursor-pointer overflow-hidden relative rounded-sm">
               <div className="relative z-10">
                 <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Next Steps</p>
                 <h4 className="text-xl font-black">View Similar Solutions</h4>
               </div>
               <ArrowRight size={32} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
               <div className="absolute top-0 right-0 w-24 h-full bg-white/10 skew-x-12 translate-x-10 group-hover:translate-x-0 transition-transform duration-700" />
            </div>
          </div>
        </div>

        {/* 🖼️ THE GALLERY (MOSAIC) - TIGHTENED MARGINS */}
        {/* Reduced mt-24 to mt-12 */}
        <section className="mt-12 pb-16">
          <div className="flex items-end justify-between mb-8 border-b border-gray-200 pb-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase text-[#44444E]">Visual Documentation</h2>
              <p className="text-sm text-gray-400 mt-1 font-medium tracking-wider uppercase">Project Milestones</p>
            </div>
            <div className="text-5xl font-black text-gray-200 select-none">02</div>
          </div>
          
          {/* Tighter gap between images (gap-4 instead of gap-6) */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {project.imageUrls.map((url, i) => (
              <div 
                key={i} 
                className="relative overflow-hidden cursor-zoom-in group rounded-sm shadow-md hover:shadow-xl transition-all duration-500 break-inside-avoid"
                onClick={() => openLightbox(url)}
              >
                <img 
                  src={url} 
                  alt="Project Detail" 
                  className="w-full h-auto object-cover grayscale-[0.3] group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700" 
                />
                {/* Cleaner hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-white font-bold text-sm tracking-widest uppercase flex items-center gap-2">
                    <ArrowRight size={16} className="text-[#CF0F0F]" /> Expand View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}