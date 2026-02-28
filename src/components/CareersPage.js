import React, { useState, useEffect } from "react";
import { Mail, ChevronLeft, Briefcase, Users, Cpu, Home } from "lucide-react";
import { useNavigate } from "react-router";

export default function CareersPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#44444E] font-sans selection:bg-[#BF092F] selection:text-white">
      
      {/* 🏗️ FLOATING HERO SECTION */}
      <div className="pt-22 px-2 md:px-2"> 
        <header className="relative h-[28vh] min-h-[300px] w-full flex items-center bg-[#44444E] overflow-hidden rounded-2xl shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

          {/* Animated Red Beams */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#BF092F] to-transparent animate-pulse" />
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse delay-700" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-20">
            {/* 🧭 ENHANCED HIERARCHICAL BREADCRUMB */}
            <nav className="flex items-center flex-wrap gap-3 mb-6">
              <button
                onClick={() => navigate("/")}
                className="cursor-pointer group flex items-center gap-1 text-white/50 hover:text-white transition-colors"
              >
                <Home size={14} />
                <span className="text-[10px] md:text-xs tracking-widest uppercase">Home</span>
              </button>

              <span className="text-white/20 text-xs font-mono">{">"}</span>

              {/* ACTIVE PAGE: RED PILL DESIGN */}
              <button className="text-[10px] md:text-xs tracking-widest uppercase bg-[#BF092F] text-white px-4 py-1.5 rounded-2xl shadow-lg shadow-[#BF092F]/20">
                Careers
              </button>
            </nav>

            <h1 className={`font-semibold text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-[-0.02em] max-w-4xl transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              Join Our <span className="text-[#BF092F]">Team</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl tracking-wide leading-relaxed mt-2">
              Powering Innovation & Engineering Excellence
            </p>
          </div>
        </header>
      </div>

      {/* 🏭 MAIN CONTENT AREA */}
      <main className="container mx-auto relative z-30 -translate-y-24">
        <div className="pt-30"> 
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Mission Statement */}
            <div className={`px-2 lg:col-span-7 space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="bg-white px-4 md:px-6 py-8 md:py-10 rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col justify-center">
                <h2 className="tracking-widest border-l-4 border-[#BF092F] pl-4 mb-8 text-[#44444E] font-bold text-sm uppercase">
                  OUR VISION
                </h2>
                <p className="text-2xl font-medium text-[#44444E] leading-snug">
                  At Art GenPower Solutions Ltd, we are always looking for
                  talented individuals to drive the future of power
                  infrastructure.
                </p>
                <p className="mt-6 text-gray-500 leading-relaxed text-sm">
                  From experienced Project Engineers to emerging technical talent,
                  we value precision, integrity, and an uncompromising commitment
                  to quality.
                </p>
              </div>
            </div>

            {/* Right: Application Card */}
            <div className={`px-2 lg:col-span-5 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="h-full bg-[#44444E] px-4 md:px-6 py-10 md:py-12 text-white rounded-2xl shadow-2xl relative overflow-hidden group flex flex-col justify-center">
                <Briefcase className="absolute -right-10 -bottom-10 text-white/5 size-48 rotate-12 transition-transform group-hover:rotate-0 duration-700" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-semibold mb-6 uppercase italic text-[#BF092F]">
                    Apply Now
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-10 text-sm">
                    Submit your CV or reach out to our recruitment desk for
                    current vacancies.
                  </p>
                  <div className="group/link border-b border-white/10 pb-4">
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] block mb-2">
                      Primary Recruitment Desk
                    </span>
                    <a href="mailto:info@artgenpower.com" className="flex items-center gap-3 text-xl font-medium hover:text-[#BF092F] transition-colors">
                      <Mail size={20} className="text-[#BF092F]" />
                      info@artgenpower.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-grid Icons */}
          <div className="px-2 grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white px-4 md:px-6 py-6 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
              <Users className="text-[#BF092F]" size={24} />
              <span className="text-sm font-medium tracking-wide text-[#44444E] uppercase">
                Collaborative Environment
              </span>
            </div>
            <div className="bg-white px-4 md:px-6 py-6 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
              <Cpu className="text-[#BF092F]" size={24} />
              <span className="text-sm font-medium tracking-wide text-[#44444E] uppercase">
                Cutting-Edge Tech
              </span>
            </div>
          </div>
        </div>

        {/* Technical Footer */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200 pt-12 pb-12 px-4 md:px-6">
          <div className="px-2 rounded-2xl flex flex-col gap-3">
            <Briefcase className="text-[#BF092F]" size={32} />
            <h3 className="text-xl text-[#44444E] font-bold uppercase tracking-tight">CAREER PATHS</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              We offer Project Engineer roles spanning electrical systems,
              mechanical design, and integrated power solutions.
            </p>
          </div>
          <div className="rounded-2xl bg-[#44444E] p-8 text-white md:col-span-2 flex flex-col justify-center border-t-4 border-[#BF092F] shadow-xl">
            <h3 className="text-2xl mb-2 uppercase italic text-[#BF092F] font-bold">
              Unified Talent Standard
            </h3>
            <p className="text-white/70">
              Art GenPower Solutions Ltd seeks individuals who embody our core
              values of technical precision and unwavering reliability in the
              power sector.
            </p>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </div>
  );
}