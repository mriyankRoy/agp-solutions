import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Search, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router";
import HeaderSearch from "./HeaderSearch";
import HeaderFacilitiesDropdown from "./HeaderFacilitiesDropdown";
import HeaderProjectsDropdown from "./HeaderProjectsDropdown";
import HeaderProductsDropDown from "./HeaderProductsDropDown";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Projects", path: "/projects" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const handleMobileNav = (path) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setMobileMenuOpen(false);
      navigate(`/search/${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  const navLinkStyles =
    "relative cursor-pointer inline-flex items-center tracking-widest text-white transition-all duration-300 px-4 py-2 text-[12px] lg:text-[13px] uppercase whitespace-nowrap group";

  const HoverEffect = () => (
    <>
      <span className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-xl scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] -z-10 border border-white/20 shadow-xl" />
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-white group-hover:w-1/4 transition-all duration-300 ease-out rounded-full" />
    </>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-[100] pt-1 px-2 transition-all duration-500">
      <div
        className="relative w-full mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`absolute inset-0 -z-10 transition-all duration-700 rounded-2xl shadow-2xl overflow-hidden ${isScrolled && !isHovered ? "opacity-90 backdrop-blur-xl" : "opacity-100"}`}
          style={{
            background: "linear-gradient(110deg, #BF092F 64vw, #44444E 64vw)",
          }}
        />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-[1fr_auto_1fr] md:grid-cols-[auto_1fr_auto] h-18 md:h-20 items-center gap-4">
            <div className="flex justify-start items-center">
              <Link
                to="/"
                className="flex-shrink-0 group/logo flex items-center"
              >
                <img
                  src="https://res.cloudinary.com/dc912sjxj/image/upload/v1772287992/Gemini_Generated_Image_tler0wtler0wtler-removebg-preview_zhmv2k.png"
                  alt="AGP Logo"
                  className="h-10 sm:h-12 md:h-16 w-auto transition-transform duration-500 group-hover/logo:scale-110"
                />
                <div className="hidden md:flex flex-col border-l border-white/10 pl-4 ml-4">
                  <span className="text-white text-[14px] font-black tracking-[0.2em] uppercase whitespace-nowrap">
                    Art Genpower
                  </span>
                  <span className="text-white/60 text-[9px] font-bold tracking-[0.3em] uppercase">
                    Solutions Ltd.
                  </span>
                </div>
              </Link>
            </div>

            <div className="md:hidden flex flex-col items-center justify-center text-center">
              <span className="text-white text-[10px] font-black tracking-[0.2em] uppercase whitespace-nowrap">
                Art Genpower
              </span>
              <span className="text-white/60 text-[7px] font-bold tracking-[0.3em] uppercase border-t border-white/10 pt-0.5">
                Solutions Ltd.
              </span>
            </div>

            <div className="flex items-center justify-end">
              <nav className="hidden md:flex items-center justify-end gap-x-2">
                <Link to="/about" className={navLinkStyles}>
                  <HoverEffect />
                  <span>About</span>
                </Link>
                <HeaderProductsDropDown />
                <HeaderProjectsDropdown />
                <HeaderFacilitiesDropdown />
                <Link to="/careers" className={navLinkStyles}>
                  <HoverEffect />
                  <span>Career</span>
                </Link>
                <Link to="/contact" className={navLinkStyles}>
                  <HoverEffect />
                  <span>Contact</span>
                </Link>
                <div className="pl-4 border-l border-white/10">
                  <HeaderSearch />
                </div>
              </nav>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2 z-[110] relative md:hidden"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Modern Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[105] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
      >
        <div className="absolute inset-0 bg-[#44444E]/95 backdrop-blur-3xl" />
        <div className="flex flex-col h-full pt-32 px-8 relative z-10">
          <form
            onSubmit={handleSearchSubmit}
            className="mb-20 flex justify-center"
          >
            <div className="w-full max-w-sm relative group">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="SEARCH REGISTRY..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white text-lg font-bold placeholder:text-white/20 focus:outline-none focus:border-[#BF092F] focus:bg-white/10 transition-all shadow-2xl"
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#BF092F] transition-colors"
              >
                <Search size={20} />
              </button>
            </div>
          </form>
          <nav className="grid grid-cols-1 gap-4 max-w-sm mx-auto w-full">
            {navItems?.map((item, idx) => (
              <button
                key={item.name}
                onClick={() => handleMobileNav(item.path)}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className={`group flex items-center justify-between py-4 border-b border-white/5 hover:border-[#BF092F]/50 transition-all duration-700 ${mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              >
                <span className="text-white/80 group-hover:text-white text-2xl font-light uppercase tracking-[0.2em] transition-colors">
                  {item.name}
                </span>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#BF092F] group-hover:border-[#BF092F] transition-all">
                  <ArrowRight size={14} className="text-white" />
                </div>
              </button>
            ))}
          </nav>
          {/* Refined Modern Footer */}
          <div className="mt-auto pb-10 flex flex-col items-center gap-4">
            <div className="w-12 h-[1px] bg-[#BF092F]/50" />
            <div className="flex flex-col items-center">
              <p className="text-white text-[10px] font-bold tracking-[0.4em] uppercase">
                Art Genpower Solutions Ltd.
              </p>
              <p className="text-[#BF092F]/60 text-[8px] font-medium tracking-[0.3em] uppercase mt-1">
                Engineering Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
