import { useEffect, useState } from "react";
import { Link } from "react-router";

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
      className="border-black border-2 relative w-full isolate overflow-hidden shadow-xl"
      style={{ minHeight: "calc(100vh - 150px)" }} // leave space for header
    >
      {/* ───────── BACKGROUND LAYERS ───────── */}

      {/* Left Half - White */}
      <div className="absolute inset-0 -z-20 bg-white" />

      {/* Right Half - White */}
      <div className="absolute top-0 right-0 h-full w-1/2 -z-20 bg-white" />

      {/* Thin RED Diagonal Strip */}
      <div
        className="absolute -z-10"
        style={{
          top: "-10%",
          left: "80%", // moved right
          width: "2.5%", // slightly thicker so edges can touch
          height: "160%",
          background: "#CF0F0F",
          transform: "rotate(20deg)",
          transformOrigin: "top left",
        }}
      />

      {/* Thin GREY Diagonal Strip — touching the red one */}
      <div
        className="absolute -z-10"
        style={{
          top: "-10%",
          left: "82.5%", // EXACTLY aligned to touch red strip after rotation
          width: "2.5%", // same width for symmetry
          height: "160%",
          background: "#44444E",
          transform: "rotate(20deg)",
          transformOrigin: "top left",
        }}
      />

      {/* Container */}
      <div className="py-50 flex flex-col justify-center max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
        {/* HERO HEADING */}
        <h1
          className="
            relative text-center sm:text-left
            font-display font-medium tracking-tight
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
            leading-[1.1] sm:leading-[1.05] lg:leading-[1.0]
            text-[#CF0F0F]
            min-h-[100px] sm:min-h-[150px] lg:min-h-[180px]
          "
        >
          {heroSentences.map((text, index) => (
            <span
              key={index}
              className={`absolute inset-0 flex justify-center sm:justify-start items-center transition-opacity duration-1000 ease-in-out
                ${index === currentIndex ? "opacity-100" : "opacity-0"}
              `}
            >
              {text}
            </span>
          ))}
        </h1>

        {/* SUBTEXT */}
        <p
          className="pt-10 
            mt-6 sm:mt-8 max-w-lg text-center sm:text-left
            text-lg sm:text-xl md:text-2xl font-medium
            text-[#44444E]
            drop-shadow-[0_2px_8px_rgba(255,255,255,0.18)]
          "
        >
          Supplying high-performance generator parts, accessories, and complete
          containerized solutions—delivered with speed, precision, and global
          reach.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
          <Link
            to="/projects"
            className="relative inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-white
              bg-[#44444E] border border-[#CF0F0F] shadow-[0_0_15px_-2px_rgba(255,59,63,0.3)]
              backdrop-blur-md transition-all duration-300
              hover:bg-[#CF0F0F] hover:text-white hover:border-[#CF0F0F]
              hover:shadow-[0_0_25px_3px_rgba(255,59,63,0.55)]
              hover:-translate-y-1 hover:scale-[1.04] active:scale-[0.98]"
          >
            Delivered Projects
          </Link>

          <Link
            to="/about"
            className="relative inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-white
              bg-[#44444E] border border-[#CF0F0F] shadow-[0_0_15px_-2px_rgba(255,59,63,0.3)]
              backdrop-blur-md transition-all duration-300
              hover:bg-[#CF0F0F] hover:text-white hover:border-[#CF0F0F]
              hover:shadow-[0_0_25px_3px_rgba(255,59,63,0.55)]
              hover:-translate-y-1 hover:scale-[1.04] active:scale-[0.98]"
          >
            Our Facilities
          </Link>
        </div>
      </div>

      {/* Soft radial glow */}
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,white,transparent)] bg-white opacity-40 pointer-events-none"></div>
    </section>
  );
};

export default HomePageSection1;
