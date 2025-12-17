import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, NavLink } from "react-router";
import HeaderSearch from "./HeaderSearch";
import HeaderFacilitiesDropdown from "./HeaderFacilitiesDropdown";
import HeaderProjectsDropdown from "./HeaderProjectsDropdown";
import HeaderProductsDropDown from "./HeaderProductsDropDown";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Reusable style for Nav Links to ensure consistency
  const navLinkStyles = "text-[11px] font-black uppercase tracking-[0.2em] text-white/90 hover:text-white hover:underline underline-offset-8 decoration-2 decoration-[#BF092F] transition-all";

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 🏗️ INDUSTRIAL DIAGONAL BACKGROUND */}
      <div
        className="absolute inset-0 -z-10 shadow-2xl"
        style={{
          background: "linear-gradient(110deg, #BF092F 80.05%, #44444E 0%)",
        }}
      />
      
      {/* Structural Texture Overlay (Matches Facilities Page) */}
      <div className="absolute inset-0 -z-10 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* LOGO SECTION */}
          <Link to="/" className="flex-shrink-0 pr-8 group">
            <img
              src="https://res.cloudinary.com/dc912sjxj/image/upload/v1764248576/Art_Genpower_Solutions_Ltd_Logo_wswrtz.png"
              alt="AGP Logo"
              className="h-10 sm:h-12 md:h-14 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* 🖥️ DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-x-6 lg:gap-x-8">
            <Link to="/about" className={navLinkStyles}>
              About
            </Link>

            <HeaderProductsDropDown />
            <HeaderProjectsDropdown />
            <HeaderFacilitiesDropdown />

            <Link to="/careers" className={navLinkStyles}>
              Career
            </Link>

            <Link to="/contact" className={navLinkStyles}>
              Contact
            </Link>

            {/* SEARCH BAR - Integrated with industrial borders */}
            <div className="pl-4 border-l border-white/20">
              <HeaderSearch />
            </div>
          </nav>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 bg-black/20 rounded-sm"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 📱 MOBILE NAVIGATION (INDUSTRIAL OVERLAY) */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#44444E] border-t-4 border-[#BF092F] shadow-2xl animate-fadeIn">
          <nav className="flex flex-col p-6 gap-4">
            {["Home", "About", "Products", "Projects", "Facility", "Career", "Contact"].map((item) => (
              <Link 
                key={item}
                to={`/${item === "Home" ? "" : item.toLowerCase()}`} 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-white text-lg font-black uppercase tracking-widest border-b border-white/10 pb-2 hover:text-[#BF092F] transition-colors"
              >
                {item}
                <ArrowRight size={18} className="text-[#BF092F]" />
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* ⚡ BOTTOM ACCENT STRIP (Blueprint Style) */}
      <div className="h-[3px] w-full flex">
        <div className="w-3/4 bg-white/20" />
        <div className="w-1/4 bg-[#BF092F]" />
      </div>
    </header>
  );
};

export default Header;