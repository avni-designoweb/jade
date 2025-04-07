import React from "react";
import SurveyFormIcon from "../components/SurveyFormIcon";
import SurveyQuestion from "../components/SurveyQuestion";
import SurveyTextResponse from "../components/SurveyTextResponse";

const surveys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const SurveyForm = () => {
  const options = ["Amazing", "Good", "Average", "Poor", "Extremely Poor"];

  return (
    <div className="bg-secondary min-h-screen">

      <div className="p-4">
        <div className="text-black text-2xl font-semibold">
          Compliance Guidelines
        </div>

        <div className="flex flex-wrap space-x-8 py-4">
          {surveys.map((num) => (
            <SurveyFormIcon key={num} number={num} />
          ))}
        </div>

        <div className="bg-white p-4 rounded-xl shadow-2xl">
          <div className="text-black text-2xl font-semibold px-4">Survey 1</div>

          <SurveyQuestion
            questionText="1. How would you rate the management?"
            options={options}
          />
          <SurveyQuestion
            questionText="2. How often do you visit our university?"
            options={options}
          />
          <SurveyQuestion
            questionText="3. How would you rate the management?"
            options={options}
          />

          <SurveyTextResponse
            questionText="4. Tell us about your experience with university"
            responseText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..."
          />

          <div className="flex justify-end p-4">
            <button className="bg-primary text-white px-12 py-2 rounded-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyForm;
