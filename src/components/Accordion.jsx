import { Plus, Minus } from "lucide-react";
import React, { useState } from "react";

const Accordion = ({ title, text }) => {
  const [open, SetOpen] = useState(false);

  console.log(`Accordion : ${title}`)

  const handleToggle = () => {
    console.log("created")
    SetOpen(!open);
  };

  return (
    <div className="bg-secondary p-4">
      <div className="flex justify-between items-center text-xl">
        <div>
          <h4 className="text-lg">{title}</h4>
        </div>
        <div onClick={handleToggle}>{open ? <Minus /> : <Plus />}</div>
      </div>
      {open && (
        <div>
          <p className="text-gray-500 pt-4">{text}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
