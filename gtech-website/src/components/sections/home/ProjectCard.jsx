import { MapPin } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
      <div className="relative overflow-hidden rounded-t-[24px]">
        <img
          src={project.image}
          alt={project.title}
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
          {project.title}
        </h3>

        <div className="mt-2 flex items-center gap-2">
          <MapPin size={15} className="text-blue-600" />

          <span className="text-sm text-slate-500">
            {project.location}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;