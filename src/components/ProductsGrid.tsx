import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "./Product";

export const ProductsGrid = () => {
  const [products, setProducts] = useState([] as any[]);
  const [filter, setFilter] = useState<string | number>();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };
  const handleChangeInt = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
            <option selected value="">
              Type
            </option>
            <option value="bronzer">Bronzer</option>
            <option value="blush">Blush</option>
            <option value="lip_liner">Lip Liner</option>
            <option value="lipstick">Lipstick</option>
            <option value="foundation">Foundation</option>
            <option value="eyeliner">Eye Liner</option>
            <option value="eyeshadow">Eyeshadow</option>
            <option value="nail_polish">Nail Polish</option>
            <option value="mascara">Mascara</option>
            <option value="cream">Cream</option>
          </Select>
          <Select onChange={handleChangeInt}>
            <option selected value="">
              Price
            </option>
            <option value="5">$5 or under</option>
            <option value="10-15">$10 - 15</option>
            <option value="15-20">$15 - 20</option>
            <option value="20">$20+</option>
          </Select>
          <Select onChange={handleChangeInt}>
            <option selected value="">
              Rating
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Select>
          <Select onChange={handleChange}>
            <option selected value="">
              Color
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
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
