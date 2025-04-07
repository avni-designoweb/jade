import React from 'react';
import { Search, EllipsisVertical, Plus, ChevronsUpDown } from 'lucide-react';

const GuidelinesNavbar = ({heading="",file,add,search}) => {
  
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
    <div>
      <h1 className="text-xl font-semibold text-black">
        {heading}
      </h1>
    </div>
    <div className="flex items-center  space-x-0 md:space-x-2">
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="search"
          className="bg-secondary p-2 rounded-2xl "
          onChange={search}
        />
        <Search className="absolute right-3 text-gray-400" />
      </div>
      <div className="text-gray-400">
        <EllipsisVertical onClick={file} />
      </div>
      <div className="text-gray-400">
        <Plus onClick={add} />
      </div>
      <div>
        <ChevronsUpDown />
      </div>
    </div>
  </div>
  )
}

export default GuidelinesNavbar