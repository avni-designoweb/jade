import React from "react";
import error from "../assets/error.png";

const ErrorPage = () => {
  return (
    <div className="bg-secondary flex flex-col space-y-4 justify-center items-center min-h-screen">
      <div>
        <img src={error}></img>
      </div>
      <div>
        <h3 className="text-4xl text-black font-semibold">
          Oops! Something Went Wrong
        </h3>
      </div>
      <div>
        <h4 className="text-base text-gray-600">
          We couldn’t load the screen. Please try again or go back to the home
          page
        </h4>
      </div>
      <div className="flex space-x-4">
        <button className="bg-btn px-8 py-2 text-black font-semibold rounded-lg cursor-pointer">
          Retry
        </button>
        <button className="bg-primary px-8 py-2 text-white font-semibold rounded-lg cursor-pointer">
          Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
