"use client";

import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TProduct } from "@/types/products.type";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const AddToCartButton = ({ product }: { product: TProduct }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleAddToCart = (product: TProduct) => {
    dispatch(addToCart(product));
    router.push("/cart");
  };
  return <Button onClick={() => handleAddToCart(product)}>Add To Cart</Button>;
};

export default AddToCartButton;
