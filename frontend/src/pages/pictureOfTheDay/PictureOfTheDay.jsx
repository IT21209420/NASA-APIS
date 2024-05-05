import { useEffect, useState } from "react";
import NASADataService from "../../services/NASADataService";
import ImageModal from "../../components/ImageModal";
import BackgroundVideo from "../../components/BackgroundVideo";
import bgVideo from "../../assets/video-POD.mp4";
/**
 * Component for displaying the Picture of the Day.
 *
 * @component
 * @example
 * return (
 *   <PictureOfTheDay />
 * )
 */
const PictureOfTheDay = () => {
  // State for the picture of the day
  const [pictureOfTheDay, setPictureOfTheDay] = useState({});

  // State for the modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Fetch picture of the day
  useEffect(() => {
    const fetchPictureOfTheDay = async () => {
      const picture = await NASADataService.getPictureOfTheDay();
      setPictureOfTheDay(picture);
    };
    fetchPictureOfTheDay();
  }, []);

  // Function to open the modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <BackgroundVideo url={bgVideo}>
      <div className="px-4 py-2 flex flex-col items-center">
        {/* <h1 className="text-2xl font-bold text-white mb-4">
          Picture of the Day
        </h1> */}
        <div className="rounded-lg shadow-lg p-10  flex flex-col items-center bg-opacity-60 backdrop-filter backdrop-blur-lg border border-gray-600">
          <img
            src={pictureOfTheDay.url}
            alt={pictureOfTheDay.title}
            className="w-64  rounded-lg mb-4"
            onClick={openModal}
          />
          <h2 className="text-xl font-bold text-white mb-2">
            {pictureOfTheDay.title}
          </h2>
          <p className="text-white text-sm">{pictureOfTheDay.explanation}</p>
        </div>
        <ImageModal
          src={pictureOfTheDay.url}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          full_name={pictureOfTheDay.title}
        />
      </div>
    </BackgroundVideo>
  );
};

export default PictureOfTheDay;
