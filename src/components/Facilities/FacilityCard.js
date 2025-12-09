import { Link } from "react-router";
import { motion } from "framer-motion";

export default function FacilityCard({ facility }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-3xl shadow-2xl border border-[#44444E]/20 overflow-hidden relative cursor-pointer transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
    >
      <Link to={`/facilities/${facility.id}`} className="block">
        {/* Image with overlay and hover effects */}
        <div className="h-60 w-full overflow-hidden relative">
          <img
            src={facility.facilityImg[0]}
            alt={facility.title}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-110 brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30 opacity-80" />
        </div>

        {/* Text Content */}
        <div className="p-6 bg-white/90 backdrop-blur-md -mt-12 rounded-t-3xl relative z-10">
          <h3 className="text-2xl font-bold text-[#44444E] mb-2 drop-shadow-md">
            {facility.title}
          </h3>
          <p className="text-[#44444E]/80 mb-3 text-sm leading-snug">
            {facility.desc}
          </p>
          <p className="text-[#B45253] font-semibold text-sm tracking-wide">
            📍 {facility.location}
          </p>
        </div>

        {/* Decorative Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-[#B45253] to-[#44444E] rounded-full opacity-70 shadow-lg blur-xl" />
      </Link>
    </motion.div>
  );
}