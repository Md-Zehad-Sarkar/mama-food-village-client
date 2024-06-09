"use client";

import { TProduct } from "@/types/products.type";
import { Button } from "@mui/material";

const AddToCartButton = ({ product }: { product: TProduct }) => {
  const handleAddToCart = () => {
    console.log("add to cart");
  };
  return <Button onClick={handleAddToCart}>Add To Cart</Button>;
};

export default AddToCartButton;
