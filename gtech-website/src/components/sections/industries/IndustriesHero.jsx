import industryHero from "../../../assets/images/industry/industryHero.png";

const IndustriesHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="pt-7">
          <div className="flex items-center gap-2 text-[13px]">
            <span className="text-slate-400">Home</span>
            <span className="text-slate-300">/</span>
            <span className="font-medium text-slate-700">
              Industries
            </span>
          </div>
        </div>

        {/* Hero */}
        <div className="grid items-center gap-12 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-14">
          
          {/* Content */}
          <div className="max-w-[570px]">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-blue-600" />

              <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-blue-600">
                Industries We Serve
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[40px] font-bold leading-[1.08] tracking-[-1.2px] text-slate-900 sm:text-[46px] lg:text-[52px]">
              Engineering Solutions
              <span className="block text-blue-600">
                for Every Industry.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[510px] text-[15px] leading-7 text-slate-600">
              From water treatment to complex industrial processes,
              we deliver reliable engineering solutions designed around
              the unique requirements of every industry we serve.
            </p>

            {/* Bottom Highlight */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-10 w-[3px] rounded-full bg-blue-600" />

              <p className="max-w-[390px] text-[13px] font-medium leading-5 text-slate-700">
                Practical solutions. Sustainable results.
                <span className="text-blue-600">
                  {" "}Built for long-term performance.
                </span>
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            {/* Soft Glow */}
            <div className="absolute -inset-3 rounded-[28px] bg-blue-100/50 blur-2xl" />

            <div className="relative h-[300px] overflow-hidden rounded-[24px] lg:h-[355px]">
              <img
                src={industryHero}
                alt="Industrial water treatment facility"
                className="h-full w-full object-cover object-center"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-transparent" />

              {/* Bottom Label */}
              <div className="absolute bottom-5 left-5 rounded-xl border border-white/30 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-600">
                  G.Tech Global
                </p>

                <p className="mt-1 text-[13px] font-medium text-slate-800">
                  Engineering & Treatment Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="h-px w-full bg-slate-100" />
    </section>
  );
};

export default IndustriesHero;