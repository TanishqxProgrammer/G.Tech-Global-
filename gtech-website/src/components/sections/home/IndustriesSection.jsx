import Container from "../../common/Container";
import IndustriesCard from "./IndustriesCard";
import WhyChooseCard from "./WhyChooseCard";

const IndustriesSection = () => {
  return (
    <section className="py-14 bg-[#F8FBFF]">
      <Container>
        <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-8">
          <IndustriesCard />
          <WhyChooseCard />
        </div>
      </Container>
    </section>
  );
};

export default IndustriesSection;