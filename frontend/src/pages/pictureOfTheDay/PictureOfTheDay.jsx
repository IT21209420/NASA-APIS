import { useEffect, useState } from "react";
import NASADataService from "../../services/NASADataService";
import ImageModal from "../../components/ImageModal";
import BackgroundVideo from "../../components/BackgroundVideo";
import bgVideo from "../../assets/video-POD.mp4";
const PictureOfTheDay = () => {
  const [pictureOfTheDay, setPictureOfTheDay] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchPictureOfTheDay = async () => {
      const picture = await NASADataService.getPictureOfTheDay();
      setPictureOfTheDay(picture);
    };
    fetchPictureOfTheDay();
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <BackgroundVideo url={bgVideo}>
      <div className="px-4 py-2">
        <div className="rounded-lg shadow-lg p-6 mt-6 flex flex-col items-center bg-opacity-60 backdrop-filter backdrop-blur-lg border border-gray-600">
          <h1 className="text-2xl font-bold text-white mb-4">
            Picture of the Day
          </h1>
          <img
            src={pictureOfTheDay.url}
            alt={pictureOfTheDay.title}
            className="w-64  rounded-lg mb-4"
            onClick={openModal}
          />
          <h2 className="text-xl font-bold text-white mb-2">
            {pictureOfTheDay.title}
          </h2>
          <p className="text-white">{pictureOfTheDay.explanation}</p>
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
