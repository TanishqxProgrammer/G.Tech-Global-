import IndustryCard from "../components/sections/industries/IndustryCard";
import IndustriesHero from "../components/sections/industries/IndustriesHero";
import IndustriesCTA from "../components/sections/industries/IndustryCTA";

import { industries } from "../data/industryData";

const Industries = () => {
  return (
    <main className="bg-white">
      {/* Hero */}
      <IndustriesHero />

      {/* Industries Section */}
      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Industries We Serve
            </p>

            <h2 className="mt-3 text-[32px] font-bold leading-tight text-slate-900 md:text-[38px]">
              Solutions Built for Your Industry
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-6 text-slate-600">
              From water treatment to industrial processes, we provide
              reliable engineering solutions designed around the unique
              requirements of every industry.
            </p>
          </div>

          {/* Industry Cards */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <IndustryCard
                key={industry.title}
                title={industry.title}
                description={industry.description}
                icon={industry.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <IndustriesCTA />
    </main>
  );
};

export default Industries;