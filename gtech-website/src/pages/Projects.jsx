import { useState } from "react";

import ProjectFilters from "../components/sections/projects/ProjectFilters";
import ProjectGrid from "../components/sections/projects/ProjectGrid";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  return (
    <main className="min-h-screen bg-white">
      <ProjectFilters
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <ProjectGrid activeFilter={activeFilter} />
    </main>
  );
};

export default Projects;