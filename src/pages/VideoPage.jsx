import React, { useState } from "react";
import VideoPageCard from "../components/VideoPageCard";
import UniversityPanelHeadings from "../components/UniversityPanelHeadings";
import AddVideoCard from "../components/AddVideoCard";

const VideoPage = () => {
  const [videoCards, setVideoCards] = useState([
    {
      id: 1,
      title: "",
      description: "",
      duration: { hours: "", minutes: "", seconds: "" },
      videoFile: null,
      thumbnail: null,
    },
  ]);

  const handleMore = () => {
    setVideoCards((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title: "",
        description: "",
        duration: { hours: "", minutes: "", seconds: "" },
        videoFile: null,
        thumbnail: null,
      },
    ]);
  };

  const handleCardChange = (id, updatedData) => {
    setVideoCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, ...updatedData } : card
      )
    );
  };

  const handleDeleteCard = (id) => {
    setVideoCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  return (
    <div className="bg-secondary min-h-screen p-4">
      <div className="grid grid-cols-1 gap-y-8 lg:gap-y-0 lg:grid-cols-[23%_73%] gap-x-8">
        <div>
          <VideoPageCard />
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-2xl">
          <UniversityPanelHeadings heading="Add Video" />

          {videoCards.map((card) => (
            <AddVideoCard
              key={card.id}
              data={card}
              onChange={(updatedData) => handleCardChange(card.id, updatedData)}
              onDelete={() => handleDeleteCard(card.id)} 
            />
          ))}

          <div className="flex justify-end space-x-4">
            <div>
              <button
                className="px-8 py-2 border border-primary text-2xl rounded-xl cursor-pointer"
                onClick={handleMore}
              >
                Add More
              </button>
            </div>
            <div>
              <button
                className="bg-primary text-white px-8 py-2 text-2xl rounded-xl cursor-pointer"
              >
                Add Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;


