import React from "react";
import BackgroundVideo from "../../components/BackgroundVideo";
import bgVideo from "../../assets/video-login.mp4";

const Register = () => {
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-dominant focus:border-dominant focus:z-10 sm:text-sm"
                  placeholder="Email address"
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-dominant focus:border-dominant focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-dominant hover:bg-pink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dominant"
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