"use client";

import { useGetAllFoodsQuery } from "@/redux/api/foods/foodApi";
import Ratings from "@/utils/Ratings";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const ShopItems = () => {
  const { data, isLoading } = useGetAllFoodsQuery({});
  const shopItems = data?.data;

  return (
    <Box mt={10}>
      <Grid container spacing={4}>
        {shopItems?.map((item: any) => (
          <Grid item xs={12} md={6} lg={4} key={item?._id} spacing={1}>
            <Box
              sx={{
                border: "1px solid",
                borderRadius: "15px",
                mx: "auto",
              }}
            >
              <Box>
                <Image
                  src={item?.image}
                  alt="food items"
                  width={200}
                  height={200}
                  style={{ width: "150px", height: "150px", margin: "auto" }}
                />
              </Box>
              <Box sx={{ borderBottom: "1px solid" }}></Box>
              <Box
                sx={{
                  bgcolor: "#F3f3f3",
                  padding: 2,
                  borderBottomLeftRadius: "15px",
                  borderBottomRightRadius: "15px",
                }}
              >
                <Ratings value={5} />
                <Typography variant="h6" component={"h5"} fontWeight={600}>
                  {item?.name}
                </Typography>
                <Typography variant="h6" component={"h6"}>
                  {item?.description.slice(0, 40)}...
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "5px",
                  }}
                >
                  <Typography
                    variant="h5"
                    component={"h4"}
                    sx={{ color: "primary.main" }}
                  >
                    ${item?.price}
                  </Typography>
                  <Typography component={Button}>
                    <ShoppingBasketIcon />
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box mt={12} mb={10} textAlign={'center'}>
        {/* Pagination */}
        <Typography>.................Pagination...................</Typography>
      </Box>
    </Box>
  );
};

export default ShopItems;
