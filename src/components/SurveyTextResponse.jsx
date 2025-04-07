import React from "react";

const SurveyTextResponse = ({ questionText, responseText }) => {
  return (
    <div className="p-4">
      <div className="py-4">
        <h1 className="text-black font-semibold py-1">{questionText}</h1>
      </div>
      <div className="bg-secondary w-[70%] p-4 rounded-md">
        <p>{responseText}</p>
      </div>
    </div>
  );
};

export default SurveyTextResponse;
