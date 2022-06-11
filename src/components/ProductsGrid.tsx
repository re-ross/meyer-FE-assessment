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
  const baseUrl =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  const [products, setProducts] = useState([] as any[]);

  const [filter, setFilter] = useState("");

  const filterByType = (e: SelectEvent) => {
    axios
      .get(baseUrl + `&product_type=${e.target.value}`)
      .then((res) => setProducts(res.data))
      .then(() => setFilter(e.target.value))
      .catch((err) => console.log(err));
  };
  const filterByPrice = (e: SelectEvent) => {
    axios
      .get(baseUrl + `&price_less_than=${e.target.value}`)
      .then((res) => setProducts(res.data))
      .then(() => setFilter(e.target.value))
      .catch((err) => console.log(err));
  };
  const filterByRating = (e: SelectEvent) => {
    axios
      .get(baseUrl + `&rating_less_than=${e.target.value}`)
      .then((res) => setProducts(res.data))
      .then(() => setFilter(e.target.value))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <FilterWrapper>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select onChange={filterByType}>
            <option value="">Type</option>
            {productTypeOptions.map((option) => (
              <option value={option.value} label={option.label} />
            ))}
          </Select>
          <Select onChange={filterByPrice}>
            <option value="">Price</option>
            {productPriceOptions.map((option) => (
              <option value={option.value} label={option.label} />
            ))}
          </Select>
          <Select onChange={filterByRating}>
            <option value="">Rating</option>
            {productRatingOptions.map((option) => (
              <option value={option.value} label={option.label} />
            ))}
          </Select>
          <Select onChange={filterByRating}>
            <option value="">Color</option>
            {productColorOptions.map((option) => (
              <option value={option.value} label={option.label} />
            ))}
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </Select>
        </Filter>
      </FilterWrapper>
      {filter ? <p>{filter}</p> : null}
      <Grid>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Grid>
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
`;
