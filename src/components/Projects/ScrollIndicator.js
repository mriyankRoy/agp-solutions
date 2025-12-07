export const ScrollIndicator = ({ projects, activeIndex, onScrollToIndex }) => {
  return (
    <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 gap-2 sm:gap-3 px-4">
      {projects.map((_, index) => (
        <button
          key={index}
          onClick={() => onScrollToIndex(index)}
          className={`h-2 sm:h-2.5 md:h-3 rounded-full transition-all duration-500 ${
            activeIndex === index
              ? "w-8 sm:w-10 md:w-12 bg-gradient-to-r from-red-500 to-black shadow-lg shadow-purple-500/50"
              : "w-2 bg-gray-700 hover:bg-gray-500"
          }`}
          aria-label={`Go to project ${index + 1}`}
        />
      ))}
    </div>
  );
};
