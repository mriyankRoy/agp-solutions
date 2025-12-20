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

      // If a result item is highlighted → go to that product
      if (highlightedIndex >= 0 && results.length > 0) {
        handleSelect(results[highlightedIndex]);
        return;
      }

      // If no match → perform normal search
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

  const executeSearch = () => {
    if (!query.trim()) return;
    navigate(`/search/${encodeURIComponent(query)}`);
    setQuery("");
    setResults([]);
    setHighlightedIndex(-1);
  };

  return (
    <div className="relative flex items-center gap-3">
      {/* SEARCH INPUT */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search products, categories..."
          className="pl-10 pr-4 py-2 bg-white text-center rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:white focus:white transition w-150"
          value={query}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
        />

        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[#44444E] w-5 h-5" />

        {/* RESULTS DROPDOWN */}
        {results.length > 0 && (
          <ul className="absolute z-50 w-full bg-white shadow-lg rounded-xl mt-1 max-h-60 overflow-auto">
            {results.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSelect(item)}
                className={`px-4 py-2 cursor-pointer transition ${
                  highlightedIndex === index
                    ? "bg-blue-100"
                    : "hover:bg-blue-100"
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
