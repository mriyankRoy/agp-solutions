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
  Layers
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
  const goToPrev = () => setActiveIndex((prev) => (prev - 1 + totalImages) % totalImages);

  const handleDownloadSpecs = () => {
    if (product.downloads && product.downloads.length > 0) {
      window.open(product.downloads[0].url, '_blank');
    }
  };
  
  const formatDetailKey = (key) => key.replace(/([A-Z])/g, " $1").replace(/_/g, " ").trim();

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-20">
      
      {/* 🏗️ CINEMATIC HERO SECTION */}
      <header className="relative h-[35vh] min-h-[500px] w-full flex items-end bg-[#44444E] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-0 bg-fixed" />
        
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#CF0F0F] to-transparent animate-pulse" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse delay-700" />
        </div>

        <div className="container mx-auto px-6 mb-16 relative z-20">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-4 mb-8">
            <button onClick={() => navigate("/")} className="text-white/40 hover:text-white transition-colors">
              <Home size={14} />
            </button>
            <span className="text-white/20 text-xs font-mono">//</span>
            <button onClick={() => navigate("/products")} className="text-[11px] font-black text-white/60 hover:text-white uppercase tracking-[0.3em]">
              Inventory_Registry
            </button>
            <span className="text-white/20 text-xs font-mono">//</span>
            <button onClick={() => navigate(`/products?category=${categorySlug}`)} className="text-[11px] font-black text-white/60 hover:text-white uppercase tracking-[0.3em]">
              {category.category}
            </button>
            <span className="text-white/20 text-xs font-mono">//</span>
            <span className="px-3 py-1 bg-[#CF0F0F] text-[11px] font-black text-white uppercase tracking-[0.2em]">
              {product.name}
            </span>
          </nav>

          <h1 className={`text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-tight transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
             {product.name.split(' ')[0]} <span className="text-[#CF0F0F] italic">{product.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          {/* 🛠️ UPDATED DATA SECTION: Product Make, Mfr_PN, AGP_ID */}
          <div className={`flex flex-wrap gap-10 mt-10 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {[
              { label: "Make", val: product.Make, icon: <Cpu size={14} /> },
              { label: "Mfr_PN", val: product.manufacturerPartNumber, icon: <Target size={14} /> },
              { label: "AGP_ID", val: product.AGPPartNumber, icon: <Activity size={14} /> }
            ].map((item, i) => (
              <div key={i} className="flex flex-col border-l-2 border-[#CF0F0F] pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#CF0F0F]">{item.icon}</span>
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">{item.label}</p>
                </div>
                <p className="text-lg font-mono font-bold text-white tracking-tight">{item.val || "N/A"}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* 🏭 MAIN CONTENT AREA */}
      <div className="pt-7 container mx-auto px-6 lg:px-12 -mt-10 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* GALLERY MODULE */}
          <div className="lg:col-span-8 bg-white border border-gray-200 shadow-2xl p-2 flex flex-col md:flex-row gap-2 h-[600px]">
            <div className="w-full md:w-24 flex md:flex-col gap-2 overflow-auto p-2 bg-[#F8F9FA]">
              {productImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-full md:h-20 border-2 transition-all ${i === activeIndex ? 'border-[#CF0F0F] grayscale-0' : 'border-transparent grayscale hover:grayscale-0'}`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="thumb" />
                </button>
              ))}
            </div>
            <div className="flex-grow relative bg-[#FDFDFD] overflow-hidden group flex items-center justify-center cursor-zoom-in" onClick={handleOpenModal}>
              <img src={productImages[activeIndex]} className="max-h-full max-w-full object-contain p-10 transition-transform duration-700 group-hover:scale-105" alt="main" />
              <button onClick={(e) => { e.stopPropagation(); goToPrev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/80 hover:bg-[#CF0F0F] hover:text-white shadow-xl"><ChevronLeft size={20}/></button>
              <button onClick={(e) => { e.stopPropagation(); goToNext(); }} className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/80 hover:bg-[#CF0F0F] hover:text-white shadow-xl"><ChevronRight size={20}/></button>
            </div>
          </div>

          {/* SIDEBAR: SUMMARY & USES */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-[#44444E] p-8 text-white border-b-8 border-[#CF0F0F] shadow-xl">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] mb-6 text-white/40 italic">Product_Overview</h3>
              <p className="text-[13px] font-bold uppercase tracking-widest leading-loose mb-10 text-white/80">
                {product.shortDescription}
              </p>
              <div className="space-y-3">
                <button className="w-full py-5 bg-[#CF0F0F] hover:bg-white hover:text-[#44444E] text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4">
                  Request_Quotation <Target size={14} />
                </button>
                {product.downloads?.length > 0 && (
                  <button onClick={handleDownloadSpecs} className="w-full py-5 border border-white/20 hover:bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4">
                    Download_Technical_Sheet <Download size={14} />
                  </button>
                )}
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 shadow-sm">
               <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#44444E] mb-6 flex items-center gap-2">
                 <Layers size={14} className="text-[#CF0F0F]" /> Operational_Uses
               </h4>
               <div className="space-y-3">
                  {product.uses?.map((use, i) => (
                    <div key={i} className="flex gap-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                      <span className="text-[#CF0F0F] font-black">/</span> {use}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>

        {/* DATA TABS */}
        <div className="mt-12 bg-white border border-gray-200 overflow-hidden shadow-sm">
          <div className="flex bg-gray-50 border-b border-gray-200">
            <button
              onClick={() => setActiveTab(TAB_DETAILS)}
              className={`px-10 py-6 text-[12px] font-black uppercase tracking-[0.3em] transition-all ${activeTab === TAB_DETAILS ? 'bg-white text-[#CF0F0F] border-t-2 border-[#CF0F0F]' : 'text-gray-400'}`}
            >
              <ClipboardList size={14} className="inline mr-2" /> Technical_Specifications
            </button>
            <button
              onClick={() => setActiveTab(TAB_DOWNLOADS)}
              className={`px-10 py-6 text-[12px] font-black uppercase tracking-[0.3em] transition-all ${activeTab === TAB_DOWNLOADS ? 'bg-white text-[#CF0F0F] border-t-2 border-[#CF0F0F]' : 'text-gray-400'}`}
            >
              <FileText size={14} className="inline mr-2" /> Registry_Documents
            </button>
          </div>
          
          <div className="p-12">
            {activeTab === TAB_DETAILS ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-gray-200">
                {Object.entries(product.details || {}).map(([key, value]) => (
                  <div key={key} className="flex flex-col border-r border-b border-gray-200 p-6 bg-white hover:bg-gray-50 transition-colors">
                    <dt className="text-[10px] font-black text-[#CF0F0F] uppercase tracking-[0.2em] mb-1">{formatDetailKey(key)}</dt>
                    <dd className="text-sm font-bold text-[#44444E] uppercase tracking-tight">{value}</dd>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {product.downloads?.map((d, i) => (
                  <a key={i} href={d.url} target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 bg-[#44444E] border-l-4 border-[#CF0F0F] text-white hover:bg-black transition-all">
                    <span className="text-xs font-black uppercase tracking-[0.3em]">{d.name}</span>
                    <Download size={18} className="text-[#CF0F0F]" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ANALYSIS SECTION */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-gray-100 pt-16">
           <div className="lg:col-span-4">
             <h2 className="text-3xl font-black text-[#44444E] uppercase tracking-tighter">Product_Details</h2>
             <div className="w-16 h-1 bg-[#CF0F0F] mt-3" />
           </div>
           <div className="lg:col-span-8">
             <p className="text-[17px] text-gray-600 font-medium leading-[1.8] whitespace-pre-line">
               {product.description}
             </p>
           </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#44444E]/95 backdrop-blur-xl" onClick={handleCloseModal}>
          <button className="absolute top-10 right-10 text-white"><X size={40} /></button>
          <img src={productImages[activeIndex]} className="max-w-5xl max-h-[85vh] object-contain shadow-2xl" alt="enlarged" />
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;