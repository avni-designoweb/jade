import React from "react";
import university from "../assets/university.png";
import image_1 from "../assets/image_1.png";

const MyUniversitySideBar = ({ activeTab, handleClick , inputClass}) => {
  const tabs = [
    "UniversityMaterials",
    "Scholarship",
    "Webinars",
    "Certifications",
    "Accommodation",
    "UniversitySurvey",
    // "Subscription",
  ];

  const tabName = {
    UniversityMaterials: "University Materials",
    Scholarship: "Scholarship",
    Webinars: "Webinars",
    Certifications: "Certifications",
    Accommodation: "Accommodation",
    UniversitySurvey: "UniversitySurvey",
    // Subscription: "Subscription",
  };
  return (
    <div className={`${inputClass}`}>
      <div className=" bg-white p-4 rounded-lg shadow-md">
        <img
          src={university}
          alt="University"
          className="w-full h-40 object-cover rounded-md"
        />
        <div className="flex flex-row py-2 space-x-4 items-center">
          <div>
            <img src={image_1} alt="image" className="h-12 w-12" />
          </div>
          <div>
            <h1 className="font-semibold text-black">
              Arts University Bournemouth
            </h1>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Arts University Bournemouth offers specialized arts and media
          education, fostering creativity and practical skills for successful
          careers.
        </p>
      </div>

      <div className="bg-white mt-4 rounded-2xl shadow-2xl">
        <div className="font-semibold text-xl text-black">
          {tabs.map((tab) => (
            <h1
              key={tab}
              onClick={() => handleClick(tab)}
              className={` p-2 cursor-pointer ${
                activeTab === tab
                  ? "bg-primary text-white rounded-lg p-2"
                  : "hover:text-primary"
              }`}
            >
              {tabName[tab]}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyUniversitySideBar;
