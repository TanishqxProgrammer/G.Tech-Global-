import {
  ShieldCheck,
  MapPinned,
  BriefcaseBusiness,
  Users,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    icon: ShieldCheck,
    value: "14+",
    label: "Years Experience",
  },
  {
    icon: MapPinned,
    value: "Pan India",
    label: "Service Network",
  },
  {
    icon: BriefcaseBusiness,
    value: "500+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    value: "1000+",
    label: "Happy Clients",
  },
  {
    icon: BadgeCheck,
    value: "ISO",
    label: "Certified Company",
  },
];

const HeroStats = () => {
  return (
    <section className="absolute -bottom-14 left-1/2 z-20 w-full -translate-x-1/2">
      <div className="mx-auto flex w-full justify-center px-6">
        <div className="flex w-[1280px] overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex h-[118px] flex-1 items-center justify-center gap-4 border-r border-slate-200/70 px-6 last:border-r-0 transition-all duration-300 hover:bg-white"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100">
                  <Icon size={22} className="text-sky-600" />
                </div>

                <div>
                  <h3 className="text-xl font-bold leading-none text-slate-900">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-[13px] font-medium text-slate-500">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroStats;
