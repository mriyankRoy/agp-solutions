import { useParams, useNavigate } from "react-router";
import { products } from "../../utils/products";
import { Search, ArrowRight, ShieldCheck, Cpu } from "lucide-react";

const SearchResultsPage = () => {
  const { query } = useParams();
  const navigate = useNavigate();
  const decodedQuery = decodeURIComponent(query);

  const allItems = products.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      categorySlug: category.slug,
    }))
  );

  const results = allItems.filter((item) =>
    item.name.toLowerCase().includes(decodedQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-[#F8F9FA]">
      <div className="relative z-10 container mx-auto pt-32 pb-20 px-6 lg:px-12">
        {/* HEADER SECTION */}
        <div className="mb-12 border-l-4 border-[#BF092F] pl-6">
          <div className="flex items-center gap-2 mb-2">
            <Search size={14} className="text-[#BF092F]" />
            <span className="text-[10px] font-black text-[#44444E] uppercase tracking-[0.4em]">
              Data Archive
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#44444E] uppercase tracking-tighter">
            {results.length > 0
              ? `Results for: ${decodedQuery}`
              : `No Records Found`}
          </h1>
        </div>

        {results.length === 0 ? (
          <div className="bg-white border border-gray-200 p-16 shadow-sm">
            <p className="text-[#44444E] font-bold uppercase tracking-widest text-sm mb-8">
              System Scan: Zero matches found for "{decodedQuery}".
            </p>
            <button
              onClick={() => navigate("/products")}
              className="px-10 py-4 bg-[#44444E] text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#BF092F] transition-all"
            >
              Back to Catalog
            </button>
          </div>
        ) : (
          /* SHARP GRID LAYOUT */
          <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {results.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl group bg-white border-r border-b border-gray-200 p-8 transition-all duration-300 hover:bg-[#44444E] cursor-pointer"
                onClick={() =>
                  navigate(
                    `/products/${item.categorySlug}/${encodeURIComponent(
                      item.name
                    )}`
                  )
                }
              >
                {/* Image Component */}
                <div className="rounded-xl relative h-60 w-full overflow-hidden bg-gray-50 border border-gray-100 mb-8">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-80"
                  />
                </div>

                {/* Content Block */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-[#BF092F] uppercase tracking-[0.2em]">
                      Product Index: 0{idx + 1}
                    </span>
                    <ShieldCheck
                      size={16}
                      className="text-gray-200 group-hover:text-[#BF092F] transition-colors"
                    />
                  </div>

                  <h2 className="text-2xl font-black text-[#44444E] group-hover:text-white uppercase tracking-tighter leading-none transition-colors">
                    {item.name}
                  </h2>

                  <p className="text-xs font-bold text-gray-500 group-hover:text-white/60 uppercase leading-relaxed line-clamp-2 transition-colors">
                    {item.shortDescription}
                  </p>

                  <div className="pt-6 flex items-center justify-between border-t border-gray-100 group-hover:border-white/10 mt-4">
                    <div className="flex items-center gap-2">
                      <Cpu size={14} className="text-[#BF092F]" />
                      <span className="text-[9px] font-black text-gray-400 group-hover:text-white/40 uppercase">
                        Technical Specs
                      </span>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-[#44444E] group-hover:text-white group-hover:translate-x-2 transition-all"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* FOOTER METADATA */}
        <div className="mt-12 flex justify-between items-end border-t border-gray-100 pt-8">
          <div className="flex gap-4">
            <div className="w-1.5 h-1.5 bg-[#BF092F]" />
            <div className="w-1.5 h-1.5 bg-[#44444E]" />
            <div className="w-1.5 h-1.5 bg-gray-200" />
          </div>
          <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest text-right">
            Search Operation{" "}
            {results.length > 0
              ? `Results for: ${decodedQuery}`
              : `No Records Found`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
