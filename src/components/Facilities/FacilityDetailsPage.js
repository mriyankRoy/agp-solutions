import { useParams, useNavigate } from "react-router";
import { useState, useEffect, useCallback } from "react";
import { facilities } from "../../utils/facilities";
import {
  MapPin,
  ShieldCheck,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Home,
  Layers,
  ArrowLeft,
  ChartArea,
  Factory,
} from "lucide-react";

export default function FacilityDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const facility = facilities.find((f) => f.id === id);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [id]);

  const allImages = facility
    ? [
        ...facility.facilityImg.map((img) => ({
          img,
          title: "Facility View",
          desc: facility.title,
        })),
        ...(facility.capabilityImg || []),
      ]
    : [];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  const showNext = useCallback(
    (e) => {
      e?.stopPropagation();
      setCurrentIndex((prev) => (prev + 1) % allImages.length);
    },
    [allImages.length]
  );

  const showPrev = useCallback(
    (e) => {
      e?.stopPropagation();
      setCurrentIndex(
        (prev) => (prev - 1 + allImages.length) % allImages.length
      );
    },
    [allImages.length]
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

  if (!facility) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#F8F9FA]">
        <h1 className="text-4xl font-bold text-[#44444E]">
          404 // FACILITY_NOT_FOUND
        </h1>
        <button
          onClick={() => navigate("/facilities")}
          className="mt-6 px-8 py-3 bg-[#BF092F] text-white rounded-xl font-bold"
        >
          Return to Terminal
        </button>
      </div>
    );
  }

  const currentData = allImages[currentIndex];

  return (
    <div className="min-h-screen bg-white text-[#44444E] font-sans selection:bg-[#BF092F] selection:text-white">
      {/* 🔍 LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A1A1E]/95 backdrop-blur-xl p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-10 right-10 text-white/50 hover:text-[#BF092F] transition-all z-[110] group"
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
            {/* 1. IMAGE & NAVIGATION WRAPPER */}
            <div className="relative flex items-center justify-center group px-16 md:px-24">
              {/* Previous Button - Positioned to the left of the image */}
              <button
                onClick={showPrev}
                className="absolute left-0 text-white/20 hover:text-[#BF092F] transition-all p-2 z-[110] hover:scale-110"
              >
                <ChevronLeft size={60} strokeWidth={1} />
              </button>

              {/* IMAGE CONTAINER */}
              <div className="relative border border-white/10 shadow-2xl rounded-2xl overflow-hidden">
                <div className="absolute inset-0 z-10 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.2)_1px,_transparent_1px)] bg-[size:32px_32px]" />
                <img
                  src={currentData?.img}
                  className="max-h-[65vh] w-auto block select-none"
                  alt={currentData?.title}
                />
              </div>

              {/* Next Button - Positioned to the right of the image */}
              <button
                onClick={showNext}
                className="absolute right-0 text-white/20 hover:text-[#BF092F] transition-all p-2 z-[110] hover:scale-110"
              >
                <ChevronRight size={60} strokeWidth={1} />
              </button>
            </div>

            {/* 2. DETAILS PANEL (Below Image) */}
            <div className="w-full max-w-4xl bg-[#44444E] border border-white/10 p-6 rounded-2xl shadow-2xl">
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-4 w-1 bg-[#BF092F]" />
                    <h4 className="text-white font-black uppercase tracking-widest text-sm">
                      {currentData?.title || "Operational View"}
                    </h4>
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    {currentData?.desc ||
                      "Internal technical documentation for " + facility.title}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-white/40 text-[12px] font-black tracking-tighter">
                    {currentIndex + 1} / {allImages.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🏗️ MATCHED FLOATING HERO SECTION */}
      <div className="pt-22 px-2 md:px-2">
        <header className="shadow-xl relative h-[28vh] min-h-[300px] w-full flex items-center bg-[#44444E] overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

          {/* Watermark Icon */}
          <div className="absolute top-0 right-0 p-4 opacity-10 z-10">
            <Factory size={450} className="text-white" />
          </div>

          {/* Animated Red Beams */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#BF092F] to-transparent animate-pulse" />
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse delay-700" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-20">
            {/* 🧭 ENHANCED BREADCRUMB */}
            <nav className="flex items-center flex-wrap gap-3 mb-6">
              <button
                onClick={() => navigate("/")}
                className="group flex items-center gap-1 text-white/50 hover:text-white transition-colors"
              >
                <Home size={14} />
                <span className="text-[10px] md:text-xs tracking-widest uppercase">
                  Home
                </span>
              </button>

              <span className="text-white/20 text-xs font-mono">{">"}</span>

              <button
                onClick={() => navigate("/facilities")}
                className="text-[10px] md:text-xs tracking-widest uppercase text-white/50 hover:text-white transition-colors"
              >
                Facilities
              </button>

              <span className="text-white/20 text-xs font-mono">{">"}</span>

              {/* ACTIVE PAGE: RED PILL DESIGN */}
              <button className="text-[10px] md:text-xs tracking-widest uppercase bg-[#BF092F] text-white px-4 py-1.5 rounded-2xl shadow-lg shadow-[#BF092F]/20 font-bold">
                {facility.title}
              </button>
            </nav>

            <h1
              className={`font-semibold text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-[-0.02em] max-w-4xl transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {facility.title.split(" ")[0]}{" "}
              <span className="text-[#BF092F]">
                {facility.title.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl tracking-wide leading-relaxed mt-4 max-w-3xl font-medium">
              Technical infrastructure data for operational unit: {facility.title}.
            </p>
          </div>
        </header>
      </div>

      {/* 🏭 MAIN CONTENT AREA */}
      <main className="container mx-auto -translate-y-12 relative z-30 pb-20">
        <div className="pt-20 px-4 flex flex-col lg:grid lg:grid-cols-12 gap-8 items-stretch">
          {/* SIDEBAR: FACILITY STATS */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="rounded-2xl bg-[#44444E] shadow-2xl border-t-4 border-[#BF092F] sticky top-28 overflow-hidden">
              <div className="p-8 border-b border-white/10">
                <div className="flex items-center gap-3 mb-8">
                  <Layers size={16} className="text-[#BF092F]" />
                  <h2 className="text-[12px] text-white tracking-[0.4em] uppercase font-bold">
                    Facility Registry
                  </h2>
                </div>

                <div className="space-y-4">
                  <SidebarStat
                    label="Location"
                    value={facility.location}
                    icon={<MapPin size={16} />}
                  />
                  <SidebarStat
                    label="Total Area"
                    value={facility.totalArea}
                    icon={<ChartArea size={16} />}
                  />
                  <SidebarStat
                    label="Output Capacity"
                    value={facility.productionCapacity}
                    icon={<ShieldCheck size={16} />}
                  />
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <span className="text-[11px] text-white/40 tracking-[0.3em] uppercase block mb-3 font-bold">
                    Switch Unit
                  </span>
                  <select
                    value={facility.id}
                    onChange={(e) => navigate(`/facilities/${e.target.value}`)}
                    className="rounded-xl w-full bg-black/20 border border-white/10 p-3 text-white outline-none focus:border-[#BF092F] transition-colors cursor-pointer text-sm"
                  >
                    {facilities.map((f) => (
                      <option key={f.id} value={f.id} className="bg-[#44444E]">
                        {f.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="p-8 bg-black/20">
                <button
                  onClick={() => navigate("/facilities")}
                  className="cursor-pointer w-full py-4 bg-[#BF092F] text-white text-[11px] font-bold uppercase tracking-[0.3em] rounded-xl shadow-lg hover:bg-white hover:text-[#44444E] transition-all flex items-center justify-center gap-2"
                >
                  <ArrowLeft size={14} /> Back to Facilities
                </button>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT: OVERVIEW & GALLERY */}
          <section className="lg:col-span-8 space-y-8">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-8 w-1 bg-[#BF092F]" />
                <h2 className="text-sm text-[#44444E] uppercase font-bold">
                  Operational Overview
                </h2>
              </div>

              <p className="text-lg leading-relaxed text-gray-600 font-medium">
                {facility.desc}
              </p>
            </div>

            {/* INFRASTRUCTURE GALLERY */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center justify-between mb-12 border-b border-gray-100 pb-8">
                <h2 className="tracking-widest border-l-4 border-[#BF092F] pl-4 text-[#44444E] uppercase text-sm font-bold">
                  Infrastructure Gallery
                </h2>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold">
                  COUNT: {facility.facilityImg.length}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {facility.facilityImg.map((src, index) => (
                  <div
                    key={index}
                    className="group relative h-48 rounded-2xl overflow-hidden border border-gray-100 cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={src}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                      alt="Technical View"
                    />
                    <div className="absolute inset-0 bg-[#44444E]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="text-white" size={24} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CAPABILITIES SECTION */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-8 w-1 bg-[#BF092F]" />
                <h3 className="text-sm text-[#44444E] uppercase font-bold">
                  Systems & Machinery
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {facility.capabilityImg?.map((cap, index) => {
                  const actualIndex = facility.facilityImg.length + index;
                  return (
                    <div
                      key={index}
                      onClick={() => openLightbox(actualIndex)}
                      className="group cursor-pointer"
                    >
                      <div className="rounded-2xl h-56 overflow-hidden relative border border-gray-100 shadow-md">
                        <img
                          src={cap.img}
                          className="w-full h-full object-cover"
                          alt={cap.title}
                        />
                        <div className="absolute bottom-0 left-0 bg-[#BF092F] text-white p-3 rounded-tr-2xl">
                          <ShieldCheck size={18} />
                        </div>
                      </div>
                      <div className="py-6">
                        <h4 className="text-xl font-bold text-[#44444E] mb-2 group-hover:text-[#BF092F] transition-colors uppercase tracking-tight">
                          {cap.title}
                        </h4>
                        <p className="text-gray-500 leading-relaxed text-sm font-medium">
                          {cap.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Visual Watermark */}
      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </div>
  );
}

function SidebarStat({ label, value, icon }) {
  return (
    <div className="bg-white/5 p-4 rounded-xl border border-white/5 group hover:border-[#BF092F]/50 transition-colors">
      <div className="flex items-center gap-3 mb-1">
        <span className="text-[#BF092F]">{icon}</span>
        <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
          {label}
        </span>
      </div>
      <p className="text-white font-bold tracking-wide">{value}</p>
    </div>
  );
}
