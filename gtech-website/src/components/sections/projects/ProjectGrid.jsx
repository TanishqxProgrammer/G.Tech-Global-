import ProjectCard from "./ProjectCard";

import industrialRO from "../../../assets/images/projects/industrial-ro-plant.jpeg";
import etpPlant from "../../../assets/images/projects/etp-plant.jpeg";
import stpPlant from "../../../assets/images/projects/stp-plant.jpeg";
import roPlantRajasthan from "../../../assets/images/projects/ro-plant.jpeg";
import etpPlant2 from "../../../assets/images/projects/etp-plant-2.jpeg";
import waterSoftner from "../../../assets/images/projects/water-softner-plant.jpeg";

const projects = [
  {
    title: "Industrial RO Plant",
    category: "RO Plants",
    location: "Maharashtra",
    image: industrialRO,
  },
  {
    title: "ETP Plant",
    category: "ETP Plants",
    location: "Gujarat",
    image: etpPlant,
  },
  {
    title: "STP Plant",
    category: "STP Plants",
    location: "Karnataka",
    image: stpPlant,
  },
  {
    title: "RO Plant",
    category: "RO Plants",
    location: "Rajasthan",
    image: roPlantRajasthan,
  },
  {
    title: "Water Softener Plant",
    category: "Water Softeners",
    location: "Uttar Pradesh",
    image: waterSoftner,
  },
  {
    title: "ETP Plant",
    category: "ETP Plants",
    location: "Madhya Pradesh",
    image: etpPlant2,
  },
];

const ProjectGrid = ({ activeFilter }) => {
  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="bg-white pb-12">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={`${project.title}-${index}`}
                project={project}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[250px] items-center justify-center rounded-2xl bg-[#F5F9FF]">
            <p className="text-lg font-medium text-slate-500">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGrid;
