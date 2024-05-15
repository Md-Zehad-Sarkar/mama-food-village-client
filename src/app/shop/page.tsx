import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import ShopItems from "@/components/UI/Shop/ShopItems";

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
          <Box sx={{ bgcolor: "primary.main" }}>category here</Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShopPage;
