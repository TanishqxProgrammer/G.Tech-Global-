import { ArrowRight } from "lucide-react";

import Container from "../../common/Container";
import Button from "../../common/Button";
import ProjectCard from "./ProjectCard";

import project1 from "../../../assets/images/project1.webp";
import project2 from "../../../assets/images/project2.webp";
import project3 from "../../../assets/images/project3.webp";
import project4 from "../../../assets/images/project4.webp";
import project5 from "../../../assets/images/project5.webp";

const projects = [
  {
    title: "Industrial RO Plant",
    location: "Maharashtra",
    image: project1,
  },
  {
    title: "ETP Plant",
    location: "Gujarat",
    image: project2,
  },
  {
    title: "STP Plant",
    location: "Karnataka",
    image: project3,
  },
  {
    title: "RO Plant",
    location: "Rajasthan",
    image: project4,
  },
  {
    title: "Water Softener Plant",
    location: "Uttar Pradesh",
    image: project5,
  },
];

const RecentProjects = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Our Projects
            </span>

            <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-slate-900">
              Some of Our Recent Installations
            </h2>
          </div>

          <Button>
            View All Projects
            <ArrowRight size={18} />
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RecentProjects;