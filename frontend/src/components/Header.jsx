import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";
import bgNasa from "../assets/bg-nasa.png";

const Header = () => {
  const { toast } = useContext(ToastContext);
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="font-orbitron  bg-black">
      <header className=" px-4 flex justify-between items-center">
        <Link to="/home" className="text-white text-lg font-bold ">
          <img src={bgNasa} alt="Logo" className="h-20 " />
        </Link>
        <div className="flex items-center text-white ">
          {user ? (
            <>
              <li
                className="nav-item  list-none"
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
