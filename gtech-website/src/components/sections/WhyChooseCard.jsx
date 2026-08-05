import {
  Cpu,
  Wrench,
  Clock3,
  Settings2,
  MapPinned,
  Headset,
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Advanced Technology",
    desc: "Latest technology with high-quality components.",
  },
  {
    icon: Settings2,
    title: "Customized Solutions",
    desc: "Tailor-made systems for every requirement.",
  },
  {
    icon: Wrench,
    title: "Expert Engineers",
    desc: "Experienced professionals for every project.",
  },
  {
    icon: MapPinned,
    title: "Pan India Support",
    desc: "Installation and support across India.",
  },
  {
    icon: Clock3,
    title: "Timely Delivery",
    desc: "Projects delivered on schedule.",
  },
  {
    icon: Headset,
    title: "24/7 Service",
    desc: "Quick assistance whenever required.",
  },
];

const WhyChooseCard = () => {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-cyan-200/20 blur-3xl" />

      <div className="relative z-10">
        <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
          Why Choose G.Tech?
        </span>

        <h2 className="mt-3 text-[30px] font-bold leading-tight text-slate-900">
          Quality.
          <br />
          Reliability.
          <br />
          Commitment.
        </h2>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-[19px] ..."
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                <Icon size={18} className="text-blue-600" />
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-slate-800">
                  {title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseCard;