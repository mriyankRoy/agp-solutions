import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Twitter,
  Send,
  CheckCircle,
  Home,
  Clock,
  ChevronLeft,
  X,
} from "lucide-react";
import { useNavigate } from "react-router";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function ContactUsPage() {
  const navigate = useNavigate();
  const captchaRef = useRef(null);

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
  const [isVisible, setIsVisible] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the security verification.");
      return;
    }

    setLoading(true);

    const object = {
      ...formData,
      // Pass the token to Web3Forms
      "h-captcha-response": captchaToken,
      access_key: "d6efad2a-df02-4c2c-8ce2-77e9b47e8082",
      subject: `New Contact Form Submission from ${formData.name}`,
      from_name: "Art Genpower Solutions Ltd",
    };

    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setCaptchaToken(null);
        if (captchaRef.current) captchaRef.current.resetCaptcha();
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        alert(result.message || "Transmission failed. Please try again.");
      }
    } catch (error) {
      alert("Terminal error. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#44444E] font-sans selection:bg-[#BF092F] selection:text-white">
      {/* SUCCESS POPUP MODAL */}
      {submitted && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-[#44444E]/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSubmitted(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center transform transition-all border-t-8 border-[#BF092F]">
            <button
              onClick={() => setSubmitted(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#BF092F] transition-colors"
            >
              <X size={24} />
            </button>
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle className="text-green-600" size={48} />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-[#44444E] mb-2 uppercase tracking-tighter">
              Transmission Successful
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 uppercase tracking-widest font-medium">
              Your technical enquiry has been received. Our engineering team
              will contact you shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="w-full py-4 bg-[#44444E] text-white text-xs font-black uppercase tracking-[0.3em] hover:bg-[#BF092F] transition-all rounded-xl shadow-lg"
            >
              Back to Terminal
            </button>
          </div>
        </div>
      )}

      {/* 🏗️ MATCHED FLOATING HERO SECTION */}
      <div className="pt-22 px-2 md:px-2">
        <header className="shadow-xl relative h-[28vh] min-h-[300px] w-full flex items-center bg-[#44444E] overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#BF092F] to-transparent animate-pulse" />
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse delay-700" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-20">
            <nav className="flex items-center flex-wrap gap-3 mb-6">
              <button
                onClick={() => navigate("/")}
                className="cursor-pointer group flex items-center gap-1 text-white/50 hover:text-white transition-colors"
              >
                <Home size={14} />
                <span className="text-[10px] md:text-xs tracking-widest uppercase">
                  Home
                </span>
              </button>
              <span className="text-white/20 text-xs font-mono">{">"}</span>
              <button className="text-[10px] md:text-xs tracking-widest uppercase bg-[#BF092F] text-white px-4 py-1.5 rounded-2xl shadow-lg shadow-[#BF092F]/20">
                Contact Us
              </button>
            </nav>

            <h1
              className={`font-semibold text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-[-0.02em] max-w-4xl transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              Contact <span className="text-[#BF092F]">Us</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl tracking-wide leading-relaxed mt-2">
              Communications Terminal & Global Support
            </p>
          </div>
        </header>
      </div>

      {/* 🏭 MAIN CONTENT AREA */}
      <main className="container mx-auto -translate-y-24 relative z-30">
        <div className="pt-30 px-2 md:px-2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* RIGHT SECTION - The Form */}
            <div
              className={`lg:col-span-8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="bg-white px-4 md:px-8 py-10 md:py-12 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
                <span className="absolute top-8 right-8 text-6xl font-black text-gray-50 select-none hidden md:block">
                  FORM
                </span>
                <h2 className="tracking-widest border-l-4 border-[#BF092F] pl-4 mb-10 text-[#44444E] uppercase text-sm font-bold">
                  Send Message
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-8 relative z-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Input
                      label="Identity / Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="J. Doe"
                    />
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Contact@domain.com"
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
                      placeholder="Company LTD"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] text-[#44444E] uppercase tracking-[0.2em] mb-3 font-bold">
                      Service Classification
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border-b-2 border-gray-200 py-4 tracking-widest focus:outline-none focus:border-[#BF092F] appearance-none cursor-pointer"
                      >
                        <option value="">Select Project Scope</option>
                        <option value="generator-packages">
                          Generator Packages
                        </option>
                        <option value="electrical-accessories">
                          Electrical Accessories
                        </option>
                        <option value="bespoke-engineering">
                          Bespoke Turnkey Projects
                        </option>
                        <option value="others">Others</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#44444E]">
                        <ChevronLeft size={16} className="-rotate-90" />
                      </div>
                    </div>
                  </div>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="PROVIDE DETAILED TECHNICAL REQUIREMENTS..."
                    className="w-full bg-gray-50 border-b-2 border-gray-200 py-4 tracking-widest focus:outline-none focus:border-[#BF092F] resize-none"
                  />

                  {/* hCaptcha Widget Container */}
                  <div className="py-2 relative z-[60]">
                    <HCaptcha
                      // Official Web3Forms sitekey for free users
                      sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                      onVerify={(token) => setCaptchaToken(token)}
                      onExpire={() => setCaptchaToken(null)}
                      ref={captchaRef}
                      theme="light"
                      reCaptchaCompat={false}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-4 px-10 py-4 bg-[#44444E] text-white uppercase tracking-[0.3em] hover:bg-[#BF092F] hover:shadow-2xl transition-all rounded-xl shadow-xl group font-bold disabled:opacity-50"
                  >
                    {loading ? "Transmitting..." : "Send Message"}
                    <Send
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </form>
              </div>
            </div>
            {/* SIDEBAR */}
            <aside
              className={`lg:col-span-4 space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="rounded-2xl bg-[#44444E] shadow-2xl border-t-4 border-[#BF092F] overflow-hidden h-full">
                <div className="p-8 border-b border-white/10">
                  <h2 className="text-[12px] text-white tracking-[0.4em] mb-8 font-bold">
                    TERMINAL INFO
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
                      value="bandana@artgpower.co.uk"
                      href="mailto:bandana@artgpower.co.uk"
                    />
                    <ContactRow
                      icon={<MapPin size={18} />}
                      label="Address"
                      value="W3 Winchester Avenue, Blaby,
Leicester, LE8 4GZ, United Kingdom"
                    />
                  </div>
                </div>
                <div className="p-8 bg-black/20">
                  <h3 className="text-[12px] text-white/40 uppercase tracking-[0.4em] mb-6 flex items-center gap-2">
                    <Clock size={14} /> Operational Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-[11px] uppercase tracking-widest">
                      <span className="text-white/50">Mon – Fri</span>
                      <span className="text-white font-bold">
                        09:00 – 17:00
                      </span>
                    </div>
                    <div className="flex justify-between text-[11px] uppercase tracking-widest">
                      <span className="text-white/50">Saturday</span>
                      <span className="text-white font-bold">
                        10:00 – 14:00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex gap-2">
                  <IconButton icon={<Linkedin size={18} />} />
                  <IconButton icon={<Facebook size={18} />} />
                  <IconButton icon={<Twitter size={18} />} />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </div>
  );
}

/* --- Reusable Sub-Components --- */

function ContactRow({ icon, label, value, href }) {
  return (
    <div className="flex gap-4 items-start group">
      <div className="w-10 h-10 bg-white/10 text-[#BF092F] flex items-center justify-center shrink-0 rounded-lg border border-white/5 group-hover:bg-[#BF092F] group-hover:text-white transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-[12px] text-white/30 uppercase tracking-[0.3em] mb-1 font-bold">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="text-xs text-white uppercase tracking-widest hover:text-[#BF092F] transition-colors font-medium"
          >
            {value}
          </a>
        ) : (
          <span className="text-xs text-white/80 uppercase tracking-widest leading-relaxed font-medium">
            {value}
          </span>
        )}
      </div>
    </div>
  );
}

function IconButton({ icon }) {
  return (
    <button className="w-12 h-12 flex items-center justify-center bg-white/5 text-white/40 border border-white/5 hover:bg-[#BF092F] hover:text-white transition-all rounded-lg">
      {icon}
    </button>
  );
}

function Input({ label, ...props }) {
  return (
    <div className="w-full">
      <label className="block text-[12px] text-[#44444E] uppercase tracking-[0.2em] mb-2 font-bold">
        {label}
      </label>
      <input
        {...props}
        className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 tracking-widest focus:outline-none focus:border-[#BF092F] transition-colors"
      />
    </div>
  );
}
