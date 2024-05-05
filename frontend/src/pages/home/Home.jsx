import { Link } from "react-router-dom";
import roverHome from "../../assets/rover-home.jpg";
import podHome from "../../assets/pod-home.jpg";
import earthHome from "../../assets/earth-home.jpg";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import BackgroundVideo from "../../components/BackgroundVideo";
import bgVideo from "../../assets/video-home.mp4";

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
    <BackgroundVideo url={bgVideo}>
      <div className="px-4 py-2 text-white mt-10">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          <Link
            to="/rovers"
            className="border rounded-md p-4 text-center  bg-opacity-60 backdrop-filter backdrop-blur-lg"
          >
            <img
              src={roverHome}
              alt="Rover"
              className="w-full h-64 object-cover mb-4"
            />
            <h2 className="font-bold">Rovers</h2>
            <p className="text-sm">
              Explore the Red Planet through the lens of NASA’s rovers. Each
              image offers a glimpse into the Martian landscape, revealing the
              beauty and mystery of our celestial neighbor
            </p>
          </Link>
          <Link
            to="/picture_of_the_day"
            className="border rounded-md p-4 text-center  bg-opacity-60 backdrop-filter backdrop-blur-lg"
          >
            <img
              src={podHome}
              alt="Picture of the Day"
              className="w-full h-64 object-cover mb-4"
            />
            <h2 className="font-bold">Picture of the Day</h2>
            <p className="text-sm">
              Discover the cosmos with NASA’s Picture of the Day. Each day
              unveils a new celestial wonder, accompanied by insights from
              professional astronomers, capturing the awe-inspiring beauty of
              the universe.
            </p>
          </Link>
          <Link
            to="/earth_imagery"
            className="border rounded-md p-4 text-center  bg-opacity-60 backdrop-filter backdrop-blur-lg"
          >
            <img
              src={earthHome}
              alt="Earth Imagery"
              className="w-full h-64 object-cover mb-4"
            />
            <h2 className="font-bold">Earth Imagery</h2>
            <p className="text-sm">
              Embark on a virtual journey with NASA Earth Imagery. Witness the
              dynamic beauty of our planet from space, capturing changes over
              time and the diverse tapestry of landscapes that make up our
              world.
            </p>
          </Link>
        </div>
      </div>
    </BackgroundVideo>
  );
};

export default Home;
