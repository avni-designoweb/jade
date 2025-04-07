import React, { useState } from "react";
import LabelInput from "../components/LabelInput";
import QuestionDescription from "./QuestionDescription";
import QuestionMultipleChoice from "./QuestionMultipleChoice";
import QuestionTickbox from "./QuestionTickbox";

const Question = ({id, questionNumber, answerOption}) => {
  const [answerType, setAnswerType] = useState("");
  // const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div>
        <LabelInput
          // labelname="Add Question 1"
          labelname={`Add Question ${id}`}
          placeholder="Enter Question"
          inputClassName="text-black font-normal placeholder:text-black"
          value={questionNumber}
        />
      </div>
      <div className="flex flex-col space-y-2 ">
        <label className="text-xl text-black font-normal" value={answerType}>
          Answer Input Type
        </label>
        <select
          className="bg-secondary  border border-none p-2 rounded w-full"
          value={answerType}
          onChange={(e) => setAnswerType(e.target.value)}>
          <option value="">Select Type</option>
          <option value="Description">Description</option>
          <option value="MultipleChoice">Multiple Choices</option>
          <option value="TickBox">Tick Boxes</option>
        </select>
      </div>

      {answerType === "Description" && (
        <div>
          <QuestionDescription answerOption={answerOption}/>
        </div>
      )}

      {answerType === "MultipleChoice" && (
        <div>
          <QuestionMultipleChoice answerOption={answerOption}/>
        </div>
      )}

      {answerType === "TickBox" && (
        <div>
          <QuestionTickbox answerOption={answerOption}/>
        </div>
      )}
    </div>
  );
};

export default Question;
