import React from "react";
import { useParams, useNavigate } from "react-router";
import { MapPin, Tag } from "lucide-react"; // Imported for visual flair
import { projects } from "../../utils/projects";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Ensure id is treated as a string for comparison
  const project = projects.find((p) => String(p.id) === id);

  if (!project)
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center pt-24">
        <p className="text-xl text-[#B45253] font-semibold">Project not found.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-white text-black pt-20 sm:pt-24 lg:pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="
            mb-10 inline-flex items-center 
            px-5 py-2 rounded-full 
            bg-[#44444E]/10 text-[#44444E] font-medium 
            hover:bg-[#B45253] hover:text-white 
            transition-all duration-300
            shadow-md hover:shadow-lg
          "
        >
          &larr; Back to Projects
        </button>

        {/* Header Section */}
        <header className="mb-12 border-b-2 border-[#B45253]/30 pb-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black tracking-tight mb-2">
            {project.name}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm sm:text-base font-medium">
            <span className="flex items-center gap-2 text-[#B45253]">
              <Tag size={18} /> {project.type}
            </span>
            <span className="flex items-center gap-2 text-[#44444E]">
              <MapPin size={18} /> {project.location}
            </span>
          </div>
        </header>

        {/* Gallery Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#44444E]">Project Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.imageUrls.map((url, i) => (
              <img
                key={i}
                src={url}
                alt={`${project.name}-${i}`}
                className="
                  w-full h-64 object-cover 
                  rounded-xl shadow-xl hover:shadow-2xl 
                  transition-all duration-300 
                  transform hover:scale-[1.02]
                  border-2 border-white 
                "
              />
            ))}
          </div>
        </section>

        {/* Description Section */}
        <section className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-[#B45253]">Project Details</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            {project.description.map((desc, idx) =>
              Array.isArray(desc) ? (
                <ul 
                  key={idx} 
                  className="list-none space-y-2 p-4 bg-[#44444E]/5 rounded-xl border-l-4 border-[#B45253]"
                >
                  {desc.map((d, i) => (
                    <li key={i} className="flex items-start gap-3 text-black">
                      <span className="mt-1 w-2 h-2 bg-[#B45253] rounded-full flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              ) : (
                <p key={idx} className="text-[#44444E]">{desc}</p>
              )
            )}
          </div>
        </section>

      </div>
    </div>
  );
}