import { ArrowRight } from "lucide-react";

const SolutionCard = ({ title, description, image, icon: Icon }) => {
  return (
    <div className="group overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_8px_25px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_35px_rgba(37,99,235,0.12)]">
      {/* Image */}
      <div className="h-[225px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="relative px-6 pb-6 pt-14">
        {/* Floating Icon */}
        <div className="absolute -top-9 left-6 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-blue-50 ring-8 ring-white">
          <Icon
            size={31}
            strokeWidth={1.8}
            className="text-blue-600"
          />
        </div>

        {/* Title */}
        <h2 className="min-h-[58px] text-[20px] font-bold leading-7 text-slate-900">
          {title}
        </h2>

        {/* Blue Line */}
        <div className="mt-3 h-[3px] w-7 bg-blue-600" />

        {/* Description */}
        <p className="mt-5 min-h-[128px] text-[15px] leading-7 text-slate-600">
          {description}
        </p>

        {/* Learn More */}
        <button
          type="button"
          className="flex items-center gap-3 text-[16px] font-semibold text-blue-600 transition-all duration-300 group-hover:gap-4"
        >
          Learn More
          <ArrowRight size={21} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export default SolutionCard;