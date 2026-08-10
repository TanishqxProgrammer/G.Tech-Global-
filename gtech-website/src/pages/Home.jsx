import Hero from "../components/sections/home/Hero";
import HeroStats from "../components/sections/home/HeroStats";
import IndustriesSection from "../components/sections/home/IndustriesSection";
import OurSolution from "../components/sections/home/OurSolutions";
import RecentProjects from "../components/sections/home/RecentProjects";
import CTASection from "../components/sections/home/CTASection";
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