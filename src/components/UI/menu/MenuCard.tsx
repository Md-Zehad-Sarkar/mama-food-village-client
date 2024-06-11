"use client";
import Ratings from "@/utils/Ratings";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useMemo, useState } from "react";
import { TFood } from "@/types/products.type";
import { addWhiteListedProduct } from "@/redux/features/whiteListSlice";
import LoadingButton from "@mui/lab/LoadingButton"; // loading button
import { addToCart } from "@/redux/features/cartSlice";
import { useRouter } from "next/navigation";

const MenuCard = ({ menu }: any) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.whiteListProducts);

  // find whiteListed product
  const isWhiteListed = useMemo(
    () => products.find((product) => product._id === menu._id),
    [products, menu._id]
  );

  const handleWhiteList = (menu: TFood) => {
    setLoading(true);
    dispatch(addWhiteListedProduct(menu));
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleAddToCart = (menu: TFood) => {
    if (menu !== undefined && menu) {
      dispatch(addToCart(menu));
      router.push("/cart");
    }
  };

  return (
    <Card
      sx={{
        bgcolor: "#FFF8E8",
        borderRadius: 6,
        height: 260,
        paddingX: 3,
        paddingY: 2,
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          position: "relative",
        }}
      >
        <CardContent sx={{ display: "flex", gap: 2 }}>
          <Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Box>
                <Image
                  src={menu?.image}
                  alt="food menu image"
                  width={100}
                  height={100}
                />
                <Ratings value={menu?.ratings} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography component={"h4"} fontWeight={600}>
                  {menu?.name}
                </Typography>
                <Typography component={"h4"} fontWeight={500}>
                  {menu?.category}
                </Typography>
                <Typography color={"primary.main"}>${menu?.price}</Typography>
              </Box>
            </Box>
            <Box>
              <Typography mt={1} mb={1}>
                {menu?.description}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ position: "absolute", top: 0, right: 0 }}>
            <LoadingButton
              loading={loading}
              variant="outlined"
              disabled={!loading && isWhiteListed?._id === menu._id}
              onClick={() => handleWhiteList(menu)}
              sx={{
                bgcolor:
                  !loading && isWhiteListed?._id === menu._id ? "black" : "",
                ":hover": { background: "black" },
              }}
            >
              <FavoriteBorderIcon
                style={{
                  color: isWhiteListed?._id === menu._id ? "white" : "",
                }}
              />
            </LoadingButton>
          </Box>
        </CardContent>
      </Box>
      <Typography
        onClick={() => handleAddToCart(menu)}
        sx={{ position: "absolute", bottom: "15px", right: "20px" }}
        component={Button}
      >
        <ShoppingBasketIcon />
      </Typography>
    </Card>
  );
};

export default MenuCard;
