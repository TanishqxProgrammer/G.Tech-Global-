import Hero from "../components/sections/Hero";
import HeroStats from "../components/sections/HeroStats";
import OurSolution from "../components/sections/OurSolutions";

const Home = () => {
  return (
    <>
      <Hero />

      <div className="relative z-20">
        <HeroStats />
      </div>

      <OurSolution />
    </>
  );
};

export default Home;
