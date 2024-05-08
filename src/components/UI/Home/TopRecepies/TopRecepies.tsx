import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import recipesSideImage from "@/assets/images/categories/recipesView.jpeg";
import Image from "next/image";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import TopRecipeDataItems from "./TopRecipeDataItems";

const TopRecepies = () => {
  return (
    <>
      <Stack
        direction={"row"}
        spacing={3}
        justifyContent={"space-between"}
        mb={3}
      >
        <Typography
          variant="h4"
          component={"h2"}
          sx={{
            fontWeight: 600,
          }}
        >
          Top Recipes
        </Typography>
        <Box>
          <Typography
            letterSpacing={2}
            sx={{ ":hover": { color: "primary.main" } }}
            component={Link}
            href="/all-recipes"
          >
            See All
          </Typography>
          <NavigateNextIcon sx={{ ":hover": { color: "primary.main" } }} />
        </Box>
      </Stack>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <TopRecipeDataItems />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          lg={4}
          sx={{ display: { xs: "none", lg: "block", position: "relative" } }}
        >
          <Image
            src={recipesSideImage}
            alt="recipe image"
            width={800}
            height={800}
          />
          <Box
            sx={{
              position: "absolute",
              top: "120px",
              left: "40%",
            }}
          >
            <Typography
              color={"white"}
              variant="h6"
              component={"h3"}
              fontFamily={
                "gilroy, helvetica-neue-light, Helvetica, Arial, sans-serif"
              }
            >
              Super Delicious
            </Typography>
            <Typography
              color={"#F00000"}
              fontWeight={600}
              variant="h6"
              component={"h1"}
            >
              CHICKEN
            </Typography>
            <Typography color={"white"} variant="h6" component={"h4"}>
              CALL US NOW:
            </Typography>
            <Typography color={"#F00000"} variant="h6" component={"h5"}>
              1-800-555-333
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default TopRecepies;
