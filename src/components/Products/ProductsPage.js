import React, { useState, useEffect } from "react";
import { products } from "../../utils/products";
import ProductCard from "./ProductCard";
import { useLocation, useNavigate } from "react-router";
import { Filter, Home, ArrowRight, Activity, Cpu, Layers, ChevronRight } from "lucide-react";

const ProductPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categorySlug = queryParams.get("category");
  const isGeneralOverview = !categorySlug;

  const matchedCategory = categorySlug
    ? products.find((p) => p.slug === categorySlug)
    : null;

  const currentCategory = !isGeneralOverview
    ? matchedCategory || products[0]
    : null;

  const [selectedCategory, setSelectedCategory] = useState(
    currentCategory ? currentCategory.category : ""
  );

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsVisible(true), 50);
    if (currentCategory) {
      setSelectedCategory(currentCategory.category);
    } else {
      setSelectedCategory("");
    }
    return () => clearTimeout(timer);
  }, [categorySlug]);

  /**
   * INDUSTRIAL OVERVIEW: Category Cards
   * Sharp edges, technical metadata, and clear GAPS.
   */
  const AllCategoriesOverview = () => (
    <div className="container mx-auto px-6 py-16 relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-8 w-1 bg-[#CF0F0F]" />
        <h2 className="text-3xl font-black text-[#44444E] uppercase tracking-tighter">
          Product_Categories
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((category, idx) => (
          <div
            key={idx}
            onClick={() => navigate(`/products?category=${category.slug}`)}
            className="group relative flex flex-col bg-white border border-gray-200 cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
          >
            {/* Top Indicator */}
            <div className="absolute top-0 right-0 p-4 z-20">
              <span className="text-[8px] font-mono font-bold text-gray-300 group-hover:text-[#CF0F0F] transition-colors tracking-widest uppercase">
                Ref_ID: {200 + idx}
              </span>
            </div>

            {/* Image Section */}
            <div className="h-56 relative overflow-hidden bg-[#F8F9FA]">
              {category.image && (
                <img
                  src={category.image.url}
                  alt={category.category}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-90"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#44444E]/10 to-transparent" />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col justify-between flex-grow border-t border-gray-100">
              <div>
                <h3 className="text-xl font-black text-[#44444E] uppercase tracking-tight group-hover:text-[#CF0F0F] transition-colors mb-2">
                  {category.category}
                </h3>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider line-clamp-2 leading-relaxed">
                  {category.description || `${category.items.length} Units Sync_Available.`}
                </p>
              </div>

              <div className="mt-6 flex justify-between items-center pt-4 border-t border-gray-50">
                <div className="flex items-center gap-2">
                   <Layers size={14} className="text-[#CF0F0F]" />
                   <span className="text-[9px] font-black text-[#44444E] uppercase tracking-widest">{category.items.length} Models</span>
                </div>
                <ArrowRight size={18} className="text-gray-300 group-hover:text-[#CF0F0F] group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* ─── INDUSTRIAL BLUEPRINT HERO ─── */}
      <div className="relative pt-44 pb-24 overflow-hidden bg-[#44444E]">
        {/* Pattern Overlays */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.05]" />
        
        {/* Structural Diagonal Strips */}
        <div className="absolute top-0 right-[15%] w-[12px] h-full bg-[#CF0F0F] skew-x-[-15deg] opacity-60" />
        <div className="absolute top-0 right-[13%] w-[12px] h-full bg-white skew-x-[-15deg] opacity-10" />

        <div className="relative container mx-auto px-6 lg:px-12">
          {/* Technical Breadcrumb */}
          <nav className="flex items-center gap-4 mb-10">
            <button onClick={() => navigate("/")} className="text-white/40 hover:text-white transition-colors">
              <Home size={14} />
            </button>
            <span className="text-white/20 text-xs tracking-widest">//</span>
            <button 
              onClick={() => navigate("/products")}
              className={`text-[10px] font-black uppercase tracking-[0.3em] ${isGeneralOverview ? "text-[#CF0F0F]" : "text-white/60 hover:text-white"}`}
            >
              Registry
            </button>
            {!isGeneralOverview && (
              <>
                <span className="text-white/20 text-xs tracking-widest">//</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#CF0F0F]">
                  {currentCategory.category}
                </span>
              </>
            )}
          </nav>

          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-4">
              <Activity size={18} className="text-[#CF0F0F] animate-pulse" />
              <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-[0.5em]">
                System_Status: Operational
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              {isGeneralOverview ? "Component_Inventory" : currentCategory.category}
            </h1>
            <p className="max-w-2xl text-white/60 font-bold uppercase tracking-[0.15em] text-[11px] md:text-xs leading-loose border-l-2 border-[#CF0F0F] pl-6">
              {isGeneralOverview 
                ? "Accessing the unified database for high-performance generator systems, e-houses, and bespoke containerized power solutions."
                : currentCategory.description}
            </p>
          </div>
        </div>
      </div>

      {/* ─── MAIN CONTENT ─── */}
      {isGeneralOverview ? (
        <AllCategoriesOverview />
      ) : (
        <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-12">
          {/* Technical Sidebar */}
          <aside className="w-full lg:w-1/4 hidden lg:block">
            <div className="sticky top-10 bg-white border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
                <Filter size={16} className="text-[#CF0F0F]" />
                <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#44444E]">Refine_Registry</h2>
              </div>
              <ul className="space-y-1">
                {products.map((cat, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      setSelectedCategory(cat.category);
                      navigate(`/products?category=${cat.slug}`);
                    }}
                    className={`cursor-pointer px-4 py-3 text-[12px] font-bold uppercase tracking-widest transition-all flex items-center justify-between group ${
                      selectedCategory === cat.category
                        ? "bg-[#44444E] text-white border-r-4 border-[#CF0F0F]"
                        : "text-gray-400 hover:text-[#44444E] hover:bg-gray-50"
                    }`}
                  >
                    {cat.category}
                    <ChevronRight size={12} className={`opacity-0 group-hover:opacity-100 transition-opacity ${selectedCategory === cat.category ? 'text-[#CF0F0F] opacity-100' : ''}`} />
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product Grid - MAINTAINING GAPS AS REQUESTED */}
          <section className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {currentCategory.items.map((item, idx) => (
                <div key={idx} className="transition-transform duration-500 hover:-translate-y-2">
                  <ProductCard
                    product={item}
                    categorySlug={currentCategory.slug}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ProductPage;