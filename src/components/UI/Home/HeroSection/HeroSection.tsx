import { Box, Button, Container, Stack, Typography } from "@mui/material";
import heroImages from "@/assets/images/heroImages.jpg";
import Image from "next/image";
import HeroSectionOrderButton from "./HeroSectionOrderButton";

const HeroSection = () => {
  return (
    <Container
      sx={{
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "8px", md: "16px" },
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "250px", md: "500px" },
        }}
      >
        <Image
          src={heroImages}
          alt="pizza bg image"
          layout="fill"
          objectFit="cover"
          style={{ width: "100%", height: "100%" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: { xs: "60px", md: "120px" },
            left: { xs: "5%", md: "10%" },
            textAlign: { xs: "center", md: "left" },
            width: { xs: "90%", md: "auto" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontSize: { xs: "24px", md: "36px" },
              fontWeight: 700,
            }}
          >
            Unlimited <br /> Medium{" "}
            <span style={{ color: "yellow" }}>Pizzas</span>
          </Typography>
          <Typography
            component="span"
            sx={{
              color: "green",
              fontWeight: 600,
              backgroundColor: "black",
              borderRadius: "10px",
              fontSize: { xs: "16px", md: "24px" },
              marginTop: 2,
              padding: "2px",
              marginBottom: 2,
            }}
          >
            Medium-2 topping * Pizza
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontSize: { xs: "12px", md: "16px" },
            }}
            mt={2}
          >
            *Additional charge for premium toppings. Minimum of 2 required.
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "30px", md: "70px" },
            left: { xs: "20%", md: "10%" },
            textAlign: { xs: "center", md: "left" },
            width: { xs: "60%", md: "auto" },
          }}
        >
          <Stack direction="row" gap={2} alignItems="center">
            <HeroSectionOrderButton />
            <Typography
              component="span"
              sx={{
                font: "20px",
                color: "green",
                fontWeight: 800,
                backgroundColor: "black",
                padding: 1,
              }}
            >
              $12.99
            </Typography>
          </Stack>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          bottom: "-8px",
          left: "50%",
          justifyContent: "center",
        }}
        style={{ color: "primary.main", fontWeight: 500 }}
      >
        Menus
      </Button>
    </Container>
  );
};

export default HeroSection;
