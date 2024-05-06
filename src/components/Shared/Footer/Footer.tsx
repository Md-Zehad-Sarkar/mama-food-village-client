import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Container sx={{ bgcolor: "black", py: 10, my: 6, color: "white" }}>
      <Typography
        fontWeight={700}
        variant="h3"
        component={"h2"}
        textAlign={"center"}
        mb={6}
      >
        MAMA
        <Typography
          fontWeight={700}
          variant="h3"
          component={"span"}
          color={"primary.main"}
          ml={1}
        >
          FOOD
        </Typography>{" "}
        VILLAGE
      </Typography>
      <Stack
        direction={{ xs: "column", md: "column", lg: "row" }}
        spacing={3}
        justifyContent={{ lg: "space-between" }}
        alignItems={{ xs: "center" }}
      >
        <Box>
          <Typography fontWeight={600} variant="h5" component={"h4"}>
            ADDRESS
          </Typography>
          <Typography variant="h6" component={"h6"}>
            Jamuna Future Park
          </Typography>
          <Typography variant="h6" component={"h6"}>
            3rd Floor, Dhaka
          </Typography>
        </Box>

        <Box>
          <Typography fontWeight={600} variant="h5" component={"h4"}>
            BOOK A TABLE
          </Typography>
          <Typography variant="h6" component={"h6"}>
            Dog food och Sliders foodtruck.
          </Typography>
          <Typography variant="h6" component={"h6"}>
            Under Om oss kan ni lasa
          </Typography>
          <Typography variant="h6" component={"h6"} color={"primary.main"}>
            +880 12345678
          </Typography>
        </Box>

        <Box>
          <Typography fontWeight={600} variant="h5" component={"h4"}>
            OPENING HOURS
          </Typography>
          <Typography variant="h6" component={"h6"}>
            Monday – Friday: 8am – 4pm
          </Typography>
          <Typography variant="h6" component={"h6"}>
            Saturday: 9am – 5pm
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight={600} variant="h5" component={"h4"}>
            LEGAL
          </Typography>
          <Typography variant="h6" component={"h6"}>
            Terms of use
          </Typography>
          <Typography variant="h6" component={"h6"}>
            Privacy policy
          </Typography>
          <Typography variant="h6" component={"h6"}>
            Cookie policy
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default Footer;
