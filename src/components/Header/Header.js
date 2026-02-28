import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Search, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router"; // Added useNavigate for logic
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

  // --- LOGIC: CLOSE MENU & NAVIGATE ---
  const handleMobileNav = (path) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setMobileMenuOpen(false); // Close menu on search
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  // --- ACCESSIBILITY: FOCUS SEARCH ON OPEN ---
  useEffect(() => {
    if (mobileMenuOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current.focus(), 300);
    }
  }, [mobileMenuOpen]);

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
        {/* DESKTOP BACKGROUND */}
        <div
          className={`absolute inset-0 -z-10 transition-all duration-700 rounded-2xl shadow-2xl overflow-hidden
            ${isScrolled && !isHovered ? "opacity-90 backdrop-blur-xl" : "opacity-100"}`}
          style={{ background: "linear-gradient(110deg, #BF092F 64vw, #44444E 64vw)" }}
        />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-[auto_1fr_auto] h-18 md:h-20 items-center gap-8">
            <div className="flex justify-start items-center">
              <Link to="/" className="flex-shrink-0 group/logo">
                <img
                  src="https://res.cloudinary.com/dc912sjxj/image/upload/v1772287992/Gemini_Generated_Image_tler0wtler0wtler-removebg-preview_zhmv2k.png"
                  alt="AGP Logo"
                  className="h-12 sm:h-14 md:h-16 w-auto transition-transform duration-500 group-hover/logo:scale-110"
                />
              </Link>
            </div>

            <nav className="hidden md:flex items-center justify-center gap-x-1 lg:gap-x-2">
              <Link to="/about" className={navLinkStyles}><HoverEffect /><span>About</span></Link>
              <HeaderProductsDropDown />
              <HeaderProjectsDropdown />
              <HeaderFacilitiesDropdown />
              <Link to="/careers" className={navLinkStyles}><HoverEffect /><span>Career</span></Link>
              <Link to="/contact" className={navLinkStyles}><HoverEffect /><span>Contact</span></Link>
            </nav>

            <div className="hidden md:flex items-center justify-end pl-6 border-l border-white/10">
              <HeaderSearch />
            </div>

            <div className="md:hidden flex items-center justify-end">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2 z-[110] relative">
                {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 bg-[#44444E] z-[105] transition-all duration-500 ease-in-out md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="absolute top-0 right-0 w-1.5 h-full bg-[#BF092F]" />

        <div className="flex flex-col h-full pt-32 px-10">
          
          {/* FUNCTIONAL SEARCH */}
          <form onSubmit={handleSearchSubmit} className="relative mb-12">
            <p className="text-[#BF092F] text-[10px] font-black tracking-[0.4em] mb-4 uppercase">System Search</p>
            <div className="relative group">
              <input 
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="FIND EQUIPMENT..."
                className="w-full bg-transparent border-b-2 border-white/10 py-4 pr-10 text-white text-xl font-bold placeholder:text-white/20 focus:outline-none focus:border-[#BF092F] transition-all"
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40 hover:text-[#BF092F] transition-colors">
                <Search size={24} />
              </button>
            </div>
          </form>

          {/* NAVIGATION LINKS */}
          <nav className="flex flex-col space-y-6">
            <p className="text-[#BF092F] text-[10px] font-black tracking-[0.4em] mb-2 uppercase">Menu</p>
            {[
              { name: "About", path: "/about" },
              { name: "Products", path: "/products" },
              { name: "Projects", path: "/projects" },
              { name: "Careers", path: "/careers" },
              { name: "Contact", path: "/contact" }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => handleMobileNav(item.path)}
                className="group flex items-center justify-between text-white text-3xl font-black uppercase tracking-tighter text-left"
              >
                {item.name}
                <ArrowRight className="text-[#BF092F] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" size={24} />
              </button>
            ))}
          </nav>

          <div className="mt-auto pb-12">
            <div className="border-l-2 border-[#BF092F] pl-6">
              <h4 className="text-white text-sm font-black tracking-widest">ART GENPOWER</h4>
              <p className="text-white/40 text-[9px] font-bold tracking-[0.2em] uppercase mt-1">Infrastructure Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;