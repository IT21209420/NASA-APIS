import { useEffect, useState } from "react";
import NASADataService from "../../services/NASADataService.js";
import Card from "../../components/Card.jsx";

const Rovers = () => {
  const [roverPhotos, setRoverPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 6;

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const photos = await NASADataService.getRoverPhotos();
      setRoverPhotos(photos);
    };
    fetchRoverPhotos();
  }, []);

  // Get current photos
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = roverPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-4">Rover Photos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentPhotos.map((photo) => (
          <Card key={photo.id} photo={photo} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {[...Array(Math.ceil(roverPhotos.length / photosPerPage)).keys()].map(
          (number) => (
            <button
              onClick={() => paginate(number + 1)}
              className="mx-1 px-3 py-1 border rounded-md bg-blue-500 text-white"
            >
              {number + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Rovers;
