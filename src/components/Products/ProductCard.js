import React, { useState } from "react";
import { ArrowRight, Cpu, Package } from "lucide-react";
import { useNavigate } from "react-router";

const ProductCard = ({ product, categorySlug }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    // ROUTING FIX: Uses ID to match /products/:category/:id
    const slug = categorySlug || "item";
    navigate(`/products/${slug}/${product.id}`);
  };

  const getOptimizedUrl = (url) => {
    if (!url || !url.includes("cloudinary.com")) return url;
    return url.replace("/upload/", "/upload/f_auto,q_auto/");
  };

  return (
    <article
      className="group relative flex flex-col h-full bg-white rounded-2xl shadow-xl border border-gray-100 cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-[#BF092F]/20"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleNavigate}
    >
      <div className="absolute top-4 right-4 z-20">
        <span className="text-[10px] font-mono font-bold text-gray-300 group-hover:text-[#BF092F] transition-colors tracking-widest uppercase">
          {product.AGPPartNumber || "SPEC_READY"}
        </span>
      </div>

      <div className="h-64 min-h-[16rem] relative overflow-hidden bg-gray-50 border-b border-gray-50">
        <img
          src={getOptimizedUrl(product.images[0])}
          alt={product.name}
          className={`w-full h-full object-cover grayscale transition-all duration-700 opacity-90 ${
            hover ? "grayscale-0 scale-110 opacity-100" : ""
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Cpu size={14} className="text-[#BF092F]" />
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
              {product.Make || "Industrial Unit"}
            </span>
          </div>
          <h3 className="text-xl font-bold text-[#44444E] tracking-tight group-hover:text-[#BF092F] transition-colors mb-3 leading-snug min-h-[3.5rem] line-clamp-2">
            {product.name}
          </h3>
          <p className="text-[12px] text-gray-400 tracking-widest leading-relaxed line-clamp-3 min-h-[3rem]">
            {product.shortDescription || `High-performance ${product.name} designed for industrial environments.`}
          </p>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package size={14} className="text-[#BF092F]" />
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
      <div className={`absolute bottom-0 left-0 h-1 bg-[#BF092F] transition-all duration-500 ${hover ? "w-full" : "w-0"}`} />
    </article>
  );
};

export default ProductCard;