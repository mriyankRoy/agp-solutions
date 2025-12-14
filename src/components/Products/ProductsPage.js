import React, { useState, useEffect } from "react";
import { products } from "../../utils/products";
import ProductCard from "./ProductCard";
import { useLocation, useNavigate } from "react-router";
import { Filter } from "lucide-react"; 

const ProductPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categorySlug = queryParams.get("category");

  const matchedCategory = categorySlug
    ? products.find((p) => p.slug === categorySlug)
    : null;

  const currentCategory = matchedCategory || products[0];

  const [selectedCategory, setSelectedCategory] = useState(
    currentCategory.category
  );

  // --- ANIMATION AND SCROLL STATE ---
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set initial visibility for fade-in effect
    setIsVisible(true); 
    
    // Scroll handling for parallax background
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    
    // Set selected category based on URL
    setSelectedCategory(currentCategory.category);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentCategory]);
  // ----------------------------------------

  return (
    // Outer container ensures white background below the hero
    <div className="min-h-screen bg-white"> 
      
      {/* --- HERO SECTION - EXACTLY MATCHES PRODUCT DETAIL PAGE --- */}
      <div className="relative overflow-hidden pt-40 pb-20"> 
        
        {/* Background set to primary dark color for contrast */}
        <div className="absolute inset-0 bg-[#44444E] opacity-95"></div>

        {/* Animated pattern (Texture) using the dark color */}
        <div
          className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] "
          style={{ transform: `translateY(${scrollY * 0.5}px)` }} // Parallax effect
        ></div>

        {/* Animated light beams (Texture) - White/red */}
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
        
        {/* Hero Content Container (Text) - ALIGNED TO LEFT EDGE OF CONTENT BELOW */}
        <div className="relative container mx-auto px-4 lg:px-8"> 
          <div className="max-w-7xl text-left"> 
            
            {/* --- BREADCRUMB --- */}
            <nav className={`mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
              aria-label="Breadcrumb"
              style={{ transitionDelay: "100ms" }}
            >
              <ol className="inline-flex items-center space-x-2 text-sm md:text-base font-medium">
                
                {/* 1. Products Root Link */}
                <li className="inline-flex items-center">
                  <button
                    onClick={() => navigate('/products')}
                    className="text-white/80 hover:text-[#CF0F0F] transition-colors duration-200 focus:outline-none"
                  >
                    Products
                  </button>
                </li>

                {/* Separator */}
                <li className="text-white/50">
                  <span className="mx-2">&gt;</span>
                </li>
                
                {/* 2. Category Name (Current Page) - RED BACKGROUND TAG */}
                <li 
                    className={`inline-block px-4 py-1 bg-[#CF0F0F] text-white rounded-full font-semibold whitespace-nowrap`}
                >
                  {currentCategory.category}
                </li>
              </ol>
            </nav>
            {/* --- END BREADCRUMB --- */}

            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 transition-all duration-1000 delay-150 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
              Powering Industries with World-Class Containerized Solutions
            </h1>
            <p className={`mt-6 text-xl text-white/90 max-w-3xl transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
              From precision instruments to robust enclosures, our advanced power
              systems deliver reliability, efficiency, and rapid deployment for
              industries across the UK and Europe.
            </p>
          </div>
        </div>
      </div> {/* END OF HERO SECTION */}
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 flex-shrink-0 lg:block hidden">
          {/* Premium Card Styling: Shadow, Rounded, and Inner Glow */}
          <div
            // Simplified transitions, focusing on the static look and sticky position
            className={`bg-white shadow-2xl rounded-3xl p-6 border border-[#CF0F0F]/10 sticky top-6 h-fit transition-all duration-300`}
          >
            {/* Title, using the imported Filter icon */}
            <h2 className="text-2xl font-extrabold mb-5 border-b pb-3 border-[#44444E]/20 text-[#44444E] flex items-center gap-3">
              <Filter size={24} className="text-[#CF0F0F]" /> Categories
            </h2>

            <ul className="space-y-2">
              {products.map((category, idx) => (
                <li
                  key={idx}
                  onClick={() => {
                    setSelectedCategory(category.category);
                    navigate(`/products?category=${category.slug}`);
                  }}
                  className={`cursor-pointer px-4 py-3 rounded-xl text-lg transition-all duration-300 ease-in-out relative group ${
                    selectedCategory === category.category
                      ? "bg-[#CF0F0F] text-white font-semibold shadow-lg shadow-[#CF0F0F]/40 transform scale-[1.03]"
                      : "text-[#44444E] hover:bg-[#44444E]/10 hover:text-black hover:pl-6"
                  }`}
                >
                  {category.category}

                  {/* Hover accent for non-selected items */}
                  {selectedCategory !== category.category && (
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#CF0F0F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </aside>
        {/* Product Grid */}
        <section className="w-full lg:w-3/4">
          <h2 className="text-3xl font-bold mb-8">
            {currentCategory.category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {currentCategory.items.map((item, idx) => (
              <ProductCard
                key={idx}
                product={item}
                categorySlug={currentCategory.slug}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductPage;