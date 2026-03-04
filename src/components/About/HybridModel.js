import React, { useRef, useEffect, useState } from "react";
import { Zap, Globe, ShieldCheck, Activity } from "lucide-react";

const HybridModel = () => {
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

  // Search-friendly reveal logic: uses opacity-0 to translate-y for a clean reveal
  // but keeps text indexable by the browser's search function.
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
        
        {/* LEFT COLUMN: THE CONCEPT BOX - Animated */}
        <div className={`lg:col-span-5 relative group h-full ${revealClass(hasRevealed)}`}>
          <div className="absolute -inset-1 bg-gradient-to-r from-[#BF092F] to-[#44444E] rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          <div className="relative h-full bg-[#44444E] p-10 rounded-2xl text-white shadow-2xl overflow-hidden flex flex-col justify-center">
            <Globe
              className="absolute -right-12 -bottom-12 text-white/5 group-hover:text-[#BF092F]/10 transition-colors duration-700"
              size={280}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-6 w-1 bg-[#BF092F]" />
                <h2 className="text-[10px] uppercase font-black tracking-[0.4em] text-white/60">
                  Strategic Framework
                </h2>
              </div>

              <h4 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter leading-none mb-6">
                The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                  Hybrid
                </span>{" "}
                <br />
                <span className="text-[#BF092F]">Supply</span> Model
              </h4>

              <p className="text-white/50 text-sm leading-loose mb-8">
                In an industry where capacity and cost often conflict with
                quality, Art GenPower Solutions Limited eliminates the
                compromise. Through our strategic partnership with Engineering
                Services International{" "}
                <span className="text-white font-bold italic text-base">
                  ESI
                </span>
                , we operate a seamless supply chain that serves clients across
                Europe, Africa, and the Middle East (EAME).
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <Activity className="text-[#BF092F] animate-pulse" size={18} />
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 leading-tight">
                  Efficiency Optimized
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: THE DUAL TERMINALS */}
        <div className="lg:col-span-7 flex flex-col justify-center gap-6">
          
          {/* UK TERMINAL - Animated with delay */}
          <div className={`group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#BF092F]/20 transition-all duration-500 overflow-hidden ${revealClass(hasRevealed, "duration-1000 delay-200")}`}>
            <div className="absolute top-0 right-0 p-8 text-gray-50 group-hover:text-[#BF092F]/5 transition-colors">
              <ShieldCheck size={120} />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
              <div className="p-5 bg-gray-50 rounded-2xl group-hover:bg-[#BF092F] transition-colors duration-500">
                <ShieldCheck
                  className="text-[#44444E] group-hover:text-white"
                  size={32}
                />
              </div>
              <div className="flex-grow">
                <h5 className="text-lg font-black text-[#44444E] uppercase tracking-tight mb-2">
                  UK Commercial Leadership
                </h5>
                <p className="text-[11px] text-gray-500 font-bold uppercase leading-relaxed tracking-wider max-w-md">
                  Our Leicester headquarters drives project management,
                  commercial strategy, and client support, ensuring you deal
                  with a
                  <span className="text-[#44444E]">
                    {" "}
                    UK entity governed by British engineering standards.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* GLOBAL TERMINAL - Animated with further delay */}
          <div className={`group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#BF092F]/20 transition-all duration-500 overflow-hidden ${revealClass(hasRevealed, "duration-1000 delay-400")}`}>
            <div className="absolute top-0 right-0 p-8 text-gray-50 group-hover:text-[#BF092F]/5 transition-colors">
              <Zap size={120} />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
              <div className="p-5 bg-gray-50 rounded-2xl group-hover:bg-[#BF092F] transition-colors duration-500">
                <Zap
                  className="text-[#44444E] group-hover:text-white"
                  size={32}
                />
              </div>
              <div className="flex-grow">
                <h5 className="text-lg font-black text-[#44444E] uppercase tracking-tight mb-2">
                  UAE Production Scale
                </h5>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-black text-[#BF092F]">
                    41,000
                  </span>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    SQM Footprint
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 font-bold uppercase leading-relaxed tracking-wider max-w-md">
                  We leverage strategic industrial hubs at{" "}
                  <span className="text-[#44444E]">
                    Hamriyah, Sajja, and Jebel Ali
                  </span>{" "}
                  to handle hyperscale projects with rapid
                  turnaround times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HybridModel;