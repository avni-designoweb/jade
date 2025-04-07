import React from "react";

const UniversityPageComponent = () => {
  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow-md">
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
    </div>
  );
};

export default UniversityPageComponent;
