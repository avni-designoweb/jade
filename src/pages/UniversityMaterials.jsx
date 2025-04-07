import React from "react";
import upload from "../assets/upload.png";
import UploadImage from "../components/UploadImage";
import ButtonPrimary from "../components/ButtonPrimary";

const UniversityMaterials = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg">
      <div className="text-black text-2xl font-semibold">
        University Materials
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
        <div>
          <form>
            <div className="flex flex-col p-4 space-y-3">
              <label className="text-xl text-black font-normal">
                Material Type
              </label>
              <select className="bg-secondary  border border-none p-2 rounded w-full">
                <option>University Guidelines</option>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="flex flex-col p-4 space-y-2">
              <label className="text-xl text-black font-normal">
                Description
              </label>
              <textarea
                placeholder="Enter Description"
                rows="5"
                className="bg-secondary p-2 "
              ></textarea>
            </div>
          </form>
        </div>
        <div className="flex flex-col justify-between pb-4 space-y-2">
          <div>
            <UploadImage image={upload} heading="Uplaod Material Files" />
          </div>
          <div className="flex justify-end ">
            <ButtonPrimary btnClass="px-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityMaterials;
