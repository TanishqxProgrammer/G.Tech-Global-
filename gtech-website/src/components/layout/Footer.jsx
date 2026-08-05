import Container from "../common/Container";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-white">
      <Container>
        <FooterTop />
        <FooterBottom />
      </Container>
    </footer>
  );
};

export default Footer;