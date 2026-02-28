import { Facebook, Twitter, Linkedin, MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router";
// Import the same products data used in the Header
import { products } from "../utils/products";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Facilities", path: "/facilities" },
    { name: "Projects", path: "/projects" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative w-full px-2 pb-2 mt-12 overflow-hidden">
      <div className="relative w-full mx-auto rounded-2xl shadow-2xl overflow-hidden bg-[#44444E]">
        
        {/* Background Layer */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "linear-gradient(110deg, #44444E 36vw, #BF092F 36vw)",
          }}
        />

        {/* Structural Texture */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

        <div className="container mx-auto px-6 md:px-12 py-16 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">
            
            {/* BRAND SECTION */}
            <div className="lg:col-span-4 flex flex-col items-start space-y-8">
              <Link to="/" className="group">
                <img
                  src="https://res.cloudinary.com/dc912sjxj/image/upload/v1772287992/Gemini_Generated_Image_tler0wtler0wtler-removebg-preview_zhmv2k.png"
                  alt="AGP Logo"
                  className="h-14 md:h-18 w-auto transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <p className="text-white/70 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] leading-loose max-w-sm border-l-2 border-[#BF092F] pl-5 italic">
                Engineering excellence in power solutions. Built for high-performance industrial reliability.
              </p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="p-3 bg-white/5 border border-white/10 text-white hover:bg-white hover:text-[#BF092F] transition-all duration-300 rounded-xl"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* DIRECTORY SECTION */}
            <div className="lg:col-span-2 lg:pl-4">
              <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em] mb-10">Directory</h3>
              <ul className="space-y-5">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-[11px] font-bold text-white uppercase tracking-[0.2em] hover:text-white/60 flex items-center gap-2 group transition-all"
                    >
                      <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-white" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* PRODUCT CATEGORIES SECTION (Synced with Header) */}
            <div className="lg:col-span-3">
              <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em] mb-10">Product_Scope</h3>
              <ul className="space-y-5">
                {/* Dynamically mapping from your products.js data */}
                {products.map((category) => (
                  <li key={category.slug}>
                    <Link 
                      to={`/products?category=${category.slug}`}
                      className="text-[11px] font-bold text-white uppercase tracking-[0.2em] opacity-90 hover:opacity-100 hover:text-white transition-all flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[1px] bg-[#BF092F] group-hover:w-3 transition-all duration-300" />
                      {category.category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT SECTION */}
            <div className="lg:col-span-3">
              <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em] mb-10">Contact_Us</h3>
              <div className="space-y-7">
                <div className="flex items-start gap-4 group">
                  <MapPin className="text-white/40 group-hover:text-white transition-colors shrink-0" size={16} />
                  <p className="text-[11px] font-bold text-white uppercase tracking-widest leading-relaxed">
                    Greenside House, 50 Station Rd, <br /> London, N22 7DE, United Kingdom
                  </p>
                </div>
                <div className="flex items-center gap-4 group">
                  <Mail className="text-white/40 group-hover:text-white transition-colors shrink-0" size={16} />
                  <p className="text-[11px] font-bold text-white uppercase tracking-widest transition-colors group-hover:text-white break-all">info@artgenpower.com</p>
                </div>
                <div className="flex items-center gap-4 group">
                  <Phone className="text-white/40 group-hover:text-white transition-colors shrink-0" size={16} />
                  <p className="text-[11px] font-bold text-white uppercase tracking-widest transition-colors group-hover:text-white">+44 7492 949230</p>
                </div>
              </div>
            </div>
          </div>

          {/* 📋 COPYRIGHT BAR */}
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.4em]">
              &copy; {currentYear} ART GENPOWER SOLUTIONS LTD <span className="mx-3 text-[#BF092F]">/</span> ALL_RIGHTS_RESERVED
            </p>
            <div className="flex gap-10">
              {["Privacy", "Terms", "Support"].map((legal) => (
                <a key={legal} href="#" className="text-[9px] font-bold text-white/20 uppercase tracking-[0.4em] hover:text-white transition-colors">
                  {legal}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Watermark */}
        <span className="absolute bottom-[-15px] right-[-10px] text-[180px] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter leading-none">
          AGP
        </span>
      </div>
    </footer>
  );
};

export default Footer;