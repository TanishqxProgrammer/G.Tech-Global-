import { ArrowRight } from "lucide-react";
import SolutionCards from "./SolutionCards";

const OurSolution = () => {
  return (
    <section className="bg-[#F8FAFC] pt-20 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
          OUR SOLUTIONS
        </p>

        <div className="mt-3 flex items-end justify-between">
          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-[#0F2B66] lg:text-5xl">
            Complete Range of Water Treatment Solutions
          </h2>

          <button className="hidden items-center gap-2 font-semibold text-blue-600 transition hover:gap-3 lg:flex">
            View All Solutions
            <ArrowRight size={18} />
          </button>
        </div>

        <SolutionCards />
      </div>
    </section>
  );
};

export default OurSolution;
