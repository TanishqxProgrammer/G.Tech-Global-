import { Eye, Target } from "lucide-react";
import Container from "../../common/Container";

const MissionVision = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FBFF] to-[#EDF6FF] py-10">
      {/* Background Glow */}
      <div className="absolute -left-24 top-0 h-56 w-56 rounded-full bg-blue-200/20 blur-[90px]" />
      <div className="absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-cyan-200/20 blur-[90px]" />

      <Container>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700">
              Our Purpose
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 lg:text-4xl">
              Mission & Vision
            </h2>

            <p className="mt-3 text-[15px] leading-6 text-slate-600">
              Our mission defines what we do today, while our vision inspires
              where we are heading tomorrow.
            </p>
          </div>

          {/* Card */}
          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(37,99,235,0.12)]">
            <div className="grid lg:grid-cols-2">
              {/* Mission */}
              <div className="p-7 lg:border-r lg:border-slate-200/70">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white shadow-md">
                    <Target size={26} strokeWidth={2.2} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                      Our Mission
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-slate-900">
                      Deliver Excellence
                    </h3>
                  </div>
                </div>

                <div className="mt-4 h-[3px] w-14 rounded-full bg-gradient-to-r from-[#2563EB] to-[#60A5FA]" />

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  To provide innovative, reliable and sustainable water
                  treatment solutions through quality engineering, advanced
                  technology and exceptional customer service while creating
                  long-term value for every client.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-500">
                  Every solution we deliver is designed with performance,
                  durability and customer satisfaction at its core.
                </p>
              </div>

              {/* Vision */}
              <div className="p-7">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white shadow-md">
                    <Eye size={26} strokeWidth={2.2} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                      Our Vision
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-slate-900">
                      Inspire the Future
                    </h3>
                  </div>
                </div>

                <div className="mt-4 h-[3px] w-14 rounded-full bg-gradient-to-r from-[#2563EB] to-[#60A5FA]" />

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  To become one of India's most trusted water treatment
                  companies by continuously delivering engineering excellence,
                  sustainable innovation and dependable solutions for every
                  industry we serve.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-500">
                  We envision a future where clean water technologies improve
                  lives while protecting our environment for generations to
                  come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MissionVision;