import React from "react";

const QuestionDescription = ({ questionText }) => {
  return (
    <div className=" flex flex-col space-y-4">
      {/* <h1 className="text-black font-semibold p-2 bg-secondary w-[484px]">
        {questionText}
      </h1> */}
      <textarea
      rows={5}
      cols={20}
        className="bg-secondary p-2"
        placeholder="Enter Your Answer"
      ></textarea>
    </div>
  );
};

export default QuestionDescription;
