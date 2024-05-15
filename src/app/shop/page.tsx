import { Box, Container, Stack } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";

const ShopPage = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default ShopPage;
