import { useState } from "react";
import styled from "styled-components";
import { PropsProduct } from "../types/Props.interface";
import { Modal } from "@mantine/core";
import ProductModal from "./ProductModal";

export const Product = ({ product }: PropsProduct) => {
  const [opened, setOpened] = useState(false);

  return (
    <Container>
      <Image src={product.image_link} />
      <Title>{product.name}</Title>
      <Number>${product.price}</Number>
      {product.rating ? (
        <Number>{product.rating} / 5 </Number>
      ) : (
        <Number>Be the first to rate!</Number>
      )}
      <Button onClick={() => setOpened(true)}>View More</Button>
      <Modal
        centered
        size="lg"
        transition="fade"
        transitionDuration={600}
        transitionTimingFunction="ease"
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <ProductModal product={product} key={product.id} />
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid gray;
`;
const Image = styled.img`
  height: 50%;
  width: 50%;
`;
const Title = styled.h3`
  font-size: 14px;
`;

const Number = styled.h5`
  font-size: 14px;
`;

const Button = styled.button`
  font-size: 14px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 4px;
`;
