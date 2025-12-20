import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { facilities } from "../../utils/facilities";
import { MapPin, ShieldCheck, Activity, Cpu, ArrowLeft, Maximize2, X } from "lucide-react";

export default function FacilityDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const facility = facilities.find((f) => f.id === id);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);

  const openLightbox = (data) => {
    setCurrentData(data);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentData(null);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") closeLightbox(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (!facility) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#F8F9FA]">
        <h1 className="text-4xl font-black text-[#44444E]">404 // DATA_NOT_FOUND</h1>
        <button onClick={() => navigate('/facilities')} className="mt-6 px-8 py-3 bg-[#BF092F] text-white font-black uppercase text-xs">Return to Terminal</button>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      
      {/* ───────── LIGHTBOX MODAL (Industrial Design) ───────── */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#44444E]/95 backdrop-blur-md p-4" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-10 right-10 text-white hover:text-[#BF092F] transition-colors"><X size={40} /></button>
          <div className="max-w-6xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img src={currentData?.img} className="max-h-[70vh] w-auto border-4 border-white/10 shadow-2xl object-contain" alt="Technical View" />
            {currentData?.title && (
              <div className="mt-8 bg-white p-8 border-t-8 border-[#BF092F] max-w-2xl w-full">
                <h2 className="text-2xl font-black text-[#44444E] uppercase tracking-tighter">{currentData.title}</h2>
                <p className="mt-4 text-gray-500 font-medium leading-relaxed uppercase text-xs">{currentData.desc}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ───────── MAIN LAYOUT ───────── */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* 1. STICKY TECHNICAL SIDEBAR */}
        <aside className="lg:col-span-3 space-y-8">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[#44444E] hover:text-[#BF092F] font-black uppercase text-[10px] tracking-widest mb-10 transition-colors">
            <ArrowLeft size={14} /> Back to Projects
          </button>

          <div className="bg-white border border-gray-200 p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Activity size={16} className="text-[#BF092F] animate-pulse" />
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Facility</span>
            </div>
            
            <h2 className="text-3xl font-black text-[#44444E] uppercase tracking-tighter leading-none mb-4">{facility.title}</h2>
            <div className="flex items-center gap-2 text-[#BF092F] mb-8 font-black uppercase text-[10px] tracking-widest">
              <MapPin size={14} /> {facility.location}
            </div>

            <div className="space-y-6 pt-8 border-t border-gray-100">
              <div>
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-2">Switch Facility</span>
                <select 
                  value={facility.id} 
                  onChange={(e) => navigate(`/facilities/${e.target.value}`)}
                  className="w-full bg-[#F8F9FA] border border-gray-200 p-3 text-xs font-black uppercase text-[#44444E] outline-none"
                >
                  {facilities.map((f) => <option key={f.id} value={f.id}>{f.title}</option>)}
                </select>
              </div>

              <div className="space-y-4">
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block">Unit Specs</span>
                <div className="grid grid-cols-1 gap-3">
                  <SpecItem label="Total Area" value={facility.totalArea} />
                  <SpecItem label="Capacity" value={facility.productionCapacity} />
                  <SpecItem label="Standard" value="ISO 9001:2015" />
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* 2. MAIN CONTENT AREA */}
        <main className="lg:col-span-9 space-y-20">
          
          {/* Header Chassis */}
          <section className="bg-[#44444E] p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10"><Cpu size={120} /></div>
            <div className="relative z-10">
              <span className="bg-[#BF092F] px-3 py-1 text-[9px] font-black uppercase tracking-[0.3em] mb-6 inline-block">Facility in Detail</span>
              <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-6">{facility.title}</h1>
              <p className="max-w-3xl text-gray-300 font-bold uppercase text-xs leading-loose tracking-wide">{facility.desc}</p>
            </div>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-1 bg-[#BF092F]" />
              <h3 className="text-2xl font-black text-[#44444E] uppercase tracking-tighter">Facility Gallery</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {facility.facilityImg.map((src, index) => (
                <div key={index} className="group relative h-64 overflow-hidden border border-gray-200 cursor-pointer" onClick={() => openLightbox({ img: src })}>
                  <img src={src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Technical View" />
                  <div className="absolute inset-0 bg-[#44444E]/0 group-hover:bg-[#44444E]/40 transition-all flex items-center justify-center">
                    <Maximize2 className="text-white opacity-0 group-hover:opacity-100" size={30} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Capabilities Section */}
          <section id="capabilities" className="space-y-8 pb-20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-1 bg-[#BF092F]" />
              <h3 className="text-2xl font-black text-[#44444E] uppercase tracking-tighter">Capabilities & Machinery</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facility.capabilityImg?.map((cap, index) => (
                <div key={index} className="bg-white border border-gray-200 group transition-all hover:border-[#BF092F]">
                   <div className="h-56 overflow-hidden relative cursor-pointer" onClick={() => openLightbox(cap)}>
                      <img src={cap.img} className="w-full h-full object-cover" alt={cap.title} />
                      <div className="absolute bottom-0 left-0 bg-[#44444E] text-white p-4">
                         <ShieldCheck size={20} className="text-[#BF092F]" />
                      </div>
                   </div>
                   <div className="p-8">
                      <h4 className="text-xl font-black text-[#44444E] uppercase tracking-tighter mb-4 group-hover:text-[#BF092F] transition-colors">{cap.title}</h4>
                      <p className="text-xs font-bold text-gray-500 uppercase leading-relaxed tracking-wider">{cap.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

/* Helper Component for Sidebar Specs */
function SpecItem({ label, value }) {
  return (
    <div className="bg-[#F8F9FA] p-3 border-l-2 border-[#BF092F]">
      <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest block">{label}</span>
      <span className="text-[10px] font-black text-[#44444E] uppercase">{value}</span>
    </div>
  );
}