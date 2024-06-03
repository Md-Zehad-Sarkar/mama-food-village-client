"use client";
import { useGetAllFoodsQuery } from "@/redux/api/foods/foodApi";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const ShoppingCart = () => {
  const { data } = useGetAllFoodsQuery({});
  const carts = data?.data;
  return (
    <Container>
      <Box sx={{ maxWidth: "500px", width: "100%", margin: "auto" }}>
        <Typography variant="h4" component={"h4"} textAlign={"center"} mb={10}>
          Shopping Cart
        </Typography>
        <Box>
          {carts?.map((cart: any) => (
            <Card key={cart?._id} sx={{marginBottom:'15px'}}>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  boxShadow: "1px 1px 1px 1px",
                }}
              >
                <Box>
                  <Image
                    src={cart?.image}
                    alt="shopping item"
                    width={200}
                    height={200}
                  />
                </Box>
                <Box>
                  <Typography>{cart?.name}</Typography>
                  <Typography>{cart?.price}</Typography>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default ShoppingCart;
