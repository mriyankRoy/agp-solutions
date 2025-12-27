import React, { useState } from "react";
import { ChevronDown, ArrowRight, Package } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { products } from "../../utils/products";

const HeaderProductsDropDown = () => {
  const [activeCategory, setActiveCategory] = useState(products[0]?.slug);
  const navigate = useNavigate();
  const currentCategory = products.find((p) => p.slug === activeCategory);

  return (
    <div className="relative group">
      {/* --- TRIGGER --- */}
      <button
        onClick={() => navigate("/products")}
        className="relative cursor-pointer inline-flex items-center tracking-widest text-white hover:text-white transition-all duration-300 px-2 py-2 text-[12px] lg:text-[13px] uppercase font-medium whitespace-nowrap group"
      >
        <span className="absolute inset-0 bg-[#44444E] rounded-lg scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out -z-10" />
        <span className="absolute inset-0 bg-[#BF092F]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20" />
        Products
        <ChevronDown className="w-4 h-4 transition-transform duration-500 group-hover:rotate-180" />
      </button>

      {/* --- DROPDOWN CONTAINER --- */}
      {/* MODIFIED: 
          - top-full + pt-4: Moves the dropdown visual start down by 1rem (16px) 
          - translate-y-2: Adds a slight starting offset for the animation
      */}
      <div className="absolute left-[-150px] top-full pt-2 w-[750px] opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-500 ease-out z-50">
        
        {/* The actual visual box */}
        <div className="bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl border-t-4 border-[#CF0F0F] overflow-hidden">
          <div className="grid grid-cols-[240px_1fr]">
            {/* LEFT: CATEGORY SELECTION */}
            <div className="bg-[#44444E] py-6">
              <nav className="flex flex-col">
                {products.map((category) => (
                  <button
                    key={category.slug}
                    onMouseEnter={() => setActiveCategory(category.slug)}
                    onClick={() => navigate(`/products?category=${category.slug}`)}
                    className={`cursor-pointer group/item relative px-6 py-4 flex items-center justify-between transition-all text-left ${
                      activeCategory === category.slug
                        ? "bg-white text-[#44444E]"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    <span className="text-xs tracking-widest transition-transform group-hover/item:translate-x-1">
                      {category.category}
                    </span>
                    {activeCategory === category.slug && (
                      <div className="absolute right-0 w-1.5 h-full bg-[#CF0F0F]" />
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* RIGHT: PRODUCT ITEMS PANEL */}
            <div className="relative p-8 bg-white overflow-hidden min-h-[350px]">
              {currentCategory && (
                <div className="relative animate-fadeIn flex flex-col h-full">
                  <div className="mb-6 pb-4 border-b border-gray-100 flex justify-between items-end">
                    <div>
                      <h4 className="text-2xl text-[#44444E] tracking-tight">{currentCategory.category}</h4>
                      <p className="text-[12px] text-[#CF0F0F] tracking-widest mt-1">Category Items</p>
                    </div>
                    <span className="text-4xl font-black text-gray-50 uppercase select-none leading-none">PROD</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 rounded-xl">
                    {currentCategory.items.map((item, idx) => (
                      <Link
                        key={idx}
                        to={`/products/${currentCategory.slug}/${encodeURIComponent(item.name)}`}
                        className="group/link flex items-center justify-between p-4 bg-gray-50 border border-transparent hover:border-[#CF0F0F] hover:bg-white transition-all duration-300 hover:rounded-xl"
                      >
                        <span className="text-xs text-[#44444E] tracking-wide group-hover/link:text-[#CF0F0F]">{item.name}</span>
                        <ArrowRight size={14} className="text-gray-300 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>

                  <button
                    onClick={() => navigate(`/products?category=${currentCategory.slug}`)}
                    className="cursor-pointer mt-auto pt-6 flex items-center gap-2 text-[12px] tracking-[0.2em] text-[#44444E] hover:text-[#CF0F0F] transition-colors"
                  >
                    Explore All {currentCategory.category} <ArrowRight size={12} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderProductsDropDown;