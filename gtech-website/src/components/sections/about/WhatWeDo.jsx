import Container from "../../common/Container";
import { services } from "../../../data/serviceData";
import ServiceCard from "./ServiceCard";
import founderImg from "../../../assets/images/about/founder3.png";

const WhatWeDo = () => {
  return (
    <section className="relative overflow-hidden bg-white py-10">
      {/* Background Glow */}
      <div className="absolute -left-24 top-10 h-52 w-52 rounded-full bg-blue-100/30 blur-[90px]" />
      <div className="absolute -right-24 bottom-0 h-52 w-52 rounded-full bg-cyan-100/30 blur-[90px]" />

      <Container>
        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT */}
          <div>
            <span className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
              What We Do
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 lg:text-4xl">
              Complete Water
              <br />
              Treatment Solutions
            </h2>

            <p className="mt-3 max-w-lg text-[15px] leading-6 text-slate-600">
              We provide end-to-end water treatment solutions for industrial,
              commercial and residential applications with reliable engineering
              and long-term support.
            </p>

            {/* Services */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          {/* RIGHT */}
<div className="flex justify-center lg:justify-end">
  <div className="w-full max-w-[520px] overflow-hidden rounded-[28px] border border-slate-200 bg-white p-2 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
    <img
      src={founderImg}
      alt="Founder"
      className="h-[560px] w-full rounded-[22px] object-cover object-center transition duration-500 hover:scale-[1.02]"
    />
  </div>
</div>
        </div>
      </Container>
    </section>
  );
};

export default WhatWeDo;
