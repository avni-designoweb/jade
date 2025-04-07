import React from "react";

const HeadingTextarea = ({title="Description"}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-xl text-black font-normal">{title}</label>
      <textarea
        placeholder="Enter Description"
        rows="6"
        className="bg-secondary p-2 "
      ></textarea>
    </div>
  );
};

export default HeadingTextarea;
