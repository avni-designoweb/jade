import React, { useState } from "react";
import MyAgentsCards from "../components/MyAgentsCards";
import SearchBar from "../components/SearchBar";
import Modal from "./Modal";

const MyAgents = () => {
  const [modal, setModal] = useState(false);
  const handleAdd = () => {
    setModal(true);
  };
  const handleClose = () => {
    setModal(false);
  };
  return (
    <div className="bg-secondary min-h-screen">
      <div className="p-4">
        <div className="flex  flex-col md:flex-row justify-between items-center">
          <div className="text-black text-2xl font-semibold">My Agents</div>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-2 items-center">
            <div>
              <SearchBar />
            </div>
            <div>
              <button className="bg-primary rounded-4xl text-white px-4 py-2 w-28 md:w-auto">
                + Connect Agent
              </button>
            </div>
            <div>
              <button
                className="bg-primary rounded-4xl text-white px-4 py-2 w-28 md:w-auto "
                onClick={handleAdd}
              >
                + Add Agent
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-6 p-4 ">
        <MyAgentsCards />
        <MyAgentsCards />
        <MyAgentsCards />
        <MyAgentsCards />
        <MyAgentsCards />
        <MyAgentsCards />
        <MyAgentsCards />
        <MyAgentsCards />
        <MyAgentsCards />
        <MyAgentsCards />
        <MyAgentsCards />
        <MyAgentsCards />
        <MyAgentsCards />
        <MyAgentsCards />
        <MyAgentsCards />
      </div>
      {modal && (
        <Modal onClose={handleClose} />)}
    </div>
  );
};

export default MyAgents;
