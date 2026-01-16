import React, { useState, useEffect } from "react";
import {
  Factory,
  ShieldCheck,
  Zap,
  Cpu,
  Home,
  Info,
  Users,
  Cpu,
  ChevronRight,
  ArrowRight,
  Box,
  ExternalLink,
  MapPin,
  Activity,
  Globe,
  PackageSearch,
} from "lucide-react";
import { useNavigate } from "react-router";
import SkillsShowcase from "./SkillsShowcase";

export default function AboutUsPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("Corporate Profile");

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (label, id) => {
    setActiveSection(label);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const CORE_TENETS = [
    {
      icon: Cpu,
      title: "Bespoke Engineering",
      desc: "Specializing in E-Houses, power modules, and custom generator packaging tailored to extreme industrial specs.",
    },
    {
      icon: Factory,
      title: "Global Production",
      desc: "Leveraging high-capacity manufacturing terminals to deliver large-scale infrastructure across UK and Europe.",
    },
    {
      icon: ShieldCheck,
      title: "QA Compliance",
      desc: "Every project undergoes rigorous Factory Acceptance Testing (FAT) to ensure ISO-certified reliability.",
    },
  ];

  const sidebarLinks = [
    { label: "Corporate Profile", id: "corp-profile", icon: Info },
    { label: "Hybrid Model", id: "hybrid-model", icon: Globe }, // Added new link
    { label: "Manufacturing Scale", id: "manufacturing-scale", icon: Factory },
    { label: "Product Scope", id: "product-scope", icon: PackageSearch },
    { label: "Engineering Skills", id: "engineering-skills", icon: Cpu },
  ];

  return (
    <div className="min-h-screen bg-white text-[#44444E] font-sans selection:bg-[#BF092F] selection:text-white">
      {/* HERO SECTION */}
      <div className="pt-22 px-2 md:px-2">
        <header className="shadow-xl relative h-[28vh] min-h-[300px] w-full flex items-center bg-[#44444E] overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#BF092F] to-transparent animate-pulse" />
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse delay-700" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-20">
            <nav className="flex items-center flex-wrap gap-3 mb-6">
              <button
                onClick={() => navigate("/")}
                className="cursor-pointer group flex items-center gap-1 text-white/50 hover:text-white transition-colors"
              >
                <Home size={14} />
                <span className="text-[10px] md:text-xs tracking-widest uppercase text-white">
                  Home
                </span>
              </button>
              <span className="text-white/20 text-xs font-mono">{">"}</span>
              <button className="text-[10px] md:text-xs tracking-widest uppercase bg-[#BF092F] text-white px-4 py-1.5 rounded-2xl shadow-lg shadow-[#BF092F]/20 font-bold">
                About Art GenPower
              </button>
            </nav>

            <h1
              className={`font-semibold text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-[-0.02em] max-w-4xl transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Engineering <span className="text-[#BF092F]">Power</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl tracking-wide leading-relaxed mt-4 max-w-3xl">
              Art GenPower Solutions Ltd - Bridging the gap between heavy-scale
              production and surgical engineering.
            </p>
          </div>
        </header>
      </div>

      <main className="container mx-auto -translate-y-12 relative z-30 pb-20">
        <div className="pt-20 px-4 flex flex-col lg:grid lg:grid-cols-12 gap-8 items-stretch">
          {/* SIDEBAR */}
          <aside className="lg:col-span-3 space-y-8 h-full">
            <div className="rounded-2xl bg-[#44444E] shadow-2xl border-t-4 border-[#BF092F] sticky top-28 overflow-hidden">
              <div className="p-8 border-b border-white/10">
                <div className="flex items-center gap-3 mb-8">
                  <Info size={16} className="text-[#BF092F]" />
                  <h2 className="text-[12px] text-white tracking-[0.4em] uppercase">
                    Corporate Registry
                  </h2>
                </div>
                <ul className="space-y-2">
                  {sidebarLinks.map((link, idx) => (
                    <li
                      key={idx}
                      onClick={() => scrollToSection(link.label, link.id)}
                      className={`cursor-pointer px-4 py-4 rounded-xl text-[12px] uppercase tracking-[0.2em] transition-all flex items-center justify-between group ${
                        activeSection === link.label
                          ? "bg-white/10 text-white border-l-4 border-[#BF092F]"
                          : "text-white/40 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <link.icon
                          size={14}
                          className={
                            activeSection === link.label ? "text-[#BF092F]" : ""
                          }
                        />
                        {link.label}
                      </div>
                      <ChevronRight
                        size={14}
                        className={`transition-transform duration-300 ${
                          activeSection === link.label
                            ? "text-[#BF092F] translate-x-1"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-black/20">
                <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] leading-relaxed font-bold">
                  Mission-critical power modules for the world's most demanding
                  sectors.
                </p>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <section className="lg:col-span-9 space-y-12">
            {/* 1. CORPORATE PROFILE */}
            {/* 1. CORPORATE PROFILE & HYBRID MODEL INTEGRATED */}
            <div id="corp-profile" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-8 w-1 bg-[#BF092F]" />
                  <h2 className="text-sm text-[#44444E] uppercase font-bold">
                    Corporate Identity & Strategy
                  </h2>
                  <div className="hidden md:block h-px flex-grow ml-8 bg-gray-100" />
                </div>

                <p className="text-2xl md:text-4xl font-semibold text-[#44444E] leading-tight uppercase tracking-tight mb-8">
                  Bridging the Gap Between Engineering{" "}
                  <br className="hidden md:block" /> Excellence and Global
                  Delivery.
                </p>

                {/* Main Profile Content */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-16">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="space-y-4 text-gray-500 leading-loose text-sm">
                      <p>
                        Art GenPower Solutions Limited is a premier provider of
                        heavy engineering infrastructure for the power
                        generation, data center sectors and in oil & Gas sector.
                        We specialize in the design, manufacture, and supply of
                        mission-critical acoustic enclosures, E-Houses, and fuel
                        systems.
                      </p>
                      <p>
                        Headquartered in Hertfordshire, UK, with massive
                        strategic manufacturing operations in the UAE, we offer
                        a unique value proposition: British engineering and
                        commercial assurance combined with the scale and
                        cost-efficiency of Middle Eastern manufacturing.
                      </p>
                    </div>

                    <div className="pt-6">
                      <a
                        href="https://res.cloudinary.com/dc912sjxj/image/upload/v1767916702/Art_Genpower_Solutions_Ltd_AGP_Profile_tpmncv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 bg-[#BF092F] text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-[#44444E] transition-all"
                      >
                        Download Profile <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-3 grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <img
                        src="https://res.cloudinary.com/dc912sjxj/image/upload/v1767730365/Hamriyah_Facility_05_fyuzwt.webp"
                        className="h-48 w-full object-cover rounded-xl shadow-md"
                        alt="Facility"
                      />
                      <img
                        src="https://res.cloudinary.com/dc912sjxj/image/upload/v1767730757/Hamriyah_Facility_03_z6hmoe.webp"
                        className="h-64 w-full object-cover rounded-xl shadow-md"
                        alt="Engineering"
                      />
                    </div>
                    <div className="space-y-4 pt-8">
                      <img
                        src="https://res.cloudinary.com/dc912sjxj/image/upload/v1767792069/AGP_Project_Sajja_PowerPack_04_cb755l.webp"
                        className="h-64 w-full object-cover rounded-xl shadow-md"
                        alt="Project"
                      />
                      <img
                        src="https://res.cloudinary.com/dc912sjxj/image/upload/v1767730367/Hamriyah_Facility_Capability_03_phibtl.webp"
                        className="h-48 w-full object-cover rounded-xl shadow-md"
                        alt="Detail"
                      />
                    </div>
                  </div>
                </div>

                {/* THE INTEGRATED HYBRID MODEL SUB-SECTION - REDESIGNED */}
                <div id="hybrid-model" className="scroll-mt-32">
                  <div className="mt-20 pt-20 border-t border-gray-100">
                    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-stretch">
                      {/* LEFT COLUMN: THE CONCEPT BOX */}
                      <div className="lg:col-span-5 relative group">
                        {/* Decorative Glow behind the card */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#BF092F] to-[#44444E] rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                        <div className="relative h-full bg-[#44444E] p-10 rounded-2xl text-white shadow-2xl overflow-hidden flex flex-col justify-center">
                          {/* Animated Background Icon */}
                          <Globe
                            className="absolute -right-12 -bottom-12 text-white/5 group-hover:text-[#BF092F]/10 transition-colors duration-700"
                            size={280}
                          />

                          <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                              <div className="h-px w-8 bg-[#BF092F]" />
                              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#BF092F]">
                                Strategic Framework
                              </span>
                            </div>

                            <h4 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                              The{" "}
                              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                                Hybrid
                              </span>{" "}
                              <br />
                              <span className="text-[#BF092F]">
                                Supply
                              </span>{" "}
                              Model
                            </h4>

                            <p className="text-sm text-white/60 leading-relaxed font-light mb-8 max-w-sm">
                              In an industry where capacity and cost often
                              conflict with quality, Art GenPower Solutions
                              Limited eliminates the compromise. Through our
                              strategic partnership with Engineering Services
                              International{" "}
                              <span className="text-white font-bold italic text-base">
                                ESI
                              </span>
                              , we operate a seamless supply chain that serves
                              clients across Europe, Africa, and the Middle East
                              (EAME).
                            </p>

                            <div className="flex items-center gap-4 py-4 px-6 bg-white/5 rounded-2xl border border-white/10 w-fit">
                              <Activity
                                className="text-[#BF092F] animate-pulse"
                                size={18}
                              />
                              <span className="text-[10px] font-black uppercase tracking-widest">
                                Efficiency Optimized
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* RIGHT COLUMN: THE DUAL TERMINALS */}
                      <div className="lg:col-span-7 flex flex-col justify-between gap-6">
                        {/* UK TERMINAL */}
                        <div className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#BF092F]/20 transition-all duration-500 overflow-hidden">
                          {/* Accent Watermark */}
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
                                Our Hemel Hempstead headquarters drives project
                                management, commercial strategy, and client
                                support, ensuring you deal with a
                                <span className="text-[#44444E]">
                                  {" "}
                                  UK entity governed by British engineering
                                  standards.
                                </span>
                              </p>
                            </div>
                            <ChevronRight className="hidden md:block text-gray-200 group-hover:text-[#BF092F] group-hover:translate-x-2 transition-all" />
                          </div>
                        </div>

                        {/* GLOBAL TERMINAL */}
                        <div className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#BF092F]/20 transition-all duration-500 overflow-hidden">
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
                                We leverage a combined 41,000 sqm of production
                                space across the UAE’s most strategic industrial
                                hubs at{" "}
                                <span className="text-[#44444E]">
                                  Hamriyah, Sajja, and Jebel Ali
                                </span>{" "}
                                .This allows us to handle hyperscale projects
                                with rapid turnaround times.
                              </p>
                            </div>
                            <ChevronRight className="hidden md:block text-gray-200 group-hover:text-[#BF092F] group-hover:translate-x-2 transition-all" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. MANUFACTURING SCALE */}
            <div id="manufacturing-scale" className="scroll-mt-32">
              <div className="bg-white border border-gray-100 rounded-3xl shadow-2xl overflow-hidden">
                <div className="flex flex-col lg:grid lg:grid-cols-12">
                  <div className="lg:col-span-5 p-8 md:p-12 bg-[#44444E] text-white flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-6 w-1 bg-[#BF092F]" />
                      <h2 className="text-[10px] uppercase font-black tracking-[0.4em] text-white/60">
                        Infrastructure & Stability
                      </h2>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter leading-none mb-6">
                      Reliability Built on{" "}
                      <span className="text-[#BF092F]">Global Scale.</span>
                    </h3>
                    <p className="text-white/50 text-sm leading-loose mb-8">
                      Reliability isn't just about the product; it's about the
                      partner. We offer clients total peace of mind regarding
                      project continuity and supply chain security.
                    </p>
                    <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                      <Activity size={20} className="text-[#BF092F]" />
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 leading-tight">
                        Optimized for Parallel Production <br /> delivering
                        hyperscale DC packages simultaneously.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 md:p-10 bg-gray-50/50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-start mb-4">
                          <div className="p-3 bg-gray-50 rounded-xl">
                            <MapPin
                              className="text-[#44444E] group-hover:text-[#BF092F]"
                              size={24}
                            />
                          </div>
                        </div>
                        <div className="text-4xl font-black text-[#44444E] tracking-tighter mb-1">
                          41,000
                          <span className="text-sm font-bold ml-1 text-gray-400">
                            SQM
                          </span>
                        </div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          Production Footprint
                        </p>
                      </div>

                      <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-start mb-4">
                          <div className="p-3 bg-gray-50 rounded-xl">
                            <Factory
                              className="text-[#44444E] group-hover:text-[#BF092F]"
                              size={24}
                            />
                          </div>
                        </div>
                        <div className="text-4xl font-black text-[#44444E] tracking-tighter mb-1">
                          05
                        </div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          Specialized Factories
                        </p>
                      </div>

                      <div className="md:col-span-2 group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-center gap-6">
                          <div className="p-4 bg-[#BF092F] rounded-2xl shadow-lg shadow-[#BF092F]/20">
                            <Users className="text-white" size={28} />
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
                        <div className="flex gap-1">
                          {["Fabricators", "Welders", "Engineers"].map(
                            (role) => (
                              <span
                                key={role}
                                className="text-[9px] font-black uppercase tracking-[0.2em] bg-gray-50 px-3 py-1.5 rounded-lg text-gray-500"
                              >
                                {role}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PRODUCT SCOPE SECTION */}
            <div id="product-scope" className="scroll-mt-32">
              <div className="mt-20">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-1.5 bg-[#BF092F]" />
                    <h2 className="text-sm text-[#44444E] uppercase font-bold">
                      Our Product Scope
                    </h2>
                  </div>
                  <div className="hidden md:block h-px flex-grow ml-8 bg-gray-100" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "E-Houses & Switchgear",
                      subtitle: "Integrated Power Distribution",
                      icon: Cpu,
                      img: "https://res.cloudinary.com/dc912sjxj/image/upload/v1768330248/E-House_E-Pod_Art_Genpower_Solutions_Ltd_ESI_02_kq90fj.webp",
                    },
                    {
                      title: "Acoustic Enclosures",
                      subtitle: "Noise Suppression Systems",
                      icon: Zap,
                      img: "https://res.cloudinary.com/dc912sjxj/image/upload/v1768329341/Art_Genpower_Solutions_Ltd_ESI_Container_02_axoz6j.webp",
                    },
                    {
                      title: "Custom Fuel Systems",
                      subtitle: "Critical Supply & Management",
                      icon: Box,
                      img: "https://res.cloudinary.com/dc912sjxj/image/upload/v1768331854/Pump_Skids_and_Chemical_Injection_Art_Genpower_Solutions_Ltd___ESI_03_jdh8w1.webp",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group relative flex flex-col h-[500px] rounded-2xl overflow-hidden bg-white shadow-2xl transition-all duration-500 hover:-translate-y-3"
                    >
                      <div className="relative h-[65%] overflow-hidden bg-[#44444E]">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                        />
                        <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                          <item.icon
                            className="text-white group-hover:text-[#BF092F] transition-colors"
                            size={20}
                          />
                        </div>
                      </div>
                      <div className="relative flex-grow p-8 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] text-[#BF092F] font-black uppercase tracking-[0.3em] mb-2 block">
                            Engineering Excellence
                          </span>
                          <h4 className="text-xl font-bold text-[#44444E] uppercase leading-tight group-hover:text-[#BF092F]">
                            {item.title}
                          </h4>
                        </div>
                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">
                            {item.subtitle}
                          </p>
                          <ArrowRight
                            size={18}
                            className="text-[#BF092F] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 h-1.5 bg-[#BF092F] w-0 group-hover:w-full transition-all duration-700" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div id="engineering-skills" className="scroll-mt-32">
              <SkillsShowcase />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {CORE_TENETS.map((tenet, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-[#BF092F]/20 transition-all group"
                  >
                    <tenet.icon
                      className="text-[#44444E] group-hover:text-[#BF092F] transition-colors mb-6"
                      size={28}
                    />
                    <h4 className="text-sm font-bold text-[#44444E] uppercase tracking-tighter mb-4">
                      {tenet.title}
                    </h4>
                    <p className="text-[10px] font-bold text-gray-400 uppercase leading-relaxed tracking-widest">
                      {tenet.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#44444E] p-12 rounded-2xl text-white relative overflow-hidden group">
              <ShieldCheck
                size={180}
                className="absolute -right-10 -bottom-10 text-white/5 rotate-12 transition-transform group-hover:rotate-0 duration-700"
              />
              <div className="relative z-10 max-w-2xl">
                <h3 className="text-3xl font-black uppercase italic text-[#BF092F] mb-4">
                  Quality Proven
                </h3>
                <p className="text-white/50 text-[11px] font-bold uppercase tracking-widest leading-loose">
                  Every Art GenPower project is backed by technical excellence.
                  We maintain 100% control over engineering protocols, meeting
                  our 'Zero-Tolerance' failure policy.
                </p>
                <button
                  onClick={() => navigate("/projects")}
                  className="cursor-pointer mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-[#BF092F] transition-colors"
                >
                  View Standards <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </div>
  );
}
