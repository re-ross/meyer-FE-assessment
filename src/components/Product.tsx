import { useState } from "react";

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
      <div className="flex flex-col items-center text-center border border-gray-50">
        <img
          className="h-1/2 w-1/2"
          src={product.image_link}
          alt={product.name}
        />
        <h3 className="text-sm">{product.name}</h3>
        <h3 className="text-sm">${product.price}</h3>
        {product.rating ? (
          <h3 className="text-sm">{product.rating} /5 </h3>
        ) : (
          <h3 className="text-sm">Be the first to rate!</h3>
        )}
        <button
          className="text-sm bg-transparent cursor-pointer rounded-sm"
          onClick={toggleModal}
        >
          View More
        </button>
      </div>
    </>
  );
};
