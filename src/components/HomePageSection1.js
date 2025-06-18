import { useEffect, useState } from "react";

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
    // Outer div for overall page margin, ensuring the section doesn't touch screen edges
    <div className="mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-8">
      <section className="relative rounded-3xl sm:rounded-4xl isolate overflow-hidden py-24 sm:py-32 bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] sm:bg-linear-145 shadow-xl">
        <div className="max-w-7xl mx-auto text-left px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12">
          <h1
            className="relative
                       h-[80px] xs:h-[100px] sm:h-[120px] md:h-[150px] lg:h-[180px] xl:h-[200px]
                       font-display font-medium text-gray-950
                       text-4xl/[1.1] xs:text-5xl/[1.05] sm:text-6xl/[1.0] md:text-7xl/[0.95] lg:text-8xl/[0.9] xl:text-9xl/[0.85]
                       break-words hyphens-auto"
          >
            {heroSentences.map((text, index) => (
              <span
                key={index}
                className={`absolute inset-0 flex items-center transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                {text}
              </span>
            ))}
          </h1>

          {/* Sub-paragraph - Optimized for responsiveness */}
          <p className="mt-10 max-w-xl text-lg/7 font-medium text-gray-950/75 sm:text-xl/8 md:text-2xl/8 leading-relaxed">
            Supplying high-performance generator parts, accessories, and
            complete containerized solutions—delivered with speed, precision,
            and global reach.
          </p>

          {/* Call-to-action buttons - Spacing refined */}
          <div className="mt-10 flex flex-col sm:flex-row justify-start gap-3 sm:gap-4">
            <a
              href="#"
              className="text-center inline-block rounded-full bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Get a Quote
            </a>
            {/* Redesigned "About Us" button for better integration and visual appeal */}
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full
                         border border-gray-300 bg-white/30 backdrop-blur-sm
                         px-6 py-3 text-base font-medium text-gray-900 shadow-md
                         transition-all duration-300 hover:border-gray-400 hover:bg-white/50
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:scale-105"
            >
              About Us
            </a>
          </div>
        </div>

        {/* Soft radial white glow overlay */}
        <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,white,transparent)] bg-white opacity-40 pointer-events-none"></div>
      </section>
    </div>
  );
};

export default HomePageSection1;
