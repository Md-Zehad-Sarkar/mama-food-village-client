"use client";

import { useGetAllFoodsQuery } from "@/redux/api/foods/foodApi";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const TopRecipeDataItems = () => {
  const { data, isLoading } = useGetAllFoodsQuery({});
  const topRecipes = data?.data;

  return (
    <Grid container spacing={4}>
      {topRecipes?.slice(0, 6)?.map((recipes: any) => (
        <Grid item xs={12} sm={12} md={6} key={recipes?._id}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 1,
              bgcolor: "#FFF8E8",
              p: 2,
              borderRadius: "15px",
              alignItems: "end",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Image
                src={recipes?.image}
                alt="recipes image"
                width={60}
                height={60}
              />
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: 16 }}>
                  {recipes?.name}
                </Typography>
                <Typography>{recipes?.category}</Typography>
                <Typography sx={{ color: "primary.main" }}>
                  ${recipes?.price}
                </Typography>
              </Box>
            </Box>
            <Typography component={Button}>
              <ShoppingBasketIcon />
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopRecipeDataItems;
