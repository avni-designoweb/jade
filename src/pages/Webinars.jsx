import React from "react";
import upload from "../assets/upload.png";
import UploadImage from "../components/UploadImage";
import LabelInput from "../components/LabelInput";
import ButtonPrimary from "../components/ButtonPrimary";

const Webinars = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg">
      <div className="text-black text-2xl font-semibold pb-4">Webinars</div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4">
        <div>
          <LabelInput labelname="Webinar name" />
          <UploadImage image={upload} />
        </div>
        <div>
          <LabelInput labelname="Description" />
          <UploadImage image={upload} />
          <div className="flex justify-end">
            <ButtonPrimary btnClass="px-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webinars;
