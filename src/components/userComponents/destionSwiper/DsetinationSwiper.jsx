// Import tailwind Component section
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import{ChevronLeftIcon,ChevronRightIcon} from "@heroicons/react/24/outline"
// Import Style For Property Swiper Card
import "./DestinationSwiper.css";
import image from '../../../../public/staticImages/abhishek-donda-7h7NCXp9eZ0-unsplash.jpg'
import image2 from '../../../../public/staticImages/ashim-d-silva-YH1sPWaQAhg-unsplash.jpg'
import image3 from '../../../../public/staticImages/giuliano-gabella-D93E_uNgaL8-unsplash.jpg'
import image4 from '../../../../public/staticImages/sylwia-bartyzel-eU4pipU_8HA-unsplash.jpg'
import { useState } from "react";

export default function DestinationSwiper() {
  const destination = [
    {
      image: image,
      destionName: "Himachal",
    },
    {
      image: "https://images.unsplash.com/photo-1523544545175-92e04b96d26b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      destionName: "Karnataka",
    },
    {
      image: image3,
      destionName: "Rajasthan",
    },
    {
      image: image4,
      destionName: "Agra",
    },
    {
      image: "https://images.unsplash.com/photo-1627370778723-4d26700cd972?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      destionName: "Kerala",
    },
    {
      image: "https://images.unsplash.com/photo-1644332346869-f9982b271f9e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      destionName: "Nagaland",
    },
    {
      image: "https://images.unsplash.com/photo-1637043765564-a071ff91a09f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      destionName: "Megalaya",
    },
    {
      image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      destionName: "kashmir",
    },
    {
      image: "https://images.unsplash.com/photo-1625771271992-87f4351c8121?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      destionName: "Delhi",
    },
  ];
  const [scroll,setScroll] = useState(0)
  const scrollLeft = () =>{
    const container = document.getElementById("scrollHandler")
    setScroll(scroll - container.offsetWidth * 0.4)
    container.scrollLeft -= container.offsetWidth * 0.4
  }
  const scrollRight = () =>{
    const container = document.getElementById("scrollHandler")
    setScroll(scroll + container.offsetWidth * 0.4)
    container.scrollLeft += container.offsetWidth * 0.4
  }

  return (
    <div className="main-sparation pb-8">
      <div className="contai-section">
        <div className="pb-6">
          <Typography  className="text-[#1e1e1e] font-fmaily">
            popular Destination
          </Typography>
        </div>
        <div className="flex gap-6 overflow-x-auto scroll" id="scrollHandler">
          {destination.map((items, index) => {

            const { image, destionName } = items

            return (
              <Card
                shadow={false}
                key={index}
                className="relative mt-5 grid flex-shrink-0 h-[20rem]  w-full max-w-[270px] items-end justify-center  text-center"
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className={`absolute inset-0 m-0 h-full  w-full rounded-md bg-cover bg-center`}
                  style={{ backgroundImage: `url(${image})`,objectFit: 'cover'}} // Corrected line
                >
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative py-14 px-6 md:px-12">
                  <Typography
                    variant="h2"
                    color="white"
                    className="mb-6 font-medium leading-[1.5]"
                  >
                    {destionName}
                  </Typography>
                </CardBody>
              </Card>
            );
          })}
        </div>
        <div className="flex justify-between">
          <ChevronLeftIcon className="h-10 w-10 rounded-lg bg-black text-blue-gray-200 hover:bg-[#0000008a] -ms-5 -mt-44 z-50 border-2 border-blue-gray-200 cursor-pointer" onClick={scrollLeft}/>
          <ChevronRightIcon className="h-10 w-10 -mt-44 z-50 -me-5 rounded-lg bg-black text-blue-gray-200 hover:bg-[#0000008a] border-2 border-blue-gray-200 cursor-pointer" onClick={scrollRight}/>
        </div>
      </div>
    </div>
  );
}
