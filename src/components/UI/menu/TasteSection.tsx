"use client";

import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import tasteImage from "@/assets/images/heroImages.jpg";
import Image from "next/image";
import { useGetAllFoodsQuery } from "@/redux/api/foods/foodApi";
import Link from "next/link";

const TasteSection = () => {
  const { data, isLoading } = useGetAllFoodsQuery(undefined);
  const items = data?.data;
  return (
    <Stack direction={"row"} justifyContent={"space-between"} mt={12}>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Box
            // sx={{
            //   backgroundImage: "url('@/assets/images/heroImages.jpg')",
            //   // backgroundImage: `url(${tasteImage})`,
            //   // backgroundSize: "cover",
            //   // backgroundPosition: "center",
            //   backgroundRepeat: "no-repeat",
            //   height: "385px",
            //   width: "385px",
            // }}
            style={{ position: "relative" }}
          >
            <Image
              src={tasteImage}
              alt="pizza image"
              width={600}
              height={600}
              placeholder="blur"
            />
            <Box sx={{ position: "absolute", top: "100px", left: "50px" }}>
              <Typography variant="h4" component={"h2"} sx={{ color: "white" }}>
                Explore the new taste
              </Typography>
              <Typography component={"h4"} sx={{ color: "white" }}>
                Enjoy our luscious dishes wherever you want
              </Typography>
              <Link href={"/"}>
                <Button
                  sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    marginTop: "30px",
                  }}
                >
                  Order
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6} sx={{ bgcolor: "#F7F4EF", padding: 2 }}>
          <Grid container spacing={3}>
            {items?.slice(0, 5)?.map((item: any) => (
              <Grid key={item?._id} item xs={12}>
                <Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography component={"h4"} fontWeight={600}>
                      {item?.name}
                    </Typography>
                    <Typography sx={{ color: "primary.main" }}>
                      {item?.price}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      border: "1px solid #D3D3D3",
                      borderStyle: "dashed",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  ></Box>

                  <Typography>{item?.category}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default TasteSection;
