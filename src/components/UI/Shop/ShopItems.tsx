"use client";

import { useGetAllFoodsQuery } from "@/redux/api/foods/foodApi";
import Ratings from "@/utils/Ratings";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const ShopItems = () => {
  const { data, isLoading } = useGetAllFoodsQuery({});
  const shopItems = data?.data;
  console.log(shopItems);
  return (
    <Box mt={8}>
      <Grid container spacing={3}>
        {shopItems?.map((item: any) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            key={item?._id}
            sx={{ border:'1px solid', borderRadius: "15px",mx:'auto' }}
          >
            <Box>
              <Image
                src={item?.image}
                alt="food items"
                width={400}
                height={200}
                style={{width:'200px', height:'200px'}}
              />
            </Box>
            <Box sx={{ borderBottom: "1px solid" }}></Box>
            <Box>
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
                  padding:'5px'
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
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShopItems;
