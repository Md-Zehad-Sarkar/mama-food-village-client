import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Ratings from "@/utils/Ratings";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addWhiteListedProduct } from "@/redux/features/whiteListSlice";
import { TFood } from "@/types/products.type";
import { useMemo, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton"; // loading button

const PopularDishesCard = ({ food }: any) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.whiteListProducts);

  // isWhiteList used for whiteListed product bg color
  const isWhiteList = useMemo(
    () => products.find((product) => product._id === food._id),
    [products, food._id]
  );

  const handleWhiteList = (food: TFood) => {
    setLoading(true);
    dispatch(addWhiteListedProduct(food));
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Card
      sx={{
        width: "100%",
        height: "500px",
        position: "relative",
      }}
    >
      <LoadingButton
        loading={loading}
        onClick={() => handleWhiteList(food)}
        variant="outlined"
        sx={{
          position: "absolute",
          right: 4,
          top: 4,
          height: "30px",
          ":hover": { background: "black" },
          bgcolor:
            !loading && isWhiteList?._id === food._id ? "black" : "white",
        }}
      >
        <FavoriteBorderIcon />
      </LoadingButton>

      <Box
        sx={{
          width: "300px",
          height: 300,
          "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
          },
        }}
      >
        <Image src={food?.image} alt="food images" width={100} height={100} />
      </Box>
      <Box sx={{ border: "1px dashed", mt: 1, mx: 1 }}></Box>
      <Box mx={2}>
        <Ratings value={food?.ratings} />
      </Box>
      <CardContent>
        <Typography component={"h2"} fontWeight={800}>
          {food?.name}
        </Typography>
        <Typography>{food?.description.slice(0, 200)}</Typography>
        <Stack direction="row" justifyContent="space-between" mt={3}>
          <Typography color={"primary.main"} fontWeight={600}>
            ${food?.price}
          </Typography>

          <Typography component={Button}>
            <ShoppingBasketIcon />
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PopularDishesCard;
