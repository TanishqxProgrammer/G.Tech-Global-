import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroBg from "../../assets/images/hero/img2.png";

import Container from "../common/Container";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section className="relative h-[760px] overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "right center",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-transparent" />

      <Container className="relative z-10 flex h-full items-center pb-28">
  <div className="max-w-[680px] translate-x-10">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100 px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-sky-500" />

            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Trusted Water Treatment Company
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[72px] font-black leading-[1.05] tracking-[-2px] text-slate-900">
            Engineering
            <br />

            <span className="text-blue-600">
              Clean Water
            </span>

            <br />

            Solutions
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-[560px] text-lg leading-9 text-slate-600">
            We provide advanced water treatment systems including
            RO Plants, STP, ETP, Water Softeners and complete
            industrial water solutions across India.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-4">

            <Button className="h-14 w-60 px-8">
              Get Free Consultation
              <ArrowRight size={18} />
            </Button>

            <button className="flex h-14 w-50 items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-8 font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-600">
              Explore Solutions
              <ArrowRight size={18} />
            </button>

          </div>

          {/* Trust Points */}
          <div className="mt-10 flex gap-8">

            <div className="flex items-center gap-2">
              <CheckCircle2
                size={20}
                className="text-emerald-500"
              />

              <span className="font-medium text-slate-700">
                ISO Certified
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2
                size={20}
                className="text-emerald-500"
              />

              <span className="font-medium text-slate-700">
                500+ Projects
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2
                size={20}
                className="text-emerald-500"
              />

              <span className="font-medium text-slate-700">
                Pan India Service
              </span>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;