"use client";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavAppBar from "./components/NavAppBar";
import logo from "@/assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    <p>hi</p>;
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <Container>
      <Stack direction="row" justifyContent="space-around" alignItems="center">
        <Box>
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={50}
              height={50}
              style={{ borderRadius: "100%" }}
            />
          </Link>
        </Box>

        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
          >
            <Box>
              <Link href="/">
                <Typography
                  aria-controls="home-menu"
                  aria-haspopup="true"
                  onMouseOver={handleMenuOpen}
                  onMouseLeave={handleMenuClose}
                  style={{ cursor: "pointer" }}
                >
                  Home
                  {menuOpen}
                  <IconButton size="small" aria-label="expand" color="inherit">
                    <ExpandMoreIcon />
                  </IconButton>
                </Typography>
              </Link>
            </Box>

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
