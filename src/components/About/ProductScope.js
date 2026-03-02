import React, { useRef, useEffect, useState } from "react";
import { products } from "../../utils/products";
import ProductCard from "../Products/ProductCard";

/**
 * ProductScope Component
 * Integrated into 'About Us' to showcase Category 1 (Generator Systems) capabilities.
 */
const ProductScope = () => {
  const sectionRef = useRef(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  // 1. Target the specific category object (Category 1)
  const categoryData = products[0] || {};
  
  // 2. Access the items array inside that category
  // We use .slice(0, 3) here to limit the display to the first 3 products
  const scopeItems = (categoryData.items || []).slice(0, 3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasRevealed(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const revealClass = (active, delay = "duration-1000") =>
    `transition-all ${delay} ease-[cubic-bezier(0.22,1,0.36,1)] ${
      active ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
    }`;

  return (
    <div 
      ref={sectionRef}
      className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 mt-20"
    >
      {/* SECTION HEADER */}
      <div className={`flex items-center gap-4 mb-8 ${revealClass(hasRevealed)}`}>
        <div className="h-8 w-1 bg-[#BF092F]" />
        <h2 className="text-sm text-[#44444E] uppercase font-bold">
          Our Product Scope
        </h2>
        <div className="hidden md:block h-px flex-grow ml-8 bg-gray-100" />
      </div>

      {/* SUB-HEADER: Dynamically renders the category name */}
      <p className={`text-2xl md:text-4xl font-semibold text-[#44444E] leading-tight uppercase tracking-tight mb-12 ${revealClass(hasRevealed, "duration-1000 delay-100")}`}>
        Precision Manufactured <br className="hidden md:block" />{" "}
        {categoryData?.category}.
      </p>

      {/* PRODUCT LIST */}
      <div className={`flex flex-wrap justify-center gap-8 ${revealClass(hasRevealed, "duration-1000 delay-200")}`}>
        {scopeItems.map((item, index) => (
          <div 
            key={item.id || index}
            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[400px]"
          >
            <ProductCard 
              product={item} 
              categorySlug={categoryData.slug} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductScope;