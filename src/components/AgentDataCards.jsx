import React from "react";

const AgentDataCards = ({image,heading="Active Agents",data="287", classname="" , headingclass="", dataclass="", divclass=""}) => {
  return (
    <div className={`flex items-center gap-4  ${classname}`}>
      <img
        src={image}
        alt="Group"
        className="w-[91px] h-[91px] bg-white p-4 rounded-full"
      />
      <div className={`${divclass}`}>
        <h1 className={`text-lg font-semibold ${headingclass}`}>{heading}</h1>
        <h1 className={`text-5xl font-bold ${dataclass}`}>{data}</h1>
      </div>
    </div>
  );
};

export default AgentDataCards;