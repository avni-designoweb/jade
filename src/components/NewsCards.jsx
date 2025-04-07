import React from "react";

const NewsCards = ({image}) => {
  return (
    <div className="bg-white rounded-xl flex flex-col ">
      <img src={image} className="object-cover w-full h-auto" alt="News 2" />
      <div className="p-4">
        <h1 className="text-black font-semibold">
          Better living and social environments for students linked to better
          mental health 
        </h1>
        <p className="text-gray-500 mt-2">
          The Class Foundation’s European Student Living Monitor 2024 (SLM)
          report has been released, and a key finding from the survey is that
          many international students report mental health struggles and
          loneliness, and that well-designed/well-planned student housing can
          play an important role in mitigating that.
        </p>
      </div>
    </div>
  );
};

export default NewsCards;
