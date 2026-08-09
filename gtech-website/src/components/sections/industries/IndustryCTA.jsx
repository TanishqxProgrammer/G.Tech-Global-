import { ArrowRight, MessageCircle } from "lucide-react";

const IndustriesCTA = () => {
  return (
    <section className="px-6 pb-16 pt-2 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[20px] bg-gradient-to-r from-blue-50 via-blue-50 to-white px-7 py-8 md:px-10 md:py-9">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border-[28px] border-blue-100/60" />

        <div className="pointer-events-none absolute -bottom-24 right-20 h-48 w-48 rounded-full border-[22px] border-blue-50" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          
          {/* Left */}
          <div className="flex items-center gap-5">
            {/* Icon */}
            <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-blue-600 shadow-[0_8px_20px_rgba(37,99,235,0.20)]">
              <MessageCircle
                size={31}
                strokeWidth={1.8}
                className="text-white"
              />
            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-600">
                Let&apos;s Work Together
              </p>

              <h2 className="mt-1 text-[23px] font-bold leading-tight text-slate-900 md:text-[27px]">
                Have an Industry-Specific Challenge?
              </h2>

              <p className="mt-2 text-[14px] leading-6 text-slate-600">
                We have the right solution for you.
              </p>
            </div>
          </div>

          {/* Button */}
          <button
            type="button"
            className="group flex shrink-0 items-center gap-3 rounded-lg bg-blue-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.20)] transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_12px_25px_rgba(37,99,235,0.25)]"
          >
            Get in Touch
            <ArrowRight
              size={19}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesCTA;