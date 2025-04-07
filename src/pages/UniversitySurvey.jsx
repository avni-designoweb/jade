import React, { useState } from "react";
import LabelInput from "../components/LabelInput";
import ButtonPrimary from "../components/ButtonPrimary";
import Question from "../components/Question";

const UniversitySurvey = () => {
  const [addQuestion, setAddQuestion] = useState([
    {
      id: 1,
      questionNumber: "",
      answerOption: "",
    },
  ]);

  const handleAdd = () => {
    setAddQuestion((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        questionNumber: "",
        answerOption: "",
      },
    ]);
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-lg">
      <div className="text-black text-2xl font-semibold">Survey Form</div>
      <div>
        <div className="flex flex-col p-4 space-y-2 w-[50%]">
          <LabelInput
            labelname="Add Form Name"
            placeholder="Form 1"
            inputClassName="text-black font-semibold placeholder:text-black"
          />
        </div>

        {addQuestion.map((que) => (
          <Question
            key={que.id}
            id={que.id}
            questionNumber={que.questionNumber}
            answerOption={que.answerOption}
          />
        ))}
        {/* <Question /> */}
        <div className="flex justify-end space-x-4">
        <button className="border border-primary text-lg text-primary px-8 py-2 rounded-xl" onClick={handleAdd}>Add Another Question</button>
          <ButtonPrimary btnClass="px-8" />
        </div>
      </div>
    </div>
  );
};

export default UniversitySurvey;
