import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { facilities } from "../../utils/facilities";
import { Link } from "react-router";

export default function FacilityDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const facility = facilities.find((f) => f.id === id);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);

  const openLightbox = (data) => {
    setCurrentData(data); // data can be { img: 'url' } OR full capability object { img, title, desc }
    setLightboxOpen(true);
    // Prevent background scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentData(null);
    // Restore background scrolling
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset"; // Ensure cleanup
    };
  }, []);

  if (!facility) {
    return <div className="p-10 text-center">Facility not found.</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 p-6 max-w-7xl mx-auto pt-40">

      {/* LIGHTBOX MODAL (Updated Design) */}
      {lightboxOpen && (
        <div 
          // New overlay styles: dark, blur, and click closes modal
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button: Styled like ProductDetailPage */}
          <button
            onClick={closeLightbox}
            className="
              absolute top-6 right-6 text-white hover:text-red-400 p-2 
              rounded-full bg-white/10 transition-colors duration-200 z-[60]
              shadow-lg hover:bg-white/20
            "
            aria-label="Close image viewer"
          >
            {/* Using a clean SVG for the X icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div 
            className="max-w-5xl max-h-[90vh] flex flex-col items-center space-y-5 p-4"
            onClick={(e) => e.stopPropagation()} // Prevent modal closing when clicking the image/info
          >
            <img
              src={currentData?.img}
              // Added object-contain for full image visibility and consistency
              className="w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/20"
              alt={currentData?.title || "Facility Image"}
            />

            {/* Title + desc ONLY for capability items */}
            {currentData?.title && (
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center text-white max-w-2xl">
                <h2 className="text-2xl font-bold">{currentData.title}</h2>
                <p className="mt-2 text-sm leading-relaxed">{currentData.desc}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Sticky Sidebar (Unchanged) */}
      <aside className="lg:col-span-1 h-fit lg:sticky lg:top-32 space-y-6 bg-white border border-[#44444E]/20 p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
        <h2 className="text-3xl font-bold text-[#44444E] leading-snug">
          {facility.title}
        </h2>
        <p className="text-sm text-[#44444E]/70 font-medium">
          📍 {facility.location}
        </p>

        {/* Facility Dropdown */}
        <div className="pt-4 border-t border-[#44444E]/10">
          <label
            htmlFor="facilityDropdown"
            className="text-lg font-semibold text-[#B45253] mb-2 tracking-wide block"
          >
            Select Facility
          </label>
          <select
            value={facility.id}
            onChange={(e) => navigate(`/facilities/${e.target.value}`)}
            className="border p-2 rounded-lg"
          >
            {facilities.map((f) => (
              <option key={f.id} value={f.id}>
                {f.title}
              </option>
            ))}
          </select>
        </div>

        <div className="pt-4 border-t border-[#44444E]/10">
          <h3 className="text-lg font-semibold text-[#B45253] mb-2 tracking-wide">
            Highlights
          </h3>
          <ul className="list-disc ml-5 text-[#44444E] space-y-1 text-sm">
            {facility.highlights?.map((h, index) => (
              <li key={index}>{h}</li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-[#44444E]/10">
          <h3 className="text-lg font-semibold text-[#B45253] mb-2 tracking-wide">
            Specifications
          </h3>
          <ul className="text-[#44444E] space-y-1 text-sm">
            <li>
              <strong>Total Area:</strong> {facility.totalArea}
            </li>
            <li>
              <strong>Production Capacity:</strong> {facility.productionCapacity}
            </li>
            {facility.specializations && (
              <li>
                <strong>Specializations:</strong> {facility.specializations}
              </li>
            )}
          </ul>
        </div>

        <div className="pt-4 border-t border-[#44444E]/10">
          <h3 className="text-lg font-semibold text-[#B45253] mb-2 tracking-wide">
            Navigate
          </h3>
          <ul className="space-y-1 text-[#B45253] text-sm font-medium underline">
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#capabilities">Capabilities</a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content (Unchanged) */}
      <main className="lg:col-span-3 space-y-16">

        {/* Page Title */}
        <div
          className="p-6 rounded-2xl shadow-sm border border-[#B45253]/20"
          style={{
            background: "linear-gradient(100deg, #B45253 85%, #44444E 0%)",
          }}
        >
          <h1 className="text-4xl font-bold text-white tracking-tight">
            {facility.title}
          </h1>
          <p className="text-gray-900 mt-2 max-w-2xl text-sm leading-relaxed">
            {facility.desc}
          </p>
        </div>

        {/* Gallery Section */}
        <section id="gallery" className="space-y-5">
          <h3 className="text-2xl font-semibold text-[#44444E] border-l-4 border-[#B45253] pl-3">
            Facility Gallery
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {facility.facilityImg.map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox({ img: src })} // only image
              >
                <img src={src} className="w-full h-52 object-cover" alt={`Facility image ${index + 1}`}/>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="space-y-5">
          <h3 className="text-2xl font-semibold text-[#44444E] border-l-4 border-[#B45253] pl-3">
            Capabilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {facility.capabilityImg?.map((cap, index) => (
              <div
                key={index}
                className="bg-white border border-[#44444E]/10 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 space-y-4"
              >
                <img
                  src={cap.img}
                  alt={cap.title}
                  onClick={() => openLightbox(cap)} // full capability object
                  className="w-full h-44 object-cover rounded-lg cursor-pointer"
                />
                <h4 className="text-xl font-semibold text-[#44444E]">
                  {cap.title}
                </h4>
                <p className="text-sm text-[#44444E]/70 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}