const SolutionsHero = () => {
  return (
    <section className="bg-white px-6 pb-10 pt-10 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        {/* Section Label */}
        <p className="text-[17px] font-semibold tracking-[0.08em] text-blue-600">
          OUR SOLUTIONS
        </p>

        {/* Blue Line */}
        <div className="mx-auto mt-4 h-[3px] w-10 bg-blue-600" />

        {/* Main Heading */}
        <h1 className="mt-5 text-[40px] font-bold leading-[1.15] tracking-[-0.02em] text-slate-900 sm:text-[46px] lg:text-[56px]">
          Solutions Built for a Better Tomorrow
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-4xl text-[16px] leading-7 text-slate-600 sm:text-[17px] lg:text-[18px] lg:leading-8">
          At G.Tech Global, we deliver advanced, reliable, and sustainable
          water and infrastructure solutions that empower industries,
          communities, and the environment.
        </p>
      </div>
    </section>
  );
};

export default SolutionsHero;