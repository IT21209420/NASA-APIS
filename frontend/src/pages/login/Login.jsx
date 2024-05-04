import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgNasa from "../../assets/bg-nasa.png";
import bgAstro from "../../assets/bg-astronaut.png";
import bgRocket from "../../assets/bg-rocket.png";
import bgJupitor from "../../assets/bg-jupitor.png";
import BackgroundVideo from "../../components/BackgroundVideo";
import bgVideo from "../../assets/video-login.mp4";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showBackground, setShowBackground] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  const handleClick = () => {
    setShowBackground(true);

    setTimeout(() => {
      setShowBackground(false);
      setTimeout(() => {
        setShowLogin(true);
      }, 1000);
    }, 1000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 
    ${showBackground ? "overflow-hidden" : "overflow-auto"}`}
    >
      {!showBackground && (
        <div>
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
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
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 mt-5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
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
                    className="font-medium text-indigo-500 hover:text-indigo-400"
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
          <img
            src={bgJupitor}
            alt="Jupitor"
            className={`fixed bottom-30 left-40 object-cover transition-transform duration-1000 transform ${
              showBackground
                ? "translate-x-40 -translate-y-0"
                : "-translate-x-full translate-y-full"
            }`}
            style={{ zIndex: 40, height: 200 }}
          />
          <img
            src={bgRocket}
            alt="Rocket"
            className={`fixed right-60 top-0 object-cover transition-transform duration-1000 transform opacity-90 ${
              showBackground
                ? "translate-x-0 translate-y-0"
                : "translate-x-full -translate-y-full"
            }`}
            style={{ zIndex: 50, height: 200 }}
          />

          <img
            src={bgAstro}
            alt="Astronaut"
            className={`fixed right-0 bottom-20 object-cover transition-transform duration-1000 transform ${
              showBackground ? "-translate-x-20" : "translate-x-full"
            }`}
            style={{ zIndex: 30, height: 200 }}
          />

          <img
            src={bgNasa}
            alt="NASA"
            className={`fixed top-0 left-20  object-cover transition-transform duration-1000 transform ${
              showBackground
                ? "translate-x-0 translate-y-0"
                : "-translate-x-full -translate-y-full"
            }`}
            style={{ zIndex: 20, height: 250 }}
          />

          <Link
            onClick={handleClick}
            className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border rounded-md p-4 text-center bg-blue-500 text-white hover:bg-blue-600 transition-transform duration-200 ${
              showBackground ? "opacity-100" : "opacity-0 d-none"
            }`}
            style={{ zIndex: 20 }}
          >
            Explore
          </Link>
          <div
            className={`fixed top-0 left-0 w-full h-full bg-custom-bg bg-cover transition-opacity duration-1000 ${
              showBackground ? "opacity-100" : "opacity-0"
            }`}
            style={{ zIndex: 10 }}
          />
        </div>
      )}
    </div>
  );
};

export default Login;
