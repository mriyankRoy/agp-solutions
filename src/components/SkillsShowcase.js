import React, { useState, useEffect } from "react";
import { skills } from "../utils/skills";

export default function SkillsTabs() {
  const [selected, setSelected] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    setImageLoaded(false);
    const timer = setTimeout(() => setImageLoaded(true), 50);
    return () => clearTimeout(timer);
  }, [selected]);

  const firstHalf = skills.slice(0, 5);
  const secondHalf = skills.slice(5);

  const renderTab = (skill, index, actualIndex) => (
    <button
      key={actualIndex}
      onClick={() => setSelected(actualIndex)}
      className={`group relative px-4 py-3 text-left rounded-2xl transition-all duration-500 overflow-hidden z-10 ${
        selected === actualIndex
          ? "bg-white text-blue-900 shadow-2xl"
          : "text-black hover:text-gray-500 hover:bg-white/10 cursor-pointer"
      }`}
      style={{
        transitionDelay: `${actualIndex * 50}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      {/* Animated gradient background for selected */}
      {selected === actualIndex && (
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white animate-pulse"></div>
      )}

      {/* Hover glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl transition-opacity duration-500 ${
          selected === actualIndex
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-50"
        }`}
      ></div>

      <h3
        className={`font-bold relative z-10 transition-all duration-300 ${
          selected === actualIndex ? "text-base" : "text-sm"
        }`}
      >
        {skill.title}
      </h3>

      {/* Active indicator line */}
      {selected === actualIndex && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-2/3 bg-gradient-to-b from-blue-600 to-purple-600 rounded-r-full"></div>
      )}
    </button>
  );

  return (
    <section className="rounded-4xl relative overflow-hidden  py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div
            className={`font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400 inline-block px-4 py-1 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full  mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            Our Expertise
          </div>
          <h2
            className={`mt-2 text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Technical Skills & Core Expertise
          </h2>
          <p
            className={`mt-6 max-w-3xl text-2xl font-medium text-gray-500  mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Advanced engineering design capabilities powered by professional
            software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Tabs */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            {firstHalf.map((skill, index) => renderTab(skill, index, index))}
          </div>

          {/* Center Image + Description */}
          <div className="lg:col-span-8 relative">
            {/* Image Container with Advanced Effects */}
            <div className="relative group">
              {/* Glow effect behind image */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>

              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                {/* Loading shimmer effect */}
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                )}

                <img
                  src={skills[selected].image}
                  alt={skills[selected].title}
                  className={`w-full object-cover transition-all duration-700 ${
                    imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  } group-hover:scale-105`}
                  onLoad={() => setImageLoaded(true)}
                />

                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl border-2 border-blue-400/0 group-hover:border-blue-400/50 transition-all duration-500"></div>
              </div>
            </div>

            {/* Description Card */}
            <div
              className={`mt-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl transition-all duration-700 ${
                imageLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Icon decoration */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                <div className="flex-1">
                  <h4 className="text-xl font-medium mb-2 tracking-tighter text-pretty text-gray-950">
                    {skills[selected].title}
                  </h4>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {skills[selected].description}
                  </p>
                </div>
              </div>

              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Right Tabs */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            {secondHalf.map((skill, index) =>
              renderTab(skill, index + 5, index + 5)
            )}
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(40)].map((_, i) => (
            <div
              key={"layer1-" + i}
              className="absolute w-1.5 h-1.5 bg-blue-400/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            ></div>
          ))}

          {[...Array(25)].map((_, i) => (
            <div
              key={"layer2-" + i}
              className="absolute w-2 h-2 bg-blue-300/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            ></div>
          ))}

          {[...Array(15)].map((_, i) => (
            <div
              key={"layer3-" + i}
              className="absolute w-3 h-3 bg-purple-400/40 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 1.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
