import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import ShopItems from "@/components/UI/Shop/ShopItems";
import CategoriesItems from "@/components/UI/Shop/CategoriesItems";
import SearchButton from "@/components/UI/Shop/SearchButton";

const ShopPage = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9} gap={3}>
          <Stack
            direction={"row"}
            spacing={4}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>Showing 1-12 of 54 results</Box>
            <Box>
              <GridViewIcon />
              <ListIcon />
            </Box>
          </Stack>
          <Box>
            <ShopItems />
          </Box>
        </Grid>
        <Grid item lg={3} sx={{ display: { xs: "none", lg: "block" } }}>
          <Box sx={{ bgcolor: "primary.main", borderRadius: "5px" }}>
            <CategoriesItems />
          </Box>
          <SearchButton />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShopPage;
