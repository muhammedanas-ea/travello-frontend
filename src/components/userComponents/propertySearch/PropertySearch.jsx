import { Button } from "@material-tailwind/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./PropertySearch.css";
import { useState } from "react";

export default function PropertySearch() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  return (
    <div className="grid grid-cols-4 gap-3 items-center w-full h-[80px] rounded-md bg-[#fcfbfb] box-shadow  my-6">
      <div className="h-[45px] ml-4 rounded-md  bg-gray-100 border border-gray-700  flex items-center">
        <DatePicker
          selected={checkInDate}
          onChange={(date) => setCheckInDate(date)}
          placeholderText="Check In"
          className="w-full h-[45px] bg-transparent  outline-none px-4"
        />
      </div>

      <div className="h-[45px] rounded-md bg-gray-100 border border-gray-700 flex items-center">
        <DatePicker
          selected={checkOutDate}
          onChange={(date) => setCheckOutDate(date)}
          placeholderText="Check Out"
          className="w-full bg-transparent outline-none px-4"
        />
      </div>
      <div className="h-[45px]  rounded-md bg-gray-100 border border-gray-700 flex items-center">
        <input
          className="outline-none rounded-md  w-full px-4"
          label="Destination"
          placeholder="Destination"
        />
      </div>
      <Button className="rounded-md h-[45px] mr-4" size="md">
        Search
      </Button>
    </div>
  );
}
