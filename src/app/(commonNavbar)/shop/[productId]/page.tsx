import { Container, Typography } from "@mui/material";

type TProps = {
  params: {
    productId: string;
  };
};

const ProductDetailsPage = async ({ params }: TProps) => {
  console.log("product id", params?.productId);
  const res = await fetch("/", {
    method: "GET",
    cache: "no-store",
  });

  const product = await res.json();

  return (
    <Container>
      <Typography>product details load here</Typography>
    </Container>
  );
};

export default ProductDetailsPage;
