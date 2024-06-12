"use client";
import MenuData from "@/components/UI/menu/MenuData";
import ServicesSection from "@/components/UI/menu/ServicesSection";
import TasteSection from "@/components/UI/menu/TasteSection";
import { menuItemsCommonButton as menusItem } from "@/constant/popularDishesButton";
import CommonItemsMenuButton from "@/utils/CommonItemsMenuButton";
import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";

const MenuPage = () => {
  const [selectCategory, setSelectCategory] = useState("");

  const handleSelectedCategory = (category: string) => {
    setSelectCategory(category.toLowerCase());
  };
  return (
    <Container>
      <Box>
        <Typography
          variant="h4"
          component="h2"
          fontWeight={600}
          textAlign={"center"}
        >
          Menus Of The Day
        </Typography>
        <CommonItemsMenuButton
          allButton={menusItem}
          onSelect={handleSelectedCategory}
        />
        <MenuData category={selectCategory} />
        <TasteSection />
        <ServicesSection />
      </Box>
    </Container>
  );
};

export default MenuPage;
