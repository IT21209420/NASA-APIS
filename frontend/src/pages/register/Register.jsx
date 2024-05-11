import { useContext, useState } from "react";
import BackgroundVideo from "../../components/BackgroundVideo";
import bgVideo from "../../assets/video-login.mp4";
import AuthContext from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

/**
 * Register component for signing up for an account.
 * @returns {JSX.Element} The Register component.
 */
const Register = () => {
  // State for the email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Get the registerUser function from the AuthContext
  const { registerUser } = useContext(AuthContext);

  // Function to handle the click event
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser({ email, password });
  };

  return (
    <BackgroundVideo url={bgVideo}>
      <div className="flex justify-center items-center  h-screen">
        <div className="max-w-md w-full space-y-8 border p-10  rounded-lg shadow-lg bg-opacity-60 backdrop-filter backdrop-blur-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
              Sign up for an account
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm  ">
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-dominant focus:border-dominant focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
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
              <div className="text-sm">
                <a
                  href="/login"
                  className="font-medium text-white hover:text-dominant"
                >
                  Already have an account? Login
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={(e) => handleSubmit(e)}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </BackgroundVideo>
  );
};

export default Register;
