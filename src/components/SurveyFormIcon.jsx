import React from "react";
import googleforms from "../assets/googleforms.png";

const SurveyFormIcon = ({ number }) => {
  return (
    <div>
      <img src={googleforms} alt={`Survey ${number}`} />
      <h1 className="text-black font-semibold hover:text-primary cursor-pointer">
        Survey {number}
      </h1>
    </div>
  );
};

export default SurveyFormIcon;
