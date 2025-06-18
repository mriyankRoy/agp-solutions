import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import HeaderDropDown from "./HeaderDropDown";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-15 left-0 w-full z-50 backdrop-blur-md">
      {/* Top double border */}
      <div className="flex flex-col gap-2">
        <div className="h-[1px] bg-gray-300" />
        <div className="h-[1px] bg-gray-300" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-xl font-bold text-gray-900">
            AGP
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700 relative">
            {/* Products with Dropdown */}
            <HeaderDropDown />

            <a
              href="#"
              className="px-4 border-l border-r border-gray-300 hover:text-gray-900 hover:underline underline-offset-4 transition"
            >
              Home
            </a>
            <a
              href="#"
              className="px-4 border-l border-r border-gray-300 hover:text-gray-900 hover:underline underline-offset-4 transition"
            >
              About
            </a>
            <a
              href="#"
              className="px-4 border-l border-r border-gray-300 hover:text-gray-900 hover:underline underline-offset-4 transition"
            >
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="inline-block rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (simple version, no dropdown logic here) */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 border-t border-gray-200">
          <nav className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            <a href="#">Products</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
            <a href="#" className="mt-2">
              Sign in
            </a>
            <a
              href="#"
              className="mt-2 inline-block rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Get started
            </a>
          </nav>
        </div>
      )}
      {/* Bottom double border */}
      <div className="flex flex-col gap-2">
        <div className="h-[1px] bg-gray-300" />
        <div className="h-[1px] bg-gray-300" />
      </div>
    </header>
  );
};

export default Header;
