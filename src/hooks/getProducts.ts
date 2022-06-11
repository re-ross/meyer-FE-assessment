import axios from "axios";
import { baseUrl } from "../common/data";

export const getProducts = (
  setProducts: React.Dispatch<React.SetStateAction<any[]>>
) => {
  axios
    .get(baseUrl)
    .then((res) => setProducts(res.data))
    .catch((err) => console.log(err));
};
