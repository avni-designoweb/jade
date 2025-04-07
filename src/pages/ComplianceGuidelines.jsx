import React from "react";
import Navbar from "../components/Navbar";
import download_y from "../assets/download_y.png";
import { Download } from "lucide-react";

const brochures = Array(13).fill({
  title: "Presentation",
  files: "32 Files",
});

const ComplianceGuidelines = () => {
  return (
    <div className="bg-secondary min-h-screen">
      {/* <Navbar /> */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="text-black text-2xl font-semibold">
            Compliance Guidelines
          </div>
          <div className="flex space-x-0 md:space-x-2 items-center">
            <div className="p-4">
              <button className="bg-primary rounded-4xl text-white px-4 py-2 w-28 md:w-auto">
                Take Survey
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Header 1</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.orem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.orem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-green-600 mb-4">
            Download Brochures
          </h2>
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4">
              {brochures.map((brochure, index) => (
                <div key={index} className="flex flex-col">
                  <div>
                    <img src={download_y}></img>
                  </div>
                  <p className="font-semibold mt-2 text-sm">{brochure.title}</p>
                  <p className="text-gray-500 text-xs">{brochure.files}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceGuidelines;
