// "use client";

import { Box, Typography } from "@mui/material";
import ReviewsSlider from "./ReviewsSlider";

const ClientReviews = () => {
  return (
    <Box py={18} my={16} sx={{ bgcolor: "#F7F2E2" }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: 600,
        }}
        textAlign={"center"}
        my={4}
      >
        What your client says?
      </Typography>

      <ReviewsSlider />
    </Box>
  );
};

export default ClientReviews;
