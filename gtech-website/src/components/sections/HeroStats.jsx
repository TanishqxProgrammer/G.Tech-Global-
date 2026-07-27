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
    <section className="relative z-30 mt-6 mb-12">
      <div className="mx-auto flex justify-center px-8">
        <div className="grid w-full max-w-[1280px] grid-cols-5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex h-[96px] items-center justify-center gap-3 border-r border-slate-200 last:border-r-0 transition-all duration-300 hover:bg-sky-50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-100">
                  <Icon className="text-sky-600" size={20} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.value}
                  </h3>

                  <p className="text-xs text-slate-500">
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