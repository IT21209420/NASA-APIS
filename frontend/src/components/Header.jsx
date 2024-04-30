import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="font-orbitron">
      <header className="bg-blue-500 p-4 flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          <img src="/path/to/logo.png" alt="Logo" className="h-8 w-auto" /> Logo
        </Link>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="mr-4 p-2 rounded-md"
          />
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
