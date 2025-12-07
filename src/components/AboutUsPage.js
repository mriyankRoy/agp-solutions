// Updated AboutUsPage with design language matching ContactPage
// Placeholder comments added where container images should be placed
import React, { useState, useEffect } from "react";
import {
  Factory,
  Truck,
  Shield,
  Briefcase,
  Heart,
  Zap,
  Award,
  Anchor,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import SkillsShowcase from "./SkillsShowcase";

export default function AboutUsPage() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  const PROCESS = [
    {
      icon: Briefcase,
      title: "Consultation & Design",
      text: "Translating your requirements into precise container engineering specs.",
    },
    {
      icon: Factory,
      title: "Global Manufacturing",
      text: "Built by our international engineering partners with world-class QA.",
    },
    {
      icon: Truck,
      title: "Logistics & Delivery",
      text: "Full freight, customs, and last-mile delivery management.",
    },
    {
      icon: Shield,
      title: "Quality & FAT",
      text: "Comprehensive FAT testing and compliance checks.",
    },
    {
      icon: Heart,
      title: "After-Sales Support",
      text: "Warranty handling, spare parts, and technical guidance.",
    },
  ];

  const FEATURES = [
    {
      icon: Zap,
      title: "Premium Components",
      text: "Industry-leading engines and alternators from Cummins, Perkins, Volvo, Stamford, Leroy Somer.",
    },
    {
      icon: Award,
      title: "Custom Engineering",
      text: "Tailored access panels, acoustic treatments, control systems, and sync options.",
    },
    {
      icon: Anchor,
      title: "Extreme Durability",
      text: "Built for harsh industrial, coastal, and high-temperature environments.",
    },
  ];

  return (
    <div className="pt-40 min-h-screen px-6 lg:px-20 py-32 relative overflow-hidden">
      {/* Background grid + radial gradient */}
      <div
        className="-z-10 absolute inset-0 
       bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]
       bg-[size:40px_40px]
       before:content-[''] before:absolute before:inset-0 
       before:bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.05),transparent_60%)]
  "
      ></div>
      {/* FIXED: Gradient blob div closed properly */}
      <div className="absolute -top-44 -right-60 h-60 w-xl transform-gpu md:right-0 bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] rotate-[-10deg] rounded-full blur-3xl"></div>
      {/* HEADER */}
      {/* HEADER + RIGHT IMAGE */}
      <section
        className={`p-7 relative transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT — TEXT */}
          <div>
            <h1 className="text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
              ABOUT US
            </h1>

            <p className="mt-3 text-lg font-medium text-gray-500 leading-relaxed max-w-xl">
              Art GenPower Solutions delivers premium containerized power
              systems engineered for durability, performance, and reliability
              across the UK and Europe.
            </p>
          </div>

          {/* RIGHT — BIG CONTAINER IMAGE */}
          <div>
            <img
              src="https://res.cloudinary.com/dc912sjxj/image/upload/v1764892396/Container_8_gb7qwa-removebg-preview_w3vlp1.png" // REPLACE WITH YOUR CONTAINER IMAGE
              alt="Container System"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <SkillsShowcase />

      {/* INTRO GRID */}
      <div className="pt-40 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20 relative">
        {/* LEFT – MISSION BLOCK */}
        <div
          className="rounded-2xl border border-neutral-200/60 bg-white/70 backdrop-blur-lg p-10 shadow-xl
        bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:24px_24px]"
        >
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-white border border-orange-300 rounded-full shadow-md">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-orange-700 text-sm font-semibold uppercase tracking-widest">
              Who We Are
            </span>
          </div>

          <h2 className="text-4xl font-bold text-neutral-900 leading-tight mb-6">
            Engineering Power. Delivering Reliability.
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            We specialise in the supply of bespoke generator containers,
            E-Houses, power modules, and engineered enclosures manufactured
            through our global partners and delivered with UK-level quality
            assurance.
          </p>

          <div className="space-y-4">
            {[
              "UK-Based Presence",
              "Global Manufacturing Scale",
              "Competitive Pricing & Fast Delivery",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 mt-1" />
                <span className="font-medium text-neutral-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT – IMAGE PANEL */}
        <div
          className="rounded-2xl border border-neutral-200/60 bg-white/70 backdrop-blur-lg p-10 shadow-xl
        bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:24px_24px] flex items-center justify-center"
        >
          {/* PLACEHOLDER FOR MAIN CONTAINER IMAGE */}
          <div className="w-full h-80 bg-gray-300 rounded-xl flex items-center justify-center text-gray-600 font-semibold text-center p-6">
            [ MAIN CONTAINER IMAGE HERE ]
          </div>
        </div>
      </div>

      {/* PROCESS SECTION */}
      <div
        className="mt-24 rounded-2xl border border-neutral-200/60 bg-white/70 backdrop-blur-lg p-10 shadow-xl
      bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:24px_24px] relative"
      >
        <h2 className="text-3xl font-bold text-neutral-900 mb-10 text-center">
          Our Seamless Delivery Process
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {PROCESS.map((step, i) => (
            <div
              key={i}
              className="p-6 rounded-xl shadow-md border border-neutral-200 bg-white hover:shadow-lg transition"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-cyan-500 flex items-center justify-center mb-4 shadow-md">
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES + IMAGES */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-24 relative">
        {/* FEATURES */}
        <div
          className="rounded-2xl border border-neutral-200/60 bg-white/70 backdrop-blur-lg p-10 shadow-xl
        bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:24px_24px]"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">
            What Makes Our Containers Exceptional
          </h2>
          <div className="space-y-6">
            {FEATURES.map((f, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 border-2 border-cyan-500/20 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">
                    {f.title}
                  </h3>
                  <p className="text-sm text-neutral-600">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="h-96 rounded-2xl border border-neutral-200 bg-gray-300 shadow-xl flex items-center justify-center text-gray-600 font-semibold text-center p-6">
          [ SECONDARY CONTAINER IMAGE HERE ]
        </div>

        {/* INDUSTRY IMAGE */}
        <div className="h-96 rounded-2xl border border-neutral-200 bg-gray-300 shadow-xl flex items-center justify-center text-gray-600 font-semibold text-center p-6">
          [ THIRD CONTAINER / SITE IMAGE HERE ]
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="mt-24 py-20 bg-gray-900 rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/70"></div>

        <div className="relative text-center px-6 lg:px-0">
          <h2 className="text-4xl font-black text-white mb-6">
            Ready to Build Your Custom Container?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
            Talk to our engineering team to get a tailored, high-performance
            power solution.
          </p>

          <a
            href="mailto:info@artgenpower.com"
            className="inline-block px-14 py-5 text-xl font-bold rounded-full bg-gradient-to-r from-orange-500 to-cyan-500 text-white shadow-xl hover:scale-105 transition"
          >
            Get a Custom Quote
          </a>
        </div>
      </div>
    </div>
  );
}
