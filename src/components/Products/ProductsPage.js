import React, { useState, useEffect, useRef } from "react";
import { products } from "../../utils/products";
import ProductCard from "./ProductCard";
import { useLocation, useNavigate } from "react-router";
import {
  Filter,
  Home,
  ArrowRight,
  Layers,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const ProductPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categorySlug = queryParams.get("category");
  const isGeneralOverview = !categorySlug;

  const scrollTargetRef = useRef(null);

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

  // --- PAGINATION LOGIC ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
    setCurrentPage(1);
    if (currentCategory) {
      setSelectedCategory(currentCategory.category);
    } else {
      setSelectedCategory("");
    }
  }, [categorySlug]);

  const totalItems = currentCategory?.items.length || 0;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = currentCategory?.items.slice(indexOfFirstItem, indexOfLastItem) || [];
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const startRange = totalItems === 0 ? 0 : indexOfFirstItem + 1;
  const endRange = Math.min(indexOfLastItem, totalItems);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setTimeout(() => {
      if (scrollTargetRef.current) {
        scrollTargetRef.current.scrollIntoView({ 
          behavior: "smooth", 
          block: "start" 
        });
      }
    }, 50);
  };

  /**
   * TOP COMPACT PAGINATION COMPONENT
   */
  const TopPagination = () => (
    <div className="flex items-center gap-6">
      <div className="hidden sm:flex items-center gap-2 border-r border-gray-100 pr-6">
        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
          Displaying
        </span>
        <span className="text-[11px] font-bold text-[#44444E] font-mono">
          {startRange}-{endRange} <span className="text-gray-300 mx-1">/</span> {totalItems}
        </span>
      </div>
      
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest hidden md:block">
          Page {currentPage} of {totalPages}
        </span>
        <div className="flex gap-1">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-1.5 cursor-pointer rounded-lg border border-gray-100 text-[#44444E] disabled:opacity-20 disabled:cursor-not-allowed hover:bg-gray-50 hover:border-[#BF092F] hover:text-[#BF092F] transition-all"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-1.5 cursor-pointer rounded-lg border border-gray-100 text-[#44444E] disabled:opacity-20 disabled:cursor-not-allowed hover:bg-gray-50 hover:border-[#BF092F] hover:text-[#BF092F] transition-all"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );

  const AllCategoriesOverview = () => (
    <div className="container mx-auto px-4 md:px-6 py-7 relative z-10">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-8 w-1 bg-[#BF092F]" />
        <h2 className="text-sm text-[#44444E] uppercase tracking-[0.4em]">
          Product Categories
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((category, idx) => (
          <div
            key={idx}
            onClick={() => navigate(`/products?category=${category.slug}`)}
            className="group relative flex flex-col bg-white rounded-2xl shadow-xl border border-gray-100 cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-[#BF092F]/20"
          >
            <div className="absolute top-4 right-4 z-20">
              <span className="text-[10px] font-mono font-bold text-gray-300 group-hover:text-[#BF092F] transition-colors tracking-widest uppercase">
                ID: {200 + idx}
              </span>
            </div>

            <div className="h-56 relative overflow-hidden bg-gray-50">
              {category.image && (
                <img
                  src={category.image.url}
                  alt={category.category}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-90"
                />
              )}
            </div>

            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-bold text-[#44444E] tracking-tight group-hover:text-[#BF092F] transition-colors mb-3">
                  {category.category}
                </h3>
                <p className="text-[12px] text-gray-400 tracking-widest leading-relaxed line-clamp-2">
                  {category.description ||
                    `${category.items.length} Units Sync_Available.`}
                </p>
              </div>

              <div className="mt-8 flex justify-between items-center pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <Layers size={14} className="text-[#BF092F]" />
                  <span className="text-[11px] font-bold text-[#44444E] uppercase tracking-widest">
                    {category.items.length} Models
                  </span>
                </div>
                <ArrowRight
                  size={18}
                  className="text-gray-300 group-hover:text-[#BF092F] group-hover:translate-x-1 transition-all"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-[#44444E] font-sans selection:bg-[#BF092F] selection:text-white">
      <div className="pt-22 px-2 md:px-2">
        <header className="shadow-xl relative h-[28vh] min-h-[300px] w-full flex items-center bg-[#44444E] overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#BF092F] to-transparent animate-pulse" />
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse delay-700" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-20">
            <nav className="flex items-center flex-wrap gap-3 mb-6">
              <button onClick={() => navigate("/")} className="cursor-pointer group flex items-center gap-1 text-white/50 hover:text-white transition-colors">
                <Home size={14} /><span className="text-[10px] md:text-xs tracking-widest uppercase">Home</span>
              </button>
              <span className="text-white/20 text-xs font-mono">{">"}</span>
              <button onClick={() => navigate("/products")} className={`text-[10px] md:text-xs tracking-widest uppercase transition-all duration-300 ${isGeneralOverview ? "bg-[#BF092F] text-white px-4 py-1.5 rounded-2xl shadow-lg" : "text-white/50 hover:text-white"}`}>
                Product Categories
              </button>
              {!isGeneralOverview && (
                <>
                  <span className="text-white/20 text-xs font-mono">{">"}</span>
                  <button className="text-[10px] md:text-xs tracking-widest uppercase bg-[#BF092F] text-white px-4 py-1.5 rounded-2xl shadow-lg font-bold">
                    {currentCategory.category}
                  </button>
                </>
              )}
            </nav>
            <div>
              <h1 className={`font-semibold text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-[-0.02em] max-w-4xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                {isGeneralOverview ? "Product" : currentCategory.category} <span className="text-[#BF092F]">{isGeneralOverview ? "Registry" : "Catalog"}</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl tracking-wide leading-relaxed mt-4 max-w-3xl">
                {isGeneralOverview ? "Accessing unified database for generator systems." : currentCategory.description}
              </p>
            </div>
          </div>
        </header>
      </div>

      <main className="container mx-auto -translate-y-12 relative z-30">
        {isGeneralOverview ? (
          <div className="pt-12"><AllCategoriesOverview /></div>
        ) : (
          <div className="pt-20 px-4 flex flex-col lg:grid lg:grid-cols-12 gap-8 items-stretch">
            <aside className="lg:col-span-3 space-y-8 h-full">
              <div className="rounded-2xl bg-[#44444E] shadow-2xl border-t-4 border-[#BF092F] sticky top-28 overflow-hidden">
                <div className="p-8 border-b border-white/10">
                  <div className="flex items-center gap-3 mb-8">
                    <Filter size={16} className="text-[#BF092F]" /><h2 className="text-[12px] text-white tracking-[0.4em] uppercase">Refine Registry</h2>
                  </div>
                  <ul className="space-y-2">
                    {products.map((cat, idx) => (
                      <li key={idx} onClick={() => navigate(`/products?category=${cat.slug}`)} className={`cursor-pointer px-4 py-4 rounded-xl text-[12px] uppercase tracking-[0.2em] transition-all flex items-center justify-between group ${selectedCategory === cat.category ? "bg-white/10 text-white border-l-4 border-[#BF092F]" : "text-white/40 hover:text-white hover:bg-white/5"}`}>
                        {cat.category}<ChevronRight size={14} className={`transition-transform duration-300 ${selectedCategory === cat.category ? "text-[#BF092F] translate-x-1" : "opacity-0 group-hover:opacity-100"}`} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            <section className="lg:col-span-9">
              <div ref={scrollTargetRef} className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 min-h-[600px] flex flex-col scroll-mt-32">
                <div className="flex items-center justify-between mb-12 border-b border-gray-100 pb-8">
                  <h2 className="tracking-widest border-l-4 border-[#BF092F] pl-4 text-[#44444E] uppercase text-sm font-bold">
                    Available Items
                  </h2>
                  
                  {/* Top pagination visible even if 1 page */}
                  <TopPagination />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 flex-grow">
                  {currentItems.map((item, idx) => (
                    <div key={idx} className="transition-all duration-500 hover:-translate-y-2">
                      <ProductCard product={item} categorySlug={currentCategory.slug} />
                    </div>
                  ))}
                </div>

                {/* Bottom pagination visible even if 1 page */}
                <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col items-center gap-6">
                  <div className="text-[11px] font-mono text-gray-400 uppercase tracking-widest">
                    Showing {startRange} to {endRange} of {totalItems} models
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="p-3 cursor-pointer rounded-xl border border-gray-200 text-[#44444E] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#BF092F] hover:text-[#BF092F] transition-all">
                      <ChevronLeft size={20} />
                    </button>
                    <div className="flex items-center gap-2">
                      {[...Array(totalPages)].map((_, i) => (
                        <button key={i} onClick={() => handlePageChange(i + 1)} className={`w-10 h-10 rounded-xl text-xs font-bold tracking-widest transition-all ${currentPage === i + 1 ? "bg-[#BF092F] text-white shadow-lg" : "bg-gray-50 text-gray-400 hover:bg-gray-100"}`}>
                          {String(i + 1).padStart(2, '0')}
                        </button>
                      ))}
                    </div>
                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="p-3 cursor-pointer rounded-xl border border-gray-200 text-[#44444E] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#BF092F] hover:text-[#BF092F] transition-all">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>
      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </div>
  );
};

export default ProductPage;