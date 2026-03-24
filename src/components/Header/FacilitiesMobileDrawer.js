import React from "react";
import { Link } from "react-router";
import {
  ChevronLeft,
  Factory,
  ArrowRight,
} from "lucide-react";
import { facilities } from "../../utils/facilities";

/**
 * FacilitiesMobileDrawer
 * DESIGN: Slide-over navigation for manufacturing facility discovery.
 * SEO: Semantic <nav> and <ul> structure. Links are direct for better crawlability.
 * UPDATED: Clicking a facility now navigates directly to its page.
 */
const FacilitiesMobileDrawer = ({ isOpen, onClose, onCloseAll }) => {
  return (
    <div
      className={`fixed inset-0 z-[130] bg-[#44444E] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen
          ? "translate-x-0 opacity-100 visible"
          : "translate-x-full opacity-0 invisible"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Global Facilities Menu"
    >
      <div className="h-full pt-28 flex flex-col relative">
        
        {/* HEADER: Back Button and Directory Title */}
        <div className="px-8 mb-8">
          <button
            onClick={onClose}
            className="text-white/40 mb-8 flex items-center gap-2 hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold group"
            aria-label="Back to previous menu"
          >
            <ChevronLeft size={16} aria-hidden="true" /> BACK
          </button>

          <div className="border-l-4 border-[#BF092F] pl-4">
            <h1 className="text-white text-2xl font-black uppercase tracking-tight">
              Our Facilities
            </h1>
            <p className="text-white/30 text-[9px] uppercase tracking-[0.2em]">
              Global Infrastructure Hubs
            </p>
          </div>
        </div>

        {/* NAVIGATION: Direct Facility Links */}
        <nav
          className="flex-1 overflow-y-auto custom-scrollbar px-6 pb-20"
          aria-label="Manufacturing Facilities"
        >
          <ul className="space-y-3">
            {facilities.map((fac) => {
              return (
                <li key={fac.id}>
                  {/* DIRECT LINK: Replaces the toggle button for instant navigation */}
                  <Link
                    to={`/facilities/${fac.id}`}
                    onClick={onCloseAll}
                    className="w-full flex items-center justify-between p-5 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all group"
                    title={`View technical specifications for ${fac.title}`}
                  >
                    <div className="flex items-center gap-4">
                      <Factory
                        size={18}
                        className="text-white/20 group-hover:text-[#BF092F] transition-colors"
                        aria-hidden="true"
                      />
                      <span className="text-[13px] font-bold uppercase tracking-wider text-left text-white/60 group-hover:text-white transition-colors">
                        {fac.title}
                      </span>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-white/10 group-hover:text-[#BF092F] transition-all group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* FOOTER: Fixed branding section */}
        <footer className="mt-auto py-10 flex flex-col items-center gap-4 border-t border-white/5 bg-[#44444E]/90 backdrop-blur-md">
          <div className="w-12 h-[1px] bg-[#BF092F]/30" aria-hidden="true" />
          <p className="text-white text-[9px] font-black tracking-[0.5em] uppercase opacity-40 text-center">
            Art Genpower Solutions Ltd.
          </p>
        </footer>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 2px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #BF092F40; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default FacilitiesMobileDrawer;