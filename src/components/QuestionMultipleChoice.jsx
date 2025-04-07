import { X } from "lucide-react";
import React, { useState } from "react";

const QuestionMultipleChoice = () => {
  // const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

  // const [opt, setOpt] = useState(options.slice(0, 2));

  // const handleAdd = () => {
  //   if (opt.length < 5) {
  //     setOpt(options.slice(0, opt.length + 1));
  //   }
  // };

  // const handleRemove = () => {
  //   if (opt.length > 1) {
  //     setOpt(options.slice(0, opt.length - 1));
  //   }
  // };

  const [opt,setOpt] = useState(["Option 1","Option 2"]);

  const handleAdd = () =>{
    if(opt.length <5){
      setOpt([...opt,`Option ${opt.length+1}`])
    }
  }

  const handleRemove =(idx)=>{
    if(opt.length > 1){
      setOpt(opt.filter((_,i)=> i !== idx));
    }
  }

  const handleChange = (idx, value) => {
    const newOptions = [...opt];
    newOptions[idx] = value; 
    setOpt(newOptions);
  };


  return (
    <div className="p-4">
      {/* <h1 className="text-black font-semibold p-2 bg-secondary">{questionText}</h1> */}
      {opt.map((option, idx) => (
        <div className="flex justify-between space-x-2 py-1" key={idx}>
          <div className="flex space-x-4">
            <input type="radio" />
            {/* <label className="text-base font-medium text-gray-500">
              {option}
            </label> */}
            <input
              type="text"
              value={option}
              onChange={(e) => handleChange(idx, e.target.value)}
              className="border-b-2 border-gray-300 focus:outline-none focus:border-primary text-gray-500 w-[300px]"
            />

          </div>

          <div className="flex items-center space-x-4">
            {opt.length < 5 && (
              <button onClick={handleAdd} className="text-xl text-primary">
                Add More
              </button>
            )}
            {(opt.length > 1  && idx === opt.length-1 ) && (
              <X onClick={()=>handleRemove(idx)} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionMultipleChoice;
