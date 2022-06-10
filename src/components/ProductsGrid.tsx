import styled from "styled-components";

const ProductsGrid = () => {
  return (
    <Grid>
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
      <p>6</p>
      <p>7</p>
    </Grid>
  );
};

export default ProductsGrid;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
  grid-gap: 5px;
`;
