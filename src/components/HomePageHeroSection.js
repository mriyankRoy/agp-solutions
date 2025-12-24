import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Zap, Activity, PackageSearch } from "lucide-react";

const heroSentences = [
  "Your Global Partner for Generator Needs.",
  "Delivering Top Container Solutions.",
];

const HomePageSection1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSentences.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* 1. FLOATING HERO WRAPPER (Matches ProductPage) */}
      <div className="pt-22 px-2 md:px-2 pb-12">
        <header className="relative min-h-[550px] md:h-[70vh] w-full flex items-center bg-[#44444E] overflow-hidden rounded-2xl shadow-2xl">
          
          {/* A. Background Texture & Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

          {/* B. THE TWO DIVS (Restored & Synchronized)
              Placed at z-10 so they are behind the text but visible over the dark background.
          */}
          <div
            className="absolute bg-[#BF092F] z-10 opacity-80"
            style={{
              top: "-20%",
              left: "65%",
              width: "45px",
              height: "160%",
              transform: "rotate(20deg)",
            }}
          />
          <div
            className="absolute bg-white/10 z-10" // Using white/10 for a "ghost" grey bar effect on dark bg
            style={{
              top: "-20%",
              left: "68.5%",
              width: "45px",
              height: "160%",
              transform: "rotate(20deg)",
            }}
          />

          {/* C. Large Floating Background Icon (ProductPage Style) */}
          <div className="absolute top-0 right-0 p-4 opacity-5 z-10 translate-x-10 -translate-y-10">
            <PackageSearch size={500} className="text-white rotate-12" />
          </div>

          {/* D. Main Content Container */}
          <div className="container mx-auto px-6 md:px-12 relative z-20">
            
            {/* Top Badge */}
            <div className="flex items-center gap-3 mb-8">
               <div className="bg-[#BF092F] text-white px-4 py-1.5 rounded-2xl shadow-lg shadow-[#BF092F]/20 flex items-center gap-2">
                  <Activity size={14} className="animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">System_Live</span>
               </div>
               <span className="text-white/30 text-[10px] uppercase tracking-[0.4em] font-bold hidden sm:block">
                 Heavy Engineering Interface
               </span>
            </div>

            {/* HERO HEADING - Allignment and Style Sync */}
            <div className="relative w-full h-[150px] sm:h-[200px] lg:h-[260px] flex items-center mb-6">
              {heroSentences.map((text, index) => (
                <h1
                  key={index}
                  className={`absolute left-0 w-full transition-all duration-1000 ease-in-out font-semibold
                    text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.1] tracking-tight max-w-5xl
                    ${
                      index === currentIndex
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }
                  `}
                >
                  {text.split(' ').map((word, i) => {
                    const isHighlight = word.toLowerCase().includes('container') || word.toLowerCase().includes('global');
                    return (
                      <span key={i} className={isHighlight ? "text-[#BF092F]" : ""}>
                        {word}{" "}
                      </span>
                    );
                  })}
                </h1>
              ))}
            </div>

            {/* SUBTEXT */}
            <p className="text-white/60 text-lg md:text-xl tracking-wide leading-relaxed max-w-3xl mb-12 border-l-2 border-[#BF092F] pl-6">
              Accessing the unified database for <span className="text-white font-bold">high-performance systems</span> and bespoke power solutions globally.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-6">
              <Link
                to="/projects"
                className="rounded-2xl group relative flex items-center gap-8 px-10 py-5 bg-[#BF092F] text-white overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#BF092F]/20"
              >
                <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.3em]">
                  View Projects
                </span>
                <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-2" />
              </Link>

              <Link
                to="/about"
                className="rounded-2xl group flex items-center gap-8 px-10 py-5 border border-white/20 text-white transition-all hover:bg-white/10 hover:border-white/40"
              >
                <span className="text-[11px] font-black uppercase tracking-[0.3em]">
                  Our Facility
                </span>
                <Zap size={16} className="text-[#BF092F]" />
              </Link>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};

export default HomePageSection1;