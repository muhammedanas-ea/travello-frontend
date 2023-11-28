import { Button, IconButton, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { BookingCancelUser, BoookingSummery } from "../../../api/UserApi";
import { useSelector } from "react-redux";
import moment from "moment";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { GenerateSuccess } from "../../../toast/Toast";

export default function BookigSummery() {
  const { id } = useSelector((state) => state.user);
  const [data, setData] = useState([]);
  const [active, setActive] = React.useState(1);
  const [totalPage, setTotalpage] = useState();
  const [loading, setLoading] = useState(false);
  const [cancel,setCancel] = useState(true)

  useEffect(() => {
    const showBookingSummeryData = async () => {
      try {
        const response = await BoookingSummery(id, active);
        if (response) {
          setLoading(true);
          setCancel(true)
          setData(response.data.bookingSummeryData);
          setTotalpage(response.data.totalPages);
        }
      } catch (err) {
        console.log(err);
      }
    };
    showBookingSummeryData();
  }, [id, active,cancel]);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === totalPage) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  const handleBookingCancel = async (bookingId) => {
    try {
      const response = await BookingCancelUser(bookingId);
      if(response){
        setCancel(false)
        GenerateSuccess(response.data.message)
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {loading ? (
        <div>
          <div className="py-9">
            <div className="contai-section">
              <Typography
                variant="h3"
                className="mr-4 ml-2 cursor-pointer py-1.5 text-gray-800 sm:text-2xl sm:font-extralight"
              >
                Booking Details
              </Typography>
              <hr className="border-1 border-gray-400" />
              <div className="contai-section">
                {data.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="p-3 w-full flex  justify-between items-center bg-white border-b border-gray-500  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="">
                        <div className="flex items-center gap-4">
                          <img
                            className="object-cover w-full rounded-t-lg h-[12rem] md:w-36 md:rounded-none md:rounded-l-lg"
                            src={
                              Image
                                ? `/images/${item.PropertyId.Image[0]}`
                                : "https://th.bing.com/th/id/OIP.puMo9ITfruXP8iQx9cYcqwHaGJ?pid=ImgDet&rs=1"
                            }
                            alt=""
                          />
                          <div className="p-3 leading-normal">
                            <h6 className="font-san mb-1 text-xl font-normal leading-6 tracking-tight text-[#1e1e1e]">
                              {item.PropertyId.PropertyName}
                            </h6>
                            <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
                              {item.PropertyId.City}, {item.PropertyId.State}
                            </p>
                            <div className="flex gap-16 my-3">
                              <div>
                                <p className="font-normal  leading-3 tracking-tighter text-[#959595]">
                                  Check In
                                </p>
                                <p className="mt-2">
                                  {moment(item.ChekIn).format("MMM Do YY")}
                                </p>
                              </div>
                              <div>
                                <p className="font-normal  leading-3 tracking-tighter text-[#959595]">
                                  Check Out
                                </p>
                                <p className="mt-2">
                                  {moment(item.CheckOut).format("MMM Do YY")}
                                </p>
                              </div>
                            </div>
                            <p className="font-normal mt-2 leading-3 tracking-tighter text-[#959595]">
                              {item.TotalRooms} Bedrooms , {item.TotalGuest}{" "}
                              guests
                            </p>
                            <div className="pt-5">
                              <h5 className="ont-san text-2xl font-normal leading-6 tracking-tight text-[#1e1e1e]">
                                ₹ {item.TotalRate}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        {item.bookingStatus === "success" ? (
                          <Button onClick={() => handleBookingCancel(item._id)}>
                            Cancel Booking
                          </Button>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-7 items-center gap-4">
            <Button
              variant="text"
              className="flex items-center gap-2"
              onClick={prev}
              disabled={active === 1}
            >
              <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
            </Button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPage }).map((_, index) => (
                <IconButton key={index} {...getItemProps(index + 1)}>
                  {index + 1}
                </IconButton>
              ))}
            </div>
            <Button
              variant="text"
              className="flex items-center gap-2"
              onClick={next}
              disabled={active === totalPage}
            >
              Next
              <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex justify-center items-center">
          Loading.......
        </div>
      )}
    </>
  );
}
