import { useState } from "react";
import PropertyList from "../propertyList/PropertyList";

// eslint-disable-next-line react/prop-types
export default function PropertySort({search}) {
  const [sortData,setSortData] = useState()
  console.log(search);

  const handleChange = (e) =>{
    setSortData(e)
  }

  return (
    <>
    <div className="flex justify-end mb-10">
      <div className="relative inline-block text-left w-52">
        <select onChange={(e) => handleChange(e.target.value)} className="block appearance-none w-full bg-white border border-gray-500 hover:border-gray-400 px-4 py-2 pr-8 rounded-md leading-tight focus:outline-none focus:shadow-outline">
          <option  value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
      </div>
    </div>
    <PropertyList sort={sortData} search={search}/>
    </>
  );
}

