"use client";

import { useGetAllFoodsQuery } from "@/redux/api/foods/foodApi";
import { Box, Grid } from "@mui/material";
import MenuCard from "./MenuCard";

type TMenuDataProps = {
  category: string;
};

const MenuData = ({ category }: TMenuDataProps) => {
  const { data } = useGetAllFoodsQuery(category);
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
