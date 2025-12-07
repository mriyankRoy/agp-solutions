// HeaderDropDown.jsx
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
        className="inline-flex gap-1.5 items-center hover:text-red-500 hover:underline underline-offset-4 transition"
      >
        Products
        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
      </button>

      {/* Dropdown Container */}
      <div className="absolute left-0 mt-4 w-[700px] bg-gradient-to-b from-gray-900/95 via-gray-800/80 to-gray-900/70 backdrop-blur-xl border border-gray-700/40 rounded-2xl shadow-lg overflow-hidden opacity-0 translate-y-3 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-50">
        {/* Top Accent Bar */}
        <div className="h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 opacity-70"></div>

        <div className="grid grid-cols-[200px_1fr]">
          {/* Category List */}
          <div className="bg-gray-800/90 border-r border-gray-700/40 py-6 px-4 flex flex-col gap-2">
            {products.map((category) => (
              <Link
                key={category.slug}
                to={`/products?category=${category.slug}`}
                onMouseEnter={() => setActiveCategory(category.slug)}
                className={`border-gray-400 px-3 py-2 rounded-xl flex items-center justify-between transition-all border ${
                  activeCategory === category.slug
                    ? "bg-red-600 text-white shadow-lg scale-[1.05]"
                    : "bg-gray-600 text-white hover:bg-gray-700/30 hover:text-white"
                }`}
              >
                {category.category.toUpperCase()}
                <ChevronRight
                  className={`transition-transform ${
                    activeCategory === category.slug
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Items Panel */}
          <div className="p-6 min-h-[260px] bg-gray-600 backdrop-blur-sm grid grid-cols-1 gap-4">
            {!activeCategory && (
              <div className="text-gray-300 text-sm animate-fadeIn">
                Hover a category to explore products
              </div>
            )}

            {products.map(
              (category) =>
                activeCategory === category.slug && (
                  <div
                    key={category.slug}
                    className="grid grid-cols-2 gap-x-6 gap-y-4"
                  >
                    {category.items.map((item, idx) => (
                      <Link
                        key={idx}
                        to={`/products/${category.slug}/${encodeURIComponent(
                          item.name
                        )}`}
                        className="relative p-3 rounded-xl bg-gray-800/70 border border-gray-700/40 text-gray-200 hover:text-white hover:bg-red-600 transition-all shadow hover:shadow-lg flex items-center justify-center text-sm font-medium hover:scale-[1.05]"
                      >
                        {item.name}

                        {/* Cluster of tiny dots on lower-right */}
                        <div className="absolute bottom-2 right-2 flex flex-wrap w-6 h-6 gap-[2px]">
                          {Array.from({ length: 12 }).map((_, dotIdx) => (
                            <span
                              key={dotIdx}
                              className="w-[2px] h-[2px] bg-red-500 rounded-full"
                            ></span>
                          ))}
                        </div>
                      </Link>
                    ))}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDropDown;
