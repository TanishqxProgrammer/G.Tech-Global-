import storyImg from "../../../assets/images/about/founder2.png";
import { CheckCircle2 } from "lucide-react";
import Container from "../../common/Container";

const features = [
  "Client-Centric Approach",
  "Reliable Engineering Solutions",
  "Innovation & Continuous Improvement",
];

const StorySection = () => {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT */}
          <div>
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Our Story
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Building Trust Through
              <br />
              Innovation & Excellence
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Since our inception, G.Tech Global has focused on delivering
              dependable engineering solutions with a commitment to quality,
              integrity, and long-term customer satisfaction.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Every project reflects our dedication to innovation, precision,
              and building relationships that last. Our goal is not only to
              meet expectations but to consistently exceed them.
            </p>

            <div className="mt-8 space-y-5">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <CheckCircle2
                    className="text-blue-600"
                    size={22}
                  />

                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[680px] overflow-hidden rounded-[32px] border border-slate-200 bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <img
  src={storyImg}
  alt="Our Story"
  className="h-[600px] w-full rounded-[24px] object-cover object-top transition-all duration-500 hover:scale-105"
/>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StorySection;