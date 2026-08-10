const ProjectCard = ({ project }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-[#EAF5FF]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#0866E8] shadow-sm">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-[#0B285A]">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          {project.location}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-sm font-medium text-slate-600">
            Water Treatment
          </span>

          <button
            type="button"
            className="text-sm font-semibold text-[#0866E8] transition-colors hover:text-[#054EB2]"
          >
            View Project →
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;