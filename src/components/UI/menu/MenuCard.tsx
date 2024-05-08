import Ratings from "@/utils/Ratings";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const MenuCard = ({ menu }: any) => {
  return (
    <Card
      sx={{
        bgcolor: "#FFF8E8",
        borderRadius: 6,
        height: 220,
        padding:2
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
     
        }}
      >
        <CardContent sx={{ display: "flex", gap: 2 }}>
          <Image
            src={menu?.image}
            alt="food menu image"
            width={100}
            height={100}
          />
          <Box>
            <Typography component={"h4"} fontWeight={600}>
              {menu?.name}
            </Typography>
            <Ratings value={5} />
            <Typography mt={1} mb={1}>
              {menu?.description}
            </Typography>
            <Typography color={"primary.main"}>${menu?.price}</Typography>
          </Box>
        </CardContent>
        <Typography component={Button}>
          <ShoppingBasketIcon />
        </Typography>
      </Box>
    </Card>
  );
};

export default MenuCard;
