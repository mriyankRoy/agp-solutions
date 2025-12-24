import React, { useState } from "react";
import { ArrowRight, Cpu, Package } from "lucide-react";
import { useNavigate } from "react-router";

const ProductCard = ({ product, categorySlug }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/products/${categorySlug}/${encodeURIComponent(product.name)}`);
  };

  return (
    // Added 'h-full' to the wrapper to ensure grid alignment
    <div
      className="group relative flex flex-col h-full bg-white rounded-2xl shadow-xl border border-gray-100 cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-[#BF092F]/20"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleNavigate}
    >
      {/* 1. TECHNICAL INDICATOR (TOP RIGHT) */}
      <div className="absolute top-4 right-4 z-20">
        <span className="text-[10px] font-mono font-bold text-gray-300 group-hover:text-[#BF092F] transition-colors tracking-widest uppercase">
          {product.AGPPartNumber || "SPEC_READY"}
        </span>
      </div>

      {/* 2. IMAGE SECTION - Fixed height maintained */}
      <div className="h-64 min-h-[16rem] relative overflow-hidden bg-gray-50 border-b border-gray-50">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover grayscale transition-all duration-700 opacity-90 ${
            hover ? "grayscale-0 scale-110 opacity-100" : ""
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
      </div>

      {/* 3. CONTENT SECTION */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Cpu size={14} className="text-[#BF092F]" />
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
              {product.Make || "Industrial Unit"}
            </span>
          </div>
          
          {/* Fixed height for Title to prevent misalignment */}
          <h3 className="text-xl font-bold text-[#44444E] tracking-tight group-hover:text-[#BF092F] transition-colors mb-3 leading-snug min-h-[3.5rem] line-clamp-2">
            {product.name}
          </h3>
          
          {/* Fixed height for Description to ensure footer alignment */}
          <p className="text-[12px] text-gray-400 tracking-widest leading-relaxed line-clamp-3 min-h-[3rem]">
            {product.shortDescription || "High-performance power system component designed for extreme operational environments."}
          </p>
        </div>

        {/* 4. FOOTER ACTION - mt-auto pushes this to the very bottom */}
        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package  size={14} className="text-[#BF092F]" />
            <span className="text-[11px] font-bold text-[#44444E] uppercase tracking-widest">
              {product.manufacturerPartNumber}
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-[#BF092F] font-bold text-[11px] uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform">
            Details
            <ArrowRight size={16} />
          </div>
        </div>
      </div>

      {/* 5. HOVER ACCENT BAR (BOTTOM) */}
      <div className={`absolute bottom-0 left-0 h-1 bg-[#BF092F] transition-all duration-500 ${hover ? 'w-full' : 'w-0'}`} />
    </div>
  );
};

export default ProductCard;