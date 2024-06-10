"use client";

import { TProduct } from "@/types/products.type";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { removeWhiteListProduct } from "@/redux/features/whiteListSlice";

const BuyNowButton = ({ product }: { product: TProduct }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleBuyNow = () => {
    dispatch(addToCart(product));
    dispatch(removeWhiteListProduct(product._id));
    router.push("/cart");
  };

  return (
    <Button onClick={handleBuyNow} sx={{ marginLeft: 3 }}>
      Buy Now
    </Button>
  );
};

export default BuyNowButton;
