const IndustryCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_6px_20px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_15px_30px_rgba(37,99,235,0.10)]">
      
      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 transition-all duration-300 group-hover:bg-blue-600">
        <Icon
          size={27}
          strokeWidth={1.8}
          className="text-blue-600 transition-colors duration-300 group-hover:text-white"
        />
      </div>

      {/* Content */}
      <div className="mt-5 pr-5">
        <h3 className="text-[18px] font-semibold leading-6 text-slate-900">
          {title}
        </h3>

        <p className="mt-3 text-[13px] leading-5 text-slate-600">
          {description}
        </p>
      </div>

      {/* Arrow */}
      <div className="absolute bottom-5 right-5 text-blue-600 transition-transform duration-300 group-hover:translate-x-1">
        <span className="text-[25px] leading-none">→</span>
      </div>
    </div>
  );
};

export default IndustryCard;