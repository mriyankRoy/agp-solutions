import React, { useState, useEffect } from "react";
import { ChevronDown, ArrowRight, Layers, Package, ListTree } from "lucide-react";
import { useNavigate } from "react-router";
import { products } from "../../utils/products";

const HeaderProductsDropDown = () => {
  const navigate = useNavigate();

  // 1. Core State
  const [activeCategorySlug, setActiveCategorySlug] = useState(products[0]?.slug);
  const [activeSubOrItem, setActiveSubOrItem] = useState(null);

  const currentCategory = products.find((p) => p.slug === activeCategorySlug);
  
  // Determine if we are showing Sub-Categories (like Accessories) or direct Items (like Enclosures)
  const hasSubCategories = currentCategory?.subCategories?.length > 0;
  const displayList = hasSubCategories ? currentCategory.subCategories : currentCategory.items;

  // 2. Sync active selection when Sidebar Category changes
  useEffect(() => {
    if (displayList?.length > 0) {
      setActiveSubOrItem(displayList[0]);
    }
  }, [activeCategorySlug, displayList]);

  // 3. Helper for dynamic image preview
  const getPreviewImage = () => {
    // If it's a subcategory hover, show its specific image
    if (hasSubCategories && activeSubOrItem?.image?.url) return activeSubOrItem.image.url;
    // If it's an item hover, show its first image
    if (!hasSubCategories && activeSubOrItem?.images?.[0]) return activeSubOrItem.images[0];
    // Fallback to Category image
    return currentCategory?.image?.url || "https://placehold.co/600x400?text=AGP+Power";
  };

  return (
    <div className="relative group">
      <button
        onClick={() => navigate("/products")}
        className="relative cursor-pointer inline-flex items-center tracking-widest text-white uppercase font-medium px-2 py-2 text-[12px] lg:text-[13px] whitespace-nowrap group"
      >
        Products
        <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-500 group-hover:rotate-180" />
      </button>

      <div className="absolute left-[-120px] top-full pt-2 w-[900px] opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-500 z-50">
        <div className="bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl border-t-4 border-[#BF092F] overflow-hidden">
          <div className="grid grid-cols-[260px_1fr_300px]">
            
            {/* 1. SIDEBAR: MAIN CATEGORIES */}
            <div className="bg-[#44444E] py-6 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {products.map((cat) => (
                <button
                  key={cat.slug}
                  onMouseEnter={() => setActiveCategorySlug(cat.slug)}
                  className={`cursor-pointer w-full px-6 py-4 text-left transition-all relative ${
                    activeCategorySlug === cat.slug ? "bg-white text-[#44444E]" : "text-white/60 hover:text-white"
                  }`}
                >
                  <span className="text-[11px] tracking-widest uppercase leading-tight">
                    {cat.category}
                  </span>
                  {activeCategorySlug === cat.slug && (
                    <div className="absolute right-0 top-0 h-full w-1 bg-[#BF092F]" />
                  )}
                </button>
              ))}
            </div>

            {/* 2. MIDDLE: SUB-CATEGORIES OR ITEMS */}
            <div className="relative p-8 bg-white border-r border-[#44444E]/10">
              <h4 className="text-[10px] text-[#BF092F] font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
                {hasSubCategories ? <ListTree size={12} /> : <Package size={12} />}
                {hasSubCategories ? "Product Groups" : "Available Models"}
              </h4>
              
              <div className="max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                <div className="flex flex-col gap-1 pb-10">
                  {displayList?.map((item, idx) => (
                    <button
                      key={item.slug || item.id || idx}
                      onMouseEnter={() => setActiveSubOrItem(item)}
                      onClick={() => {
                        const path = hasSubCategories 
                          ? `/products?category=${item.slug}` 
                          : `/products/${currentCategory.slug}/${item.id}`;
                        navigate(path);
                      }}
                      className={`cursor-pointer group flex items-center justify-between p-3 rounded-lg transition-all text-left ${
                        activeSubOrItem?.name === item.name 
                          ? "bg-[#BF092F]/5 shadow-sm" 
                          : "hover:bg-[#44444E]/5"
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className={`text-[11px] uppercase tracking-wide transition-colors ${
                          activeSubOrItem?.name === item.name ? "text-[#BF092F] font-bold" : "text-[#44444E]"
                        }`}>
                          {item.name}
                        </span>
                        {item.items && (
                          <span className="text-[9px] text-gray-400 mt-0.5">{item.items.length} Products Available</span>
                        )}
                      </div>
                      <ArrowRight size={12} className={activeSubOrItem?.name === item.name ? "text-[#BF092F] translate-x-0" : "opacity-0 -translate-x-2"} />
                    </button>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </div>

            {/* 3. RIGHT: DYNAMIC PREVIEW */}
            <div className="p-6 flex flex-col justify-center bg-gray-50/30">
              <div className="animate-fadeIn space-y-4">
                <div className="aspect-square rounded-xl overflow-hidden border border-[#44444E]/10 bg-white shadow-md">
                  <img 
                    src={getPreviewImage()} 
                    alt="Preview"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-[9px] bg-[#BF092F] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
                    {hasSubCategories ? "Category" : "Unit"}
                  </span>
                  <h5 className="text-[13px] text-[#44444E] font-bold uppercase leading-tight">
                    {activeSubOrItem?.name}
                  </h5>
                  <p className="text-[10px] text-gray-500 line-clamp-2 leading-relaxed">
                    {activeSubOrItem?.description || activeSubOrItem?.shortDescription}
                  </p>
                </div>
                
                <button 
                  onClick={() => navigate(hasSubCategories ? `/products?category=${activeSubOrItem?.slug}` : `/products/${currentCategory.slug}/${activeSubOrItem?.id}`)}
                  className="cursor-pointer w-full py-3 bg-[#44444E] text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-[#BF092F] transition-colors flex items-center justify-center gap-2 group/btn"
                >
                  View Full Details
                  <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #BF092F30; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default HeaderProductsDropDown;