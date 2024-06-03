import { Box, IconButton, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BikeScooterIcon from "@mui/icons-material/BikeScooter";
import LoginModal from "@/components/modal/LoginModal";
import Link from "next/link";

const NavAppBar = () => {
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
        <Box>
          <LoginModal />
        </Box>

        <IconButton size="medium" aria-label="favorite" color="inherit">
          <Link href={"/white-list"}>
            <FavoriteIcon />
          </Link>
        </IconButton>
        <IconButton size="medium" aria-label="shopping" color="inherit">
          <Link href={"/cart"}>
            <AddShoppingCartIcon />
          </Link>
        </IconButton>
      </Stack>
    </Box>
  );
};

export default NavAppBar;
