import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Button from "./components/AddToCartButton";
import AddToCartButton from "./components/AddToCartButton";
import BuyNowButton from "./components/BuyNowButton";

type TProps = {
  params: {
    productId: string;
  };
};

const ProductDetailsPage = async ({ params }: TProps) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/foods/${params.productId}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  const product = await res.json();

  const { image, name, description, price, category, id } = product?.data;

  return (
    <Container>
      <Typography
        textAlign={"center"}
        mb={6}
        fontWeight={600}
        fontSize={24}
        component={"h4"}
      >
        Product Details For : {name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: 8,
          border: "1px solid red",
          padding: 2,
        }}
      >
        <Box>
          <Image
            src={image}
            alt="product image"
            width={800}
            height={800}
            style={{
              width: "200px",
              height: "200px",
              border: "1px solid black",
              padding: 2,
              borderRadius: "10px",
            }}
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography fontWeight={700}>
            Product Name:{" "}
            <Typography component={"span"} ml={1}>
              {name}
            </Typography>
          </Typography>
          <Typography fontWeight={700}>
            Product Id:{" "}
            <Typography component={"span"} ml={1}>
              {id}
            </Typography>
          </Typography>
          <Typography fontWeight={700}>
            Product Category:
            <Typography component={"span"} ml={1}>
              {category}
            </Typography>
          </Typography>
          <Typography fontWeight={700}>
            Product Price:
            <Typography
              component={"span"}
              sx={{ color: "primary.main", marginLeft: 1 }}
            >
              ${price}
            </Typography>
          </Typography>
          <Typography fontWeight={700}>
            Product Description:
            <Typography component={"span"} ml={1}>
              {description}
            </Typography>
          </Typography>
          <Box sx={{ marginTop: 2 }}>
            <AddToCartButton product={product.data} />
            <BuyNowButton product={product.data} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetailsPage;
