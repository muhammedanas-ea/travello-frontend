import { Button, Tooltip } from "@material-tailwind/react";
import slide1 from "../../../../public/staticImages/sliderimg-3.jpg";
import slide2 from "../../../../public/staticImages/sliderimg-2.jpg";
import slide3 from "../../../../public/staticImages/sliderimg-4.jpg";
import slide4 from "../../../../public/staticImages/sliderimg-1.jpg";
import "./PropetyList.css";
import { FaWifi, FaSwimmingPool, FaBath} from 'react-icons/fa'
import { MdOutlinePets} from 'react-icons/md'


export default function PropertyList() {
  const PropertyList = [
    {
      image: slide1,
      propertyName: "Enchanting Pastures - Khopoli",
      location: "Lonavala, Maharashtra",
      price: "18,800",
    },
    {
      image: slide2,
      propertyName: "Enchanting Pastures - Khopoli",
      location: "Lonavala, Maharashtra",
      price: "18,800",
    },
    {
      image: slide3,
      propertyName: "Enchanting Pastures - Khopoli",
      location: "Lonavala, Maharashtra",
      price: "18,800",
    },
    {
      image: slide4,
      propertyName: "Enchanting Pastures - Khopoli",
      location: "Lonavala, Maharashtra",
      price: "18,800",
    },
  ];

  const aminities = [
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
      content: "pets space",
      icon: <MdOutlinePets className="h-5 w-5"/>,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 main-sectioon">
      {PropertyList.map((items, index) => {
        const { image, propertyName, location, price } = items;
        return (
          <div
            key={index}
            className="max-w-sm bg-white shadow-lg transition-transform hover:scale-105 duration-300  border border-[#00000027] rounded-md  dark:bg-gray-800 dark:border-gray-700"
          >
            <div>
              <img
                className="object-fill h-[210px] w-full rounded-t-md"
                src={image}
                alt=""
              />
            </div>
            <div className="p-5">
              <h6 className="font-san mb-1 text-xl font-normal leading-6 tracking-tight text-[#1e1e1e]">
                {propertyName}
              </h6>
              <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
                {location}
              </p>
              <span className="font-normal text-sm leading-3 tracking-tighter text-[#959595]">
                Up to 12 Guests + 4 Rooms
              </span>
              <div className="group mt-4 inline-flex flex-wrap items-center gap-5 w-full">
                {aminities.map((item, index) => {
                    const {content,icon} = item
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
                    ₹ {price}
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
