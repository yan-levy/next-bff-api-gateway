export type Product = {
  id: number;
  name: string;
  detail: string;
  price: number;
  hero: string;
  image: string;
};

export type Review = {
  id: number;
  content: string;
  product_id: number;
};
