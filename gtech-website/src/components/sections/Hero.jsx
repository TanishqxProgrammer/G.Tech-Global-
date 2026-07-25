import Container from "../common/Container";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section className="bg-[#F8FBFF] overflow-hidden">
      <Container className="bg-green-300">
        <div className="grid lg:grid-cols-2 items-center gap-16 py-20 lg:py-28">

          {/* Left Content */}
          <div className="max-w-[560px]">

            <span className="inline-block rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              Pure Water • Better Tomorrow
            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
              Engineering
              <br />
              Water Solutions
              <br />
              Across <span className="text-sky-600">India</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We design, manufacture and maintain advanced water treatment
              systems for industrial, commercial and residential applications
              with reliable after-sales support.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button>
                Explore Solutions
              </Button>

              <Button variant="secondary">
                Get Free Quote
              </Button>
            </div>

          </div>

          {/* Right Image */}

          <div className="flex justify-center lg:justify-end">

            <div className="relative w-full max-w-[680px]">

              {/* Background Circle */}

              <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl"></div>

              {/* Image Card */}

              <div className="relative flex h-[600px] w-full items-center justify-center rounded-[32px] border border-slate-200 bg-white shadow-2xl">

                <span className="text-xl font-semibold text-slate-400">
                  Hero Image
                </span>

              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;