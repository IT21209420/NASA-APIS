import { useEffect, useState } from "react";
import NASADataService from "../../services/NASADataService.js";
import Card from "../../components/Card.jsx";

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
  }, []);

  // Get current photos
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = roverPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      className="px-4 py-8
    bg-dominant
    h-[88vh]
    bg-custom-bg bg-cover
    
    "
    >
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
          {currentPhotos.map((photo) => (
            <Card key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
      <button
        onClick={() => paginate(currentPage - 1)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-3 py-1 border rounded-md bg-blue-500 text-white"
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      <button
        onClick={() => paginate(currentPage + 1)}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-3 py-1 border rounded-md bg-blue-500 text-white"
        disabled={currentPage === Math.ceil(roverPhotos.length / photosPerPage)}
      >
        &gt;
      </button>
    </div>
  );
};

export default Rovers;
