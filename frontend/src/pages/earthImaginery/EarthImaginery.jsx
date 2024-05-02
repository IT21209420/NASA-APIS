import React from "react";
import NASADataService from "../../services/NASADataService";

const EarthImaginery = () => {
  const [earthImagery, setEarthImagery] = React.useState({});

  React.useEffect(() => {
    const fetchEarthImagery = async () => {
      const imagery = await NASADataService.getEarthImagery(
        -95.33,
        29.78,
        "2018-01-01"
      );
      setEarthImagery(imagery);
    };
    fetchEarthImagery();
  }, []);

  return (
    <div className="mx-auto px-4 py-8 bg-dominant">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-white">Earth Imagery</h1>
        <img
          src={earthImagery.url}
          alt="Earth Imagery"
          className="w-full md:w-1/2 rounded-lg mt-4"
        />
      </div>
    </div>
  );
};

export default EarthImaginery;
