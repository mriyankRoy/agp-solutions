import { ChevronRight, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { products } from "../../utils/products";
import { useState } from "react";

const HeaderDropDown = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="relative group">
      {/* Trigger */}
      <button
        onClick={() => navigate("/products")}
        className="px-4 border-l border-r border-gray-300 cursor-pointer inline-flex gap-1.5 items-center hover:text-gray-900 hover:underline underline-offset-4 transition"
      >
        Products
        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
      </button>

      {/* Hover Bridge */}
      <div className="absolute top-full left-0 w-full h-5"></div>

      {/* Dropdown Container */}
      <div
        className="
          absolute left-0 mt-4
          w-[720px]
          bg-gradient-to-b from-black/80 via-gray-900/70 to-black/60
          backdrop-blur-xl border border-gray-700/40
          rounded-2xl shadow-[0_16px_50px_-10px_rgba(0,0,0,0.5)]
          overflow-hidden
          z-50
          opacity-0 translate-y-3 invisible
          group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible
          hover:opacity-100 hover:translate-y-0 hover:visible
          transition-all duration-300 ease-[cubic-bezier(.16,.84,.44,1)]
        "
      >
        {/* Top Accent Bar */}
        <div className="h-1 w-full bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 opacity-50"></div>

        <div className="grid grid-cols-[180px_1fr]">
          {/* Category List */}
          <div className=" bg-gradient-to-b from-white/60 via-orange-900/50 to-white/60 backdrop-blur-sm border-r border-gray-700/30 py-6 px-4 flex flex-col gap-1.5">
            {products.map((category) => {
              const isActive = activeCategory === category.slug;

              return (
                <Link
                  key={category.slug}
                  to={`/products?category=${category.slug}`}
                  onMouseEnter={() => setActiveCategory(category.slug)}
                  className={`
                    text-left px-3 py-2 rounded-lg
                    flex items-center justify-between gap-2
                    transition-all
                    ${
                      isActive
                        ? "bg-black text-white shadow-lg backdrop-blur-md scale-[1.1]"
                        : "text-white hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  {category.category.toUpperCase()}
                  <ChevronRight
                    className={` transition-transform ${
                      isActive ? "opacity-100 text-white" : "opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Items Panel */}
          <div className="p-6 min-h-[260px] bg-gradient-to-b from-black via-white-800/30 to-white/20 backdrop-blur-sm">
            {!activeCategory && (
              <div className="text-gray-300 text-[14px] animate-fadeIn">
                Hover a category to explore products
              </div>
            )}

            {products.map((category) => (
              <div
                key={category.slug}
                className={`transition-all duration-300 ${
                  activeCategory === category.slug
                    ? "opacity-100"
                    : "opacity-0 hidden"
                }`}
              >
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {category.items.map((item, index) => (
                    <Link
                      key={index}
                      to={`/products/${category.slug}/${encodeURIComponent(
                        item.name
                      )}`}
                      className="
                        p-2 rounded-lg
                        text-gray-200 hover:text-white
                        hover:bg-gray-700 transition-all hover:scale-[1.07]
                        
                      "
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDropDown;
