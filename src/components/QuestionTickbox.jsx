import React,{useState} from "react";
import { X } from "lucide-react";

const QuestionTickbox = () => {
   const options = ["Option 1", "Option 2", "Option 3"];
  
    const [opt, setOpt] = useState(options.slice(0, 1));
  
    const handleAdd = () => {
      if (opt.length < 3) {
        setOpt(options.slice(0, opt.length + 1));
      }
    };
  
    const handleRemove = () => {
      if (opt.length > 1) {
        setOpt(options.slice(0, opt.length - 1));
      }
    };
  
  return (
    <div className="p-4">
    {opt.map((option, idx) => (
      <div className="flex justify-between space-x-2 py-1" key={idx}>
        <div className="flex space-x-4">
          <input type="checkbox" />
          <label className="text-base font-medium text-gray-200">
            {option}
          </label>
        </div>

        <div className="flex items-center space-x-4">
          {opt.length < 3 && (
            <button onClick={handleAdd} className="text-xl text-primary">
              Add More
            </button>
          )}
          {(opt.length > 1  && idx === opt.length-1 ) && (
            <X onClick={handleRemove} />
          )}
        </div>
      </div>
    ))}
  </div>
  );
};

export default QuestionTickbox;
