import {
  Button,
  Chip,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { UserDetails } from "../../../api/AdminApi";
import DialogBox from "../dialogBox/dialogBox";
import { UserUnblock } from "../../../api/AdminApi";

export default function UserList() {
  
  const [userData, setUserData] = useState([]);
  const [child, setChild] = useState();

  const handleUnblock = async (id) =>{
    try{
      const response = await UserUnblock({id})
      console.log(response);
      if(response.data.status){
        setChild(true)
      }
    }catch(err){
      console.log(err)
    }
  } 
  
  useEffect(() => {
    const showUserData = async () => {
      try {
        const response = await UserDetails();
        if (response.data.status) {
          setUserData(response.data.userData);
          setChild(false)
        } else {
          console.log(response.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    };
    showUserData();
  }, [child]);

  const onDataUpdate = (data) => {
    setChild(data);
  };
  
 
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
                  const { name, email, is_block, _id } = item;
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
                          value={is_block ? "block" : "unblock"}
                          color="green"
                        />
                      </td>
                      <td className="flex items-center px-6 py-4 space-x-3">
                        {!is_block ? (
                          <DialogBox  id={item} onDataUpdate={onDataUpdate}/>
                        ) : (
                          <Button 
                          className="rounded-md font-medium" size="sm"
                          onClick={() => handleUnblock(_id)}
                          >
                            Unblock
                          </Button>
                        )}
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
