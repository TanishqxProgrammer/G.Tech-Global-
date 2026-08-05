import { ArrowRight, Phone } from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";
// import ctaBg from "../../assets/images/cta-bg.svg";
// import ctaIllustration from "../../assets/images/cta-illustration.webp";

const CTASection = () => {
  return (
    <section className="bg-[#F8FBFF] py-14">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-blue-100 bg-gradient-to-r from-[#EAF7FF] via-[#F8FCFF] to-[#EDF8FF]">
          {/* Background Pattern */}
          {/* <img
            src={ctaBg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          /> */}

          <div className="relative grid items-center gap-10 px-10 py-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="max-w-xl text-3xl font-bold leading-tight text-slate-900">
                Let's Build a Better Tomorrow Together
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                Whether you need water purification, wastewater treatment or
                customized industrial solutions, our experts are ready to help
                you with reliable and sustainable systems.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button>
                  Get a Free Quote
                  <ArrowRight size={18} />
                </Button>

                <a
                  href="tel:+919926096970"
                  className="flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 font-medium text-slate-700 transition-all duration-300 hover:border-blue-600 hover:text-blue-600"
                >
                  <Phone size={18} />
                  +91 99260 96970
                </a>
              </div>
            </div>

            <div className="hidden justify-end lg:flex">
              <div className="flex h-[220px] w-[320px] items-center justify-center rounded-3xl border border-dashed border-blue-200 bg-white/40 text-slate-400">
                CTA Illustration
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
