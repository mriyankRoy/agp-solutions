import React, { useEffect, useRef, useState } from "react";
import { facilities } from "../utils/facilities";

export default function GraphiteScrollingFeatures() {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progresses, setProgresses] = useState(() =>
    Array(facilities.length).fill(0)
  );
  const [fromAngle, setFromAngle] = useState(0);
  const [containerHeight, setContainerHeight] = useState(3600);

  useEffect(() => {
    // dynamic container height so we have a long scroll area
    const base = Math.max(window.innerHeight * 3.6, 3600);
    const dynamic = Math.round(facilities.length * (window.innerHeight * 0.95));
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

        // which card should be active
        const idx = Math.min(
          facilities.length - 1,
          Math.floor(pct * facilities.length)
        );
        setActiveIndex(idx);

        // calculate per-item progress (0-100)
        const itemSize = 1 / facilities.length;
        const newProgresses = facilities.map((_, i) => {
          const start = i * itemSize;
          const end = start + itemSize;
          const local = (pct - start) / (end - start);
          return Math.round(Math.max(0, Math.min(1, local)) * 10000) / 100;
        });
        setProgresses(newProgresses);

        // spinning conic gradient angle (makes glow animate with scroll)
        const angle = Math.round((pct * 360 + idx * 12) % 360);
        setFromAngle(angle);
      });
    }

    // run once and attach listeners
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [containerRef]);

  // click to activate: scroll to the center of that item's section so the onScroll mapping picks it
  function activateCard(i) {
    const rect = containerRef.current.getBoundingClientRect();
    const scrollable = Math.max(0, rect.height - window.innerHeight);
    // center the clicked card in its segment so Math.floor(pct * n) -> i
    const targetPct = (i + 0.5) / facilities.length;
    const targetScroll =
      containerRef.current.offsetTop + targetPct * scrollable;

    window.scrollTo({
      top: Math.max(0, Math.round(targetScroll - 24)),
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
        <div
          ref={stickyRef}
          className="sticky top-0 h-screen flex items-center justify-center"
        >
          <div className="flex flex-col md:flex-row gap-7 w-full max-w-[1280px] px-4 sm:px-6">
            {/* LEFT COLUMN (Preview) */}
            <div className="grow mt-10 md:mt-0 px-4 sm:px-6 py-6 sm:py-10 rounded-2xl border border-neutral-800 bg-gradient-to-r from-[#B45253] to-[#44444E] backdrop-blur-sm relative overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.75)]">
              {/* Dotted Overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.12] rounded-2xl"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 1px)",
                  backgroundSize: "14px 14px",
                }}
              />

              {/* Animated Conic Glow (uses CSS variable fromAngle) */}
              <div
                aria-hidden
                className="absolute inset-[-20%] blur-[36px] opacity-70 transition-all duration-700 bg-gradient-to-r"
              />

              {/* Glass Frame */}
              <div className="relative flex justify-center items-center h-full">
                <div className="relative px-4 py-8 mt-12 rounded-lg border grow-1 shrink-1 lg:basis-[60%] basis-[40%] md:mt-0 md:p-12 inset-shadow-[0_0_12px_var(--color-neutral-800)] bg-neutral-950 border-neutral-800 h-full w-full relative" style={{ height: 320, width: 540 }}>
                  {/* Title Under Image */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full text-base text-neutral-200 font-semibold py-7">
                    {facilities[activeIndex]?.title}
                  </div>

                  {/* Outer glowing ring */}
                  <div className="absolute -inset-2 rounded-2xl pointer-events-none">
                    <div
                      className="w-full h-full rounded-2xl border border-transparent/0"
                      style={{
                        boxShadow:
                          "0 8px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.02)",
                      }}
                    />
                  </div>

                  {/* Glass viewport */}
                  <div className="absolute inset-0 rounded-2xl border border-neutral-700/40 bg-neutral-900/50 backdrop-blur-md overflow-hidden shadow-[0_18px_60px_-24px_rgba(0,0,0,0.7)]">
                    {facilities.map((c, i) => {
                      const visible = i === activeIndex;
                      return (
                        <div
                          key={i}
                          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out"
                          style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? "scale(1)" : "scale(1.06)",
                            filter: visible
                              ? "saturate(1) contrast(1)"
                              : "grayscale(0.7) brightness(.8)",
                            backgroundImage: `url(${c.facilityImg[0]})`,
                          }}
                        />
                      );
                    })}
                  </div>

                  {/* subtle foreground shine */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-0 top-0 w-2/3 h-full bg-gradient-to-r from-white/6 to-transparent opacity-6 mix-blend-overlay" />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex-0 w-full md:flex-[1_1_42%] flex flex-col gap-4">
              {facilities.map((c, i) => {
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
                    aria-pressed={isActive}
                    className={`group px-4 py-4 sm:px-6 sm:py-5 border rounded-xl flex gap-4 relative transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-orange-400/20
                      ${
                        isActive
                          ? "bg-gradient-to-b from-neutral-900 to-neutral-800 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.8)] scale-[1.03] border-neutral-700"
                          : "bg-neutral-950 hover:bg-neutral-900/60 hover:scale-[1.01] border-neutral-800"
                      }
                    `}
                  >
                    {/* Vertical Progress Bar + percentage */}
                    <div className="absolute left-3 top-3 bottom-3 w-[4px] bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="w-full rounded-full transition-all duration-500 ease-out"
                        style={{ height: `${progress}%` }}
                      />
                    </div>

                    <div className="flex flex-col w-full">
                      <div className="flex items-start justify-between gap-3">
                        <h3
                          className={`py-5 font-semibold transition-colors duration-200 text-pretty ${
                            isActive ? "text-white" : "text-neutral-300"
                          }`}
                        >
                          {c.title}
                        </h3>

                        <div className="flex items-center gap-3 shrink-0">
                          {/* Circular mini-progress */}
                          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-900/40 border border-neutral-800">
                            <div className="text-[0.82rem] font-medium text-neutral-200">
                              {Math.round(progress)}%
                            </div>
                          </div>
                        </div>
                      </div>

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
                          className="text-orange-400 mt-2 text-sm inline-flex items-center gap-1 opacity-90 hover:opacity-100"
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
