import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 p-2 bg-gradient-to-r from-red-600  to-gray-700 shadow-lg z-50">
      <div className="border border-gray-300 w-full px-4 sm:px-6 lg:px-8 py-16 rounded-xl  shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div>
            <h2 className="text-xl font-bold text-white">AGP</h2>
            <p className="mt-4 text-sm text-white">
              Powerfully engineered solutions for modern industries.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-white hover:text-gray-600">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-600">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-600">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {[
            {
              title: "Product",
              links: [
                "Instrument and generator package Accessories",
                "Genrator Enclosure, Pumps skids & E-House / E-POD",
              ],
            },
            {
              title: "Company",
              links: ["Home", "About", "Contact"],
            },
            {
              title: "Legal",
              links: ["Privacy Policy", "Terms of Service", "Cookies"],
            },
          ].map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white hover:text-gray-700"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider and bottom note */}
        <div className="mt-16 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} Art Genpower Solutions Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
