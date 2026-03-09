import React, { useState, useRef } from "react";
import { products } from "../../utils/products";
import { useNavigate } from "react-router";

const MobileHeaderSearch = ({ onSelect }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setActiveIndex(-1);
    if (value.length < 1) { setResults([]); return; }
    
    const allItems = products.flatMap(c => c.type === "parent" ? c.subCategories.flatMap(s => s.items.map(i => ({...i, categorySlug: s.slug}))) : c.items.map(i => ({...i, categorySlug: c.slug})));
    setResults(allItems.filter(i => i.name.toLowerCase().includes(value.toLowerCase())).slice(0, 5));
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setActiveIndex(prev => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      setActiveIndex(prev => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      handleSelect(results[activeIndex]);
    }
  };

  const handleSelect = (item) => {
    navigate(`/products/${item.categorySlug}/${item.id}`);
    setQuery("");
    setResults([]);
    if (onSelect) onSelect();
  };

  return (
    <div className="relative w-full">
      <input 
        type="text" 
        value={query}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        placeholder="SEARCH REGISTRY..." 
        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white text-lg font-bold placeholder:text-white/20 focus:outline-none focus:border-[#BF092F] focus:bg-white/10 transition-all" 
      />
      
      {results.length > 0 && (
        <ul className="absolute z-[120] w-full bg-[#2A2A32]/95 backdrop-blur-xl mt-3 rounded-2xl overflow-hidden border border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-2">
          {results.map((item, idx) => (
            <li 
              key={item.id} 
              onClick={() => handleSelect(item)} 
              className={`px-6 py-4 border-b border-white/5 cursor-pointer transition-all duration-300 ${
                activeIndex === idx ? "bg-[#BF092F] text-white" : "hover:bg-white/5 text-white/70"
              }`}
            >
              <span className={`block text-[10px] font-bold tracking-widest uppercase ${activeIndex === idx ? "text-white" : "text-[#BF092F]"}`}>
                {item.manufacturerPartNumber}
              </span>
              <span className="text-sm font-medium">{item.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default MobileHeaderSearch;