import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Typography } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { propertyScrollLeft } from "../../../utils/useScrollLeft";
import { propertyScrollRight } from "../../../utils/useScrollRight";
import { DestinationData } from "../../../utils/metaData";
import "./DestinationSwiper.css";
import CardSkelton from "../CardSkelton";

export default function DestinationSwiper() {
  const [scroll, setScroll] = useState(0);
  const navigate = useNavigate();

  return DestinationData.length === 0 ? (
    <CardSkelton />
  ) : (
    <>
      <div
        className="flex gap-6 overflow-x-auto scroll"
        id="destinationScrollHandler"
      >
        {DestinationData.map((item, index) => {
          const { image, destinationName } = item;
          return (
            <Card
              key={index}
              className="w-[17rem] h-80 card mt-2 rounded-lg bg-cover bg-center object-cover"
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => navigate("/propertyList")}
            >
              <div className="w-[17rem] h-80 cardText flex flex-col justify-center items-center rounded-lg animate-showcontent">
                <Typography
                  variant="h3"
                  className="text-white font-medium leading-[1.5]"
                >
                  {destinationName}
                </Typography>
              </div>
            </Card>
          );
        })}
      </div>
      <div className="flex justify-between">
        <ChevronLeftIcon
          className="invisible md:visible h-10 w-10 rounded-lg bg-[#0000008a] text-blue-gray-200 hover:bg-black -ms-5 -mt-44 z-30 border-2 border-blue-gray-200 cursor-pointer"
          onClick={() =>
            propertyScrollLeft(scroll, setScroll, "destinationScrollHandler")
          }
        />
        <ChevronRightIcon
          className="invisible md:visible h-10 w-10 -mt-44 z-30 -me-5 rounded-lg bg-[#0000008a] text-blue-gray-200 hover:bg-black border-2 border-blue-gray-200 cursor-pointer"
          onClick={() =>
            propertyScrollRight(scroll, setScroll, "destinationScrollHandler")
          }
        />
      </div>
    </>
  );
}
