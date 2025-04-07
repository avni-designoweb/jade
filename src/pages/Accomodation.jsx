import React from "react";
import upload from "../assets/upload.png";
import UploadImage from "../components/UploadImage";
import HeadingTextarea from "../components/HeadingTextarea";
import UniversityPanelHeadings from "../components/UniversityPanelHeadings";

const Accomodation = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg">
      <UniversityPanelHeadings heading="Add Accomodation Deatils" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <HeadingTextarea title="Description" />
          <HeadingTextarea title="More Details" />
        </div>
        <div>
          <UploadImage heading="Cover Image" image={upload} instructionText="Click to upload" spanText="or drag and drop" fileSize="25 MB"/>
          <UploadImage heading="More Images" image={upload} instructionText="Click to upload" spanText="or drag and drop" fileSize="25 MB"/>      
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-primary text-white py-2 px-8 rounded-lg">
          Save
        </button>
      </div>
    </div>
  );
};

export default Accomodation;
