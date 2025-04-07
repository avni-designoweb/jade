import React from "react";

const SurveyQuestion = ({ questionText, options = [] }) => {
  return (
    <div className="p-4">
      <h1 className="text-black font-semibold py-1">{questionText}</h1>
      {options.map((option, idx) => (
        <div className="flex space-x-4 py-1" key={idx}>
          <input type="radio" name={questionText} />
          <label className="text-md font-medium text-gray-500">{option}</label>
        </div>
      ))}
    </div>
  );
};

export default SurveyQuestion;
