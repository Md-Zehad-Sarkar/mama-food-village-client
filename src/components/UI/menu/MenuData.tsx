"use client";

import { useGetAllFoodsQuery } from "@/redux/api/foods/foodApi";
import { Box, Grid } from "@mui/material";
import MenuCard from "./MenuCard";

const MenuData = () => {
  const { data } = useGetAllFoodsQuery(undefined);
  const menuItems = data?.data;

  return (
    <Box>
      <Grid container spacing={4}>
        {menuItems?.map((item: any) => (
          <Grid item xs={12} md={6} key={item?._id}>
            <MenuCard menu={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MenuData;
