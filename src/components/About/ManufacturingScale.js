import React, { useRef, useEffect, useState } from "react";
import { Activity, MapPin, Factory, Users, Warehouse } from "lucide-react";

const ManufacturingScale = () => {
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

  // Search-friendly reveal logic: uses opacity and translate-y
  // Browsers can find text in opacity-0 elements, making Cmd+F work perfectly.
  const revealClass = (active, delay = "duration-1000") =>
    `transition-all ${delay} ease-[cubic-bezier(0.22,1,0.36,1)] ${
      active ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
    }`;

  return (
    <div 
      ref={sectionRef}
      className="mt-20 pt-20 border-t border-gray-100"
    >
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: THE DATA TERMINALS */}
        <div className="lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1">
          {/* TOP ROW: DUAL STATS - Animated with staggered delays */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#BF092F]/20 transition-all duration-500 overflow-hidden ${revealClass(hasRevealed, "duration-1000 delay-200")}`}>
              <div className="absolute top-0 right-0 p-4 text-gray-50 group-hover:text-[#BF092F]/5 transition-colors">
                <MapPin size={80} />
              </div>
              <div className="relative z-10">
                <div className="p-4 w-fit bg-gray-50 rounded-2xl group-hover:bg-[#BF092F] transition-colors duration-500 mb-6">
                  <MapPin
                    className="text-[#44444E] group-hover:text-white"
                    size={24}
                  />
                </div>
                <div className="text-4xl font-black text-[#44444E] tracking-tighter mb-1">
                  41,000{" "}
                  <span className="text-sm font-bold text-gray-400">SQM</span>
                </div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Production Footprint
                </p>
              </div>
            </div>

            <div className={`group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#BF092F]/20 transition-all duration-500 overflow-hidden ${revealClass(hasRevealed, "duration-1000 delay-300")}`}>
              <div className="absolute top-0 right-0 p-4 text-gray-50 group-hover:text-[#BF092F]/5 transition-colors">
                <Factory size={80} />
              </div>
              <div className="relative z-10">
                <div className="p-4 w-fit bg-gray-50 rounded-2xl group-hover:bg-[#BF092F] transition-colors duration-500 mb-6">
                  <Factory
                    className="text-[#44444E] group-hover:text-white"
                    size={24}
                  />
                </div>
                <div className="text-4xl font-black text-[#44444E] tracking-tighter mb-1">
                  05
                </div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Specialized Factories
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW: FULL WIDTH WORKFORCE - Animated with delay */}
          <div className={`group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#BF092F]/20 transition-all duration-500 overflow-hidden ${revealClass(hasRevealed, "duration-1000 delay-400")}`}>
            <div className="absolute top-0 right-0 p-8 text-gray-50 group-hover:text-[#BF092F]/5 transition-colors">
              <Users size={120} />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="p-5 bg-gray-50 rounded-2xl group-hover:bg-[#BF092F] transition-colors duration-500">
                  <Users
                    className="text-[#44444E] group-hover:text-white"
                    size={32}
                  />
                </div>
                <div>
                  <div className="text-4xl font-black text-[#44444E] tracking-tighter">
                    260+
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Skilled Workforce
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Fabricators", "Welders", "Engineers"].map((role) => (
                  <span
                    key={role}
                    className="text-[9px] font-black uppercase tracking-[0.2em] bg-gray-50 group-hover:bg-gray-100 px-4 py-2 rounded-xl text-gray-500 transition-colors"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: THE CONCEPT BOX - Animated immediately */}
        <div className={`lg:col-span-5 relative group order-1 lg:order-2 h-full ${revealClass(hasRevealed)}`}>
          <div className="absolute -inset-1 bg-gradient-to-r from-[#BF092F] to-[#44444E] rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative h-full bg-[#44444E] p-10 rounded-2xl text-white shadow-2xl overflow-hidden flex flex-col justify-center">
            <Warehouse
              className="absolute -right-12 -bottom-12 text-white/5 group-hover:text-[#BF092F]/10 transition-colors duration-700"
              size={280}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-6 w-1 bg-[#BF092F]" />
                <h2 className="text-[10px] uppercase font-black tracking-[0.4em] text-white/60">
                  Infrastructure & Stability
                </h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter leading-none mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                  Reliability
                </span>{" "}
                Built on <br />
                <span className="text-[#BF092F]">Global Scale.</span>
              </h3>
              <p className="text-white/50 text-sm leading-loose mb-8">
                Reliability isn't just about the product; it's about the
                partner. We offer clients total peace of mind regarding project
                continuity and supply chain security through our expansive
                physical infrastructure.
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <Activity className="text-[#BF092F] animate-pulse" size={18} />
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 leading-tight">
                  Optimized for Parallel Production <br /> delivering hyperscale
                  DC packages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingScale;