import React from "react";
import { X } from "lucide-react";
import upload from "../assets/upload.png";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm backdrop-opacity-50 backdrop-brightness-0 flex justify-center items-center w-full h-full">
      <div className="bg-white w-[50%] p-4">
        <div className="flex justify-between items-center p-4 ">
          <div className="text-3xl font-semibold text-black">Add Agents</div>
          <div onClick={onClose}>
            <X />
          </div>
        </div>
        <div className="flex items-center space-x-4 p-4">
          <button className="bg-primary text-white p-2 rounded-2xl">
            Upload File
          </button>
          <h1 className="text-xl text-black font-semibold">Enter Email</h1>
        </div>
        <div className="flex flex-col p-8 bg-secondary items-center justify-center">
          <div>
            <img src={upload}></img>
          </div>
          <div>
            <h1 className="text-xl text-gray-700">
              <span className="text-primary text-xl">Click to upload </span>
              or drag or drop
            </h1>
          </div>
          <div>
            <h3 className="text-red-400">CSV or excel file format only*</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
