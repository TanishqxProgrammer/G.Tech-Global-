import {
  Droplets,
  Settings,
  Building2,
  BarChart3,
} from "lucide-react";

import SolutionHero from "../components/sections/solutions/SolutionHero";
import SolutionCard from "../components/sections/solutions/SolutionCard";
import SolutionCTA from "../components/sections/solutions/SolutionCTA";

import waterTreatment from "../assets/images/solutions/water-treatment.webp";
import processEngineering from "../assets/images/solutions/engineering.jpeg";
import typesOfPlants from "../assets/images/solutions/types-of-plants.jpeg";
import operationMaintenance from "../assets/images/solutions/maintenance.jpeg";

const solutions = [
  {
    title: "Water Treatment Solutions",
    description:
      "Comprehensive solutions for water purification, filtration, and recycling to ensure clean, safe, and sustainable water.",
    image: waterTreatment,
    icon: Droplets,
  },
  {
    title: "Process & Engineering Solutions",
    description:
      "End-to-end engineering and process solutions tailored to optimize performance, efficiency, and operational reliability.",
    image: processEngineering,
    icon: Settings,
  },
  {
    title: "Different Types of Plants",
    description:
      "We design, build, and commission a wide range of plants including ETP, STP, WTP, and RO Plants to meet diverse industry needs.",
    image: typesOfPlants,
    icon: Building2,
  },
  {
    title: "Operation & Maintenance",
    description:
      "Reliable operation and maintenance services that ensure long-term performance, minimal downtime, and maximum efficiency.",
    image: operationMaintenance,
    icon: BarChart3,
  },
];
const Solutions = () => {
  return (
    <main className="bg-white">
      {/* Hero */}
      <SolutionHero />

      {/* Solution Cards */}
      <section className="px-6 pb-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => (
              <SolutionCard
                key={solution.title}
                title={solution.title}
                description={solution.description}
                image={solution.image}
                icon={solution.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <SolutionCTA />
    </main>
  );
};

export default Solutions;