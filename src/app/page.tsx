import HeroSection from "@/components/UI/Home/HeroSection/HeroSection";
import MenuCategories from "@/components/UI/Home/MenuCategories/MenuCategories";
import OffersCard from "@/components/UI/Home/OffersCard/OffersCard";
import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <Container>
      <HeroSection />
      <MenuCategories />
      <OffersCard />
    </Container>
  );
};

export default HomePage;
