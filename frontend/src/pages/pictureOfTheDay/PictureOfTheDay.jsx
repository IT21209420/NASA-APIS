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
      className="mx-auto px-4 py-8
    bg-dominant
    "
    >
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-white">Picture of the Day</h1>
        <img
          src={pictureOfTheDay.url}
          alt={pictureOfTheDay.title}
          className="w-full md:w-1/2 rounded-lg mt-4"
        />
        <h2 className="text-xl font-bold text-white mt-4">
          {pictureOfTheDay.title}
        </h2>
        <p className="text-white mt-4">{pictureOfTheDay.explanation}</p>
      </div>
    </div>
  );
};

export default PictureOfTheDay;
