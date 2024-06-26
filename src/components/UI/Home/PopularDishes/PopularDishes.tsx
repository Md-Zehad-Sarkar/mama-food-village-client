"use client";
import { useGetAllFoodsQuery } from "@/redux/api/foods/foodApi";
import { Box, Button, Grid, Typography } from "@mui/material";
import PopularDishesCard from "./PopularDishesCard";
import { menuItemsCommonButton as popularDishesButton } from "@/constant/popularDishesButton";
import CommonItemsMenuButton from "@/utils/CommonItemsMenuButton";
import Link from "next/link";

const PopularDishes = () => {
  const { data, isLoading } = useGetAllFoodsQuery(undefined);

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

      <CommonItemsMenuButton allButton={popularDishesButton} />

      {!isLoading && data?.data.length > 0 ? (
        <>
          <Grid container spacing={4} mt={4}>
            {data?.data?.map((food: any) => (
              <Grid item xs={12} sm={12} md={6} lg={4} key={food?._id}>
                <PopularDishesCard food={food} />
              </Grid>
            ))}
          </Grid>
          <Box mt={4} sx={{ textAlign: "center" }}>
            <Link href={"/shop"}>
              <Button
                sx={{
                  bgcolor: "primary.main",
                  color: "black",
                  ":hover": { bgcolor: "primary.main", color: "white" },
                }}
              >
                All Products
              </Button>
            </Link>
          </Box>
        </>
      ) : (
        "Loading..."
      )}
    </Box>
  );
};

export default PopularDishes;
