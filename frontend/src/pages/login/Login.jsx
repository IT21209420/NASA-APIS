import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import bgVideo from "../../assets/video-login.mp4";
import AuthContext from "../../context/AuthContext";
import bgExplore from "../../assets/video-explore.mp4";
import poster from "../../assets/black_image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
/**
 * Login component for user authentication.
 *
 * @component
 * @example
 * return (
 *   <Login />
 * )
 */
const Login = () => {
  // State for the email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Get the loginUser function from the AuthContext
  const { loginUser } = useContext(AuthContext);

  // State for showing the background video
  const [showBackground, setShowBackground] = useState(true);

  // State for showing the login form
  const [showLogin, setShowLogin] = useState(false);

  const [disableExplore, setDisableExplore] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  // Function to handle the click event
  const handleClick = () => {
    setDisableExplore(true);
    setShowBackground(true);

    setTimeout(() => {
      setShowBackground(false);
      setTimeout(() => {
        setShowLogin(true);
      }, 2000);
    }, 2000);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Function to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser({ email, password });
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 
    `}
    >
      {!showBackground && (
        <div>
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            poster={poster}
          >
            <source src={bgVideo} type="video/mp4" />
            {/* Add additional source elements for different video formats */}
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="max-w-md w-full space-y-8 border p-10  rounded-lg shadow-lg bg-opacity-60 backdrop-filter backdrop-blur-lg">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                Sign in to your account
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"} // Change type based on state
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 mt-5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      onClick={handleShowPassword}
                      className="h-6 w-6 text-indigo-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-500 focus:ring-indigo-400 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-300"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-100 hover:text-indigo-400"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className="text-sm flex  justify-center">
                <Link
                  to="/register"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Create an account
                </Link>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {!showLogin && (
        <div>
          <video
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000  ${
              showBackground ? "opacity-100 " : "opacity-0 bg-none"
            }`}
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline
            poster={poster}
          >
            <source src={bgExplore} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!disableExplore && (
            <button
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity backdrop-filter backdrop-blur border  border-white text-white  p-5 rounded-lg transition-opacity duration-1000 ${
                showBackground ? "opacity-100" : "opacity-0 "
              }`}
              onClick={handleClick}
              disabled={disableExplore}
            >
              Explore
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
