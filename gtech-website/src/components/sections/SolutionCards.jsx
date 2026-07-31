import {
  Factory,
  Droplets,
  Waves,
  Cylinder,
  Refrigerator,
  Wrench,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    icon: Factory,
    title: "RO Plants",
    desc: "Industrial & Commercial RO Plants for safe and pure water.",
  },
  {
    icon: Waves,
    title: "STP Plants",
    desc: "Sewage Treatment Plants for clean and green environment.",
  },
  {
    icon: Droplets,
    title: "ETP Plants",
    desc: "Effluent Treatment Plants for industries of all scales.",
  },
  {
    icon: Cylinder,
    title: "Water Softeners",
    desc: "Remove hardness and protect your systems.",
  },
  {
    icon: Refrigerator,
    title: "Water Coolers",
    desc: "Energy efficient water coolers for homes and workplaces.",
  },
  {
    icon: Wrench,
    title: "AMC & Services",
    desc: "Reliable maintenance & support for uninterrupted flow.",
  },
];

const SolutionCards = () => {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {solutions.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:shadow-lg"
          >
            <div className="mb-5 text-sky-600">
              <Icon size={38} strokeWidth={1.6} />
            </div>

            <h3 className="text-lg font-bold text-[#0F2B66]">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {item.desc}
            </p>

            <button className="mt-5 flex items-center gap-2 text-sm font-semibold text-sky-600 transition-all duration-300 group-hover:gap-3">
              Learn More
              <ArrowRight size={15} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SolutionCards;