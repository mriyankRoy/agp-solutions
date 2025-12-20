import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Zap, ShieldCheck } from "lucide-react";

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
    <section
      className="relative w-full isolate overflow-hidden bg-white flex items-center border-b border-black"
      style={{ minHeight: "calc(100vh - 400px)" }}
    >
      {/* 2. The Diagonals - Styled to match FacilitiesPage accents */}
      <div
        className="absolute -z-10 bg-[#BF092F]"
        style={{
          top: "-10%",
          left: "66.7%",
          width: "45px",
          height: "160%",
          transform: "rotate(20deg)",
        }}
      />
      <div
        className="absolute -z-10 bg-[#44444E]"
        style={{
          top: "-10%",
          left: "68.6%",
          width: "45px",
          height: "160%",
          transform: "rotate(20deg)",
        }}
      />

      {/* ───────── CONTENT (Z-INDEX POSITIVE) ───────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Tagline */}
        <div className="flex items-center gap-3 group cursor-default">
          <div className="w-8 h-8 bg-[#BF092F] flex items-center justify-center text-white">
            <ShieldCheck size={16} />
          </div>
          <span className="text-[12px] font-black text-[#44444E] uppercase tracking-[0.4em]">
            Heavy Engineering & Power Systems
          </span>
        </div>

        {/* HERO HEADING - Now clearly on top of the grey div */}
        <div className="relative h-[130px] sm:h-[180px] lg:h-[240px]">
          {heroSentences.map((text, index) => (
            <h1
              key={index}
              className={`absolute inset-0 flex items-center transition-all duration-1000 ease-in-out font-black uppercase
                text-5xl sm:text-7xl lg:text-8xl xl:text-8xl tracking-tighter leading-[0.85]
                ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0 text-[#44444E]"
                    : "opacity-0 -translate-x-12 text-gray-200"
                }
              `}
              style={{
                textShadow:
                  index === currentIndex
                    ? "10px 10px 0px rgba(0,0,0,0.02)"
                    : "none",
              }}
            >
              {text}
            </h1>
          ))}
        </div>

        {/* SUBTEXT */}
        <div className="max-w-2xl">
          <p className="text-lg sm:text-xl font-bold text-[#44444E]/80 uppercase leading-snug border-l-4 border-[#BF092F] pl-6">
            Supplying high-performance{" "}
            <span className="text-[#44444E]">generator components</span> and
            fully customized{" "}
            <span className="text-[#BF092F]">containerized solutions</span> for
            global mission-critical infrastructure.
          </p>
        </div>

        {/* CTA BUTTONS - Industrial Sharp Style */}
        <div className="mt-12 flex flex-wrap gap-5">
          <Link
            to="/projects"
            className="group relative flex items-center gap-6 px-10 py-5 bg-[#44444E] text-white overflow-hidden transition-all hover:bg-[#BF092F]"
          >
            <span className="relative z-10 text-[12px] font-black uppercase tracking-[0.2em]">
              View Projects
            </span>
            <ArrowRight
              size={18}
              className="relative z-10 transition-transform group-hover:translate-x-2"
            />
          </Link>

          <Link
            to="/about"
            className="group flex items-center gap-6 px-10 py-5 border-2 border-[#44444E] text-[#44444E] transition-all hover:bg-[#44444E] hover:text-white"
          >
            <span className="text-[12px] font-black uppercase tracking-[0.2em]">
              Our Facility
            </span>
            <Zap
              size={16}
              className="text-[#BF092F] group-hover:animate-pulse"
            />
          </Link>
        </div>
      </div>

    
    </section>
  );
};

export default HomePageSection1;
