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

  getPictureOfTheDay: async () => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
      );
      console.log("Picture of the day response:", response);
      return response.data;
    } catch (error) {
      console.error("Error fetching picture of the day:", error);
      return {};
    }
  },
  
  getEarthImagery: async (lat, lon, date) => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/earth/assets/?lon=${lon}&lat=${lat}&date=${date}&dim=0.15&api_key=${API_KEY}`
      );
      console.log("Earth imagery response:", response);
      return response.data;
    } catch (error) {
      console.error("Error fetching earth imagery:", error);
      return {};
    }
  },
};

export default NASADataService;
