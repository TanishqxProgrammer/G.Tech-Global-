import { Phone, ArrowRight } from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";

const CTASection = () => {
  return (
    <section className="py-20 bg-[#F8FBFF]">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-blue-100 bg-white px-8 py-14 text-center shadow-sm">
          <div className="absolute -top-24 -right-20 h-60 w-60 rounded-full bg-sky-200/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-200/20 blur-3xl" />

          <div className="relative z-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
              <Phone className="text-blue-600" size={28} />
            </div>

            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight text-slate-900">
              Let's Build a Better Tomorrow Together
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Whether you need water purification, wastewater treatment, or
              customized industrial solutions, our team is ready to help you
              with reliable and efficient systems.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button>
                Get a Free Quote
                <ArrowRight size={18} />
              </Button>

              <a
                href="tel:+919926096970"
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-medium text-slate-700 transition-all duration-300 hover:border-blue-600 hover:text-blue-600"
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
