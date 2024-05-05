import { useEffect, useState } from "react";
import NASADataService from "../../services/NASADataService.js";
import Card from "../../components/Card.jsx";
import prevButtonImage from "../../assets/navi_rocket.png";
import nextButtonImage from "../../assets/navi_rocket.png";
import NoContentFound from "../../components/NoContentFound.jsx";
import Loading from "../../components/Loading.jsx";
import BackgroundVideo from "../../components/BackgroundVideo.jsx";
import bgVideo from "../../assets/video-rover.mp4";

/**
 * Renders the Rovers component.
 * This component displays a form with a dropdown menu to select a rover, a search input to enter a solar day on Mars, and a grid of rover photos.
 * It fetches rover photos based on the selected rover and solar day, and paginates the photos.
 * If no photos are found for the selected rover and solar day, it displays a message indicating no content found.
 *
 * @returns {JSX.Element} The Rovers component.
 */
const Rovers = () => {
  const [roverPhotos, setRoverPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sol, setSol] = useState();
  const photosPerPage = 8;

  // Get current photos
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = roverPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // State for the selected rover
  const [rover, setRover] = useState("Curiosity");

  // State for the dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // State for loading
  const [isLoading, setIsLoading] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Fetch rover photos
  useEffect(() => {
    fetchRoverPhotos();
  }, [rover]);

  // Function to fetch rover photos
  const fetchRoverPhotos = async () => {
    setIsLoading(true);
    const photos = await NASADataService.getRoverPhotos(rover, sol || 1000);
    setRoverPhotos(photos);
    setIsLoading(false);
  };

  return (
    <BackgroundVideo url={bgVideo}>
      <div className=" flex flex-col  items-center h-full">
        <div>
          <form className="mx-auto pb-2  relative mb-10 w-96  ">
            <div className="flex">
              <button
                id="dropdown-button"
                onClick={toggleDropdown}
                className="flex-shrink-0 z-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-200  border border-gray-300 rounded-s-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-100   bg-opacity-60 backdrop-filter backdrop-blur-lg bg-transparent border-gray-600 placeholder-gray-400 text-white focus:border-blue-500 hover:bg-gray-700 focus:ring-blue-500 focus:ring-opacity-50 hover:text-white ring-gray-700 ring-opacity-50 bg-opacity-60 backdrop-filter backdrop-blur-lg bg-transparent"
                type="button"
              >
                {rover}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdown"
                className={`z-10 ${
                  dropdownOpen ? "absolute top-11 " : "hidden"
                }  divide-y divide-gray-100 rounded-lg shadow w-44 bg-black`}
              >
                <ul
                  className="py-2 text-sm  text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  <li>
                    <button
                      onClick={() => {
                        setRover("Curiosity");
                        setDropdownOpen(false);
                      }}
                      type="button"
                      className="inline-flex w-full px-4 py-2  hover:bg-gray-600 hover:text-white"
                    >
                      Curiosity
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setRover("Perseverance");
                        setDropdownOpen(false);
                      }}
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-600  hover:text-white"
                    >
                      Perseverance
                    </button>
                  </li>
                </ul>
              </div>
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm rounded-lg border-2 border-gray-700 placeholder-gray-400 text-white focus:border-gray-600 bg-opacity-60 backdrop-filter backdrop-blur-lg bg-transparent"
                  placeholder="solar day on Mars Eg: 1000"
                  required
                  value={sol}
                  onChange={(e) => setSol(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white rounded-e-lg border border-gray-600  focus:ring-4 focus:outline-none  hover:bg-gray-600 focus:ring-gray-600"
                  onClick={(e) => {
                    e.preventDefault();
                    fetchRoverPhotos(rover, sol);
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
          {isLoading ? (
            <Loading />
          ) : roverPhotos.length > 0 ? (
            <div className="flex items-center flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {currentPhotos.map((photo) => (
                  <Card key={photo.id} photo={photo} />
                ))}
              </div>
              <button
                onClick={() => paginate(currentPage - 1)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 rotate-180 pr-6  hover:scale-150 transition-transform duration-200 "
                disabled={currentPage === 1}
              >
                <img
                  src={prevButtonImage}
                  alt="Previous"
                  className="h-12 w-16"
                />
              </button>
              <button
                onClick={() => paginate(currentPage + 1)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-5 hover:scale-150 transition-transform duration-200 origin-right"
                disabled={
                  currentPage === Math.ceil(roverPhotos.length / photosPerPage)
                }
              >
                <img src={nextButtonImage} alt="Next" className="h-12 w-16" />
              </button>
            </div>
          ) : (
            <NoContentFound
              content={"No photos found for the selected rover and solar day."}
            />
          )}
        </div>
      </div>
    </BackgroundVideo>
  );
};

export default Rovers;
