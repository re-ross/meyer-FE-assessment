import { PropsProduct } from "../types/Props.interface";

const Modal = ({ product }: PropsProduct) => {
  return (
    <div>
      <img src={product.image_link} alt={product.name} />
    </div>
  );
};

export default Modal;
