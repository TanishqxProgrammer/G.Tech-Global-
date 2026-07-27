import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroBg from "../../assets/images/hero/img2.png";
import HeroStats from "./HeroStats";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section
      className="relative overflow-visible bg-cover bg-no-repeat pb-32 min-h-[700px] lg:min-h-[calc(100vh-84px)]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "right center",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/60 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[700px] lg:min-h-[calc(100vh-84px)] items-center">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[600px] translate-x-10 lg:translate-x-14">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100 px-5 py-2">
              <span className="h-2 w-2 rounded-full bg-sky-500"></span>

              <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
                Trusted Water Treatment Company
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-[1.05] tracking-[-2px] text-slate-900 lg:text-6xl xl:text-[72px]">
              Engineering
              <br />
              <span className="text-sky-600">Clean Water</span>
              <br />
              Solutions
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[560px] text-lg leading-8 text-slate-600">
              We provide advanced water treatment systems including RO Plants,
              STP, ETP, Water Softeners and complete industrial water solutions
              across India.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button className="h-14 min-w-[220px]">
                Get Free Consultation
                <ArrowRight size={18} />
              </Button>

              <button className="flex h-14 min-w-[220px] items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 font-semibold text-slate-700 transition duration-300 hover:border-sky-500 hover:text-sky-600">
                Explore Solutions
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Trust Points */}
            <div className="mt-10 flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-emerald-500" />
                <span className="font-medium text-slate-700">
                  ISO Certified
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-emerald-500" />
                <span className="font-medium text-slate-700">
                  500+ Projects
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-emerald-500" />
                <span className="font-medium text-slate-700">
                  Pan India Service
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeroStats />
    </section>
  );
};

export default Hero;
