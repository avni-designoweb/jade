import React from "react";

const ButtonPrimary = ({btnText="Save", btnClass=""}) => {
  return (
    <button
      className={`bg-primary text-white py-2 rounded-lg ${btnClass}`}
    >
      {btnText}
    </button>
  );
};

export default ButtonPrimary;
