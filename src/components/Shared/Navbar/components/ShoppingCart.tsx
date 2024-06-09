"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Box, Card, Container, Typography } from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { minusCartItem, plusCartItem } from "@/redux/features/cartSlice";

const ShoppingCart = () => {
  const { cart: carts } = useAppSelector((state) => state.carts);
  const dispatch = useAppDispatch();

  const handleRemoveItem = (id: string) => {
    dispatch(minusCartItem(id));
  };

  const handleAddItem = (id: string) => {
    dispatch(plusCartItem(id));
  };

  return (
    <Container>
      <Box sx={{ maxWidth: "500px", width: "100%", margin: "auto" }}>
        <Typography variant="h4" component={"h4"} textAlign={"center"} mb={10}>
          Shopping Cart
        </Typography>
        {carts && carts.length ? (
          <Box sx={{ border: "1px solid gray", padding: 2 }}>
            {carts?.map((cart: any) => (
              <Card key={cart?._id} sx={{ marginBottom: "15px" }}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "15px",
                    boxShadow: "1px 1px 1px 1px",
                    padding: 3,
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
