import React, { useState, useEffect } from "react";
import { 
  Factory, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Home,
  Info,
  Users,
  Target,
  ChevronRight,
  ArrowRight,
  Box,
  ExternalLink,
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
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  const CORE_TENETS = [
    {
      icon: Cpu,
      title: "Bespoke Engineering",
      desc: "Specializing in E-Houses, power modules, and custom generator packaging tailored to extreme industrial specs."
    },
    {
      icon: Factory,
      title: "Global Production",
      desc: "Leveraging high-capacity manufacturing terminals to deliver large-scale infrastructure across UK and Europe."
    },
    {
      icon: ShieldCheck,
      title: "QA Compliance",
      desc: "Every project undergoes rigorous Factory Acceptance Testing (FAT) to ensure ISO-certified reliability."
    }
  ];

  const sidebarLinks = [
    { label: "Corporate Profile", id: "corp-profile", icon: Info },
    { label: "Mission & Vision", id: "mission-vision", icon: Target },
    { label: "Our Network", id: "network", icon: Users },
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
              <button onClick={() => navigate("/")} className="cursor-pointer group flex items-center gap-1 text-white/50 hover:text-white transition-colors">
                <Home size={14} />
                <span className="text-[10px] md:text-xs tracking-widest uppercase">Home</span>
              </button>
              <span className="text-white/20 text-xs font-mono">{">"}</span>
              <button className="text-[10px] md:text-xs tracking-widest uppercase bg-[#BF092F] text-white px-4 py-1.5 rounded-2xl shadow-lg shadow-[#BF092F]/20 font-bold">
                About Art GenPower
              </button>
            </nav>

            <h1 className={`font-semibold text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-[-0.02em] max-w-4xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Engineering <span className="text-[#BF092F]">Power</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl tracking-wide leading-relaxed mt-4 max-w-3xl">
              Art GenPower Solutions Ltd - Bridging the gap between heavy-scale production and surgical engineering.
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
                  <h2 className="text-[12px] text-white tracking-[0.4em] uppercase">Corporate Registry</h2>
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
                        <link.icon size={14} className={activeSection === link.label ? "text-[#BF092F]" : ""} />
                        {link.label}
                      </div>
                      <ChevronRight size={14} className={`transition-transform duration-300 ${activeSection === link.label ? "text-[#BF092F] translate-x-1" : "opacity-0 group-hover:opacity-100"}`} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-black/20">
                <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] leading-relaxed font-bold">
                  Mission-critical power modules for the world's most demanding sectors.
                </p>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <section className="lg:col-span-9 space-y-12">
            
            <div id="corp-profile" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-8 w-1 bg-[#BF092F]" />
                  <h2 className="text-sm text-[#44444E] uppercase font-bold">Company Manifesto</h2>
                </div>
                
                <p className="text-2xl md:text-4xl font-semibold text-[#44444E] leading-tight uppercase tracking-tight mb-8">
                  Defining the standard for high-performance <br className="hidden md:block"/> containerized energy infrastructure.
                </p>

                {/* PROMINENT ACTION BUTTON */}
                <div className="mb-12">
                  <a 
                    href="https://your-link-here.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 bg-[#BF092F] text-white px-8 py-5 rounded-xl text-xs font-black uppercase tracking-[0.3em] shadow-2xl shadow-[#BF092F]/30 hover:bg-[#44444E] transition-all transform hover:-translate-y-1 active:scale-95"
                  >
                    View Corporate Profile <ExternalLink size={16} />
                  </a>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                  <div className="space-y-6 text-gray-500 leading-loose">
                    <p>
                      Art GenPower Solutions Ltd stands at the intersection of robust manufacturing and precision design. Our manifesto is built on the premise that power infrastructure must be as resilient as the environments they serve.
                    </p>
                    <p>
                      We specialize in the end-to-end lifecycle of modular power units. From initial acoustic modeling and thermal analysis to the final **Factory Acceptance Testing (FAT)**, our team ensures that every unit operates with surgical reliability.
                    </p>
                  </div>
                  
                  {/* INTEGRATED IMAGE GALLERY */}
                  <div className="grid grid-cols-2 gap-3 h-full">
                    <div className="space-y-3">
                      <div className="h-40 bg-gray-200 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                        <img src="/api/placeholder/400/500" alt="Factory" className="w-full h-full object-cover" />
                      </div>
                      <div className="h-56 bg-gray-200 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                        <img src="/api/placeholder/400/600" alt="Engineering" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="space-y-3 pt-6">
                      <div className="h-56 bg-gray-200 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                        <img src="/api/placeholder/400/700" alt="Control Room" className="w-full h-full object-cover" />
                      </div>
                      <div className="h-40 bg-gray-200 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                        <img src="/api/placeholder/400/400" alt="Detail" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-[#BF092F] flex flex-col justify-between group hover:bg-white hover:shadow-lg transition-all">
                    <Box className="text-[#BF092F] mb-4" size={24} />
                    <h4 className="text-lg font-bold text-[#44444E] uppercase mb-2">Technical HQ</h4>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Bespoke Engineering & Compliance Hub</p>
                  </div>
                  <div className="bg-[#44444E] p-8 rounded-2xl flex flex-col justify-between group">
                    <Zap className="text-[#BF092F] mb-4" size={24} />
                    <h4 className="text-lg font-bold text-white uppercase mb-2">Product Scope</h4>
                    <ul className="text-[9px] text-white/50 font-bold uppercase tracking-[0.2em] space-y-1">
                      <li>• E-Houses & Switchgear Skids</li>
                      <li>• Acoustic Enclosures</li>
                      <li>• Custom Fuel Systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="mission-vision" className="scroll-mt-32">
              <SkillsShowcase />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {CORE_TENETS.map((tenet, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-[#BF092F]/20 transition-all group">
                    <tenet.icon className="text-[#44444E] group-hover:text-[#BF092F] transition-colors mb-6" size={28} />
                    <h4 className="text-sm font-bold text-[#44444E] uppercase tracking-tighter mb-4">{tenet.title}</h4>
                    <p className="text-[10px] font-bold text-gray-400 uppercase leading-relaxed tracking-widest">{tenet.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="network" className="scroll-mt-32">
              <div className="bg-[#44444E] p-12 rounded-2xl text-white relative overflow-hidden group">
                <ShieldCheck size={180} className="absolute -right-10 -bottom-10 text-white/5 rotate-12 transition-transform group-hover:rotate-0 duration-700" />
                <div className="relative z-10 max-w-2xl">
                  <h3 className="text-3xl font-black uppercase italic text-[#BF092F] mb-4">Quality Proven</h3>
                  <p className="text-white/50 text-[11px] font-bold uppercase tracking-widest leading-loose">
                    Every Art GenPower project is backed by a legacy of technical excellence. We maintain 100% control over engineering protocols, ensuring every module delivered meets our 'Zero-Tolerance' failure policy.
                  </p>
                  <button onClick={() => navigate("/projects")} className="cursor-pointer mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-[#BF092F] transition-colors">
                    View Standards <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

          </section>
        </div>
      </main>

      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </div>
  );
}