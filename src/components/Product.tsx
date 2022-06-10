import { useState } from "react";
import styled from "styled-components";
import { PropsProduct } from "../types/Props.interface";
import Modal from "./Modal";

export const Product = ({ product }: PropsProduct) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal ? (
        <Modal
          //   showModal={showModal}
          //   setShowModal={setShowModal}
          product={product}
        />
      ) : null}
      <Container>
        <Image src={product.image_link} />
        <Title>{product.name}</Title>
        <Number>${product.price}</Number>
        {product.rating ? (
          <Number>{product.rating} /5 </Number>
        ) : (
          <Number>Be the first to rate!</Number>
        )}
        <Button onClick={toggleModal}>View More</Button>
      </Container>
    </>
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
