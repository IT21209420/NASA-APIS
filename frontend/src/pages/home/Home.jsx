
import { Link } from "react-router-dom";

const Home = () => {
 
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <Link to="/rovers" className="border rounded-md p-4 text-center">
        <h2 className="font-bold">Rovers</h2>
        <p>View rover photos</p>
      </Link>
      <Link
        to="/picture_of_the_day"
        className="border rounded-md p-4 text-center"
      >
        <h2 className="font-bold">Picture of the Day</h2>
        <p>View the picture of the day</p>
      </Link>
      <Link to="/earth_imagery" className="border rounded-md p-4 text-center">
        <h2 className="font-bold">Earth Imagery</h2>
        <p>View earth imagery</p>
      </Link>     
    </div>
  );
};

export default Home;
