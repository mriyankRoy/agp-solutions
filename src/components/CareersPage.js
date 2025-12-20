import React, { useState, useEffect } from "react";
import { Mail, ChevronLeft, Briefcase, Users, Cpu } from "lucide-react";
import { useNavigate } from "react-router";

export default function CareersPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#44444E] font-sans selection:bg-[#CF0F0F] selection:text-white">
      {/* 🏗️ CINEMATIC HERO SECTION */}
      <header className="relative h-[35vh] min-h-[500px] w-full flex items-end bg-[#44444E] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-0 bg-fixed" />

        {/* Animated Red Beams */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#CF0F0F] to-transparent animate-pulse" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse delay-700" />
        </div>

        <div className="container mx-auto px-6 mb-32 relative z-20">
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 text-white/70 hover:text-[#CF0F0F] mb-6 transition-colors"
          >
            <ChevronLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-xs font-black uppercase tracking-[0.3em]">
              Home
            </span>
          </button>

          <h1
            className={`text-5xl md:text-8xl font-black text-white leading-tight uppercase tracking-tighter transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            JOIN OUR <span className="text-[#CF0F0F]">TEAM</span>
          </h1>
          <p className="text-white/60 text-lg uppercase tracking-[0.2em] font-medium mt-4">
            Powering Innovation & Engineering Excellence
          </p>
        </div>
      </header>

      {/* 🏭 MAIN CONTENT AREA - OVERLAP SECTION */}
      <main className="pt-7 container mx-auto px-6 -translate-y-24 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Mission Statement */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-10 shadow-2xl border-t-4 border-[#44444E]">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#CF0F0F] mb-6 block">
                Our Vision
              </h2>
              <p className="text-2xl font-bold text-[#44444E] leading-relaxed uppercase tracking-tight">
                At Art GenPower Solutions Ltd, we are always looking for
                talented individuals to drive the future of power
                infrastructure.
              </p>
              <p className="mt-6 text-gray-500 leading-relaxed text-sm font-bold uppercase tracking-widest">
                From experienced Project Engineers to emerging technical talent, we value precision, integrity, and an uncompromising commitment to quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm p-6 border border-gray-100 flex items-center gap-4">
                <Users className="text-[#CF0F0F]" size={24} />
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                  Collaborative Environment
                </span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 border border-gray-100 flex items-center gap-4">
                <Cpu className="text-[#CF0F0F]" size={24} />
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                  Cutting-Edge Tech
                </span>
              </div>
            </div>
          </div>

          {/* Right: Application Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#44444E] p-12 text-white shadow-2xl relative overflow-hidden group">
              <Briefcase className="absolute -right-10 -bottom-10 text-white/5 size-48 rotate-12 transition-transform group-hover:rotate-0 duration-700" />

              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter italic text-[#CF0F0F]">
                  Apply Now
                </h3>
                <p className="text-sm font-medium text-white/60 leading-relaxed uppercase tracking-[0.15em] mb-10">
                  Submit your CV or reach out to our recruitment desk for
                  current vacancies.
                </p>

                <div className="space-y-6">
                  <div className="group/link border-b border-white/10 pb-4">
                    <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] block mb-2">
                      Primary Recruitment Desk
                    </span>
                    <a
                      href="mailto:info@artgenpower.com"
                      className="flex items-center gap-3 text-lg font-bold hover:text-[#CF0F0F] transition-colors"
                    >
                      <Mail size={18} className="text-[#CF0F0F]" />
                      info@artgenpower.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Footer Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200 pt-12 pb-20">
          <div className="flex flex-col gap-3">
            <Briefcase className="text-[#CF0F0F]" size={32} />
            <h3 className="text-xl font-black text-[#44444E]">CAREER PATHS</h3>
            <p className="text-[10px] font-bold text-gray-400 uppercase leading-relaxed tracking-widest">
              We offer Project Engineer roles spanning electrical systems, mechanical design, and integrated power solutions.
            </p>
          </div>
          <div className="bg-[#44444E] p-10 text-white rounded-sm md:col-span-2 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <h3 className="text-2xl font-black mb-2 uppercase italic text-[#CF0F0F] relative z-10">
              Unified Talent Standard
            </h3>
            <p className="text-white/70 text-xs font-bold uppercase tracking-widest leading-relaxed relative z-10">
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
