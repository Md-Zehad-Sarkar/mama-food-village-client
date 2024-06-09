"use client";

import { TProduct } from "@/types/products.type";
import { Button } from "@mui/material";

const BuyNowButton = ({ product }: { product: TProduct }) => {
  const handleBuyNow = () => {
    console.log("Buy now");
  };

  return (
    <Button onClick={handleBuyNow} sx={{ marginLeft: 3 }}>
      Buy Now
    </Button>
  );
};

export default BuyNowButton;
