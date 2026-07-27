import {
  Droplets,
  Factory,
  FlaskConical,
  Waves,
  ShieldCheck,
  Wrench,
  ArrowRight,
} from "lucide-react";

import SolutionCard from "./SolutionCards";
const solutions = [
  {
    icon: Droplets,
    title: "RO Plants",
    description:
      "Industrial and commercial reverse osmosis systems for pure water.",
  },
  {
    icon: Factory,
    title: "STP Plants",
    description:
      "Efficient sewage treatment plants for residential and industrial use.",
  },
  {
    icon: FlaskConical,
    title: "ETP Plants",
    description:
      "Advanced effluent treatment solutions for industries of all sizes.",
  },
  {
    icon: Waves,
    title: "Water Softeners",
    description: "Protect pipelines and equipment by removing water hardness.",
  },
  {
    icon: ShieldCheck,
    title: "Water Coolers",
    description:
      "Energy-efficient commercial and industrial drinking water coolers.",
  },
  {
    icon: Wrench,
    title: "AMC & Services",
    description: "Annual maintenance and reliable after-sales service support.",
  },
];
const OurSolutions = () => {
  return (
    <section className="bg-[#F8FAFC] pt-40 pb-24">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 xl:px-16">
        {/* Top Heading */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-sm font-bold uppercase tracking-[3px] text-sky-600">
              Our Solutions
            </span>

            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 lg:text-4xl xl:text-5xl">
              Complete Range of
              <br />
              Water Treatment Solutions
            </h2>
          </div>

          <button className="flex items-center gap-2 font-semibold text-sky-600 transition-all duration-300 hover:gap-3">
            View All Solutions
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((item, index) => (
            <SolutionCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
