import HeroSection from "@/components/UI/Home/HeroSection/HeroSection";
import MenuCategories from "@/components/UI/Home/MenuCategories/MenuCategories";
import OffersCard from "@/components/UI/Home/OffersCard/OffersCard";
import PopularDishes from "@/components/UI/Home/PopularDishes/PopularDishes";
import TopRecepies from "@/components/UI/Home/TopRecepies/TopRecepies";
import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <Container>
      <HeroSection />
      <MenuCategories />
      <OffersCard />
      <PopularDishes />
      <TopRecepies />
    </Container>
  );
};

export default HomePage;
