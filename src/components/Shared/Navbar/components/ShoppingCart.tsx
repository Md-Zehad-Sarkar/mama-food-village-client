"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Box, Button, Card, Container, Typography } from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { minusCartItem, plusCartItem } from "@/redux/features/cartSlice";
import { ICarts } from "@/types/products.type";
import { taxRate } from "@/constant/prices";

const ShoppingCart = () => {
  const { cart: carts } = useAppSelector((state) => state.carts);
  const dispatch = useAppDispatch();

  //total price for all items and total quantity
  let totalPrice: number = 0;

  carts.forEach((cart) => {
    totalPrice += cart.quantity * cart.price;
  });

  // total tax for total prices
  const totalTax = Number((totalPrice * taxRate).toFixed(2));

  const handleRemoveItem = (id: string) => {
    dispatch(minusCartItem(id));
  };

  const handleAddItem = (id: string) => {
    dispatch(plusCartItem(id));
  };

  return (
    <Container>
      <Box sx={{ maxWidth: "500px", width: "100%", margin: "auto" }}>
        <Typography variant="h4" component={"h4"} textAlign={"center"} mb={4}>
          Shopping Cart <ShoppingCartIcon fontSize="large" />
        </Typography>
        {carts && carts.length ? (
          <Box sx={{ border: "1px solid gray", padding: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography fontWeight={600}>
                Total Payment : {Number((totalPrice + totalTax).toFixed(2))}
              </Typography>
              <Button
                variant="contained"
                sx={{ color: "white", fontWeight: 600 }}
              >
                Proceed To Checkout
              </Button>
            </Box>
            <Box
              sx={{
                border: "1px solid black",
                borderStyle: "dashed",
                marginTop: 3,
                marginBottom: 1,
              }}
            ></Box>
            {carts?.map((cart: ICarts) => (
              <Card key={cart?._id} sx={{ marginBottom: "15px" }}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "15px",
                    boxShadow: "1px 1px 1px 1px",
                    padding: 2,
                  }}
                >
                  <Box>
                    <Image
                      src={cart?.image}
                      alt="shopping item"
                      width={500}
                      height={500}
                      style={{ width: "80px", height: "80px" }}
                    />
                  </Box>
                  <Box sx={{ textAlign: "start" }}>
                    <Typography>name: {cart?.name}</Typography>
                    <Box>
                      <Typography>
                        quantity:
                        <button
                          onClick={() => handleRemoveItem(cart._id)}
                          className="text-yellow-500"
                        >
                          <RemoveIcon />
                        </button>
                        <Typography
                          component={"span"}
                          sx={{
                            padding: "3px",
                            borderRadius: "55%",
                            bgcolor: "lightblue",
                            color: "white",
                          }}
                        >
                          {cart?.quantity}
                        </Typography>
                        <button
                          onClick={() => handleAddItem(cart._id)}
                          className="text-yellow-500"
                        >
                          <AddIcon />
                        </button>
                      </Typography>
                    </Box>
                    <Typography>
                      price: {(cart?.price * cart.quantity).toFixed(2)}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}

            {/* styles for total payment area */}
            <Box>
              <Box
                sx={{
                  border: "1px solid black",
                  borderStyle: "dashed",
                  marginTop: 3,
                  marginBottom: 1,
                }}
              ></Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography fontWeight={500}>Amount :</Typography>
                <Typography>{totalPrice.toFixed(2)}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography fontWeight={500}>Tax Amount :</Typography>
                <Typography>{totalTax}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography fontWeight={500}>Total Amount :</Typography>
                <Typography>
                  {Number((totalPrice + totalTax).toFixed(2))}
                </Typography>
              </Box>
            </Box>
          </Box>
        ) : (
          <Typography
            variant="h4"
            component={"h4"}
            fontWeight={600}
            textAlign={"center"}
            color={"red"}
            mb={5}
          >
            No Items In The Cart
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default ShoppingCart;
