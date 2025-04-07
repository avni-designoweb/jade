import React from "react";

const Sidebar = ({ activeTab, handleClick }) => {
  const tabs = [
    "UniversityMaterials",
    "Scholarship",
    "Webinars",
    "Certifications",
    "Accommodation",
    "UniversitySurvey",
    "Subscription",
  ];

  const tabLabels = {
    UniversityMaterials: "University Materials",
    Scholarship: "Scholarship",
    Webinars: "Webinars",
    Certifications: "Certifications",
    Accommodation: "Accommodation",
    UniversitySurvey: "University Survey",
    Subscription: "University Subscription",
  };

  return (
    <div className="bg-white mt-4 rounded-2xl shadow-2xl">
      <div className="font-semibold text-xl text-black">
        {tabs.map((tab) => (
          <h1
            key={tab}
            onClick={() => handleClick(tab)}
            className={`p-2 cursor-pointer ${
              activeTab === tab
                ? "bg-primary text-white rounded-lg p-2"
                : "hover:text-primary"
            }`}
          >
            {tabLabels[tab]}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
