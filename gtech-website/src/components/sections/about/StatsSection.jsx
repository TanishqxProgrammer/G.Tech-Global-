import { stats } from "../../../data/aboutData";

const StatsSection = () => {
  return (
    <section className="mt-6">
      <div className="mx-auto max-w-[1100px] overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_10px_25px_rgba(15,23,42,0.05)]">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`
                  flex flex-col items-center justify-center
                  px-5 py-3 text-center
                  ${
                    index !== stats.length - 1
                      ? "lg:border-r lg:border-slate-200"
                      : ""
                  }
                  ${
                    index < 2
                      ? "border-b border-slate-200 lg:border-b-0"
                      : ""
                  }
                `}
              >
                {/* Icon */}
                <div className="mb-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                  <Icon
                    size={20}
                    strokeWidth={2}
                    className="text-blue-700"
                  />
                </div>

                {/* Number */}
                <h3 className="text-[30px] font-bold leading-none text-slate-900">
                  {item.value}
                </h3>

                {/* Label */}
                <p className="mt-1 max-w-[120px] text-[12px] leading-4 text-slate-600">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;