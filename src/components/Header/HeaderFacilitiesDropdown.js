import { ChevronRight, ChevronDown } from "lucide-react";
import { facilities } from "../../utils/facilities";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

const HeaderFacilitiesDropdown = () => {
  const [activeFacility, setActiveFacility] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="relative group">
      {/* Trigger */}
      <button
        onClick={() => navigate("/facilities")}
        className="inline-flex gap-1.5 items-center hover:text-red-500 hover:underline underline-offset-4 transition"
      >
        Facilities
        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
      </button>

      {/* Dropdown Container */}
      <div className="absolute left-0 mt-4 w-[400px] bg-gradient-to-b from-gray-900/95 via-gray-800/80 to-gray-900/70 backdrop-blur-xl border border-gray-700/40 rounded-2xl shadow-lg overflow-hidden opacity-0 translate-y-3 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-50">
        {/* Top Accent Bar */}
        <div className="h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 opacity-70" />

        <div className="grid grid-cols-[150px_1fr]">
          {/* Facility List */}
          <div className="bg-gray-800/90 border-r border-gray-700/40 py-6 px-4 flex flex-col gap-2">
            {facilities.map((f) => (
              <Link
                key={f.id}
                to={`/facilities/${f.id}`}
                onMouseEnter={() => setActiveFacility(f.id)}
                className={`border-gray-400 px-3 py-2 rounded-xl flex items-center justify-between transition-all border ${
                  activeFacility === f.id
                    ? "bg-red-600 text-white shadow-lg scale-[1.05]"
                    : "bg-gray-600 text-white hover:bg-gray-700/30 hover:text-white"
                }`}
              >
                {f.title}
                <ChevronRight
                  className={`transition-transform ${
                    activeFacility === f.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Facility Details Panel */}
          <div className="p-6 min-h-[180px] bg-gray-600 backdrop-blur-sm">
            {!activeFacility && (
              <div className="text-gray-300 text-sm animate-fadeIn">
                Hover a facility to see details
              </div>
            )}

            {facilities.map(
              (f) =>
                activeFacility === f.id && (
                  <div key={f.id} className="space-y-2 text-white">
                    <h4 className="font-semibold text-lg">{f.title}</h4>
                    <p className="text-sm">{f.location}</p>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderFacilitiesDropdown;
