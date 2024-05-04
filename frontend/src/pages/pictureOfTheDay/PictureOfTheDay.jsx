import React from "react";
import NASADataService from "../../services/NASADataService";

const PictureOfTheDay = () => {
  const [pictureOfTheDay, setPictureOfTheDay] = React.useState({});

  React.useEffect(() => {
    const fetchPictureOfTheDay = async () => {
      const picture = await NASADataService.getPictureOfTheDay();
      setPictureOfTheDay(picture);
    };
    fetchPictureOfTheDay();
  }, []);

  return (
    <div
      className="px-4 py-2
      bg-dominant
      h-screen"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 mt-6 flex flex-col items-center bg-opacity-60">
        <h1 className="text-2xl font-bold text-black mb-4">
          Picture of the Day
        </h1>
        <img
          src={pictureOfTheDay.url}
          alt={pictureOfTheDay.title}
          className="w-64  rounded-lg mb-4"
        />
        <h2 className="text-xl font-bold text-black mb-2">
          {pictureOfTheDay.title}
        </h2>
        <p className="text-black">{pictureOfTheDay.explanation}</p>
      </div>
    </div>
  );
};

export default PictureOfTheDay;
