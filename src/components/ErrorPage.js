import React from "react";
import { Link, useRouteError } from "react-router";
import { Activity, Home, AlertTriangle, ArrowLeft, ShieldAlert } from "lucide-react";

const ErrorPage = () => {
  const error = useRouteError();
  
  

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 font-sans select-none overflow-hidden">
      
      {/* --- BACKGROUND ACCENT (Huge 404) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <h1 className="text-[25rem] font-black text-[#44444E] absolute -bottom-32 -left-24 leading-none">
          404
        </h1>
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        
        {/* --- MAIN CARD --- */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] text-center">
          
          {/* --- INDUSTRIAL ICON ASSEMBLY --- */}
          <div className="flex justify-center mb-10">
            <div className="relative group">
              {/* Rotating Gear-like background */}
              <div className="absolute inset-0 bg-[#BF092F]/5 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
              
              <div className="relative h-28 w-28 rounded-2xl border-2 border-gray-100 flex items-center justify-center bg-white shadow-sm transition-all duration-500 group-hover:-rotate-3">
                <Activity size={56} className="text-[#BF092F] animate-pulse" />
              </div>
              
              <div className="absolute -top-4 -right-4 h-12 w-12 rounded-2xl bg-[#44444E] flex items-center justify-center text-white shadow-xl border-4 border-white">
                <ShieldAlert size={20} className="text-[#BF092F]" />
              </div>
            </div>
          </div>

          {/* --- TEXT HEADER --- */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[2px] w-8 bg-[#BF092F] rounded-full" />
            <span className="text-[#44444E] uppercase tracking-[0.5em] text-[10px] font-black">
              System Interface Error
            </span>
            <div className="h-[2px] w-8 bg-[#BF092F] rounded-full" />
          </div>

          <h2 className="text-6xl md:text-8xl font-bold text-[#44444E] uppercase tracking-tighter mb-6 leading-none">
            DATA <span className="text-[#BF092F]">VOID</span>
          </h2>

          <div className="flex justify-center mb-10">
             <p className="text-gray-400 uppercase tracking-widest text-[11px] font-bold leading-relaxed max-w-xs border-l-2 border-gray-100 pl-6 text-left">
              The operational coordinate you are looking for is currently unreachable or does not exist in the infrastructure.
            </p>
          </div>

          {/* --- ACTION BUTTONS (Rounded-2xl) --- */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              to="/"
              className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-[#44444E] text-white px-10 py-5 rounded-2xl uppercase text-[11px] font-black tracking-[0.2em] transition-all hover:bg-[#BF092F] shadow-2xl hover:shadow-[#BF092F]/40 active:scale-95"
            >
              <Home size={18} />
              Return Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="group w-full sm:w-auto flex items-center justify-center gap-3 text-[#44444E] px-10 py-5 rounded-2xl uppercase text-[11px] font-black tracking-[0.2em] border-2 border-gray-100 hover:border-[#44444E] bg-white transition-all active:scale-95"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>
          </div>
        </div>

        {/* --- TECHNICAL FOOTER --- */}
        <div className="mt-12 flex flex-col items-center gap-4 opacity-40">
           <div className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-[#BF092F]" />
              <div className="h-px w-32 bg-gray-300" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#44444E]" />
           </div>
           <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-500">
             Art Genpower Solutions Ltd • Internal Registry
           </span>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;