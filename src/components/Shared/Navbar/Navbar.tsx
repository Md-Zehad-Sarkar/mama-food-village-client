"use client";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavAppBar from "./components/NavAppBar";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <Container>
      <Stack direction="row" justifyContent="space-around" alignItems="center">
        <Box>
          <Link href="/">
            <Image src={logo} alt="logo" width={50} height={50} style={{borderRadius:'100%'}}  />
          </Link>
        </Box>
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
          >
            <Typography>
              Home
              <IconButton size="small" aria-label="expand" color="inherit">
                <ExpandMoreIcon />
              </IconButton>
            </Typography>
            <Typography>Menu</Typography>
            <Typography>About</Typography>
            <Typography>
              Shop
              <IconButton size="small" aria-label="expand" color="inherit">
                <ExpandMoreIcon />
              </IconButton>
            </Typography>
            <Typography>Blog</Typography>
            <Typography>
              Page
              <IconButton size="small" aria-label="expand" color="inherit">
                <ExpandMoreIcon />
              </IconButton>
            </Typography>
            <Typography>Contact</Typography>
          </Stack>
        </Box>
        <Box>
          <NavAppBar />
        </Box>
      </Stack>
    </Container>
  );
};

export default Navbar;
