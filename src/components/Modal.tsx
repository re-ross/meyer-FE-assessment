import styled from "styled-components";
import { PropsProduct } from "../types/Props.interface";

const Modal = ({ product }: PropsProduct) => {
  return (
    <Container>
      <Image src={product.image_link} />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export default Modal;
