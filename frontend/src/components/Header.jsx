import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";
import bgNasa from "../assets/bg-nasa.png";

/**
 * Represents the header component of the application.
 * @component
 */
const Header = () => {
  // Get the toast function from the ToastContext
  const { toast } = useContext(ToastContext);

  // Get the user and setUser function from the AuthContext
  const { user, setUser } = useContext(AuthContext);

  // Get the navigate function from the useNavigate hook
  const navigate = useNavigate();

  //
  const location = useLocation();

  // State for the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="font-orbitron  bg-black">
      <header className=" px-4 flex justify-between items-center">
        <Link to="/home" className="text-white text-lg font-bold ">
          <img src={bgNasa} alt="Logo" className="h-20 " />
        </Link>
        <button
          className="text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 6a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm1 5a1 1 0 100 2h10a1 1 0 100-2H5z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "" : "hidden"
          } w-full  lg:flex-grow lg:flex lg:items-center lg:w-auto text-white justify-end `}
        >
          {user ? (
            <>
              <li
                className={`nav-item list-none px-6 py-1 hover:bg-white hover:text-black transition duration-300 ease-in-out
                ${location.pathname === "/home" ? "bg-white text-black" : ""}
                `}
              >
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li
                className={`nav-item list-none px-6 py-1 hover:bg-white hover:text-black transition duration-300 ease-in-out
                ${location.pathname === "/rovers" ? "bg-white text-black" : ""}
                `}
              >
                {/* Add the class bg-white text-black if the location.pathname is /rovers */}
                <Link to="/rovers" className="nav-link">
                  Rovers
                </Link>
              </li>

              <li
                className={`nav-item list-none px-6 py-1 hover:bg-white hover:text-black transition duration-300 ease-in-out
                ${
                  location.pathname === "/picture_of_the_day"
                    ? "bg-white text-black"
                    : ""
                }
                `}
              >
                {/* Add the class bg-white text-black if the location.pathname is /picture_of_the_day */}
                <Link to="/picture_of_the_day" className="nav-link">
                  Picture-of-the-Day
                </Link>
              </li>

              <li
                className={`nav-item list-none px-6 py-1 hover:bg-white hover:text-black transition duration-300 ease-in-out
                ${
                  location.pathname === "/earth_imagery"
                    ? "bg-white text-black"
                    : ""
                } 
                `}
              >
                {/* Add the class bg-white text-black if the location.pathname is /earth_imagery */}
                <Link to="/earth_imagery" className="nav-link">
                  Earth-Imaginery
                </Link>
              </li>

              <li
                className={`nav-item list-none px-6 py-1 hover:bg-white hover:text-black transition duration-300 ease-in-out
                ${location.pathname === "/about" ? "bg-white text-black" : ""}
                `}
              >
                {/* Add the class bg-white text-black if the location.pathname is /about */}
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>

              <li
                className="nav-item  list-none ml-5 "
                onClick={() => {
                  setUser(null);
                  localStorage.clear();
                  toast.success("Logged out successfully!");
                  navigate("/login", { replace: true });
                }}
              >
                <button
                  type="button"
                  className="btn border border-white rounded-sm px-4 py-1 hover:bg-white hover:text-black transition duration-300 ease-in-out"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item list-none">
                <button
                  type="button"
                  className="btn border border-white rounded-sm px-4 py-1 hover:bg-white hover:text-black transition duration-300 ease-in-out"
                >
                  onClick=
                  {() => {
                    navigate("/login");
                  }}
                  Login
                </button>
              </li>
              <li className="nav-item list-none">
                <button
                  type="button"
                  className="btn border border-white rounded-sm px-4 py-1 hover:bg-white hover:text-black transition duration-300 ease-in-out"
                >
                  onClick=
                  {() => {
                    navigate("/register");
                  }}
                  Register
                </button>
              </li>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
