import { ArrowRight } from "lucide-react";

const SolutionCards = ({ icon: Icon, title, description }) => {
  return (
    <div className="group rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl">
      
      {/* Icon */}
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 transition-all duration-300 group-hover:bg-sky-100">
        <Icon
          size={26}
          className="text-sky-600 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Title */}
      <h3 className="text-[26px] font-bold leading-tight text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-[15px] leading-7 text-slate-600">
        {description}
      </p>

      {/* Button */}
      <button className="mt-6 flex items-center gap-2 font-semibold text-sky-600 transition-all duration-300 group-hover:gap-3">
        Learn More
        <ArrowRight size={17} />
      </button>
    </div>
  );
};

export default SolutionCards;