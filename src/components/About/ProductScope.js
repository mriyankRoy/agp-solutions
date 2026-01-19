import React, { useRef, useEffect, useState } from "react";
import { PRODUCT_SCOPE } from "../../utils/constants";

const ProductScope = () => {
  const sectionRef = useRef(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Search-friendly reveal logic
  const revealClass = (active, delay = "duration-1000") =>
    `transition-all ${delay} ease-[cubic-bezier(0.22,1,0.36,1)] ${
      active ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
    }`;

  return (
    <div 
      ref={sectionRef}
      className="mt-20 pt-20 border-t border-gray-100 bg-white p-8 md:p-12 rounded-2xl shadow-xl border"
    >
      {/* SECTION HEADER - Animated */}
      <div className={`flex items-center justify-between mb-10 ${revealClass(hasRevealed)}`}>
        <div className="flex items-center gap-4">
          <div className="h-8 w-1 bg-[#BF092F]" />
          <h2 className="text-sm text-[#44444E] uppercase font-bold">
            Our Product Scope
          </h2>
        </div>
        <div className="hidden md:block h-px flex-grow ml-8 bg-gray-100" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRODUCT_SCOPE.map((item, index) => (
          <div
            key={index}
            className={`group relative flex flex-col h-[500px] rounded-2xl overflow-hidden bg-white shadow-2xl transition-all duration-500 hover:-translate-y-3 ${revealClass(hasRevealed)}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="relative h-[65%] overflow-hidden bg-[#44444E]">
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <item.icon
                  className="text-white group-hover:text-[#BF092F] transition-colors"
                  size={20}
                />
              </div>
            </div>
            <div className="relative flex-grow p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-[#BF092F] font-black uppercase tracking-[0.3em] mb-2 block">
                  Engineering Excellence
                </span>
                <h4 className="text-xl font-bold text-[#44444E] uppercase leading-tight group-hover:text-[#BF092F]">
                  {item.title}
                </h4>
              </div>
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">
                  {item.subtitle}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 h-1.5 bg-[#BF092F] w-0 group-hover:w-full transition-all duration-700" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductScope;