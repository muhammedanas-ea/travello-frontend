import { Chip } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { userDetails } from "../../../api/AdminApi";

export default function UserList() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const showUserData = async () => {
      try {
        const response = await userDetails();
        if (response.data.status) {
          setUserData(response.data.userData);
        } else {
          console.log(response.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    };
    showUserData();
  }, []);

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 rounded-lg dark:border-gray-700 mt-14">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="h-[50px] py-5 flex items-center bg-gray-50">
            <h1 className="p-4  font-medium ">User Details</h1>
          </div>
          <div className="pt-2">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {userData.map((item, index) => {
                  const { name, email } = item;
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      <td className="w-4 p-4">{index + 1}</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {name}
                      </th>
                      <td className="px-6 py-4">{email}</td>
                      <td className="px-6 py-4">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value="Block"
                          color="green"
                        />
                      </td>
                      <td className="flex items-center px-6 py-4 space-x-3">
                        <a
                          href="#"
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          Remove
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
