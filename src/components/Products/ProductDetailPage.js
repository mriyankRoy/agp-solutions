import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { products } from "../../utils/products";
import {
  X,
  ChevronDown,
  Download,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  FileText,
  // ADDED HOME ICON
  Home, 
} from "lucide-react";

// State for tab control
const TAB_DETAILS = "details";
const TAB_DOWNLOADS = "downloads";

const ProductDetailPage = () => {
  const { categorySlug, productName } = useParams();
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  // NEW STATE: Tracks the currently active tab
  const [activeTab, setActiveTab] = useState(TAB_DETAILS);
  const navigate = useNavigate();

  // --- Initial Setup and Scrolling Effects ---
  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Modal Logic ---
  const handleCloseModal = () => setIsModalOpen(false);
  const handleOpenModal = () => setIsModalOpen(true);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isModalOpen) {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scroll
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset"; // Ensure clean up
    };
  }, [isModalOpen]);

  // --- Product Finding Logic ---
  const category = products.find((c) => c.slug === categorySlug);
  if (!category) return <p className="p-6 text-black">Category not found.</p>;

  // Use the new product properties for decoding/finding
  const product = category.items.find(
    // Decode the URL parameter to match the product name
    (item) => item.name === decodeURIComponent(productName)
  );
  if (!product) return <p className="p-6 text-black">Product not found.</p>;

  // Destructure images safely (use an empty array if not present)
  const productImages = product.images || [];
  const totalImages = productImages.length;

  // --- Gallery Navigation Logic ---
  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  // --- Utility Function to format Detail Keys ---
  const formatDetailKey = (key) => {
    // Insert space before capital letters (except the first character) and replace underscores
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/_/g, " ")
      .trim();
  };

  // --- Tab Content Components ---

  // Component to render the Product Details (key/value pairs)
  const DetailsTab = () => (
    <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-base">
      {Object.entries(product.details || {}).map(([key, value]) => (
        <div key={key} className="flex flex-col border-b border-gray-100 pb-2">
          <dt className="font-semibold text-[#44444E]">{formatDetailKey(key)}</dt>
          <dd className="text-[#44444E]/90 mt-0.5">{value}</dd>
        </div>
      ))}
    </dl>
  );

  // Component to render the Downloads array
  const DownloadsTab = () => (
    <div className="space-y-4">
      {(product.downloads || []).length > 0 ? (
        product.downloads.map((download, index) => (
          <a
            key={index}
            href={download.url}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center justify-between gap-4 p-4 border border-gray-200 rounded-xl hover:border-[#CF0F0F] hover:shadow-md transition-all duration-300 group bg-white"
          >
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-[#44444E] group-hover:text-[#CF0F0F]">
                {download.name}
              </span>
              {/* Optional: Add a descriptive subtitle */}
              <span className="text-sm text-[#44444E]/70 mt-0.5">
                {product.manufacturerPartNumber} - {product.name}
              </span>
            </div>
            <Download className="w-6 h-6 text-[#CF0F0F] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
          </a>
        ))
      ) : (
        <p className="text-[#44444E]/70 italic">
          No official download documents are currently available for this product.
        </p>
      )}
    </div>
  );

  return (
    <div className="w-full bg-white min-h-screen pb-20 pt-2 overflow-hidden">
      {/* Background grid - Keeping it subtle with white/black */}
      <div
        className="-z-10 absolute inset-0
           bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]
           bg-[size:40px_40px]
           before:content-[''] before:absolute before:inset-0
           before:bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.02),transparent_60%)]
      "
      ></div>

      {/* HERO HEADER SECTION */}
      <div className="relative mb-16 overflow-hidden">
        {/* Background set to primary dark color for contrast */}
        <div className="absolute inset-0 bg-[#44444E] opacity-95"></div>

        {/* Animated pattern using the new dark color */}
        <div
          className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS1wd2lkdGg9IjEiLz48L2RldmY+PjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCIiLz48L3N2Zz4=')] "
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>

        {/* Animated light beams - Changed colors to white/red */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"></div>
          <div
            className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#CF0F0F] to-transparent animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative container mx-auto px-6 py-25">
          <div className="max-w-4xl">
            {/* --- BREADCRUMB --- UPDATED WITH HOME ICON */}
            <nav
              className={`mb-6 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
              aria-label="Breadcrumb"
              style={{ transitionDelay: "100ms" }}
            >
              <ol className="inline-flex items-center space-x-2 text-sm md:text-base font-medium">
                {/* 1. HOME Link (Clickable) */}
                <li className="inline-flex items-center">
                  <button
                    onClick={() => navigate("/")} // Navigate to home page
                    className="flex items-center gap-1 text-white/80 hover:text-[#CF0F0F] transition-colors duration-200 focus:outline-none"
                  >
                    <Home className="w-4 h-4" /> {/* Home Icon */}
                    Home
                  </button>
                </li>

                {/* Separator */}
                <li className="text-white/50">
                  <span className="mx-2">&gt;</span>
                </li>

                {/* 2. Products Root Link (Clickable) */}
                <li className="inline-flex items-center">
                  <button
                    onClick={() => navigate("/products")}
                    className="text-white/80 hover:text-[#CF0F0F] transition-colors duration-200 focus:outline-none"
                  >
                    Products
                  </button>
                </li>

                {/* Separator */}
                <li className="text-white/50">
                  <span className="mx-2">&gt;</span>
                </li>

                {/* 3. Category Link (Clickable) */}
                <li className="inline-flex items-center">
                  <button
                    onClick={() =>
                      navigate(`/products?category=${categorySlug}`)
                    }
                    className="text-white/80 hover:text-[#CF0F0F] transition-colors duration-200 focus:outline-none"
                  >
                    {category.category}
                  </button>
                </li>

                {/* Separator */}
                <li className="text-white/50">
                  <span className="mx-2">&gt;</span>
                </li>

                {/* 4. Product Name (Current Page) - RED TAG STYLING */}
                <li
                  className={`inline-block px-4 py-1 bg-[#CF0F0F] text-white rounded-full font-semibold whitespace-nowrap`}
                >
                  {product.name}
                </li>
              </ol>
            </nav>
            {/* --- END BREADCRUMB --- */}

            {/* Title */}
            <h1
              className={`text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight transition-all duration-1000 delay-150 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {product.name}
            </h1>

            {/* --- TECHNICAL SUMMARY BAR --- */}
            <div
              className={`mt-6 pt-4 border-t border-white/20 flex flex-wrap gap-x-8 gap-y-2 text-base font-mono transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {/* Manufacturer */}
              <div className="text-white/70">
                <span className="font-bold text-white">Make:</span>{" "}
                {product.Make}
              </div>

              {/* Manufacturer Part Number */}
              <div className="text-white/70">
                <span className="font-bold text-white">Mfr Part #:</span>{" "}
                {product.manufacturerPartNumber}
              </div>

              {/* AGP Part Number */}
              <div className="text-white/70">
                <span className="font-bold text-white">AGP Part #:</span>{" "}
                {product.AGPPartNumber}
              </div>
            </div>
            {/* --- END TECHNICAL SUMMARY BAR --- */}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* --- TOP GRID: IMAGE and SUMMARY CARD (UNCHANGED) --- */}
        <div className="mb-16 -mt-32 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* PRODUCT IMAGE SHOWCASE - 2/3 width */}
          <div className="lg:col-span-2">
            <div
              className={`relative bg-white rounded-3xl shadow-2xl p-6 backdrop-blur-sm border border-gray-200/50 transition-all duration-1000 delay-500 h-[520px] flex gap-6 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Subtle pulse background - White/light gray gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/5 rounded-3xl animate-pulse"></div>

              {/* --- 1. THUMBNAIL GALLERY (Vertical Left) --- */}
              {totalImages > 0 && (
                <div
                  className="mt-2 flex flex-col gap-3 h-[500px] overflow-y-auto pb-4 pr-1 flex-shrink-0 ml-3"
                  style={{ width: "110px" }}
                >
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-20 h-20 flex-shrink-0 rounded-xl transition-all duration-300 ${
                        index === activeIndex
                          ? "mt-2 ml-2 border-2 border-[#CF0F0F] scale-105 shadow-lg bg-white"
                          : "mt-2 ml-2 border-2 border-gray-200 opacity-80 hover:opacity-100 hover:border-[#CF0F0F]/50"
                      }`}
                      aria-label={`View image ${index + 1}`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1} of ${product.name}`}
                        className="w-full h-full object-cover rounded-lg p-0.5"
                      />
                    </button>
                  ))}
                </div>
              )}
              {/* --- END THUMBNAIL GALLERY --- */}

              {/* --- 2. MAIN IMAGE DISPLAY (Right Side, filling remaining space) --- */}
              <div
                className="relative flex-grow overflow-hidden rounded-2xl group w-full flex items-center justify-center bg-white cursor-zoom-in shadow-inner"
                onClick={handleOpenModal}
              >
                {/* Navigation Buttons for Main Image */}
                {totalImages > 0 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        goToPrev();
                      }}
                      className="absolute left-4 z-20 p-2 bg-black/50 text-white rounded-full hover:bg-[#CF0F0F]/80 transition-all duration-300 shadow-md"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        goToNext();
                      }}
                      className="absolute right-4 z-20 p-2 bg-black/50 text-white rounded-full hover:bg-[#CF0F0F]/80 transition-all duration-300 shadow-md"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                <img
                  src={productImages[activeIndex]}
                  alt={product.name}
                  key={productImages[activeIndex]}
                  className="relative h-full w-full object-contain shadow-xl transition-transform duration-700 group-hover:scale-105"
                />
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
              {/* --- END MAIN IMAGE DISPLAY --- */}
            </div>
          </div>

          {/* SUMMARY CARD MOVED NEXT TO IMAGE (UNCHANGED) - 1/3 width */}
          <div
            className={`lg:col-span-1 transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            {/* SUMMARY CARD: Fixed height h-[520px] for alignment, sticky removed */}
            <div
              className={`bg-white shadow-xl rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 h-[520px] flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-3xl font-bold text-[#44444E] mb-4 border-b border-gray-100 pb-3">
                  Quick Summary
                </h3>
                {product.shortDescription && (
                  <p className="text-[#44444E]/90 text-base leading-relaxed mb-8">
                    {product.shortDescription}
                  </p>
                )}
                <div className="space-y-4">
                  <div className="text-[#44444E]/70 font-mono text-sm">
                    Mfr Part #: {product.manufacturerPartNumber}
                  </div>
                  <div className="text-[#44444E]/70 font-mono text-sm">
                    AGP Part #: {product.AGPPartNumber}
                  </div>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="space-y-4 mt-auto">
                {/* Pricing Button: Solid Red Primary Button */}
                <button className="w-full bg-[#CF0F0F] hover:bg-black text-white text-lg font-semibold py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden group">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Contact for Pricing
                  </span>
                  <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>

                {/* Quick link to downloads tab if documents exist */}
                {(product.downloads || []).length > 0 && (
                  <button
                    onClick={() => setActiveTab(TAB_DOWNLOADS)}
                    className="w-full flex items-center justify-center gap-2 bg-[#44444E] hover:bg-black text-white text-base font-semibold py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden group"
                  >
                    <FileText
                      className="w-5 h-5 relative z-10"
                      strokeWidth={2.5}
                    />
                    <span className="relative z-10">View Specifications</span>
                    <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* --- END OF EYE-CATCHING MAIN GRID --- */}

        {/* --- NEW MAIN CONTENT GRID: TABS (2/3) vs. DESCRIPTION/USES (1/3) vs. SIDEBAR (1/3) --- */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 1. LEFT COLUMN: TABS SECTION (Spans 2/3 width) - Note: Now spans two columns on LG */}
          <div 
            className={`lg:col-span-2 space-y-0 transition-all duration-500 delay-[900ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Tabs Container - Must use flex-col and h-full to manage height matching */}
            {/* NOTE: We removed the lg:col-span-1 wrapper from the previous implementation, making the Tabs section take 2/3 width */}
            <div className="flex flex-col h-full min-h-[400px] bg-white rounded-3xl shadow-xl border border-gray-100">
                {/* Tab Headers */}
                <div className="flex border-b border-gray-200 flex-shrink-0 p-4 px-8">
                    {/* Product Details Tab */}
                    <button
                    onClick={() => setActiveTab(TAB_DETAILS)}
                    className={`flex items-center gap-2 px-6 py-4 text-lg font-semibold transition-all duration-300 -mb-4 ${
                        activeTab === TAB_DETAILS
                        ? "text-[#CF0F0F] border-b-4 border-[#CF0F0F]"
                        : "text-[#44444E]/70 hover:text-[#CF0F0F]/80 hover:border-b-4 hover:border-gray-200"
                    }`}
                    >
                    <ClipboardList className="w-5 h-5" />
                    Technical Specifications
                    </button>

                    {/* Downloads Tab */}
                    <button
                    onClick={() => setActiveTab(TAB_DOWNLOADS)}
                    className={`flex items-center gap-2 px-6 py-4 text-lg font-semibold transition-all duration-300 -mb-4 ${
                        activeTab === TAB_DOWNLOADS
                        ? "text-[#CF0F0F] border-b-4 border-[#CF0F0F]"
                        : "text-[#44444E]/70 hover:text-[#CF0F0F]/80 hover:border-b-4 hover:border-gray-200"
                    }`}
                    >
                    <FileText className="w-5 h-5" />
                    Documents & Downloads
                    {/* Optional: Show number of downloads */}
                    {product.downloads && product.downloads.length > 0 && (
                        <span className="ml-1 px-2 py-0.5 text-xs font-bold text-white bg-[#CF0F0F] rounded-full">
                        {product.downloads.length}
                        </span>
                    )}
                    </button>
                </div>

                {/* Tab Content Area: flex-grow and overflow-y-auto to allow stretching/scrolling */}
                <div
                    className={`p-8 flex-grow overflow-y-auto transition-opacity duration-500`}
                >
                    {activeTab === TAB_DETAILS && <DetailsTab />}
                    {activeTab === TAB_DOWNLOADS && <DownloadsTab />}
                </div>
            </div>
          </div>


          {/* 2. RIGHT COLUMN GROUP: DESCRIPTION and USES (Spans 1/3 width) - Note: These two divs now share the second column slot */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* PRODUCT LONG DESCRIPTION (Detailed Product Overview) */}
            <div
              className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-[#CF0F0F]/50 hover:-translate-y-1 relative overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "1100ms" }}
            >
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="w-1 h-6 bg-[#CF0F0F] rounded-full group-hover:h-8 transition-all duration-300"></div>
                <h2 className="text-2xl font-bold text-[#44444E]">
                  Detailed Overview
                </h2>
              </div>
              <p className="text-base text-[#44444E]/90 leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            </div>

            {/* USES SECTION (Applications & Uses) */}
            {product.uses && product.uses.length > 0 && (
              <div
                className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-[#44444E]/50 hover:-translate-y-1 relative overflow-hidden ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: "1300ms" }}
              >
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  {/* Accent Line: Dark Gray */}
                  <div className="w-1 h-6 bg-[#44444E] rounded-full group-hover:h-8 transition-all duration-300"></div>
                  <h2 className="text-2xl font-bold text-[#44444E]">
                    Applications & Uses
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-3 relative z-10">
                  {product.uses.map((use, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-white/50 px-3 py-2 rounded-lg border border-gray-100 group/item"
                    >
                      {/* List bullet: Red dot */}
                      <div className="w-2 h-2 bg-[#CF0F0F] rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                      <span className="text-[#44444E]/90 text-sm leading-relaxed">
                        {use}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Animated corner accent - Dark Gray subtle gradient */}
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#44444E]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            )}
          </div>
          {/* END RIGHT COLUMN GROUP (DESCRIPTION + USES) */}

        </div>
        {/* --- END NEW MAIN CONTENT GRID --- */}
      </div>

      {/* 5. Conditional Modal Component (UNCHANGED) */}
      {isModalOpen && (
        <div
          // Modal Background: fixed, covers screen, dark overlay
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity duration-300"
          onClick={handleCloseModal} // Close on clicking outside the image
        >
          {/* Close Button: Styled red/white button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-6 right-6 text-white hover:text-[#CF0F0F] p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-200 z-[60]"
            aria-label="Close image viewer"
          >
            <X className="w-8 h-8" strokeWidth={2.5} />
          </button>

          {/* Enlarged Image Container */}
          <div
            className="p-4 max-w-7xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // Prevent modal closing when clicking the image itself
          >
            <img
              src={productImages[activeIndex]}
              alt={`Enlarged view of ${product.name}`}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;