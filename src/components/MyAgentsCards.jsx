import React from "react";
import agent_1 from '../assets/agent_1.png';

const MyAgentsCards = () => {
  return (
    <div className="relative bg-white shadow rounded-xl p-4 flex flex-col items-center text-center space-y-2">
      <img
        src={agent_1}
        alt="Agency Logo"
        className="h-16 w-16  absolute top-[-32px] "
      />
      <h2 className="text-black font-semibold text-2xl pt-4">
        Veritas Mundi Education
      </h2>
      <p className="text-sm text-black">veritasmundi@gmail.com</p>
      <div className="flex items-center gap-1">
        <span className="text-sm text-black">4 Certificates</span>
      </div>
    </div>
  );
};

export default MyAgentsCards;
