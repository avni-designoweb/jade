import React from "react";

const Scholarship = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="text-2xl text-black font-semibold">Add Scholarships</div>
      <div className="py-4">
        <form>
          <div className="flex flex-col space-y-4 ">
            <input
              type="text"
              placeholder="Heading"
              className="bg-secondary p-4 text-gray-400"
            />
            <textarea
              rows="7"
              placeholder="Description"
              className="bg-secondary p-4 text-gray-400"
            ></textarea>
          </div>
        </form>
      </div>
      <div className="flex space-x-4 p-4 justify-end">
        <button className="border border-primary text-primary rounded-lg py-2 px-4">
          Add More Scholarship
        </button>
        <button className="border border-primary bg-primary text-white rounded-lg py-2 px-8">
          Save
        </button>
      </div>
    </div>
  );
};

export default Scholarship;
