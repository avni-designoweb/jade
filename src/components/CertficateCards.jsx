import React from "react";

const CertficateCards = ({
  image1,
  image2,
  heading1 = "Program Introduction to AUB & its Programmes",
  paragraph = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididun"}
) => {
  return (
    <div className=" bg-white rounded-xl shadow-md p-4">
      <div className="relative ">
        <img src={image1} alt="Certificate" className="w-300 " />
        <div className="absolute bottom-[-36px] right-0 ">
          <img src={image2} alt="Medals" />
        </div>
      </div>
      <div className="mt-12 ">
        <h1 className="text-black font-semibold text-2xl">{heading1}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default CertficateCards;
