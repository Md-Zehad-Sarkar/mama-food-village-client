"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const HeroSectionOrderButton = () => {
  const router = useRouter();
  
  const handleOrder = () => {
    router.push("/shop");
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
