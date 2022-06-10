import styled from "styled-components";
import { PropsProduct } from "../types/Props.interface";

const ProductModal = ({ product }: PropsProduct) => {
  return (
    <Container>
      <Image src={product.image_link} />
      <Title>{product.name}</Title>
      <Info>${product.price}</Info>
      {product.rating ? (
        <Info>Rating: {product.rating} / 5 </Info>
      ) : (
        <Info>Not yet rated!</Info>
      )}
      {product.product_colors.map((color: any) => (
        <ColorWrapper>
          <p key={color.colour_name}>{color.colour_name}</p>
        </ColorWrapper>
      ))}
      <Info>
        <b>Description:</b> {product.description}
      </Info>
      <a href={product.product_link}>
        <Button>Product Page</Button>
      </a>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: auto;
  width: auto;
`;
const Image = styled.img`
  height: 50%;
  width: 50%;
`;
const Title = styled.h3`
  font-size: 14px;
`;

const Info = styled.h5`
  font-size: 14px;
`;

const ColorWrapper = styled.span`
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  font-size: 14px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 4px;
`;

export default ProductModal;
