import { useEffect, useState } from "react";
import NASADataService from "../../services/NASADataService.js";
import Card from "../../components/Card.jsx";
import prevButtonImage from "../../assets/navi_rocket.png";
import nextButtonImage from "../../assets/navi_rocket.png";

const Rovers = () => {
  const [roverPhotos, setRoverPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 8;

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const photos = await NASADataService.getRoverPhotos();
      setRoverPhotos(photos);
    };
    fetchRoverPhotos();
    console.log(NASADataService.getRoverTypes());
  }, []);

  // Get current photos
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = roverPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [rover, setRover] = useState("Curiosity");

  const handleRoverChange = (event) => {
    setRover(event.target.value);
    // Fetch new photos based on the selected rover...
  };

  return (
    <div
      className="px-4 py-8
    bg-dominant
    h-full
    
    "
    >
      <div className="flex flex-col items-center">
        <select value={rover} onChange={handleRoverChange} className="mb-4">
          <option value="Curiosity">Curiosity</option>
          <option value="Opportunity">Opportunity</option>
          <option value="Spirit">Spirit</option>
        </select>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
          {currentPhotos.map((photo) => (
            <Card key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
      <button
        onClick={() => paginate(currentPage - 1)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 rotate-180 pr-6  hover:scale-150 transition-transform duration-200 "
        disabled={currentPage === 1}
      >
        <img src={prevButtonImage} alt="Previous" className="h-12 w-16" />
      </button>
      <button
        onClick={() => paginate(currentPage + 1)}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-5 hover:scale-150 transition-transform duration-200 origin-right"
        disabled={currentPage === Math.ceil(roverPhotos.length / photosPerPage)}
      >
        <img src={nextButtonImage} alt="Next" className="h-12 w-16" />
      </button>
    </div>
  );
};

export default Rovers;
