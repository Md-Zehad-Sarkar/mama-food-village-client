"use client";
import { useGetAllFoodsQuery } from "@/redux/api/foods/foodApi";
import { TFood } from "@/types/products.type";
import { Container } from "@mui/material";

const PizzaMenuPage = () => {
  const { data } = useGetAllFoodsQuery({});

  // const pizzas = data?.data.filter(
  //   (food: TFood) => food.category.toLowerCase() ===  "burger"
  // );
  // console.log("pizza", pizzas);

  return <Container>pizza load here</Container>;
};

export default PizzaMenuPage;
