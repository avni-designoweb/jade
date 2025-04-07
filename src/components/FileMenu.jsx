import React from "react";
import { Trash2, Pencil } from "lucide-react";

const FileMenu = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="absolute flex flex-col bg-primary rounded-2xl shadow-2xl text-lg text-black p-4 space-y-2"
    >
      <a href="#" className="cursor-pointer flex">
        <span className="px-2">
          <Trash2 />
        </span>
        Delete
      </a>
      <a href="#" className="cursor-pointer flex">
        <span className="px-2">
          <Pencil />
        </span>
        Edit
      </a>
    </div>
  );
});

export default FileMenu;
