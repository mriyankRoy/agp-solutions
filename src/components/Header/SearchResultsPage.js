import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { products } from "../../utils/products";
import ProductCard from "../Products/ProductCard";
import { Search, Home, ChevronLeft, PackageSearch } from "lucide-react";

const SearchResultsPage = () => {
  const { query } = useParams();
  const navigate = useNavigate();
  const decodedQuery = decodeURIComponent(query);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [query]);

  // Robust flattening to handle both direct and parent/sub-category structures
  const allItems = products.flatMap((category) => {
    if (category.type === "parent" && category.subCategories) {
      return category.subCategories.flatMap((sub) =>
        (sub.items || []).map((item) => ({
          ...item,
          categorySlug: sub.slug,
        }))
      );
    }
    return (category.items || []).map((item) => ({
      ...item,
      categorySlug: category.slug,
    }));
  });

  const results = allItems.filter((item) => {
    const searchTerm = decodedQuery.toLowerCase();
    return (
      item.name?.toLowerCase().includes(searchTerm) ||
      item.manufacturerPartNumber?.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="min-h-screen bg-white text-[#44444E] font-sans selection:bg-[#BF092F] selection:text-white">
      {/* 🏗️ MATCHED FLOATING HERO SECTION */}
      <div className="pt-22 px-2 md:px-2">
        <header className="shadow-xl relative h-[28vh] min-h-[300px] w-full flex items-center bg-[#44444E] overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

          <div className="absolute top-0 right-0 p-4 opacity-10 z-10">
            <PackageSearch size={450} className="text-white" />
          </div>

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
                <span className="text-[10px] md:text-xs tracking-widest uppercase">
                  Home
                </span>
              </button>

              <span className="text-white/20 text-xs font-mono">{">"}</span>

              <button
                onClick={() => navigate("/products")}
                className="text-[10px] md:text-xs tracking-widest uppercase text-white/50 hover:text-white transition-colors"
              >
                Product Categories
              </button>

              <span className="text-white/20 text-xs font-mono">{">"}</span>

              <button className="text-[10px] md:text-xs tracking-widest uppercase bg-[#BF092F] text-white px-4 py-1.5 rounded-2xl shadow-lg shadow-[#BF092F]/20 font-bold">
                Search Results
              </button>
            </nav>

            <div>
              <h1
                className={`font-semibold text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-[-0.02em] max-w-4xl transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                Registry <span className="text-[#BF092F]">Query</span>
              </h1>

              <p className="text-white/60 text-lg md:text-xl tracking-wide leading-relaxed mt-4 max-w-3xl">
                Displaying system matches for:{" "}
                <span className="text-white font-mono italic">
                  "{decodedQuery}"
                </span>
              </p>
            </div>
          </div>
        </header>
      </div>

      <main className="container mx-auto py-7 relative z-30 px-4">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 min-h-[600px]">
          <div className="flex items-center justify-between mb-12 border-b border-gray-100 pb-8">
            <div className="flex items-center gap-4">
              <div className="h-6 w-1 bg-[#BF092F]" />
              <h2 className="tracking-widest text-[#44444E] uppercase text-sm font-bold">
                {results.length > 0 ? "Search Findings" : "System Alert"}
              </h2>
            </div>
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
              Matches Found: {results.length}
            </span>
          </div>

          {results.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search size={48} className="text-gray-200 mb-6" />
              <h3 className="text-xl font-bold text-[#44444E] mb-2 uppercase tracking-tight">
                No Records Found
              </h3>
              <p className="text-gray-400 text-sm mb-8 max-w-xs uppercase tracking-widest leading-relaxed">
                The term "{decodedQuery}" does not match any entries in the
                active registry.
              </p>
              <button
                onClick={() => navigate("/products")}
                className="flex items-center gap-3 px-8 py-4 bg-[#44444E] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-[#BF092F] transition-all shadow-lg"
              >
                <ChevronLeft size={16} /> Return to Registry
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className="transition-all duration-500 hover:-translate-y-2"
                >
                  <ProductCard
                    product={item}
                    categorySlug={item.categorySlug}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </div>
  );
};

export default SearchResultsPage;