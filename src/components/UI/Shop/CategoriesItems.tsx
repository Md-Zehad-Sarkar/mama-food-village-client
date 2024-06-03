"use client";
import { useGetAllFoodsQuery } from "@/redux/api/foods/foodApi";
import { Box, Typography } from "@mui/material";


const commonStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const CategoriesItems = () => {
  const { data, isLoading } = useGetAllFoodsQuery({});
  const shopItems = data?.data;
  const pizza = shopItems?.filter((item) => item.category === "Pizza");
  const burger = shopItems?.filter((item) => item.category === "Burger");
  const pasta = shopItems?.filter((item) => item.category === "Pasta");
  const dessert = shopItems?.filter((item) => item.category === "Dessert");
  const salad = shopItems?.filter((item) => item.category === "Salad");
  return (
    <Box bgcolor={"#FBF7E8"} p={2} borderRadius={2}>
      <Typography align="center" fontWeight={600} variant="h5" component={"h4"}>
        Category
      </Typography>

      <Box>
        <Box sx={commonStyle}>
          <Typography fontWeight={500} variant="h6" component={"h6"}>
            Burger
          </Typography>
          <Typography>{burger?.length}</Typography>
        </Box>
        <Box sx={commonStyle}>
          <Typography fontWeight={500} variant="h6" component={"h6"}>
            Pizza
          </Typography>
          <Typography>{pizza?.length}</Typography>
        </Box>
        <Box sx={commonStyle}>
          <Typography fontWeight={500} variant="h6" component={"h6"}>
            Salad
          </Typography>
          <Typography>{salad?.length}</Typography>
        </Box>
        <Box sx={commonStyle}>
          <Typography fontWeight={500} variant="h6" component={"h6"}>
            Pasta
          </Typography>
          <Typography>{pasta?.length}</Typography>
        </Box>
        <Box sx={commonStyle}>
          <Typography fontWeight={500} variant="h6" component={"h6"}>
            Dessert
          </Typography>
          <Typography>{dessert?.length}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CategoriesItems;
