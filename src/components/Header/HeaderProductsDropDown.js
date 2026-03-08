import React, { useState } from "react";
import { ChevronDown, ArrowRight, Layers, Package } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { products } from "../../utils/products";

const HeaderProductsDropDown = () => {
  const [activeCategorySlug, setActiveCategorySlug] = useState(
    products[0]?.slug,
  );
  const navigate = useNavigate();

  const currentCategory = products.find((p) => p.slug === activeCategorySlug);

  // Helper to determine what to show in the right panel
  const hasSubCategories = currentCategory?.subCategories?.length > 0;
  const displayTitle = hasSubCategories ? "Sub Categories" : "Category Items";

  const HoverEffect = () => (
    <>
      <span className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-xl scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] -z-10 border border-white/20 shadow-xl" />
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-white group-hover:w-1/4 transition-all duration-300 ease-out rounded-full" />
    </>
  );

  return (
    <div className="relative group">
      {/* --- TRIGGER --- */}
      <button
        onClick={() => navigate("/products")}
        className="relative cursor-pointer inline-flex items-center tracking-widest text-white uppercase font-medium hover:text-white transition-all duration-300 px-2 py-2 text-[12px] lg:text-[13px] whitespace-nowrap group"
      >
        <HoverEffect />
        <span className="absolute inset-0 bg-[#BF092F]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20" />
        Products
        <ChevronDown className="w-4 h-4 transition-transform duration-500 group-hover:rotate-180" />
      </button>

      {/* --- DROPDOWN CONTAINER --- */}
      <div className="absolute left-[-150px] top-full pt-2 w-[800px] opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-500 ease-out z-50">
        <div className="bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl border-t-4 border-[#CF0F0F] overflow-hidden h-[500px]">
          <div className="grid grid-cols-[260px_1fr] h-full">
            {/* LEFT: MAIN CATEGORY SELECTION */}
            <div className="bg-[#44444E] py-6 overflow-y-auto scrollbar-hide border-r border-white/5">
              <nav className="flex flex-col">
                {products.map((category) => (
                  <button
                    key={category.slug}
                    onMouseEnter={() => setActiveCategorySlug(category.slug)}
                    onClick={() =>
                      navigate(`/products?category=${category.slug}`)
                    }
                    className={`cursor-pointer group/item relative px-6 py-4 flex items-center justify-between transition-all text-left ${
                      activeCategorySlug === category.slug
                        ? "bg-white text-[#44444E]"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    <span className="text-[11px] tracking-widest transition-transform group-hover/item:translate-x-1">
                      {category.category}
                    </span>
                    {activeCategorySlug === category.slug && (
                      <div className="absolute right-0 w-1.5 h-full bg-[#CF0F0F]" />
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* RIGHT: DYNAMIC CONTENT PANEL */}
            <div className="relative p-8 bg-white flex flex-col h-full overflow-hidden">
              {currentCategory && (
                <div className="relative animate-fadeIn flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-6 pb-4 border-b border-gray-100 flex justify-between items-end shrink-0">
                    <div>
                      <h4 className="text-2xl text-[#44444E] tracking-tight">
                        {currentCategory.category}
                      </h4>
                      <p className="text-[12px] text-[#CF0F0F]  tracking-widest mt-1 flex items-center gap-2">
                        {hasSubCategories ? (
                          <Layers size={12} />
                        ) : (
                          <Package size={12} />
                        )}
                        {displayTitle}
                      </p>
                    </div>
                    <span className="text-4xl font-black text-gray-50 uppercase select-none leading-none">
                      {hasSubCategories ? "TYPE" : "UNIT"}
                    </span>
                  </div>

                  {/* Scrollable Content (Subcategories OR Items) */}
                  <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
                    <div className="grid grid-cols-2 gap-3 pb-4">
                      {hasSubCategories
                        ? // Render Subcategories
                          currentCategory.subCategories.map((sub, idx) => (
                            <Link
                              key={idx}
                              to={`/products?category=${sub.slug}`}
                              className="group/link flex items-center justify-between p-4 bg-gray-50 border border-transparent hover:border-[#CF0F0F] hover:bg-white transition-all duration-300 rounded-lg"
                            >
                              <div className="flex flex-col">
                                <span className="text-xs  text-[#44444E] tracking-wide group-hover/link:text-[#CF0F0F] font-medium">
                                  {sub.name}
                                </span>
                                <span className="text-[9px] text-gray-400 tracking-tighter">
                                  {sub.items?.length || 0} Models Available
                                </span>
                              </div>
                              <ArrowRight
                                size={14}
                                className="text-gray-300 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all"
                              />
                            </Link>
                          ))
                        : // Render direct Items
                          currentCategory.items.map((item, idx) => (
                            <Link
                              key={idx}
                              to={`/products/${currentCategory.slug}/${encodeURIComponent(item.name)}`}
                              className="group/link flex items-center justify-between p-4 bg-gray-50 border border-transparent hover:border-[#CF0F0F] hover:bg-white transition-all duration-300 rounded-lg"
                            >
                              <span className="text-[11px] text-[#44444E] tracking-wide group-hover/link:text-[#CF0F0F]">
                                {item.name}
                              </span>
                              <ArrowRight
                                size={14}
                                className="text-gray-300 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all"
                              />
                            </Link>
                          ))}
                    </div>
                  </div>

                  {/* Fixed Footer */}
                  <div className="pt-4 border-t border-gray-50 shrink-0">
                    <button
                      onClick={() =>
                        navigate(`/products?category=${currentCategory.slug}`)
                      }
                      className="cursor-pointer mt-auto pt-6 flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-[#44444E] hover:text-[#CF0F0F] transition-colors uppercase"
                    >
                      View All {currentCategory.category}{" "}
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #CF0F0F; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default HeaderProductsDropDown;
