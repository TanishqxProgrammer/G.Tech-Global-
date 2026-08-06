import founderImg from "../../../assets/images/about/founder.png";
import { Quote } from "lucide-react";
import Container from "../../common/Container";

const FounderSection = () => {
  return (
    <section className="bg-[#F8FBFF] pt-4 pb-14">
      <Container>
        {/* Breadcrumb */}
        <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">
          <span>Home</span>
          <span>/</span>
          <span className="font-medium text-slate-700">About Us</span>
        </div>

        {/* About Badge */}
        <div className="mb-5">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            About G.Tech Global
          </span>
        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="grid lg:grid-cols-[1fr_1.05fr]">

            {/* Left Image */}
            <div className="p-6 lg:p-8">
              <div className="h-[380px] overflow-hidden rounded-3xl lg:h-[520px]">
                <img
                  src={founderImg}
                  alt="Founder"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="flex justify-center p-6 lg:p-10">
              <div className="max-w-xl self-center">

                {/* Small Heading */}
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-[2px] w-12 bg-blue-600"></div>

                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                    Our Founder
                  </span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                  Meet Our Founder
                </h2>

                {/* Description */}
                <p className="mt-6 text-[17px] leading-8 text-slate-600">
                  At G.Tech Global, our journey is driven by a vision of
                  delivering dependable engineering solutions with integrity,
                  innovation and long-term value. Under the leadership of our
                  founder, we continue to build lasting relationships by
                  providing quality services and customer-focused solutions.
                </p>

                {/* Quote Card */}
                <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <Quote
                    className="mb-4 text-blue-600"
                    size={32}
                    strokeWidth={2.2}
                  />

                  <p className="text-[16px] italic leading-8 text-slate-700">
                    "Success is not measured by what we achieve alone, but by
                    the trust we earn, the value we create, and the impact we
                    leave behind."
                  </p>
                </div>

                {/* Founder Info */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Mr. Gaurav Sirvaiya
                  </h3>

                  <p className="mt-2 text-slate-500">
                    Founder & Managing Director
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default FounderSection;