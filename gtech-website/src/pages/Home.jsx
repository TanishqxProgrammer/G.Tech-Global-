import Hero from "../components/sections/Hero";
import HeroStats from "../components/sections/HeroStats";
import OurSolutions from "../components/sections/OurSolutions";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="mt-12 mb-16">
    <HeroStats />
  </div>
      <OurSolutions />
    </>
  );
};

export default Home;