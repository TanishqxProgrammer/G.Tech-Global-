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
    label: "Years of Experience",
  },
  {
    icon: MapPinned,
    value: "Pan India",
    label: "Service Network",
  },
  {
    icon: BriefcaseBusiness,
    value: "1000+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    value: "500+",
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
    <section className="relative -mt-12 mb-14 z-20">
      <div className="mx-auto max-w-[1460px] px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_15px_40px_rgba(15,23,42,0.08)]">

          <div className="grid grid-cols-5">

            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-4 border-r border-slate-200 px-8 py-8 last:border-r-0"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-100">
                    <Icon size={24} className="text-sky-600" />
                  </div>

                  <div>
                    <h3 className="text-[34px] leading-none font-bold text-slate-900">
                      {item.value}
                    </h3>

                    <p className="mt-2 text-[15px] leading-6 text-slate-500">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroStats;