import HeroSection from "@/components/UI/Home/HeroSection/HeroSection";
import MenuCategories from "@/components/UI/Home/MenuCategories/MenuCategories";
import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <Container>
      <HeroSection />
      <MenuCategories />
    </Container>
  );
};

export default HomePage;
