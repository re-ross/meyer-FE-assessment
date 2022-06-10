import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "./Product";
import {
  productTypeOptions,
  productPriceOptions,
  productRatingOptions,
  productColorOptions,
} from "../productOptions";
import { SelectEvent } from "../types/Event.types";

export const ProductsGrid = () => {
  const [products, setProducts] = useState([] as any[]);
  const [filter, setFilter] = useState<string | number>();

  const handleChange = (e: SelectEvent) => {
    setFilter(e.target.value);
  };
  const handleChangeInt = (e: SelectEvent) => {
    setFilter(parseInt(e.target.value));
  };

  useEffect(() => {
    axios
      .get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      )
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <FilterWrapper>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select onChange={handleChange}>
            <option value="">Type</option>
            {productTypeOptions.map((option) => (
              <option value={option.value} label={option.label} />
            ))}
          </Select>
          <Select onChange={handleChangeInt}>
            <option value="">Price</option>
            {productPriceOptions.map((option) => (
              <option value={option.value} label={option.label} />
            ))}
          </Select>
          <Select onChange={handleChangeInt}>
            <option value="">Rating</option>
            {productRatingOptions.map((option) => (
              <option value={option.value} label={option.label} />
            ))}
          </Select>
          <Select onChange={handleChange}>
            <option value="">Color</option>
            {productColorOptions.map((option) => (
              <option value={option.value} label={option.label} />
            ))}
          </Select>
          {filter ? <p>{filter}</p> : null}
        </Filter>
      </FilterWrapper>
      {filter ? (
        <Grid>
          {products
            .filter((product) => product.product_type === filter)
            .map((product) => (
              <Product product={product} key={product.id} />
            ))}
        </Grid>
      ) : (
        <Grid>
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </Grid>
      )}
    </Container>
  );
};

const Container = styled.div``;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 400px 400px;
  grid-gap: 5px;
  margin: 10px;
  padding: 5px;
`;
