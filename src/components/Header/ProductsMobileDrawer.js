import React, { useState } from "react";
import { Link } from "react-router";
import {
  ChevronLeft,
  ChevronDown,
  Folder,
  CornerDownRight,
} from "lucide-react";
import { products } from "../../utils/products";

const ProductsMobileDrawer = ({ isOpen, onClose, onCloseAll }) => {
  const [expandedCat, setExpandedCat] = useState(null);

  // SEO: Removed 'if (!isOpen) return null'
  // We use CSS classes to hide/show so the links remain in the DOM for crawlers.

  return (
    <div
      className={`fixed inset-0 z-[130] bg-[#44444E] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen
          ? "translate-x-0 opacity-100 visible"
          : "translate-x-full opacity-0 invisible"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Product Categories Menu"
    >
      <div className="h-full pt-28 flex flex-col relative">
        {/* HEADER SECTION */}
        <div className="px-8 mb-8">
          <button
            onClick={onClose}
            className="text-white/40 mb-8 flex items-center gap-2 hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold group"
          >
            <ChevronLeft size={16} aria-hidden="true" /> BACK
          </button>

          <div className="border-l-4 border-[#BF092F] pl-4">
            <h1 className="text-white text-2xl font-black uppercase tracking-tight">
              Products
            </h1>
            <p className="text-white/30 text-[9px] uppercase tracking-[0.2em]">
              Arc Engineering Directory
            </p>
          </div>
        </div>

        {/* NAVIGATION LIST - SEO: Wrapped in <nav> and <ul> */}
        <nav
          className="flex-1 overflow-y-auto custom-scrollbar px-6 pb-20"
          aria-label="Mobile Product Directory"
        >
          <ul className="space-y-3">
            {products.map((cat) => {
              const isActive = expandedCat === cat.slug;

              return (
                <li
                  key={cat.slug}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "bg-white/5 border-white/10 shadow-lg"
                      : "bg-transparent border-transparent"
                  }`}
                >
                  {/* CATEGORY TRIGGER */}
                  <button
                    onClick={() => setExpandedCat(isActive ? null : cat.slug)}
                    aria-expanded={isActive}
                    aria-controls={`submenu-${cat.slug}`}
                    className={`w-full flex items-center justify-between p-5 transition-all ${
                      isActive ? "text-white" : "text-white/60"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <Folder
                        size={18}
                        className={`${isActive ? "text-[#BF092F]" : "text-white/20"} transition-colors`}
                        aria-hidden="true"
                      />
                      <span className="text-[13px] font-bold uppercase tracking-wider">
                        {cat.category}
                      </span>
                    </div>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-500 ${isActive ? "rotate-180 text-[#BF092F]" : "text-white/20"}`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* SUB-ITEMS PANEL - SEO: Hidden with height/opacity so content is crawlable */}
                  <div
                    id={`submenu-${cat.slug}`}
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0 lg:opacity-100"
                    }`}
                  >
                    <ul className="px-6 pb-6 flex flex-col gap-2 border-t border-white/5 mt-1 pt-4">
                      {(cat.subCategories || cat.items || []).map(
                        (sub, idx) => (
                          <li key={idx}>
                            <Link
                              to={
                                cat.subCategories
                                  ? `/products?category=${sub.slug}`
                                  : `/products/${cat.slug}/${sub.id}`
                              }
                              onClick={onCloseAll}
                              className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                              title={`View ${sub.name || sub.category}`}
                            >
                              <CornerDownRight
                                size={14}
                                className="text-[#BF092F]/40 group-hover:text-[#BF092F]"
                                aria-hidden="true"
                              />
                              <span className="text-white/50 group-hover:text-white text-[11px] font-medium tracking-wide transition-colors">
                                {sub.name || sub.category}
                              </span>
                            </Link>
                          </li>
                        ),
                      )}

                      {/* CATEGORY LANDING PAGE LINK - High SEO Value */}
                      <li>
                        <Link
                          to={`/products?category=${cat.slug}`}
                          onClick={onCloseAll}
                          className="mt-4 block py-4 rounded-xl bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] text-center hover:bg-[#BF092F] hover:border-[#BF092F] transition-all duration-300 group/link"
                        >
                          <span className="opacity-60 group-hover/link:opacity-100 transition-opacity">
                            Explore All {cat.category}
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* STICKY FOOTER */}
        <footer className="mt-auto py-10 flex flex-col items-center gap-4 border-t border-white/5 bg-[#44444E]/80 backdrop-blur-md">
          <div className="w-12 h-[1px] bg-[#BF092F]/50" aria-hidden="true" />
          <p className="text-white text-[10px] font-bold tracking-[0.4em] uppercase">
            Art Genpower Solutions Ltd.
          </p>
        </footer>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 2px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #BF092F40; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default ProductsMobileDrawer;
