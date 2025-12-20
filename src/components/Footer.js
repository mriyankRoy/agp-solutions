import { Facebook, Twitter, Linkedin, MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#44444E] relative overflow-hidden">
      {/* 🏗️ TOP ACCENT BAR - Signature Red */}
      <div className="h-1.5 w-full bg-[#BF092F]" />

      {/* Structural Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* BRAND ARCHITECTURE (Spans 4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <img
                src="https://res.cloudinary.com/dc912sjxj/image/upload/v1764248576/Art_Genpower_Solutions_Ltd_Logo_wswrtz.png"
                alt="AGP Logo"
                className="h-12 w-auto brightness-0 invert"
              />
              <p className="text-white/60 text-xs font-bold uppercase tracking-[0.2em] leading-relaxed max-w-sm">
                Engineering excellence in power solutions and industrial enclosures. Built for reliability.
              </p>
            </div>

            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="p-3 bg-white/5 border border-white/10 text-white hover:bg-[#BF092F] hover:border-[#BF092F] transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK DIRECTORY (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-black text-[#BF092F] uppercase tracking-[0.4em] mb-8">Navigation</h3>
            <ul className="space-y-4">
              {["Home", "About", "Products", "Projects", "Careers", "Contact"].map((link) => (
                <li key={link}>
                  <Link 
                    to={`/${link === "Home" ? "" : link.toLowerCase()}`}
                    className="text-xs font-bold text-white/70 uppercase tracking-widest hover:text-white flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#BF092F]" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCT CLASSES (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-black text-[#BF092F] uppercase tracking-[0.4em] mb-8">Solutions</h3>
            <ul className="space-y-4">
              {[
                "Generator Enclosures",
                "E-House / E-POD Units",
                "Pump Skid Packages",
                "Instrument Accessories",
                "Cooling Shelters"
              ].map((item) => (
                <li key={item} className="text-xs font-bold text-white/50 uppercase tracking-widest leading-snug">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT TERMINAL (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-black text-[#BF092F] uppercase tracking-[0.4em] mb-8">Company details</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-[#BF092F] shrink-0" size={18} />
                <p className="text-xs font-bold text-white/70 uppercase tracking-wider leading-relaxed">
                  19 Pelham Court, Hemel Hempstead<br />United Kingdom
                </p>
              </div>
              <div className="flex gap-4">
                <Mail className="text-[#BF092F] shrink-0" size={18} />
                <p className="text-xs font-bold text-white/70 uppercase tracking-wider">info@artgenpower.com</p>
              </div>
              <div className="flex gap-4">
                <Phone className="text-[#BF092F] shrink-0" size={18} />
                <p className="text-xs font-bold text-white/70 uppercase tracking-wider">+44 7492 949230</p>
              </div>
            </div>
          </div>
        </div>

        {/* 📋 BLUEPRINT BOTTOM BAR */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">
            &copy; {currentYear} ART GENPOWER SOLUTIONS LTD. <span className="mx-2">|</span> Bridging the gap
          </p>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Cookies"].map((legal) => (
              <a key={legal} href="#" className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] hover:text-[#BF092F] transition-colors">
                {legal}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Watermark */}
      <span className="absolute bottom-[-20px] right-[-10px] text-[120px] font-black text-white/[0.02] select-none pointer-events-none">
        AGP
      </span>
    </footer>
  );
};

export default Footer;