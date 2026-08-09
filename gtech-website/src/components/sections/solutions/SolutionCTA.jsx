import { ArrowRight, MessageCircle } from "lucide-react";

const SolutionCTA = () => {
  return (
    <section className="px-6 pb-16 pt-1 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[18px] border border-blue-100 bg-blue-50/40 px-7 py-7 md:px-8">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[55%] opacity-40">
          <div className="absolute right-[-50px] top-[-70px] h-[230px] w-[500px] rotate-[-8deg] rounded-[50%] border border-blue-200" />

          <div className="absolute right-[-30px] top-[-40px] h-[180px] w-[450px] rotate-[-8deg] rounded-[50%] border border-blue-100" />
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          {/* Left Content */}
          <div className="flex items-center gap-6">
            {/* Icon */}
            <div className="flex h-[78px] w-[78px] shrink-0 items-center justify-center rounded-full bg-blue-600">
              <MessageCircle
                size={34}
                strokeWidth={1.8}
                className="text-white"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="text-[24px] font-bold text-slate-900 md:text-[27px]">
                Have a Project in Mind?
              </h2>

              <p className="mt-2 text-[16px] text-slate-600">
                Let’s build the right solution for your business.
              </p>
            </div>
          </div>

          {/* Button */}
          <button
            type="button"
            className="flex shrink-0 items-center gap-4 rounded-[8px] bg-blue-600 px-8 py-4 text-[17px] font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.22)] transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_12px_25px_rgba(37,99,235,0.28)]"
          >
            Get in Touch
            <ArrowRight size={21} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionCTA;