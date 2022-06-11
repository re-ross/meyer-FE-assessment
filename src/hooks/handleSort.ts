import { SelectEvent } from "../types/Event.types";
import { baseUrl } from "../common/data";
import axios from "axios";

export const handleSort = (
  e: SelectEvent,
  sorting: string,
  setSorting: React.SetStateAction<string | any>,
  setSortedProducts: React.SetStateAction<any[] | any>,
  sortedProducts: any[] | any
) => {
  setSorting(e.target.value);

  axios.get(baseUrl).then((res) => setSortedProducts(res.data));

  if (sorting === "asc") {
    setSortedProducts(
      sortedProducts.sort((a: any, b: any) => a.price - b.price)
    );
  } else if (sorting === "desc") {
    setSortedProducts(
      sortedProducts.sort((a: any, b: any) => b.price - a.price)
    );
  }
  return sortedProducts;
};
