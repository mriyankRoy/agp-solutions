import React, { useEffect, useRef, useState } from "react";
import { cardsData } from "../utils/cardsData";

export default function GraphiteScrollingFeatures() {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progresses, setProgresses] = useState(() =>
    Array(cardsData.length).fill(0)
  );
  const [fromAngle, setFromAngle] = useState(0);
  const [containerHeight, setContainerHeight] = useState(3600);

  useEffect(() => {
    const base = Math.max(window.innerHeight * 3.6, 3600);
    const dynamic = Math.round(cardsData.length * (window.innerHeight * 0.95));
    setContainerHeight(Math.max(base, dynamic));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId = null;

    function onScroll() {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const top = Math.max(0, -rect.top);
        const scrollable = Math.max(1, rect.height - window.innerHeight);
        const pct = Math.min(1, Math.max(0, top / scrollable));

        const idx = Math.min(
          cardsData.length - 1,
          Math.floor(pct * cardsData.length)
        );
        setActiveIndex(idx);

        const itemSize = 1 / cardsData.length;
        const newProgresses = cardsData.map((_, i) => {
          const start = i * itemSize;
          const end = start + itemSize;
          const local = (pct - start) / (end - start);
          return Math.round(Math.max(0, Math.min(1, local)) * 10000) / 100;
        });
        setProgresses(newProgresses);

        const angle = Math.round((pct * 360 + idx * 12) % 360);
        setFromAngle(angle);
      });
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [containerRef]);

  function activateCard(i) {
    const rect = containerRef.current.getBoundingClientRect();
    const scrollable = rect.height - window.innerHeight;
    const targetPct = i / cardsData.length;
    const targetScroll =
      containerRef.current.offsetTop + targetPct * scrollable;

    window.scrollTo({
      top: Math.max(0, targetScroll - 24),
      behavior: "smooth",
    });
  }

  return (
    <section className="flex flex-col py-16 px-6 md:px-16 lg:px-24">
      <div
        ref={containerRef}
        className="w-full relative"
        style={{
          height: `${containerHeight}px`,
          ["--from-angle"]: `${fromAngle}deg`,
        }}
      >
        {" "}
        <div
          ref={stickyRef}
          className="sticky top-0 h-screen flex items-center justify-center"
        >
          {" "}
          <div className="flex flex-col md:flex-row gap-7 w-full max-w-[1280px] px-4 sm:px-6">
            {/* LEFT COLUMN (Preview) */}
            <div className="grow mt-10 md:mt-0 px-4 sm:px-6 py-6 sm:py-10 rounded-xl border border-neutral-800 bg-neutral-950/60 backdrop-blur-sm relative overflow-hidden shadow-[0_0_40px_-12px_rgba(0,0,0,0.7)]">
              {/* Dotted Overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.18]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.22) 1px, transparent 1px)",
                  backgroundSize: "14px 14px",
                }}
              />

              {/* Preview Container */}
              <div className="flex justify-center items-center h-full relative">
                <div className="relative" style={{ height: 270, width: 450 }}>
                  {/* Title Under Image */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full text-sm text-neutral-300 pt-4">
                    {cardsData[activeIndex]?.title}
                  </div>

                  {/* Glow */}
                  <div
                    className="absolute inset-0 blur-[30px] opacity-20 transition-all duration-700"
                    style={{
                      background:
                        "conic-gradient(from var(--from-angle), #ff4d00, #ff8a00, #ffd300, #00c853, #00bcd4, #3f51b5, #9c27b0, #ff4d00)",
                      mixBlendMode: "screen",
                    }}
                  />

                  {/* Glass Frame */}
                  <div className="absolute inset-0 rounded-lg border border-neutral-700/60 bg-neutral-900/60 backdrop-blur-md overflow-hidden shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)]">
                    {cardsData.map((c, i) => {
                      const visible = i === activeIndex;
                      return (
                        <div
                          key={i}
                          className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-all duration-500"
                          style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? "scale(1)" : "scale(1.04)",
                            backgroundImage: `url(${c.img})`,
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* RIGHT COLUMN */}
            <div className="flex-0 w-full md:flex-[1_1_42%] flex flex-col gap-4">
              {cardsData.map((c, i) => {
                const isActive = i === activeIndex;
                const progress = progresses[i] ?? 0;
                return (
                  <div
                    key={i}
                    role="button"
                    tabIndex={0}
                    onClick={() => activateCard(i)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") activateCard(i);
                    }}
                    data-active={isActive}
                    className={`group px-4 py-4 sm:px-6 sm:py-5 border border-neutral-800 rounded-xl flex gap-4 relative transition-all duration-300 cursor-pointer shadow-sm
                  ${
                    isActive
                      ? "bg-neutral-900 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)] scale-[1.03] border-neutral-700"
                      : "bg-neutral-950 hover:bg-neutral-900/60 hover:scale-[1.01]"
                  }
                `}
                  >
                    {/* Vertical Progress Bar */}
                    <div className="absolute left-3 top-3 bottom-3 w-[3px] bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="w-full bg-neutral-300/60 rounded-full transition-all duration-500 ease-out"
                        style={{ height: `${progress}%` }}
                      />
                    </div>

                    <div className="flex flex-col w-full">
                      <h3
                        className={`font-semibold transition-colors duration-200 text-pretty ${
                          isActive ? "text-white" : "text-neutral-300"
                        }`}
                      >
                        {c.title}
                      </h3>

                      <div
                        className={`overflow-hidden transition-all duration-500 text-neutral-400 ${
                          isActive ? "h-auto mt-3 opacity-100" : "h-0 opacity-0"
                        }`}
                      >
                        <p className="leading-snug text-[0.95rem]">{c.desc}</p>

                        <a
                          href={c.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-orange-400 mt-2 text-sm inline-flex items-center gap-1 opacity-80 hover:opacity-100"
                        >
                          Learn more →
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
