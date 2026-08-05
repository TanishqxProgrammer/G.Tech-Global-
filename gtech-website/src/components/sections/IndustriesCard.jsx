import {
  ArrowRight,
  Building2,
  Factory,
  GraduationCap,
  Hospital,
  Hotel,
  House,
  MoreHorizontal,
  Pill,
  UtensilsCrossed,
} from "lucide-react";

import Button from "../common/Button";

const industries = [
  {
    title: "Manufacturing",
    icon: Factory,
  },
  {
    title: "Pharmaceuticals",
    icon: Pill,
  },
  {
    title: "Schools & Colleges",
    icon: GraduationCap,
  },
  {
    title: "Hotels & Resorts",
    icon: Hotel,
  },
  {
    title: "Food & Beverage",
    icon: UtensilsCrossed,
  },
  {
    title: "Home & Residential",
    icon: House,
  },
  {
    title: "Hospitals",
    icon: Hospital,
  },
  {
    title: "Commercial Buildings",
    icon: Building2,
  },
  {
    title: "Many More",
    icon: MoreHorizontal,
  },
];

const IndustriesCard = () => {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-blue-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute -top-24 -right-20 h-60 w-60 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-200/25 blur-3xl" />

      <div className="relative z-10">
        <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
          Industries We Serve
        </span>

        <h2 className="mt-3 max-w-md text-[28px] font-bold leading-tight text-slate-900">
          Serving Diverse Industries Across India
        </h2>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {industries.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-100 bg-slate-50/80 p-3 text-center transition-all duration-300 hover:border-blue-200 hover:bg-blue-50"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 group-hover:bg-blue-600">
                <Icon
                  size={18}
                  className="text-blue-600 transition-all duration-300 group-hover:text-white"
                />
              </div>

              <h3 className="mt-2 text-[13px] font-semibold leading-5 text-slate-700">
                {title}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <Button>
            Explore All Industries
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IndustriesCard;