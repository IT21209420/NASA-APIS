import { useEffect, useState } from "react";
import NASADataService from "../../services/NASADataService";
import Loading from "../../components/Loading";

import NoContentFound from "../../components/NoContentFound";
import ImageModal from "../../components/ImageModal";
import bgVideo from "../../assets/video-earthImaginery.mp4";
import BackgroundVideo from "../../components/BackgroundVideo";

const EarthImaginery = () => {
  const [earthImagery, setEarthImagery] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isImageLoading, setImageLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [date, setDate] = useState("2018-01-01");
  const [latitude, setLatitude] = useState(29.78);
  const [longitude, setLongitude] = useState(-95.33);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  useEffect(() => {
    const fetchEarthImagery = async () => {
      setIsLoading(true);
      setImageLoading(true);
      const imagery = await NASADataService.getEarthImagery(
        latitude,
        longitude,
        date
      );
      setEarthImagery(imagery);
      setIsLoading(false);
    };
    fetchEarthImagery();
  }, [date, latitude, longitude]);

  const handleImageLoad = () => {
    console.log("Image loaded");
    setImageLoading(false);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleLatitudeChange = (event) => {
    const latitude = event.target.value;
    if (latitude >= -90 && latitude <= 90) {
      setLatitude(latitude);
    } else {
      alert("Latitude must be a number between -90 and 90.");
    }
  };

  const handleLongitudeChange = (event) => {
    const longitude = event.target.value;
    if (longitude >= -180 && longitude <= 180) {
      setLongitude(longitude);
    } else {
      alert("Longitude must be a number between -180 and 180.");
    }
  };

  return (
    <BackgroundVideo url={bgVideo}>
      <div
        className="mx-auto px-4 py-5
 
    "
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-white ">Earth Imagery</h1>
          <div className="flex  items-center gap-5">
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              className="rounded-md px-2 mt-2 text-gray-200 bg-transparent  bg-opacity-60 backdrop-filter backdrop-blur-lg border border-gray-600"
            />
            <input
              type="number"
              value={latitude}
              onChange={handleLatitudeChange}
              placeholder="Latitude"
              className="rounded-md px-2 mt-2 text-gray-200 bg-transparent  bg-opacity-60 backdrop-filter backdrop-blur-lg border border-gray-600"
            />
            <input
              type="number"
              value={longitude}
              onChange={handleLongitudeChange}
              placeholder="Longitude"
              className="rounded-md px-2 mt-2 text-gray-200 bg-transparent  bg-opacity-60 backdrop-filter backdrop-blur-lg border border-gray-600"
            />
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {earthImagery.url ? (
                <div
                  className={`border border-gray-200 p-5 mt-4 ${
                    isImageLoading ? "hidden" : ""
                  }`}
                >
                  <img
                    src={earthImagery.url}
                    alt="Earth Imagery"
                    className={`w-[65vh]   `}
                    onLoad={handleImageLoad}
                    onClick={openModal}
                  />
                  {isImageLoading && <Loading />}
                </div>
              ) : (
                <p className="text-white">
                  <NoContentFound content="No Earth Imagery found for the selected date and location." />
                </p>
              )}
            </>
          )}
        </div>
        <ImageModal
          src={earthImagery.url}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          full_name="Earth Imagery"
        />
      </div>
    </BackgroundVideo>
  );
};

export default EarthImaginery;
