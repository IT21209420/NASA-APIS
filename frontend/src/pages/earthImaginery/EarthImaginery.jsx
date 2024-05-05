import { useEffect, useState } from "react";
import NASADataService from "../../services/NASADataService";
import Loading from "../../components/Loading";
import NoContentFound from "../../components/NoContentFound";
import ImageModal from "../../components/ImageModal";
import bgVideo from "../../assets/video-earthImaginery.mp4";
import BackgroundVideo from "../../components/BackgroundVideo";

/**
 * Renders the Earth Imagery component.
 *
 * @component
 * @returns {JSX.Element} EarthImaginery component
 */
const EarthImaginery = () => {
  // State for the Earth Imagery
  const [earthImagery, setEarthImagery] = useState({});

  // State for loading
  const [isLoading, setIsLoading] = useState(false);

  // State for image loading
  const [isImageLoading, setImageLoading] = useState(true);

  // State for the modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // State for the date
  const [date, setDate] = useState("2018-01-01");

  // State for the latitude and longitude
  const [latitude, setLatitude] = useState(29.78);

  //  State for the longitude
  const [longitude, setLongitude] = useState(-95.33);

  // Function to open the modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Fetch Earth Imagery
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
    if (latitude && longitude) {
      fetchEarthImagery();
    }
  }, [date, latitude, longitude]);

  // Function to handle the image load
  const handleImageLoad = () => {
    console.log("Image loaded");
    setImageLoading(false);
  };

  // Function to handle the date change
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  // Function to handle the latitude change
  const handleLatitudeChange = (event) => {
    const latitude = event.target.value;
    if (latitude >= -90 && latitude <= 90) {
      setLatitude(latitude);
    } else {
      alert("Latitude must be a number between -90 and 90.");
    }
  };

  // Function to handle the longitude change
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
          {/* <h1 className="text-2xl font-bold text-white ">Earth Imagery</h1> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 items-center">
            <label className="text-white ">
              Date
              <input
                type="date"
                value={date}
                onChange={handleDateChange}
                className="rounded-md ml-4 px-2 mt-2 text-gray-200 bg-transparent bg-opacity-60 backdrop-filter backdrop-blur-lg border border-gray-600"
              />
            </label>
            <label className="text-white ">
              Latitude
              <input
                type="number"
                value={latitude}
                onChange={handleLatitudeChange}
                placeholder="Latitude (Eg:29.78)"
                className="rounded-md ml-4 px-2 mt-2 text-gray-200 bg-transparent bg-opacity-60 backdrop-filter backdrop-blur-lg border border-gray-600"
              />
            </label>
            <label className="text-white ">
              Longitude
              <input
                type="number"
                value={longitude}
                onChange={handleLongitudeChange}
                placeholder="Longitude (Eg:-95.33)"
                className="rounded-md ml-4 px-2 mt-2 text-gray-200 bg-transparent bg-opacity-60 backdrop-filter backdrop-blur-lg border border-gray-600"
              />
            </label>
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {earthImagery.url ? (
                <div>
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
                  </div>
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
