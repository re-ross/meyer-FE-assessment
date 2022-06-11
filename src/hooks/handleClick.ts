import { getProducts } from "./getProducts";

export const handleClick = (
  setFilter: React.SetStateAction<string[] | any>,

  setProducts: React.Dispatch<React.SetStateAction<any>>
) => {
  setFilter("");
  getProducts(setProducts);
};
