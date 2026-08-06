const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/40 hover:shadow-md">

      <div className="flex items-start gap-3">

        {/* Icon */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
          <Icon size={20} strokeWidth={2.2} />
        </div>

        {/* Content */}
        <div className="flex-1">

          <h3 className="text-base font-semibold text-slate-900">
            {title}
          </h3>

          <p className="mt-1 text-[13px] leading-5 text-slate-500 line-clamp-2">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
};

export default ServiceCard;