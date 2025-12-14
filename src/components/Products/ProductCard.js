import React, { useState } from "react";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router";

const ProductCard = ({ product, categorySlug }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(
      `/products/${categorySlug}/${encodeURIComponent(product.name)}`
    );
  };

  return (
    <div
      className="relative w-full max-w-sm mx-auto group" // Added 'group' for advanced hover styling
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* 1. Premium Card Container */}
      <div
        onClick={handleNavigate}
        className={`
          relative w-full mx-auto rounded-3xl overflow-hidden 
          bg-white transition-all duration-500 cursor-pointer 
          shadow-xl hover:shadow-2xl hover:shadow-[#CF0F0F]/50
          ${hover ? "scale-[1.03] -translate-y-4" : ""}
        `}
        style={{ aspectRatio: "3/5" }} // Ensures consistent, responsive height/width ratio
      >
        {/* 2. Red Glow Border (On Hover) */}
        <div 
          className={`absolute inset-0 rounded-3xl transition-all duration-500 pointer-events-none 
          shadow-[0_0_20px_rgba(207,15,15,0.0)] 
          ${hover ? "shadow-[0_0_20px_rgba(207,15,15,0.8)]" : ""}`}
        ></div>

        {/* Image and Overlay */}
        <div className="absolute inset-0">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              hover ? "scale-105" : ""
            }`}
          />
          
          {/* Heart/Wishlist Button (Red Accent) */}
          <button 
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center 
                       hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-md"
            onClick={(e) => {
              e.stopPropagation(); // Prevents navigating when clicking the button
              // Add wishlist logic here
            }}
            aria-label="Add to Wishlist"
          >
            <Heart className="w-5 h-5 text-[#CF0F0F] fill-white transition-colors duration-300" />
          </button>
          
          {/* Gradient Overlay (Dark Gray/Black) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* 3. Footer Content (Always Visible) */}
        <div className="absolute bottom-0 p-6 text-white w-full">
          {/* Product Name (Always Visible, Bold White) */}
          <p className="text-xl font-extrabold mb-4 leading-snug">
            {product.name}
          </p>

          {/* Action Button (Red Primary Color) */}
          <button 
            className={`w-full p-3 rounded-full bg-[#CF0F0F] text-white font-medium text-base shadow-lg transition-all duration-300 
                        transform hover:bg-black hover:scale-[1.05] hover:shadow-xl hover:shadow-[#CF0F0F]/50`}
            onClick={handleNavigate}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;