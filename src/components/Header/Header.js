import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import HeaderSearch from "./HeaderSearch";
import HeaderFacilitiesDropdown from "./HeaderFacilitiesDropdown";
import HeaderProjectsDropdown from "./HeaderProjectsDropdown";
import HeaderProductsDropDown from "./HeaderProductsDropDown";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyles =
    "relative cursor-pointer inline-flex items-center tracking-widest text-white hover:text-white transition-all duration-300 px-2 py-2 text-[12px] lg:text-[13px] uppercase font-medium whitespace-nowrap group";

  return (
    <header className="fixed top-0 left-0 w-full z-[100] pt-1 px-2 transition-all duration-500">
      {/* REMOVED overflow-hidden from this wrapper */}
      <div
        className="relative w-full mx-auto" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Layer - Apply rounded corners and overflow-hidden here instead */}
        <div
          className={`absolute inset-0 -z-10 transition-all duration-500 rounded-2xl shadow-2xl overflow-hidden
            ${isScrolled && !isHovered ? "opacity-75 backdrop-blur-md" : "opacity-100"}`}
          style={{
            background: "linear-gradient(110deg, #BF092F 64vw, #44444E 64vw)",
          }}
        />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-[auto_1fr_auto] h-18 md:h-20 items-center gap-8">
            <div className="flex justify-start items-center">
              <Link to="/" className="flex-shrink-0 group/logo">
                <img
                  src="https://res.cloudinary.com/dc912sjxj/image/upload/v1766520846/AGP_Logo_j44tzo.png"
                  alt="AGP Logo"
                  className="h-12 sm:h-14 md:h-16 w-auto transition-transform group-hover/logo:scale-105"
                />
              </Link>
            </div>

            {/* Dropdowns now have a clear path to render downwards */}
            <nav className="hidden md:flex items-center justify-center gap-x-1 lg:gap-x-2">
              <Link to="/about" className={navLinkStyles}>
                <span className="absolute inset-0 bg-white/10 rounded-lg scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out -z-10" />
                About
              </Link>

              <HeaderProductsDropDown />
              <HeaderProjectsDropdown />
              <HeaderFacilitiesDropdown />

              <Link to="/careers" className={navLinkStyles}>
                <span className="absolute inset-0 bg-white/10 rounded-lg scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out -z-10" />
                Career
              </Link>

              <Link to="/contact" className={navLinkStyles}>
                <span className="absolute inset-0 bg-white/10 rounded-lg scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out -z-10" />
                Contact
              </Link>
            </nav>

            <div className="hidden md:flex items-center justify-end pl-6 border-l border-white/20">
              <HeaderSearch />
            </div>

            <div className="md:hidden flex items-center justify-end">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2 bg-black/20 rounded-lg"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;