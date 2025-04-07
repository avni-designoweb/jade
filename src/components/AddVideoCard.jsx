import React from "react";
import LabelInput from "../components/LabelInput";
import UploadImage from "../components/UploadImage";
import upload from "../assets/upload.png";
import HeadingTextarea from "../components/HeadingTextarea";

const AddVideoCard = ({ data, onChange,  onDelete }) => {
  const handleTitleChange = (e) => onChange({ title: e.target.value });
  const handleDescriptionChange = (e) => onChange({ description: e.target.value });

  const handleDurationChange = (e, type) => {
    onChange({ duration: { ...data.duration, [type]: e.target.value } });
  };

  const handleVideoUpload = (file) => onChange({ videoFile: file });
  const handleThumbnailUpload = (file) => onChange({ thumbnail: file });

  return (
    <div className="relative p-4">
        <button
        onClick={onDelete}
        className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm"
      >
        Delete
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-4">
        <div>
          <LabelInput
            labelname="Video Title"
            placeholder="Enter Video Title"
            inputClassName="h-[53px]"
            value={data.title}
            onChange={handleTitleChange}
          />
          <UploadImage
            image={upload}
            heading="Video"
            onUpload={handleVideoUpload}
            file={data.videoFile}
            id={`video-${data.id}`}
          />
          <HeadingTextarea
            value={data.description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div>
          <h3 className="text-xl pb-2">Video Duration</h3>
          <div className="grid grid-cols-3 place-content-start">
            <input
              className="bg-secondary w-[60px] lg:w-[143px] h-[53px] text-gray-500 p-2"
              placeholder="Hours"
              value={data.duration.hours}
              onChange={(e) => handleDurationChange(e, "hours")}
            />
            <input
              className="bg-secondary w-[60px] lg:w-[143px] h-[53px] text-gray-500 p-2"
              placeholder="Minutes"
              value={data.duration.minutes}
              onChange={(e) => handleDurationChange(e, "minutes")}
            />
            <input
              className="bg-secondary w-[60px] lg:w-[143px] h-[53px] text-gray-500 p-2"
              placeholder="Seconds"
              value={data.duration.seconds}
              onChange={(e) => handleDurationChange(e, "seconds")}
            />
          </div>
          <UploadImage
            image={upload}
            heading="Video Thumbnail"
            onUpload={handleThumbnailUpload}
            file={data.thumbnail}
            id={`thumbnail-${data.id}`}
          />
        </div>
      </div>
    </div>
  );
};

export default AddVideoCard;

