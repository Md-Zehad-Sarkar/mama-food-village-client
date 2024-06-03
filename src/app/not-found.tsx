import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Container>
      <Stack
        sx={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "500px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: 2,
          }}
        >
          <Typography variant="h6" component={"h5"} fontSize={"22px"}>
            {" "}
            Page not found you are looking for
          </Typography>
          <Link href={"/"}>
            <Button>Back to Home</Button>
          </Link>
        </Box>
      </Stack>
    </Container>
  );
};

export default NotFoundPage;
