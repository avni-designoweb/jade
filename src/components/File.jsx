import React from 'react';
import upload from "../assets/upload.png";
import UploadImage from "../components/UploadImage";
import { X } from 'lucide-react';

const File = ({onClose}) => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm backdrop-opacity-70 backdrop-brightness-10 flex justify-center items-center w-full h-full">
    <div className="bg-white w-[40%] p-4">
      <div className="flex justify-between items-center p-4 ">
        <div className="text-3xl font-semibold text-black">
          Upload File
        </div>
        <div onClick={onClose}>
          <X />
        </div>
      </div>
      <UploadImage image={upload} />

      <div className="flex justify-end items-center py-2">
        <button className="bg-primary text-white text-xl px-4 py-2 rounded-lg cursor-pointer">
          Upload File
        </button>
      </div>
    </div>
  </div>
  )
}

export default File