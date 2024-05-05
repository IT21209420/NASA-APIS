import Modal from "react-modal";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import PropTypes from "prop-types";

const ImageModal = ({ src, modalIsOpen, closeModal, full_name }) => {
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
            src={src}
            alt={full_name ? full_name : "Image"}
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

ImageModal.propTypes = {
  /**
   * The source URL of the image to be displayed in the modal.
   */
  src: PropTypes.string.isRequired,

  /**
   * The state of the modal.
   */
  modalIsOpen: PropTypes.bool.isRequired,

  /**
   * Function to close the modal.
   */
  closeModal: PropTypes.func.isRequired,

  /**
   * The full name of the image to be displayed in the modal.
   */
  full_name: PropTypes.string,
};
