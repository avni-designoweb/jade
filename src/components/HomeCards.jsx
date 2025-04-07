import React from "react";

const HomeCards = ({
  heading = "Scholarships",
  para = "Promote financial support by showcasing scholarship details,eligibility, and application processes.",
  btntext = "View Profile",
  image,
}) => {
  return (
    <div className="p-5 rounded-lg shadow-md w-full md:w-[49%] flex items-center justify-between">
      <div>
        <h1 className="text-lg font-bold">{heading}</h1>
        <p className="text-sm text-gray-600">{para}</p>
        <button className="bg-primary text-white px-4 py-2 rounded-full mt-4">
          {btntext}
        </button>
      </div>
      <img src={image} className="w-24 h-24 rounded" />
    </div>
  );
};

export default HomeCards;
