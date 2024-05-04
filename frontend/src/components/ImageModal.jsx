import React from "react";
import Modal from "react-modal";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ImageModal = ({ photo, modalIsOpen, closeModal }) => {
  return (
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
  );
};

export default ImageModal;
