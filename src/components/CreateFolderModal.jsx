import React from "react";
import { X } from "lucide-react";
import folderopen from "../assets/folderopen.png";

const CreateFolderModal = React.memo(({ onClose }) => {
 
  return(
  <div className="fixed inset-0 backdrop-blur-sm backdrop-opacity-70 flex justify-center items-center w-full h-full">
    
    <div className="bg-white w-[30%] p-4">
      <div className="flex justify-between items-center p-4">
        <div className="text-3xl font-semibold text-black">Create Folder</div>
        <div onClick={onClose}>
          <X />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={folderopen} className="bg-back p-4 rounded-full" alt="Folder" />
      </div>
      <div className="flex flex-col p-4">
        <label className="p-4">Enter Folder's Name</label>
        <input placeholder="Enter Name" className="bg-secondary p-4" />
      </div>
      <div className="flex justify-end items-center py-2">
        <button className="bg-primary text-white text-xl px-4 py-2 rounded-lg cursor-pointer">
          Create Folder
        </button>
      </div>
    </div>
  </div>
  )
});

export default CreateFolderModal;
