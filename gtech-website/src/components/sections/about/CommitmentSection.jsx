import { commitments } from "../../../data/aboutData";

const CommitmentSection = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-600">
            OUR COMMITMENT
          </p>

          <h2 className="mt-2 text-[34px] font-bold text-slate-900 lg:text-[38px]">
            Values That Drive Us
          </h2>
        </div>

        {/* Commitment Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group min-h-[205px] rounded-[20px] border border-slate-200 bg-white px-6 py-5 shadow-[0_10px_25px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_35px_rgba(37,99,235,0.10)]"
              >
                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 transition-all duration-300 group-hover:bg-blue-600">
                  <Icon
                    size={20}
                    strokeWidth={2}
                    className="text-blue-700 transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-3 text-[20px] font-semibold text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[13px] leading-5 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;