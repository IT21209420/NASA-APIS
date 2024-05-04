import { useEffect, useState } from "react";
import NASADataService from "../../services/NASADataService.js";
import Card from "../../components/Card.jsx";
import prevButtonImage from "../../assets/navi_rocket.png";
import nextButtonImage from "../../assets/navi_rocket.png";
import NoContentFound from "../../components/NoContentFound.jsx";
import Loading from "../../components/Loading.jsx";

const Rovers = () => {
  const [roverPhotos, setRoverPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sol, setSol] = useState(1000);
  const photosPerPage = 8;

  // Get current photos
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = roverPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [rover, setRover] = useState("Curiosity");

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    fetchRoverPhotos();
  }, [rover]);
  const fetchRoverPhotos = async () => {
    setIsLoading(true);
    const photos = await NASADataService.getRoverPhotos(
      currentPage,
      rover,
      sol
    );
    setRoverPhotos(photos);
    setIsLoading(false);
  };

  return (
    <div
      className="px-4 py-2
    bg-dominant
  
    "
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <div>
        <div className="flex flex-col items-center justify-center">
          <form className="max-w-lg mx-auto pb-2  relative">
            <div className="flex">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Your Email
              </label>
              <button
                id="dropdown-button"
                onClick={toggleDropdown}
                className="flex-shrink-0 z-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
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
                } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  <li>
                    <button
                      onClick={() => {
                        setRover("Curiosity");
                        setDropdownOpen(false);
                      }}
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="solar day on Mars"
                  required
                  value={sol}
                  onChange={(e) => setSol(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={(e) => {
                    e.preventDefault();
                    fetchRoverPhotos(currentPage, rover, sol);
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
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
            <NoContentFound />
          )}
        </div>
      </div>
    </div>
  );
};

export default Rovers;
