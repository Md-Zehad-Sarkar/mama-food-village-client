import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import person1 from "@/assets/images/about/person1.jpg";
import pizza from "@/assets/images/about/pizza2.jpg";
import person2 from "@/assets/images/about/person2.jpg";
import dishes from "@/assets/images/about/chicken.png";
import burger from "@/assets/images/about/burger.png";
import pizzad from "@/assets/images/about/pizzad.png";
import Image from "next/image";
import AboutSlider from "@/components/UI/about/AboutSlider";

const AboutUsPage = () => {
  return (
    <Container sx={{ marginTop: 14 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              variant="h4"
              component={"h4"}
              color={"primary.main"}
              mb={2}
            >
              Welcome!
            </Typography>
            <Typography variant="h3" component={"h3"} fontWeight={600}>
              Best burger ideas <br /> & traditions from <br /> the whole world
            </Typography>
            <Typography variant="h6" component={"p"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Typography>

            <Typography variant="h6" component={"p"} mt={2}>
              Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat
              fermentum. Aliquam non tincidunt urna. Integer tincidunt nec nisl
              vitae ullamcorper. Proin sed ultrices erat.
            </Typography>
            <Link href={"/"}>
              <Typography
                component={Button}
                sx={{ marginTop: "30px", bgcolor: "primary.main" }}
              >
                Order
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box>
                <Image src={person1} alt="person" width={500} height={400} />{" "}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Image src={pizza} alt="person" width={800} height={500} />{" "}
              </Box>

              <Box mt={2}>
                <Image src={person2} alt="person" width={300} height={700} />{" "}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Chicken */}
      <Grid container spacing={3} mt={10}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" component={"h4"} color={"primary.main"}>
              Our Quality
            </Typography>
            <Typography
              variant="h3"
              component={"h3"}
              fontWeight={600}
              mt={2}
              mb={2}
            >
              Chicken
            </Typography>
            <Typography variant="h6" component={"p"}>
              Quality is our #1 ingredient. That&aposs why our Chicken Wings,
              Chicken Bites and Grilled Chicken Topping are made from chickens
              raised without antibiotics and fed an all vegetable-grain diet,
              with no animal by-products. Plus, our Bites are made with 100%
              chicken breast meat.
            </Typography>
            <Link href={"/"}>
              <Typography
                component={Button}
                sx={{ bgcolor: "primary.main", marginTop: "30px" }}
              >
                Order Now
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src={dishes} alt="food dishes" width={600} height={500} />
        </Grid>
      </Grid>
      {/* Burger */}
      <Grid container spacing={4} mt={10}>
        <Grid item xs={12} md={6}>
          <Image src={burger} alt="food dishes" width={500} height={500} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" component={"h4"} color={"primary.main"}>
              Our Quality
            </Typography>
            <Typography
              variant="h3"
              component={"h3"}
              fontWeight={600}
              mt={2}
              mb={2}
            >
              Burger
            </Typography>
            <Typography variant="h6" component={"p"}>
              Quality is our #1 ingredient. That&aposs why our Chicken Wings,
              Chicken Bites and Grilled Chicken Topping are made from chickens
              raised without antibiotics and fed an all vegetable-grain diet,
              with no animal by-products. Plus, our Bites are made with 100%
              chicken breast meat.
            </Typography>
            <Link href={"/"}>
              <Typography
                component={Button}
                sx={{ bgcolor: "primary.main", marginTop: "30px" }}
              >
                Order Now
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
      {/* Chicken */}
      <Grid container spacing={3} mt={10} mb={8}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" component={"h4"} color={"primary.main"}>
              Our Quality
            </Typography>
            <Typography
              variant="h3"
              component={"h3"}
              fontWeight={600}
              mt={2}
              mb={2}
            >
              Pizza
            </Typography>
            <Typography variant="h6" component={"p"}>
              Quality is our #1 ingredient. That&aposs why our Chicken Wings,
              Chicken Bites and Grilled Chicken Topping are made from chickens
              raised without antibiotics and fed an all vegetable-grain diet,
              with no animal by-products. Plus, our Bites are made with 100%
              chicken breast meat.
            </Typography>
            <Link href={"/"}>
              <Typography
                component={Button}
                sx={{ bgcolor: "primary.main", marginTop: "30px" }}
              >
                Order Now
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src={pizzad} alt="food dishes" width={600} height={500} />
        </Grid>
      </Grid>
      <AboutSlider />
    </Container>
  );
};

export default AboutUsPage;
