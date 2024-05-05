import { useEffect, useState } from "react";
import Modal from "react-modal";
import ImageModal from "./ImageModal";
import PropTypes from "prop-types";

/**
 * Card component displays a card with an image, rover name, and earth date.
 *
 * @component
 * @param {Object} photo - The photo object containing image source, camera details, rover name, and earth date.
 * @returns {JSX.Element} The Card component.
 */

const Card = ({ photo }) => {
  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  // State for the modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Function to close the modal
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

Card.propTypes = {
  photo: PropTypes.object,
};
