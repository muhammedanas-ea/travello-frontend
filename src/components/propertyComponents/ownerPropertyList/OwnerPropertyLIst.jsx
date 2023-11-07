import { Button } from "@material-tailwind/react";
import slide1 from "../../../../public/staticImages/sliderimg-3.jpg";
import slide2 from "../../../../public/staticImages/sliderimg-2.jpg";
import slide3 from "../../../../public/staticImages/sliderimg-4.jpg";
import PropertyAddingDialog from "../propertyAddingDialog/PropertyAddingDialog";

export default function OwnerPropertyLIst() {
  const PropertyList = [
    {
      image: slide1,
      propertyName: "Enchanting Pastures - Khopoli",
      location: "Lonavala, Maharashtra",
    },
    {
      image: slide2,
      propertyName: "Enchanting Pastures - Khopoli",
      location: "Lonavala, Maharashtra",
    },
    {
      image: slide3,
      propertyName: "Enchanting Pastures - Khopoli",
      location: "Lonavala, Maharashtra",
    },
  ];
  return (
    <div className="px-4 pb-5 sm:ml-64">
      <div className="px-4 rounded-md dark:border-gray-700">
        <div className="w-full grid grid-cols-1  bg-white border border-gray-200 rounded-lg shadow">
          <div className="p-5 flex justify-end">
            <PropertyAddingDialog />
          </div>
          <div className="p-3 px-5 grid grid-cols-3 gap-5">
            {PropertyList.map((items, index) => {
              const { image, propertyName, location } = items;
              return (
                <div
                  key={index}
                  className="max-w-sm  bg-white   border border-[#00000027] rounded-md  dark:bg-gray-800 dark:border-gray-700"
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
                    <div className="mt-4">
                      <hr className="border-1 border-gray-400" />
                    </div>
                    <div className="mt-5 flex justify-end items-center">
                      <div className="pt-3 sm:pt-0">
                        <Button
                          className="h-10 border-solid rounded-md border border-[#000] transition ease-in-out delay-10  hover:bg-[#000] hover:text-white duration-20"
                          size="sm"
                          variant="text"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
