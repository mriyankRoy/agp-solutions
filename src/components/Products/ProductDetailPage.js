import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { products } from "../../utils/products";
import {
  X,
  Download,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  FileText,
  Home,
  Activity,
  Cpu,
  Target,
  Layers,
  PackageSearch,
} from "lucide-react";

const TAB_DETAILS = "details";
const TAB_DOWNLOADS = "downloads";

const ProductDetailPage = () => {
  const { categorySlug, productName } = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(TAB_DETAILS);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [productName]);

  useEffect(() => {
    setActiveIndex(0);
  }, [productName]);

  const handleCloseModal = () => setIsModalOpen(false);
  const handleOpenModal = () => setIsModalOpen(true);

  const category = products.find((c) => c.slug === categorySlug);
  const product = category?.items.find(
    (item) => item.name === decodeURIComponent(productName)
  );

  if (!category || !product) {
    return (
      <div className="min-h-screen bg-[#44444E] flex items-center justify-center font-mono text-white p-20">
        ERROR_404 // REGISTRY_ENTRY_NOT_FOUND
      </div>
    );
  }

  const productImages = product.images || [];
  const totalImages = productImages.length;

  const goToNext = () => setActiveIndex((prev) => (prev + 1) % totalImages);
  const goToPrev = () =>
    setActiveIndex((prev) => (prev - 1 + totalImages) % totalImages);

  const handleDownloadSpecs = () => {
    if (product.downloads && product.downloads.length > 0) {
      window.open(product.downloads[0].url, "_blank");
    }
  };

  const formatDetailKey = (key) =>
    key
      .replace(/([A-Z])/g, " $1")
      .replace(/_/g, " ")
      .trim();

  return (
    <div className="min-h-screen bg-white text-[#44444E] font-sans selection:bg-[#BF092F] selection:text-white">
      {/* 🏗️ MATCHED FLOATING HERO SECTION */}
      <div className="pt-22 px-2 md:px-2">
        <header className="shadow-xl relative h-[28vh] min-h-[300px] w-full flex items-center bg-[#44444E] overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#BF092F] to-transparent animate-pulse" />
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse delay-700" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-20">
            {/* 🧭 ENHANCED HIERARCHICAL BREADCRUMB */}
            <nav className="flex items-center flex-wrap gap-3 mb-6">
              <button
                onClick={() => navigate("/")}
                className="group flex items-center gap-1 text-white/50 hover:text-white transition-colors"
              >
                <Home size={14} />
                <span className="cursor-pointer text-[10px] md:text-xs tracking-widest uppercase">
                  Home
                </span>
              </button>

              <span className="text-white/20 text-xs font-mono">{">"}</span>

              <button
                onClick={() => navigate("/products")}
                className="cursor-pointer text-[10px] md:text-xs tracking-widest uppercase text-white/50 hover:text-white transition-colors"
              >
                Product Categories
              </button>

              <span className="text-white/20 text-xs font-mono">{">"}</span>

              <button
                onClick={() => navigate(`/products?category=${categorySlug}`)}
                className="cursor-pointer text-[10px] md:text-xs tracking-widest uppercase text-white/50 hover:text-white transition-colors"
              >
                {category.category}
              </button>

              <span className="text-white/20 text-xs font-mono">{">"}</span>

              {/* ACTIVE PAGE: RED PILL DESIGN */}
              <button className="text-[10px] md:text-xs tracking-widest uppercase bg-[#BF092F] text-white px-4 py-1.5 rounded-2xl shadow-lg shadow-[#BF092F]/20 font-bold">
                {product.name}
              </button>
            </nav>

            <h1
              className={`font-semibold text-2xl md:text-4xl lg:text-5xl text-white leading-[1.1] tracking-[-0.02em] max-w-4xl transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {product.name.split(" ")[0]}{" "}
              <span className="text-[#BF092F]">
                {product.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <div
              className={`flex flex-wrap gap-8 mt-8 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {[
                { label: "Make", val: product.Make, icon: <Cpu size={14} /> },
                {
                  label: "Mfr_PN",
                  val: product.manufacturerPartNumber,
                  icon: <Target size={14} />,
                },
                {
                  label: "AGP_ID",
                  val: product.AGPPartNumber,
                  icon: <Activity size={14} />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col border-l-2 border-[#BF092F] pl-4"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#BF092F]">{item.icon}</span>
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">
                      {item.label}
                    </p>
                  </div>
                  <p className="text-sm md:text-lg font-mono font-bold text-white tracking-tight">
                    {item.val || "N/A"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </header>
      </div>

      {/* 🏭 MAIN CONTENT AREA */}
      <main className="container mx-auto py-7 relative z-30 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* GALLERY MODULE */}
          <div className="lg:col-span-8 bg-white border border-gray-100 shadow-xl rounded-2xl p-3 flex flex-col md:flex-row gap-3 h-[500px] md:h-[600px] overflow-hidden">
            <div className="w-full md:w-24 flex md:flex-col gap-2 overflow-auto p-2 bg-gray-50 rounded-xl">
              {productImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`cursor-pointer flex-shrink-0 w-16 h-16 md:w-full md:h-20 border-2 transition-all rounded-lg overflow-hidden ${
                    i === activeIndex
                      ? "border-[#BF092F]"
                      : "border-transparent grayscale hover:grayscale-0"
                  }`}
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    alt="thumb"
                  />
                </button>
              ))}
            </div>
            <div
              className="flex-grow relative bg-white overflow-hidden group flex items-center justify-center cursor-zoom-in rounded-xl"
              onClick={handleOpenModal}
            >
              <img
                src={productImages[activeIndex]}
                className="rounded-2xl max-h-full max-w-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                alt="main"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
                className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/90 text-[#44444E] hover:bg-[#BF092F] hover:text-white shadow-lg rounded-full transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/90 text-[#44444E] hover:bg-[#BF092F] hover:text-white shadow-lg rounded-full transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-[#44444E] p-8 text-white rounded-2xl border-t-4 border-[#BF092F] shadow-2xl">
              <h3 className="text-[12px] font-bold uppercase tracking-[0.4em] mb-6 text-white/40">
                Summary
              </h3>
              <p className="font-medium tracking-widest leading-loose mb-10 text-white/80">
                {product.shortDescription}
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => navigate("/contact")}
                  className="cursor-pointer w-full py-4 bg-white text-[#44444E] hover:bg-[#BF092F] hover:text-white uppercase tracking-[0.3em] transition-all rounded-xl shadow-lg flex items-center justify-center gap-4"
                >
                  Request Quote <Target size={14} />
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-xl">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#44444E] mb-6 flex items-center gap-2">
                <Layers size={14} className="text-[#BF092F]" /> Operational Uses
              </h4>
              <div className="space-y-4">
                {product.uses?.map((use, i) => (
                  <div
                    key={i}
                    className="flex gap-3 text-[12px] font-bold text-gray-500 tracking-wider"
                  >
                    <span className="text-[#BF092F]">/</span> {use}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ANALYSIS SECTION */}
        <div className="mt-12 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="border-l-4 border-[#BF092F] pl-4 text-[#44444E] uppercase text-sm font-bold">
                Analysis & Description
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-[16px] text-gray-500 font-medium leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            </div>
          </div>
        </div>

        {/* 🚀 NEW: PRODUCT RANGE SECTION */}
        {product.productRange && product.productRange.length > 0 && (
          <div className="mt-12 bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#44444E] mb-10 flex items-center gap-2">
              <PackageSearch size={14} className="text-[#BF092F]" /> Available
              Configurations & Range
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.productRange.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-sm border-l-2 border-gray-200 hover:border-[#BF092F] transition-all group"
                >
                  <p className="text-[10px] font-black text-[#BF092F] uppercase tracking-widest mb-2 opacity-70 group-hover:opacity-100">
                    {item.category}
                  </p>
                  <p className="text-sm font-bold text-[#44444E] leading-relaxed">
                    {item.options}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 🏆 NEW: SUCCESS STORIES SECTION */}
        {product.successStories && product.successStories.length > 0 && (
          <div className="mt-12 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Target size={120} />
            </div>

            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#44444E] mb-10 flex items-center gap-2">
              <Activity size={14} className="text-[#BF092F]" /> Proven Track
              Record & Case Studies
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100 rounded-xl overflow-hidden">
              {product.successStories.map((story, i) => (
                <div
                  key={i}
                  className="bg-white p-8 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-px bg-[#BF092F]" />
                    <span className="text-[10px] font-black text-[#BF092F] uppercase tracking-widest">
                      {story.client}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-[#44444E] leading-relaxed">
                    {story.project}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DATA TABS */}
        <div className="mt-12 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-xl">
          <div className="flex bg-gray-50 border-b border-gray-100">
            <button
              onClick={() => setActiveTab(TAB_DETAILS)}
              className={`cursor-pointer px-8 py-6 text-[11px] font-bold uppercase tracking-[0.3em] transition-all ${
                activeTab === TAB_DETAILS
                  ? "bg-white text-[#BF092F] border-t-4 border-[#BF092F]"
                  : "text-gray-400 hover:text-[#44444E]"
              }`}
            >
              <ClipboardList size={14} className="inline mr-2" /> Technical
              Registry
            </button>
            <button
              onClick={() => setActiveTab(TAB_DOWNLOADS)}
              className={`cursor-pointer px-8 py-6 text-[11px] font-bold uppercase tracking-[0.3em] transition-all ${
                activeTab === TAB_DOWNLOADS
                  ? "bg-white text-[#BF092F] border-t-4 border-[#BF092F]"
                  : "text-gray-400 hover:text-[#44444E]"
              }`}
            >
              <FileText size={14} className="inline mr-2" /> Documentation
            </button>
          </div>

          <div className="p-8 md:p-12">
            {activeTab === TAB_DETAILS ? (
              <div className="flex flex-col gap-8">
                {/* 📋 EXISTING TECHNICAL REGISTRY GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
                  {Object.entries(product.details || {}).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex flex-col p-6 bg-white hover:bg-gray-50 transition-colors"
                    >
                      <dt className="text-[10px] font-bold text-[#BF092F] uppercase tracking-[0.2em] mb-2">
                        {formatDetailKey(key)}
                      </dt>
                      <dd className="text-sm font-bold text-[#44444E] tracking-tight">
                        {typeof value === "object" && value !== null ? (
                          <div className="mt-2 space-y-1 border-l border-gray-100 pl-3">
                            {Object.entries(value).map(([subKey, subVal]) => (
                              <div
                                key={subKey}
                                className="flex items-center gap-2"
                              >
                                <span className="text-[9px] text-[#BF092F]/50">
                                  ●
                                </span>
                                <span className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">
                                  {subKey}:
                                </span>
                                <span className="text-sm text-[#44444E]">
                                  {subVal}
                                </span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          value
                        )}
                      </dd>
                    </div>
                  ))}
                </div>

                {/* 📏 SIZING DATA TABLE INTEGRATION */}
                {product.sizingData && product.sizingData.length > 0 && (
                  <div className="mt-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#44444E] mb-6 flex items-center gap-2">
                      <PackageSearch size={14} className="text-[#BF092F]" />{" "}
                      Dimensional & Torque Registry
                    </h4>
                    <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
                      <table className="w-full text-left border-collapse bg-white">
                        <thead>
                          <tr className="bg-gray-50 border-b border-gray-100">
                            {Object.keys(product.sizingData[0]).map((key) => (
                              <th
                                key={key}
                                className="py-4 px-4 text-[9px] font-bold text-[#BF092F] uppercase tracking-widest"
                              >
                                {key.replace(/_/g, " ")}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {product.sizingData.map((row, i) => (
                            <tr
                              key={i}
                              className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors"
                            >
                              {Object.values(row).map((val, j) => (
                                <td
                                  key={j}
                                  className="py-3 px-4 text-sm font-bold text-[#44444E]"
                                >
                                  {val}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-3">
                {product.downloads?.map((d, i) => (
                  <a
                    key={i}
                    href={d.url}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer flex items-center justify-between p-6 bg-[#44444E] rounded-xl text-white hover:bg-[#BF092F] transition-all group"
                  >
                    <span className="text-sm font-bold">{d.name}</span>
                    <Download
                      size={18}
                      className="text-[#BF092F] group-hover:text-white transition-colors"
                    />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Global Texture Overlay */}
      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div
            className="absolute inset-0 bg-[#1A1A1E]/95 backdrop-blur-xl"
            onClick={handleCloseModal}
          />

          <button
            onClick={handleCloseModal}
            className="cursor-pointer absolute top-10 right-10 text-white/50 hover:text-[#BF092F] transition-all z-[110] group"
          >
            <X
              size={40}
              className="group-hover:rotate-90 transition-transform"
            />
          </button>

          <div className="relative flex flex-col md:flex-row gap-6 items-center max-w-7xl w-full max-h-[90vh] z-[105]">
            {/* Thumbnails inside Modal (Hidden on mobile for space) */}
            <div className="hidden md:flex flex-col gap-2 overflow-y-auto max-h-[500px] p-2">
              {productImages.map((img, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(i);
                  }}
                  className={`cursor-pointer w-16 h-16 border-2 transition-all rounded-lg overflow-hidden shrink-0 ${
                    i === activeIndex
                      ? "border-[#BF092F]"
                      : "border-white/20 hover:border-white/50"
                  }`}
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    alt="thumb"
                  />
                </button>
              ))}
            </div>

            {/* Main Modal Image & Nav */}
            <div className="relative flex-grow flex items-center justify-center bg-white rounded-2xl p-4 md:p-8 shadow-2xl h-full overflow-hidden">
              <img
                src={productImages[activeIndex]}
                className="max-w-full max-h-[70vh] object-contain"
                alt="enlarged"
              />

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
                className="cursor-pointer absolute left-4 p-4 bg-[#44444E]/10 hover:bg-[#BF092F] text-[#44444E] hover:text-white rounded-full transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="cursor-pointer absolute right-4 p-4 bg-[#44444E]/10 hover:bg-[#BF092F] text-[#44444E] hover:text-white rounded-full transition-all"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#44444E] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                {activeIndex + 1} / {totalImages}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
