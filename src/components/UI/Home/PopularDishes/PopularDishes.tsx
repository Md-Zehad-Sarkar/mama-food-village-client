"use client";
import { useGetAllFoodsQuery } from "@/redux/api/foods/foodApi";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import PopularDishesCard from "./PopularDishesCard";
import Link from "next/link";

const popularDishesButton = ["PIZZA", "SUSHI", "SALATS", "BURGER", "DERSEST"];

const PopularDishes = () => {
  const { data, isLoading } = useGetAllFoodsQuery(undefined);

  if (isLoading) {
    return "loading...";
  }

  return (
    <Box my={16}>
      <Typography
        variant="h4"
        component={"h2"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: 600,
        }}
      >
        Popular Dishes
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        my={4}
        justifyContent="center"
        alignItems={"center"}
      >
        {popularDishesButton.map((button, i) => (
          <Button
            key={i}
            variant="outlined"
            sx={{
              borderRadius: "20px",
              padding: "15px",
              width: "120px",
              fontWeight: 400,
              letterSpacing: 2,
              color: "black",
              ":hover": { bgcolor: "primary.main" },
            }}
          >
            <Link href={`${button.toLowerCase()}`}>{button}</Link>
          </Button>
        ))}
      </Stack>
      <Grid container spacing={4} mt={4}>
        {data?.data?.map((food: any) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={food?._id}>
            <PopularDishesCard food={food} />
          </Grid>
        ))}
      </Grid>
      <Box mt={4} sx={{ textAlign: "center" }}>
        <Button
          sx={{
            bgcolor: "primary.main",
            color: "black",
            ":hover": { bgcolor: "primary.main", color: "white" },
          }}
        >
          All Products
        </Button>
      </Box>
    </Box>
  );
};

export default PopularDishes;
