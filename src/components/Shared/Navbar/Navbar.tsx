"use client";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavAppBar from "./components/NavAppBar";
import logo from "@/assets/logo.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname as string);
  }, []);

  const handleMenuOpen = () => {
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
                  style={{
                    cursor: "pointer",
                    // color: currentPath === "/" ? "yellow" : "black",
                  }}
                  fontWeight={600}
                >
                  Home
                  {/* {menuOpen} */}
                  {/* <IconButton size="small" aria-label="expand" color="inherit">
                    <ExpandMoreIcon />
                  </IconButton> */}
                </Typography>
              </Link>
            </Box>

            <Typography
              style={{
                cursor: "pointer",
                // color: currentPath === "/menu" ? "yellow" : "black",
              }}
              component={Link}
              href={"/menu"}
              fontWeight={600}
            >
              Menu
            </Typography>
            <Typography fontWeight={600} component={Link} href={"/about-us"}>
              About
            </Typography>
            <Typography fontWeight={600} component={Link} href={"/shop"}>
              Shop
              {/* <IconButton size="small" aria-label="expand" color="inherit">
                <ExpandMoreIcon />
              </IconButton> */}
            </Typography>
            {/* <Typography component={Link} href={"/blog"}>
              Blog
            </Typography> */}

            <Typography fontWeight={600} component={Link} href={"/contact"}>
              Contact
            </Typography>
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
