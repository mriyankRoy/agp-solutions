import FacilityCard from "./FacilityCard";
import { facilities } from "../../utils/facilities";

export default function FacilitiesPage() {
  // Keep only the first two facilities
  const visibleFacilities = facilities.slice(0, 2);

  return (
    <div className="relative bg-white pt-28 pb-20 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center min-h-[calc(100vh-96px)]">
      <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-12 text-center tracking-tight drop-shadow-lg">
        Our Facilities
      </h1>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-12 w-full max-w-[960px]">
        {visibleFacilities.map((facility) => (
          <FacilityCard key={facility.id} facility={facility} />
        ))}
      </div>

      {/* Decorative gradient overlays */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-[#B45253]/50 to-[#44444E]/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-tl from-[#44444E]/40 to-[#B45253]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Optional subtle background gradient for extra visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/0 pointer-events-none -z-20" />
    </div>
  );
}
