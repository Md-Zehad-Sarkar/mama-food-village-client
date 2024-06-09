export type TFood = {
  _id?: string;
  id?: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  ratings?: string;
  quantity?: number;
};

export type TProduct = {
  _id?: string;
  id?: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  ratings?: string;
};

// type TInitialProduct = {
//   _id?: string;
//   id?: number;
//   name: string;
//   description: string;
//   price: number;
//   category: string;
//   image: string;
//   ratings?: string;
//   quantity?: number;
// };
