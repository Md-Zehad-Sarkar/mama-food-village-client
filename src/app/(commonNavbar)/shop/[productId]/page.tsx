import { Container, Typography } from "@mui/material";

type TProps = {
  params: {
    productId: string;
  };
};

const ProductDetailsPage = async ({ params }: TProps) => {
  console.log("product id", params?.productId);
  const res = await fetch(
    `http://localhost:5000/api/v1/foods/${params.productId}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  const product = await res.json();
  console.log("single product", product);

  return (
    <Container>
      <Typography>product details load here</Typography>
    </Container>
  );
};

export default ProductDetailsPage;
