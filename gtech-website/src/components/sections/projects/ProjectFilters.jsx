const ProjectFilters = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    "All Projects",
    "RO Plants",
    "ETP Plants",
    "STP Plants",
    "Water Softeners",
    "Others",
  ];

  return (
    <section className="bg-white py-8">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-3 px-6 lg:justify-start lg:px-10">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#0866E8] text-white shadow-md shadow-blue-100"
                  : "bg-[#F3F7FC] text-[#17345F] hover:bg-[#E8F2FF] hover:text-[#0866E8]"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectFilters;