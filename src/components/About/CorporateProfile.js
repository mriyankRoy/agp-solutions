import React, { useRef, useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

const CorporateProfile = () => {
  const sectionRef = useRef(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Search-friendly reveal logic
  const revealClass = (active, delay = "duration-1000") =>
    `transition-all ${delay} ease-[cubic-bezier(0.22,1,0.36,1)] ${
      active ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
    }`;

  return (
    <div 
      ref={sectionRef}
      className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100"
    >
      {/* Section Header - Animated */}
      <div className={`flex items-center gap-4 mb-8 ${revealClass(hasRevealed)}`}>
        <div className="h-8 w-1 bg-[#BF092F]" />
        <h2 className="text-sm text-[#44444E] uppercase font-bold">
          Corporate Identity & Strategy
        </h2>
        <div className="hidden md:block h-px flex-grow ml-8 bg-gray-100" />
      </div>

      <p className={`text-3xl md:text-4xl font-semibold text-[#44444E] leading-tight uppercase tracking-tight mb-8 ${revealClass(hasRevealed, "duration-1000 delay-100")}`}>
        Bridging the Gap Between Engineering <br className="hidden md:block" />{" "}
        Excellence and Global Delivery.
      </p>

      {/* Main Profile Content */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-16">
        <div className={`lg:col-span-2 space-y-6 ${revealClass(hasRevealed, "duration-1000 delay-200")}`}>
          <div className="space-y-4 text-gray-500 leading-loose text-sm">
            <p>
              Art GenPower Solutions Limited is a premier provider of heavy
              engineering infrastructure for the power generation, data center
              sectors and in oil & Gas sector. We specialize in the design,
              manufacture, and supply of mission-critical acoustic enclosures,
              E-Houses, and fuel systems.
            </p>
            <p>
              Headquartered in Hertfordshire, UK, with massive strategic
              manufacturing operations in the UAE, we offer a unique value
              proposition: British engineering and commercial assurance combined
              with the scale and cost-efficiency of Middle Eastern
              manufacturing.
            </p>
          </div>

          <div className="pt-6">
            <a
              href="https://res.cloudinary.com/dc912sjxj/image/upload/v1767916702/Art_Genpower_Solutions_Ltd_AGP_Profile_tpmncv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-[#BF092F] text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-[#44444E] transition-all"
            >
              Download Profile <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Image Grid - Animated with a staggered delay */}
        <div className={`lg:col-span-3 grid grid-cols-2 gap-4 ${revealClass(hasRevealed, "duration-1000 delay-400")}`}>
          <div className="space-y-4">
            <img
              src="https://res.cloudinary.com/dc912sjxj/image/upload/v1767730365/Hamriyah_Facility_05_fyuzwt.webp"
              className="h-48 w-full object-cover rounded-xl shadow-md"
              alt="Facility"
            />
            <img
              src="https://res.cloudinary.com/dc912sjxj/image/upload/v1767730757/Hamriyah_Facility_03_z6hmoe.webp"
              className="h-64 w-full object-cover rounded-xl shadow-md"
              alt="Engineering"
            />
          </div>
          <div className="space-y-4 pt-8">
            <img
              src="https://res.cloudinary.com/dc912sjxj/image/upload/v1767792069/AGP_Project_Sajja_PowerPack_04_cb755l.webp"
              className="h-64 w-full object-cover rounded-xl shadow-md"
              alt="Project"
            />
            <img
              src="https://res.cloudinary.com/dc912sjxj/image/upload/v1767730367/Hamriyah_Facility_Capability_03_phibtl.webp"
              className="h-48 w-full object-cover rounded-xl shadow-md"
              alt="Detail"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateProfile;