import { Button, Container, Stack } from "@mui/material";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Container>
      {" "}
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        page not found you are looking for
        <Link href={"/"}>
          <Button>Back to Home</Button>
        </Link>
      </Stack>
    </Container>
  );
};

export default NotFoundPage;
