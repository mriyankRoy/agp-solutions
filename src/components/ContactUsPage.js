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

    const formDataObj = new FormData();
    formDataObj.append("access_key", "d6efad2a-df02-4c2c-8ce2-77e9b47e8082");
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("phone", formData.phone);
    formDataObj.append("company", formData.company);
    formDataObj.append("service", formData.service);
    formDataObj.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        console.error(result);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden px-6 lg:px-20 py-50"
    >

      <main className="relative max-w-6xl mx-auto">
        {/* Header */}
        <section className="mb-16">
          <h1 className="text-6xl font-display font-bold tracking-tight text-gray-950 pb-4">
            CONTACT
          </h1>
          <div className="h-[2px] w-24 bg-neutral-900/20 rounded-full mb-4"></div>
          <p className="mt-3 text-lg font-medium text-gray-700 max-w-2xl leading-relaxed">
            Reach out to our team for technical enquiries, quotes or partnership opportunities.
            We typically respond within one business day.
          </p>
        </section>

        <section id="contact" className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Section */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="rounded-2xl border border-neutral-200/60 bg-white/70 backdrop-blur-lg p-6 shadow-xl">
              <h3 className="text-lg font-semibold mb-4">Get in touch</h3>
              <div className="space-y-5 text-sm text-neutral-700">
                <ContactRow
                  icon={<Phone />}
                  label="Phone"
                  value={<a className="font-medium text-neutral-900" href="tel:+447492949230">+44 7492 949230</a>}
                />
                <ContactRow
                  icon={<Mail />}
                  label="Email"
                  value={<a className="font-medium text-neutral-900" href="mailto:info@artgpower.co.uk">info@artgpower.co.uk</a>}
                />
                <ContactRow
                  icon={<MapPin />}
                  label="Address"
                  value={<span className="font-medium text-neutral-900">19 Pelham Court, Hemel Hempstead, Hertfordshire, UK</span>}
                />
              </div>

              <div className="mt-6 border-t border-neutral-200 pt-5 text-sm text-neutral-600">
                <h4 className="text-sm font-semibold text-neutral-900 mb-3">Business hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between"><span>Mon – Fri</span><span className="font-medium">9:00 – 18:00</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="font-medium">10:00 – 14:00</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="text-neutral-400">Closed</span></div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <IconButton icon={<Linkedin />} />
                <IconButton icon={<Facebook />} />
                <IconButton icon={<Twitter />} />
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200/60 bg-white/70 backdrop-blur-lg p-6 shadow-xl">
              <h4 className="text-sm font-semibold mb-3">Need urgent help?</h4>
              <p className="text-sm text-neutral-600 mb-4">Call our support line for immediate assistance.</p>
              <a
                className="inline-flex items-center gap-3 px-4 py-3 rounded-lg border border-neutral-200 shadow-lg hover:shadow-xl"
                href="tel:+447492949230"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">+44 7492 949230</span>
                <ArrowRight className="w-4 h-4 ml-2 text-neutral-400" />
              </a>
            </div>
          </aside>

          {/* Right Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-neutral-200/60 bg-white/70 backdrop-blur-lg p-8 shadow-xl
              bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:24px_24px]"
            >
              {submitted && (
                <div className="flex items-start gap-4 p-4 rounded-lg border border-green-100 bg-green-50">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-900">Thanks — message sent</p>
                    <p className="text-sm text-neutral-700">We’ll get back to you shortly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input label="Full name" name="name" value={formData.name} onChange={handleChange} required placeholder="Jane Doe" />
                  <Input label="Email address" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="jane@company.com" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input label="Phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+44 7..." />
                  <Input label="Company (optional)" name="company" value={formData.company} onChange={handleChange} placeholder="Your company" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-md border border-neutral-200 px-4 py-3 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="">Select a service</option>
                    <option value="generator-containers">Generator Containers</option>
                    <option value="e-houses">E-Houses</option>
                    <option value="e-pods">E-Pods</option>
                    <option value="custom-solutions">Custom Solutions</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                  <textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project or question"
                    className="w-full rounded-md border border-neutral-200 px-4 py-3 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                  />
                </div>


                <div className="flex items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition-all shadow-md hover:shadow-xl active:scale-95"
                  >
                    {loading ? "Sending..." : "Send message"}
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-neutral-500">
                    By submitting, you agree to our privacy policy.
                  </p>
                </div>
              </form>
            </div>

            <div className="rounded-2xl border border-neutral-200/60 bg-white/70 backdrop-blur-lg shadow-xl">
              <h4 className="text-sm font-semibold p-6 pb-3">Our location</h4>
              <div className="px-6 pb-6">
                <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden border border-neutral-200">
                  <iframe
                    title="Art GenPower Solutions Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2474.911846435633!2d-0.44971122366204534!3d51.75925037190639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48763e7893ce3c79:0xeba5fb6a3081b6d6!2s19 Pelham Court, Hemel Hempstead HP2 4UW, UK!5e0!3m2!1sen!2suk!4v1732658812345!5m2!1sen!2suk"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ---------------------- Components ---------------------- */
function ContactRow({ icon, label, value }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="w-9 h-9 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-xs text-neutral-500 uppercase tracking-wide">{label}</p>
        <div className="text-sm">{value}</div>
      </div>
    </div>
  );
}

function IconButton({ icon }) {
  return (
    <button className="w-10 h-10 rounded-md border border-neutral-200 bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg hover:shadow-xl">
      {icon}
    </button>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-xs font-medium text-neutral-700 mb-2">{label}</label>
      <input
        {...props}
        className="w-full rounded-md border border-neutral-200 px-4 py-3 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
}
