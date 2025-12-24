import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import HeaderSearch from "./HeaderSearch";
import HeaderFacilitiesDropdown from "./HeaderFacilitiesDropdown";
import HeaderProjectsDropdown from "./HeaderProjectsDropdown";
import HeaderProductsDropDown from "./HeaderProductsDropDown";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // New state for background only

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyles =
    "cursor-pointer inline-flex gap-1 items-center tracking-widest text-white hover:text-[#44444E] transition-colors py-4 text-[12px] font-bold uppercase whitespace-nowrap";

  return (
    <header className="fixed top-0 left-0 w-full z-[100] pt-1 px-2 md:px-2 transition-all duration-500">
      
      {/* 1. Remove 'group' class to prevent triggering dropdowns globally */}
      <div 
        className="relative w-full mx-auto rounded-2xl md:rounded-2xl shadow-2xl"
        onMouseEnter={() => setIsHovered(true)}  // Control background only
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* 2. BACKGROUND LAYER 
            Opacity is 100 if: Not scrolled OR being hovered
            Opacity is 75 if: Scrolled AND not being hovered
        */}
        <div
          className={`absolute inset-0 -z-10 rounded-2xl md:rounded-2xl transition-all duration-500 
            ${(isScrolled && !isHovered) ? "opacity-75 backdrop-blur-md" : "opacity-100"}`}
          style={{
            background: "linear-gradient(110deg, #BF092F 80.05%, #44444E 0%)",
          }}
        />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-[auto_1fr_auto] h-18 md:h-20 items-center gap-8">
            
            <div className="flex justify-start items-center">
              <Link to="/" className="flex-shrink-0 group">
                <img
                  src="https://res.cloudinary.com/dc912sjxj/image/upload/v1766520846/AGP_Logo_j44tzo.png"
                  alt="AGP Logo"
                  className="h-12 sm:h-14 md:h-16 w-auto transition-transform group-hover:scale-105"
                />
              </Link>
            </div>

            <nav className="hidden md:flex items-center justify-center gap-x-2 lg:gap-x-5">
              <Link to="/about" className={navLinkStyles}>About</Link>
              <HeaderProductsDropDown />
              <HeaderProjectsDropdown />
              <HeaderFacilitiesDropdown />
              <Link to="/careers" className={navLinkStyles}>Career</Link>
              <Link to="/contact" className={navLinkStyles}>Contact</Link>
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

      {/* MOBILE NAVIGATION */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full px-4 pt-2 z-[110]">
          <div className="bg-[#44444E] border-t-4 border-[#BF092F] rounded-2xl shadow-2xl overflow-hidden">
            <nav className="flex flex-col p-6 gap-2">
              {["Home", "About", "Products", "Projects", "Facility", "Career", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-white text-[12px] font-bold uppercase tracking-widest py-4 border-b border-white/5"
                >
                  {item}
                  <ArrowRight size={18} className="text-[#BF092F]" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;