import axios from "axios";
import { baseUrl } from "../common/data";
import { SelectEvent } from "../types/Event.types";

export const filterByPrice = (
  e: SelectEvent,
  setFilter: React.SetStateAction<string[] | any>,
  setProducts: React.Dispatch<React.SetStateAction<any>>
) => {
  axios
    .get(baseUrl + `&price_less_than=${Math.floor(+e.target.value)}`)
    .then((res) => setProducts(res.data))
    .then(() => setFilter(e.target.value))
    .catch((err) => console.log(err));
};
