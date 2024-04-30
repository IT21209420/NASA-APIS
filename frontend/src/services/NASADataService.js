import axios from "axios";

const API_KEY = "oEoICSGSIoxJa7t8Yc58SvLz0O4BApQhDipfTmDf";
const NASADataService = {
  getRoverPhotos: async (page = 1) => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=${API_KEY}`
      );
      console.log("Rover photos response:", response);
      return response.data.photos;
    } catch (error) {
      console.error("Error fetching rover photos:", error);
      return [];
    }
  },
};

export default NASADataService;
