import styled from "styled-components";
import { PropsProduct } from "../types/Props.interface";

export const Product = ({ product }: PropsProduct) => {
  return (
    <Container>
      <Image src={product.image_link} />
      <Title>{product.name}</Title>
      <Number>${product.price}</Number>
      <Number>{product.rating} / 5</Number>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Image = styled.img`
  height: 50%;
  width: 50%;
`;
const Title = styled.h3``;

const Number = styled.h5``;
