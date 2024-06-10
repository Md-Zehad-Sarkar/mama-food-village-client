import { Box, IconButton, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BikeScooterIcon from "@mui/icons-material/BikeScooter";
import LoginModal from "@/components/modal/LoginModal";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import LogoutButton from "./LogoutButton";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { TFood } from "@/types/products.type";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const NavAppBar = () => {
  const { user } = useAppSelector((state) => state.user);
  const { products }: { products: TFood[] } = useAppSelector(
    (state) => state.whiteListProducts
  );

  const { cart: carts } = useAppSelector((state) => state.carts);

  const totalCartQuantity = carts.reduce((acc, cart) => acc + cart.quantity, 0);

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
      >
        <Stack direction="row">
          <IconButton size="large" aria-label="bike" color="inherit">
            <BikeScooterIcon />
          </IconButton>
          <Box>
            <Typography>Call and Order In</Typography>
            <Typography>+880123456789</Typography>
          </Box>
        </Stack>
        <IconButton size="medium" aria-label="search" color="inherit">
          <SearchIcon />
        </IconButton>
        {user && user.email ? (
          <LogoutButton />
        ) : (
          <Box>
            <LoginModal />
          </Box>
        )}

        <IconButton size="medium" aria-label="favorite" color="inherit">
          <Link href={"/white-list"}>
            <StyledBadge badgeContent={products?.length} color="secondary">
              <FavoriteIcon />
            </StyledBadge>
          </Link>
        </IconButton>
        <IconButton size="medium" aria-label="shopping" color="inherit">
          <Link href={"/cart"}>
            <StyledBadge badgeContent={totalCartQuantity} color="secondary">
              <AddShoppingCartIcon />
            </StyledBadge>
          </Link>
        </IconButton>
      </Stack>
    </Box>
  );
};

export default NavAppBar;
