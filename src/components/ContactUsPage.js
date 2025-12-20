import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Twitter,
  Send,
  CheckCircle,
  ArrowRight,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // ... (Your existing fetch logic remains the same)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] selection:bg-[#BF092F] selection:text-white overflow-hidden">
      {/* 🏗️ INDUSTRIAL HERO SECTION */}
      <div className="relative h-[35vh] min-h-[400px] flex items-center bg-[#44444E] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-0 bg-fixed" />

        <div className="relative container mx-auto px-6 z-20 pt-20">
          <nav className="flex items-center gap-2 text-white/50 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <span className="hover:text-[#BF092F] cursor-pointer transition-colors">
              HOME
            </span>
            <span>/</span>
            <span className="text-[#BF092F]">COMMUNICATIONS TERMINAL</span>
          </nav>
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Get In Touch
          </h1>
          <div className="w-24 h-2 bg-[#BF092F] mt-6" />
        </div>
      </div>

      {/* --- CONTENT AREA (Overlapping Hero) --- */}
      <main className="container mx-auto px-4 py-20 flex flex-col lg:flex-row gap-12 -translate-y-24 relative z-30">
        {/* SIDEBAR - Dark Command Center Style */}
        <aside className="w-full lg:w-1/3 space-y-8">
          <div className="bg-[#44444E] shadow-2xl border-t-4 border-[#BF092F] overflow-hidden">
            <div className="p-8 border-b border-white/10">
              <h2 className="text-[14px] font-black text-[#BF092F] uppercase tracking-[0.4em] mb-6">
                Get in touch
              </h2>
              <div className="space-y-8">
                <ContactRow
                  icon={<Phone size={18} />}
                  label="Direct Line"
                  value="+44 7492 949230"
                  href="tel:+447492949230"
                />
                <ContactRow
                  icon={<Mail size={18} />}
                  label="Enquiries"
                  value="info@artgpower.co.uk"
                  href="mailto:info@artgpower.co.uk"
                />
                <ContactRow
                  icon={<MapPin size={18} />}
                  label="Address"
                  value="19 Pelham Court, Hemel Hempstead, HP2 4UW, UK"
                />
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-8 bg-black/20">
              <h3 className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-6 flex items-center gap-2">
                <Clock size={14} /> Operational Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest">
                  <span className="text-white/50">Mon – Fri</span>
                  <span className="text-white">09:00 – 17:00</span>
                </div>
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest">
                  <span className="text-white/50">Saturday</span>
                  <span className="text-white">10:00 – 14:00</span>
                </div>
              </div>
            </div>

            {/* Social Terminal */}
            <div className="p-6 flex gap-1">
              <IconButton icon={<Linkedin size={18} />} />
              <IconButton icon={<Facebook size={18} />} />
              <IconButton icon={<Twitter size={18} />} />
            </div>
          </div>

          {/* Technical Support Box */}
          {/* <div className="bg-white p-8 border border-gray-200 shadow-xl relative overflow-hidden">
            <ShieldCheck
              className="text-gray-100 absolute -right-4 -bottom-4"
              size={100}
            />
            <div className="relative z-10">
              <h4 className="text-[10px] font-black text-[#BF092F] uppercase tracking-[0.3em] mb-3">
                Priority Support
              </h4>
              <p className="text-[11px] font-bold text-gray-500 uppercase leading-relaxed mb-6">
                Existing clients with service level agreements have 24/7 access
                to our technical response team.
              </p>
              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#44444E] hover:text-[#BF092F] transition-colors">
                Support Portal <ArrowRight size={14} />
              </button>
            </div>
          </div> */}
        </aside>

        {/* RIGHT SECTION - The Form */}
        <div className="lg:col-span-2 flex-grow space-y-12">
          <div className="bg-white p-8 md:p-12 shadow-2xl border-t-4 border-[#44444E] relative">
            {/* Watermark */}
            <span className="absolute top-8 right-8 text-6xl font-black text-gray-50 select-none">
              FORM
            </span>

            {submitted && (
              <div className="mb-8 flex items-center gap-4 p-6 bg-green-50 border-l-4 border-green-500 transition-all">
                <CheckCircle className="text-green-500" />
                <div>
                  <p className="text-[11px] font-black uppercase tracking-widest text-green-900">
                    Transmission Successful
                  </p>
                  <p className="text-[10px] font-bold text-green-700 uppercase">
                    Our team will review your request shortly.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input
                  label="Identity / Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="J. DOE"
                />
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="CONTACT@DOMAIN.COM"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+44 000 000"
                />
                <Input
                  label="Corporate Entity"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="COMPANY LTD"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-[#44444E] uppercase tracking-[0.2em] mb-3">
                  Service Classification / Project Scope
                </label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-b-2 border-gray-200 px-0 py-4 text-[11px] font-bold uppercase tracking-widest focus:outline-none focus:border-[#BF092F] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select Project Scope</option>

                    {/* Product Categories */}
                    <option value="generator-packages">
                      Instrument & Generator Package Accessories
                    </option>
                    <option value="electrical-accessories">
                      Electrical Items and Accessories
                    </option>
                    <option value="mechanical-accessories">
                      Mechanical Items and Accessories
                    </option>
                    <option value="enclosures-skids">
                      Generator Enclosures & Pump Skids
                    </option>
                    <option value="e-houses-pods">
                      E-House / E-POD Solutions
                    </option>
                    <option value="tools-measurement">
                      Testing and Measurement Tools
                    </option>

                    {/* Additional Professional Services */}
                    <option value="bespoke-engineering">
                      Bespoke Turnkey Projects
                    </option>
                    <option value="bulk-supply">Bulk Inventory Supply</option>
                    <option value="technical-consultancy">
                      Technical Consultancy
                    </option>
                  </select>

                  {/* Custom Dropdown Arrow to match UI */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#44444E]">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-[#44444E] uppercase tracking-[0.2em] mb-3">
                  Project Requirements
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="PROVIDE DETAILED TECHNICAL REQUIREMENTS..."
                  className="w-full bg-gray-50 border-b-2 border-gray-200 px-0 py-4 text-[11px] font-bold uppercase tracking-widest focus:outline-none focus:border-[#BF092F] transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-4 px-12 py-5 bg-[#44444E] text-white text-[11px] font-black uppercase tracking-[0.3em] hover:bg-[#BF092F] transition-all shadow-xl group"
                >
                  {loading ? "Transmitting..." : "Send Message"}
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

          {/* Map Section */}
          <div className="bg-white p-4 shadow-2xl border-t-4 border-[#44444E]">
            <div className="w-full h-80 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.965180272038!2d-0.4373340221982014!3d51.7519602718698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876412411b387cf%3A0x3236e94b9e54d48e!2sPelham%20Ct%2C%20Hemel%20Hempstead!5e0!3m2!1sen!2suk!4v1766166381102!5m2!1sen!2suk"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      {/* Background Watermark Texture */}
      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </div>
  );
}

/* --- Refined Industrial Sub-Components --- */

function ContactRow({ icon, label, value, href }) {
  return (
    <div className="flex gap-4 items-start group">
      <div className="w-10 h-10 bg-black/20 text-[#BF092F] flex items-center justify-center shrink-0 border border-white/5 transition-colors group-hover:bg-[#BF092F] group-hover:text-white">
        {icon}
      </div>
      <div>
        <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] mb-1">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="text-xs font-bold text-white uppercase tracking-widest hover:text-[#BF092F] transition-colors"
          >
            {value}
          </a>
        ) : (
          <span className="text-xs font-bold text-white/80 uppercase tracking-widest leading-relaxed">
            {value}
          </span>
        )}
      </div>
    </div>
  );
}

function IconButton({ icon }) {
  return (
    <button className="w-12 h-12 flex items-center justify-center bg-black/10 text-white/40 border border-white/5 hover:bg-[#BF092F] hover:text-white transition-all">
      {icon}
    </button>
  );
}

function Input({ label, ...props }) {
  return (
    <div className="w-full">
      <label className="block text-[10px] font-black text-[#44444E] uppercase tracking-[0.2em] mb-3">
        {label}
      </label>
      <input
        {...props}
        className="w-full bg-gray-50 border-b-2 border-gray-200 px-0 py-4 text-[11px] font-bold uppercase tracking-widest placeholder:text-gray-300 focus:outline-none focus:border-[#BF092F] transition-colors"
      />
    </div>
  );
}
