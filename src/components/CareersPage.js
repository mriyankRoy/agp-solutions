// CareersPage.jsx
export default function CareersPage() {
  return (
    <div className="relative bg-white min-h-screen pt-28 pb-20 px-6 md:px-16 lg:px-24 flex flex-col items-center overflow-hidden">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-black drop-shadow-lg mb-6 animate-fadeIn">
          Join Our Team
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed animate-fadeIn delay-200">
          At Art GenPower Solutions Ltd, we are always looking for talented individuals to power innovation and excellence.
        </p>
      </section>

      {/* Careers Contact Card */}
      <section className="relative max-w-3xl mx-auto text-center bg-gradient-to-tr from-[#B45253] to-[#44444E] p-12 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-slideUp">
          Contact Us to Apply
        </h2>
        <p className="text-lg text-white/90 mb-6 animate-slideUp delay-200">
          Send your CV or reach out to our recruitment team.
        </p>
        <div className="space-y-3">
          <p className="text-white font-semibold text-lg animate-slideUp delay-300">
            📧 Email:{" "}
            <a
              href="mailto:careers@artgenpower.com"
              className="underline hover:text-yellow-400 transition-colors"
            >
              info@artgenpower.com
            </a>
          </p>
          <p className="text-white font-semibold text-lg animate-slideUp delay-400">
            📞 Phone:{" "}
            <a
              href="tel:+447365278231"
              className="underline hover:text-yellow-400 transition-colors"
            >
              +44 7365 278 231
            </a>
          </p>
        </div>

        {/* Floating shapes */}
        <div className="absolute -top-10 -left-10 w-36 h-36 bg-[#B45253]/40 rounded-full blur-3xl animate-floatSlow"></div>
        <div className="absolute -bottom-12 -right-10 w-48 h-48 bg-[#44444E]/40 rounded-full blur-3xl animate-floatSlow"></div>
      </section>

      {/* Bottom decorative gradients */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-[#B45253]/50 to-[#44444E]/30 rounded-full blur-3xl pointer-events-none -z-10 animate-floatSlow"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-tl from-[#44444E]/40 to-[#B45253]/30 rounded-full blur-3xl pointer-events-none -z-10 animate-floatSlow"></div>

      {/* Animations in Tailwind CSS (add to global CSS or tailwind.config.js) */}
      <style>
        {`
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-floatSlow {
            animation: floatSlow 6s ease-in-out infinite;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
          }

          @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slideUp {
            animation: slideUp 1s ease forwards;
          }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
        `}
      </style>
    </div>
  );
}
