import React from "react";
import videopageimage from "../assets/videopageimage.png";

const VideoPageCard = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-2xl">
      <div>
        <img src={videopageimage} className="w-[306px] h-[180px]"></img>
      </div>
      <div>
        <h3 className="text-2xl font-semibold">
          Introduction to AUB & its Programmes
        </h3>
      </div>
      <div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default VideoPageCard;
