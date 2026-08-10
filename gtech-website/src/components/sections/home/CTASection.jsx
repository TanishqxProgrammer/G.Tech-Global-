import { ArrowRight, Phone } from "lucide-react";
import Container from "../../common/Container";
import Button from "../../common/Button";
import ctaIllustration from "../../../assets/images/CTA/image3.png";

const CTASection = () => {
  return (
    <section className="bg-[#F8FBFF] py-12">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-blue-100 bg-gradient-to-r from-[#EAF7FF] via-[#F8FCFF] to-[#EDF8FF] shadow-sm">
          {/* Background Image */}
          <img
            src={ctaIllustration}
            alt=""
            className="pointer-events-none absolute right-0 top-0 h-full w-[48%] object-cover object-left select-none"
          />

          {/* Light Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#EAF7FF] 0% via-[#F8FCFF]/95 45% to-transparent 75%" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl px-10 py-10">
            <h2 className="text-[2rem] font-bold leading-tight text-slate-900">
              Let's Build a Better Tomorrow Together
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Whether you need water purification, wastewater treatment, or
              customized industrial solutions, our experts are ready to help you
              deliver reliable, efficient and sustainable water treatment
              systems.
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
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
