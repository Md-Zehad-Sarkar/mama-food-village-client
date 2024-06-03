import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function Ratings({ value }: any) {
  const ratingNumber = Number(value);
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating
        name="customized-10"
        readOnly
        defaultValue={ratingNumber}
        max={5}
      />
    </Box>
  );
}
