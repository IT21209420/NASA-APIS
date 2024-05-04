import { Link } from "react-router-dom";
import roverHome from "../../assets/rover-home.jpg";
import podHome from "../../assets/pod-home.jpg";
import earthHome from "../../assets/earth-home.jpg";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img1 = new Image();
    const img2 = new Image();
    const img3 = new Image();

    img1.src = roverHome;
    img2.src = podHome;
    img3.src = earthHome;

    Promise.all([img1.decode(), img2.decode(), img3.decode()])
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      className="px-4 py-2
    bg-dominant
    h-[88vh] flex justify-center items-center"
    >
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Link to="/rovers" className="border rounded-md p-4 text-center">
          <img
            src={roverHome}
            alt="Rover"
            className="w-full h-64 object-cover mb-4"
          />
          <h2 className="font-bold">Rovers</h2>
          <p>View rover photos</p>
        </Link>
        <Link
          to="/picture_of_the_day"
          className="border rounded-md p-4 text-center"
        >
          <img
            src={podHome}
            alt="Picture of the Day"
            className="w-full h-64 object-cover mb-4"
          />
          <h2 className="font-bold">Picture of the Day</h2>
          <p>View the picture of the day</p>
        </Link>
        <Link to="/earth_imagery" className="border rounded-md p-4 text-center">
          <img
            src={earthHome}
            alt="Earth Imagery"
            className="w-full h-64 object-cover mb-4"
          />
          <h2 className="font-bold">Earth Imagery</h2>
          <p>View earth imagery</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
