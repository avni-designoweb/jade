import React from "react";

const SearchBar = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        className="bg-white rounded-4xl text-black px-4 py-2 w-40 md:w-auto"
      />
    </div>
  );
};

export default SearchBar;
