import React, { useState } from "react";
import Modal from "react-modal";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ImageModal from "./ImageModal";

Modal.setAppElement("#root");

const Card = ({ photo }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div
      className=" rounded-md p-2 h-48 w-64 shadow-lg 
    bg-opacity-60 backdrop-filter backdrop-blur-lg border border-gray-600
    "
    >
      <img
        src={photo.img_src}
        alt={photo.camera.full_name}
        className="h-32 w-full object-cover cursor-pointer"
        onClick={openModal}
      />
      <div className="mt-2">
        <h2
          className="text-sm font-semibold
        text-white
        "
        >
          {photo.rover.name}
        </h2>
        <p
          className="text-xs
        text-white
        "
        >
          {photo.earth_date}
        </p>
      </div>
      <ImageModal
        src={photo.img_src}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        full_name={photo.camera.full_name}
      />
    </div>
  );
};

export default Card;
