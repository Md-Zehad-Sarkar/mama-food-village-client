"use client";

import { useGetAllFoodsQuery } from "@/redux/api/foods/foodApi";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cartSlice";
import { TFood } from "@/types/products.type";

const TopRecipeDataItems = () => {
  const dispatch = useAppDispatch();
  const { data } = useGetAllFoodsQuery({});
  const topRecipes = data?.data;

  const handleAddToCart = (recipe: TFood) => {
    dispatch(addToCart(recipe));
  };

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
            <Box
              sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}
            >
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
            <Typography
              onClick={() => handleAddToCart(recipes)}
              component={Button}
            >
              <ShoppingBasketIcon />
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopRecipeDataItems;
