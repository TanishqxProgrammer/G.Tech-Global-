import {
  ShieldCheck,
  MapPinned,
  Settings,
  Users,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    icon: ShieldCheck,
    value: "14+",
    title: "Years of",
    subtitle: "Experience",
  },
  {
    icon: MapPinned,
    value: "Pan India",
    title: "Service",
    subtitle: "Network",
  },
  {
    icon: Settings,
    value: "1000+",
    title: "Projects",
    subtitle: "Completed",
  },
  {
    icon: Users,
    value: "500+",
    title: "Happy",
    subtitle: "Clients",
  },
  {
    icon: BadgeCheck,
    value: "ISO 9001:2015",
    title: "Certified",
    subtitle: "Company",
  },
];

const HeroStats = () => {
  return (
    <section className="relative z-20 -mt-16 lg:-mt-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="border-gray-500 grid grid-cols-2 overflow-hidden rounded-[24px] bg-white shadow-[0_15px_40px_rgba(15,23,42,0.08)] lg:grid-cols-5">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`flex items-center gap-3 p-4 lg:p-5
                  ${
                    index !== stats.length - 1
                      ? "lg:border-r border-slate-200"
                      : ""
                  }
                  ${
                    index < 4 ? "border-b lg:border-b-0 border-slate-200" : ""
                  }`}
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="text-lg font-bold leading-none text-slate-900 lg:text-xl">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">{item.title}</p>

                  <p className="text-sm font-medium text-slate-800">
                    {item.subtitle}
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
