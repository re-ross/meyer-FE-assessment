import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "./Product";

const ProductsGrid = () => {
  const [products, setProducts] = useState([] as any[]);

  useEffect(() => {
    axios
      .get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      )
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Grid>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Grid>
  );
};

export default ProductsGrid;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 400px 400px;
  grid-gap: 5px;
  margin: 10px;
  padding: 5px;
`;
