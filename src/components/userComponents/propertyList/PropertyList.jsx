import { Button, Tooltip } from "@material-tailwind/react";
import "./PropetyList.css";
import { FaWifi, FaSwimmingPool, FaBath} from 'react-icons/fa'
import { MdOutlinePets} from 'react-icons/md'
import { useEffect, useState } from "react";
import { UserPropertyList } from "../../../api/UserApi";


export default function PropertyList() {
  const [PropertyList,setPropertyList] = useState([])
  

  useEffect(() =>{
    const showPropertyData = async () => {
      try {
        const response = await UserPropertyList();
        if(response){
          setPropertyList(response.data)
        }
      } catch (err) {
        console.log(err);
      }
    };
    showPropertyData();
  },[])

  // const a = PropertyList.Amenities.map((item) => {
  //   return item
  // });
  const Aminities = [
    {
      content: "pool",
      icon: <FaSwimmingPool className="h-5 w-5"/>,
    },
    {
      content: "wifi",
      icon: <FaWifi className="h-5 w-5"/>,
    },
    {
      content: "bathtub",
      icon: <FaBath className="h-5 w-5"/>,
    },
    {
      content: "petSpace",
      icon: <MdOutlinePets className="h-5 w-5"/>,
    },
  ];

  const a = PropertyList.map((property) => {
    return property.Amenities.map((amenity) => {
      return Aminities.filter((x) => x.content === amenity);
    });
  });
 
  const v = a.map((item) =>{
    return item.map((s)=>{
      return s
    })
  })

  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 main-sectioon">
      {PropertyList.map((items, index) => {
        const { Image, PropertyName, City, Price, State } = items;
        return (
          <div
            key={index}
            className="max-w-sm bg-white shadow-lg transition-transform hover:scale-105 duration-300  border border-[#00000027] rounded-md  dark:bg-gray-800 dark:border-gray-700"
          >
            <div>
              <img
                className="object-fill h-[210px] w-full rounded-t-md"
                src={
                  Image
                    ? `/images/${Image[0]}`
                    : "https://th.bing.com/th/id/OIP.puMo9ITfruXP8iQx9cYcqwHaGJ?pid=ImgDet&rs=1"
                }
                alt=""
              />
            </div>
            <div className="p-5">
              <h6 className="font-san mb-1 text-xl font-normal leading-6 tracking-tight text-[#1e1e1e]">
                {PropertyName}
              </h6>
              <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
                {City},{State}
              </p>
              <span className="font-normal text-sm leading-3 tracking-tighter text-[#959595]">
                Up to 12 Guests + 4 Rooms
              </span>
              <div className="group mt-4 inline-flex flex-wrap items-center gap-5 w-full">
                {v[index].map((item, index) => {
                    const {content,icon} = item[0]
                  return (
                    <Tooltip key={index} content={content}>
                      <span className="cursor-pointer rounded-md border border-green-200 bg-gray-900/7 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                       {icon}
                      </span>
                    </Tooltip>
                  );
                })}
              </div>
              <div className="mt-4">
                <hr className="border-1 border-gray-400" />
              </div>
              <div className="mt-5 flex justify-between items-center">
                <div>
                  <h5 className="ont-san text-2xl font-normal leading-6 tracking-tight text-[#1e1e1e]">
                    ₹ {Price}
                  </h5>
                  <span className="font-normal text-xs leading-3 tracking-tighter text-[#959595]">
                    Per night + Tax
                  </span>
                </div>
                <div className="pt-3 sm:pt-0">
                  <Button
                    className="h-10 border-solid rounded-md border border-[#000] transition ease-in-out delay-10  hover:bg-[#000] hover:text-white duration-20"
                    size="sm"
                    variant="text"
                  >
                    View property
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
