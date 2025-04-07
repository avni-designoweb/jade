import React from "react";

const LabelInput = ({ labelname = "", placeholder = "", inputClassName="" }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-xl text-black font-normal">{labelname}</label>
      <input
        placeholder={placeholder}
        className={`bg-secondary p-2 ${inputClassName}`}
      />
    </div>
  );
};

export default LabelInput;
