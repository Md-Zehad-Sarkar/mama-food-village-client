import { Box, Stack, Typography } from "@mui/material";
import category1 from "@/assets/images/categories/category-1.png";
import category2 from "@/assets/images/categories/category-2.png";
import category3 from "@/assets/images/categories/category-3.png";
import category4 from "@/assets/images/categories/category-4.png";
import category5 from "@/assets/images/categories/category-5.png";
import category6 from "@/assets/images/categories/category-6.png";
import category7 from "@/assets/images/categories/category-7.png";
import category8 from "@/assets/images/categories/category-8.png";
import Image from "next/image";

const categories = [
  { name: "COMBO", image: category1 },
  { name: "KIDS MENUS", image: category2 },
  { name: "PIZZA", image: category3 },
  { name: "BOX MEALS", image: category4 },
  { name: "BURGER", image: category5 },
  { name: "CHICKEN", image: category6 },
  { name: "SAUCES", image: category7 },
  { name: "DRINKS", image: category8 },
];

const MenuCategories = () => {
  return (
    <Stack
      gap={5}
      my={8}
      sx={{
        display: { xs: "grid", md: "flex" },
        flexDirection: { xs: "column", md: "row" },
        justifyContent:'center'
      }}
    >
      {categories.map((category, i) => (
        <Box
          key={i}
          sx={{
            display: { md: "flex" },
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            flexWrap: { md: "wrap" },
          }}
        >
          <Box>
            <Image
              src={category.image}
              alt="category images"
              style={{ width: "100px", height: "80px" }}
            />
          </Box>
          <Typography>{category.name}</Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default MenuCategories;
