import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BookingDetailsOwner } from "../../../api/PropertyApi";

export default function BookingDetails() {
  const { id } = useSelector((state) => state.owner);
  const [ ,setBookingData] = useState([])
  // console.log(bookingData);

  useEffect(() => {
    const showUserData = async () => {
      try {
        const response = await BookingDetailsOwner(id);
        if(response){
          setBookingData(response.data)
        }
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    showUserData();
  }, [id]);

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 rounded-lg dark:border-gray-700 mt-16">
        <div className="relative overflow-x-auto shadow-xl sm:rounded-lg">
          <div className="h-[70px] py-6 flex justify-between items-center bg-gray-50 px-4">
            <h1 className="font-medium ">Booking Details</h1>
          </div>
          <div className="pt-2">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Property Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    User Name
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Rooms
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Guests
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Check In
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Check Out
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">1</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    name
                  </th>
                  <td className="px-6 py-4">email</td>
                  <td className="px-6 py-4">email</td>
                  <td className="px-6 py-4">email</td>
                  <td className="px-6 py-4">email</td>
                  <td className="px-6 py-4">email</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
