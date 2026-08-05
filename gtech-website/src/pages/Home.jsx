import Hero from "../components/sections/Hero";
import HeroStats from "../components/sections/HeroStats";
import IndustriesSection from "../components/sections/IndustriesSection";
import OurSolution from "../components/sections/OurSolutions";
import RecentProjects from "../components/sections/RecentProjects";
import CTASection from "../components/sections/CTASection";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Hero />

      <div className="relative z-20">
        <HeroStats />
      </div>

      <OurSolution />
      <IndustriesSection />
      <RecentProjects />
      <CTASection />
      <Footer />
    </>
  );
};

export default Home;
