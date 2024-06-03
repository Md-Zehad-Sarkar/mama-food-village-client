'use client'
import { Button } from "@mui/material";

const HeroSectionOrderButton = () => {
  const handleOrder = () => {
    console.log("click");
  };
  return (
    <Button
      onClick={handleOrder}
      style={{ color: "primary.main", fontWeight: 500 }}
    >
      Order Now
    </Button>
  );
};

export default HeroSectionOrderButton;
