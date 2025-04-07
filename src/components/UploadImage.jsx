import React, { useEffect, useState } from "react";

const UploadImage = ({
  heading = "Cover Image",
  image,
  instructionText = "Click to upload",
  spanText = " or drag and drop",
  fileSize = "25 MB",
  onUpload,
  file,
  id,
}) => {
  const [previewURL, setPreviewURL] = useState(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && onUpload) {
      onUpload(selectedFile);
      const url = URL.createObjectURL(selectedFile); 
      setPreviewURL(url);
    }
  };

  const renderPreview = () => {
    if (previewURL) {
      if (file?.type?.startsWith("image/")) {
        return <img src={previewURL} alt="preview" className="max-h-64" />;
      } else if (file?.type?.startsWith("video/")) {
        return <video src={previewURL} controls className="max-h-64" />;
      }
    }
    return <img src={image} alt="default" className="max-h-64" />;
  };


  return (
    <div className="py-4">
      <h1 className="text-xl text-black font-normal pb-2">{heading}</h1>
      <div className="flex flex-col p-7 items-center justify-center bg-secondary">
        <div>{renderPreview()}</div>
        <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row space-x-1">
        <div>
          
        </div>
        <label htmlFor={`uploadFile-${id}`} className="text-primary cursor-pointer m-0 p-0">
            {instructionText}
            <input
              id={`uploadFile-${id}`}
              style={{ visibility: "hidden" }}
              type="file"
              accept="image/*,video/*"
              onChange={handleChange}
            />
          </label>
          <span className="m-0 p-0">{spanText}</span>
        </div>
       
          <div className="flex justify-center">
            <h4>Max. file size: {fileSize}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;

