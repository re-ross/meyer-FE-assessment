import styled from "styled-components";
import { useEffect, useState } from "react";
import { Product } from "./Product";
import {
  productTypeOptions,
  productPriceOptions,
  productRatingOptions,
  productColorOptions,
} from "../common/productOptions";
import {
  getProducts,
  filterByColor,
  handleClick,
  filterByType,
  filterByPrice,
  filterByRating,
} from "../hooks";

import { SelectEvent } from "../types/Event.types";
export const ProductsGrid = () => {
  const [products, setProducts] = useState([] as any[]);
  const [filter, setFilter] = useState<string | number>();
  const [sorting, setSorting] = useState("");

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  const handleSort = (
    e: SelectEvent,
    sorting: string,
    setSorting: React.SetStateAction<string | any>
  ) => {
    setSorting(e.target.value);
    if (sorting === "desc") {
      setProducts(products.sort((a: any, b: any) => a.price - b.price));
    } else if (sorting === "asc") {
      setProducts(products.sort((a: any, b: any) => b.price - a.price));
    }
  };

  return (
    <Container>
      <FilterWrapper>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select onChange={(e) => filterByType(e, setFilter, setProducts)}>
            <option value="">Type</option>
            {productTypeOptions.map((option) => (
              <option value={option.value} label={option.label} />
            ))}
          </Select>
          <Select onChange={(e) => filterByPrice(e, setFilter, setProducts)}>
            <option value="">Price</option>
            {productPriceOptions.map((option) => (
              <option value={option.value} label={option.label} />
            ))}
          </Select>
          <Select onChange={(e) => filterByRating(e, setFilter, setProducts)}>
            <option value="">Rating</option>
            {productRatingOptions.map((option) => (
              <option value={option.value} label={option.label} />
            ))}
          </Select>
          <Select onChange={(e) => filterByColor(e, setFilter)}>
            <option value="">Color</option>
            {productColorOptions.map((option) => (
              <option value={option.value} label={option.label} />
            ))}
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products By Price:</FilterText>
          <Select onChange={(e) => handleSort(e, sorting, setSorting)}>
            <option value="asc" label="Ascending" selected />
            <option value="desc" label="Descending" />
          </Select>
        </Filter>
      </FilterWrapper>
      {filter ? (
        <FilterSpan>
          {filter}
          <CloseButton onClick={() => handleClick(setFilter, setProducts)}>
            x
          </CloseButton>
        </FilterSpan>
      ) : null}
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

const FilterSpan = styled.span`
  margin-left: 10px;
  border: 1px solid gray;
  padding: 5px;
`;

const CloseButton = styled.button`
  background-color: #ec4e20;
  margin-left: 5px; ;
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
