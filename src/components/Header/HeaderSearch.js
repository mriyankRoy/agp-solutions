import { useState } from "react";
import { Search } from "lucide-react";
import { products } from "../../utils/products";
import { useNavigate } from "react-router";

const HeaderSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setHighlightedIndex(-1);

    if (value.trim().length < 3) {
      setResults([]);
      return;
    }

    const allItems = products.flatMap((category) =>
      category.items.map((item) => ({
        ...item,
        categorySlug: category.slug,
      }))
    );

    const filtered = allItems.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered.slice(0, 5));
  };

  const handleSelect = (item) => {
    setQuery("");
    setResults([]);
    setHighlightedIndex(-1);
    navigate(`/products/${item.categorySlug}/${encodeURIComponent(item.name)}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0 && results.length > 0) {
        handleSelect(results[highlightedIndex]);
        return;
      }
      if (query.trim()) {
        navigate(`/search/${encodeURIComponent(query)}`);
        setQuery("");
        setResults([]);
        setHighlightedIndex(-1);
      }
      return;
    }
    if (results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    }
  };

  return (
    <div className="relative flex items-center">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search..."
          className="
            pl-4 pr-10 py-1.5 
            bg-white text-[10px] lg:text-sm text-gray-800 
            rounded-full border border-white/20 shadow-sm 
            focus:outline-none focus:ring-2 focus:ring-[#BF092F] 
            transition-all
            w-28 lg:w-48 xl:w-90 
          "
          value={query}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
        />

        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[#44444E] w-3.5 h-3.5 md:w-4 md:h-4 opacity-70" />

        {results.length > 0 && (
          <ul className="absolute z-[120] w-[180px] md:w-full bg-white shadow-2xl rounded-2xl mt-2 max-h-60 overflow-auto border border-gray-100">
            {results.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSelect(item)}
                className={`px-4 py-2.5 text-[12px] font-bold tracking-tight cursor-pointer transition ${
                  highlightedIndex === index
                    ? "bg-[#BF092F] text-white"
                    : "text-[#44444E] hover:bg-gray-200"
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HeaderSearch;