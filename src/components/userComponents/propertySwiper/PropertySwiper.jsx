import { Typography, Button } from "@material-tailwind/react";
import "./PropertySwiper.css";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { PropertySwiperData } from "../../../api/UserApi";
import { GenerateError } from "../../../toast/Toast";

export default function PropertySwiper() {
  const navigate = useNavigate();
  const [bestRated,setBestRated] = useState([])

  const fecthData = async () =>{
    const response = await PropertySwiperData()
    if(response){
      setBestRated(response.data)
    }
  }

  useEffect(() =>{
    fecthData()
  },[])
 
  return (
    <div className="main-sparation">
      <div className="contai-section">
        <div className="pb-6">
          <Typography className="text-[#1e1e1e] font-fmaily">
            Best rated
          </Typography>
        </div>
        <Swiper
          spaceBetween={2}
          slidesPerView={1}
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            645: {
              spaceBetween: 20,
              slidesPerView: 2,
            },
            943: {
              slidesPerView: 3,
            },
            1200: {
              spaceBetween: 20,
              slidesPerView: 4,
            },
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {bestRated && bestRated.map((item, index) => {
            const { Image, PropertyName, State, Price, City , _id} = item;

            return (
              <SwiperSlide key={index}>
                <div className="sahdow mt-5 max-w-[300px] shadow-lg transition-transform  hover:scale-105 duration-300 bg-white border border-[#00000027] rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg object-fill w-full h-44"
                      src={
                        Image
                          ? `${import.meta.env.VITE_USER_URL}/files/${Image[0]}`
                          : "https://th.bing.com/th/id/OIP.puMo9ITfruXP8iQx9cYcqwHaGJ?pid=ImgDet&rs=1"
                      }
                      alt=""
                    />
                  </a>
                  <div className="p-5 mt-[2.5]">
                    <a href="#">
                      <h6 className="font-san mb-1 text-lg font-normal leading-6 tracking-tight text-[#1e1e1e]">
                        {PropertyName}
                      </h6>
                    </a>
                    <p className="font-normal text-xs text-[#959595]">
                      {State},{City}
                    </p>
                    <div className="mt-7 flex justify-between items-center">
                      <div>
                        <h5 className="ont-san text-lg font-normal leading-6 tracking-tight text-[#1e1e1e]">
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
                          onClick={() => {
                            if (localStorage.getItem("userToken")) {
                              navigate(`/singleproperty`, { state: { _id } });
                            } else {
                              GenerateError("you must be need to  login");
                            }
                          }}
                        >
                          View property
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
