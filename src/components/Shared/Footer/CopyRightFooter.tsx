import { Box, Container, Stack, Typography } from "@mui/material";
import payment from "@/assets/images/payments/visa.png";

import Image from "next/image";

const CopyRightFooter = () => {
  return (
    <Container sx={{ bgcolor: "green", height: "150px" }}>
      <Stack
        direction={"row"}
        justifyContent={{ md: "space-between" }}
        alignItems={"center"}
        sx={{ height: "150px" }}
      >
        <Box>
          <Typography color="white">
            Copyright &copy; 2024{" "}
            <Typography component={"span"} color={"primary.main"}>
              Mama Food Village
            </Typography>
            . All Rights Reserved.
          </Typography>
        </Box>
        <Box>
          <Image src={payment} alt="visa image" width={250} height={120} />
        </Box>
      </Stack>
    </Container>
  );
};

export default CopyRightFooter;
