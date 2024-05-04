import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // import the logo

const Header = () => {
  return (
    <div className="font-orbitron h-16">
      <header className="bg-secondary px-4 flex justify-between items-center ">
        <Link to="/home" className="text-white text-lg font-bold">
          <img src={logo} alt="Logo" className="h-16 " />
        </Link>
        <div className="flex items-center">
          <Link to="/login" className="text-white mr-4">
            Login
          </Link>
          <Link to="/logout" className="text-white">
            Logout
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
