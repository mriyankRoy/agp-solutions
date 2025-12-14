// Header.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import HeaderSearch from "./HeaderSearch";
import HeaderFacilitiesDropdown from "./HeaderFacilitiesDropdown";
import HeaderProjectsDropdown from "./HeaderProjectsDropdown";
import HeaderProductsDropDown from "./HeaderProductsDropDown";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-lg">
      {/* Diagonal Background Layer */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          // Original: background: "linear-gradient(110deg, #CF0F0F 80.05%, #44444E 0%)",
          // MODIFIED: Adding a slightly lighter shade for the first color stop
          background: "linear-gradient(110deg, #BF092F 80.05%, #44444E 0%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 pr-8">
            <img
              src="https://res.cloudinary.com/dc912sjxj/image/upload/v1764248576/Art_Genpower_Solutions_Ltd_Logo_wswrtz.png"
              alt="AGP Logo"
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-x-4 lg:gap-x-6 xl:gap-x-8 text-sm font-medium text-white">
            <Link to="/about" className="hover:text-gray-200 hover:underline underline-offset-4 transition">
              About
            </Link>

            <HeaderProductsDropDown />

            <HeaderProjectsDropdown />

            <HeaderFacilitiesDropdown />

            <Link to="/careers" className="hover:text-gray-200 hover:underline underline-offset-4 transition">
              Career
            </Link>

            <Link to="/contact" className="hover:text-gray-200 hover:underline underline-offset-4 transition">
              Contact
            </Link>

            {/* Search bar */}
            <div className="w-48 sm:w-60 md:w-72 lg:w-96">
              <HeaderSearch />
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-gray-200 transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 border-t border-gray-200 bg-white/80 backdrop-blur-md">
          <nav className="flex flex-col gap-3 text-base font-medium text-gray-900">
            <Link to="/" className="text-left hover:text-red-500 transition">Home</Link>
            <Link to="/about" className="text-left hover:text-red-500 transition">About</Link>
            <Link to="/products" className="text-left hover:text-red-500 transition">Products</Link>
            <Link to="/projects" className="text-left hover:text-red-500 transition">Projects</Link>
            <Link to="/facility" className="text-left hover:text-red-500 transition">Facility</Link>
            <Link to="/career" className="text-left hover:text-red-500 transition">Career</Link>
            <Link to="/contact" className="text-left hover:text-red-500 transition">Contact</Link>

            <button className="mt-2 inline-block rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 transition">
              Get Started
            </button>
          </nav>
        </div>
      )}

      {/* Bottom border */}
      <div className="h-[2px] bg-gray-300 w-full" />
    </header>
  );
};

export default Header;
