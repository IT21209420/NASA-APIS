import React, { useState } from "react";
import Modal from "react-modal";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

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
    <div className="border rounded-md p-2 h-52 w-64 border-gray-700  backdrop-filter backdrop-blur-sm">
      <img
        src={photo.img_src}
        alt={photo.camera.full_name}
        className="h-36 w-full object-cover cursor-pointer"
        onClick={openModal}
      />
      <div className="mt-2">
        <h2
          className="text-sm font-semibold
        text-gray-100
        "
        >
          {photo.rover.name}
        </h2>
        <p
          className="text-xs
        text-gray-300
        "
        >
          {photo.earth_date}
        </p>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="flex items-center justify-center h-full"
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          content: {
            position: "relative",
            inset: "auto",
          },
        }}
      >
        <button onClick={closeModal}>Close</button>
        <TransformWrapper>
          <TransformComponent>
            <img
              src={photo.img_src}
              alt={photo.camera.full_name}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain",
                zIndex: 1000,
              }}
            />
          </TransformComponent>
        </TransformWrapper>
      </Modal>
    </div>
  );
};

export default Card;
