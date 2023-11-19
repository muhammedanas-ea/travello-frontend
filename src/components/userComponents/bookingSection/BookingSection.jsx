import { Checkbox, Input, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PaymentDetails } from "../../../api/UserApi";
import { CheckOutForm } from "../checkOutForm/CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const PUBLIC_KEY =
  "pk_test_51ODm4bSHaENjV1jr6QBv93m7yUjiUR2bCql3CNylL2bhvGcr3Fr8ZUEzlInPA3zAyDN8k8EUUUzGChUNHKWZXzAh00Q4Z4tzgS";
const stripePromise = loadStripe(PUBLIC_KEY);

export default function BookingSection() {
  const { state } = useLocation();
  const { bookingData, PropertyName, City, State, Image} = state;
  const [paymentData, setPaymentData] = useState([]);
  const { CheckOut, ChekIn, TotalGuest, TotalRate, TotalRooms,_id } = paymentData;
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const showBookingData = async () => {
      try {
        const response = await PaymentDetails(bookingData);
        if (response.data.status) {
          setPaymentData(response.data.booking);
          setClientSecret(response.data.clientSecret);
        }
      } catch (err) {
        console.log(err);
      }
    };
    showBookingData();
  }, [bookingData]);

 
  

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="py-9">
      <div className="contai-section">
        <div className="grid grid-cols-5 grid-rows-1 gap-12">
          <div className="col-span-3">
            <div className="mb-6">
              <Typography
                variant="h3"
                className="py-5 cursor-pointer  text-gray-800 sm:text-xl sm:font-extralight"
              >
                Check in details
              </Typography>

              <div className="flex w-full mt-2 flex-col items-start bg-white   rounded-lg  md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                  className="object-fill w-full rounded-t-lg h-96 md:h-[13rem] md:w-48 md:rounded-none md:rounded-s-lg"
                  src={
                    Image
                      ? `/images/${Image[0]}`
                      : "https://th.bing.com/th/id/OIP.puMo9ITfruXP8iQx9cYcqwHaGJ?pid=ImgDet&rs=1"
                  }
                  alt=""
                />
                <div className="flex flex-col  justify-start p-4 leading-normal">
                  <h6 className="font-san mb-1 text-xl font-normal leading-6 tracking-tight text-[#1e1e1e]">
                    {PropertyName}
                  </h6>
                  <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
                    {City},{State}
                  </p>
                  <div className="flex gap-16 my-3">
                    <div>
                      <p className="font-normal  leading-3 tracking-tighter text-[#959595]">
                        Check In
                      </p>
                      <p className="mt-2">{ChekIn}</p>
                    </div>
                    <div>
                      <p className="font-normal  leading-3 tracking-tighter text-[#959595]">
                        Check Out
                      </p>
                      <p className="mt-2">{CheckOut}</p>
                    </div>
                  </div>
                  <p className="font-normal mt-2 leading-3 tracking-tighter text-[#959595]">
                    {TotalRooms} Bedrooms , {TotalGuest} guests
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <Typography
                variant="h3"
                className="py-5 cursor-pointer  text-gray-800 sm:text-xl sm:font-extralight"
              >
                Enter your details
              </Typography>
              <div className="mt-2">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      size="lg"
                      label="House name"
                      name="houseName"
                      //   value={values.houseName}
                      //   onChange={handleChange}
                      //   onBlur={handleBlur}
                    />
                  </div>
                  <div>
                    <Input
                      size="lg"
                      label="State"
                      name="state"
                      //   value={values.state}
                      //   onChange={handleChange}
                      //   onBlur={handleBlur}
                    />
                  </div>
                </div>
                <div className="w-full mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      size="lg"
                      label="House name"
                      name="houseName"
                      //   value={values.houseName}
                      //   onChange={handleChange}
                      //   onBlur={handleBlur}
                    />
                  </div>
                  <div>
                    <Input
                      size="lg"
                      label="State"
                      name="state"
                      //   value={values.state}
                      //   onChange={handleChange}
                      //   onBlur={handleBlur}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 col-start-4">
            <div className="h-[200px] bg-[#f3f0f0] mt-[5rem] border border-gray-800 px-5 py-5 shadow-lg rounded-md flex flex-col justify-between">
              <h5 className="mt-2 mb-3 ont-san text-2xl font-normal leading-6 tracking-tight text-[#1e1e1ed2]">
                Price details
              </h5>
              <div className="flex gap-1 items-center">
                <Checkbox color="blue" />
                <span className="font-san mb-1 text-xl font-normal leading-6 tracking-tight text-[#1e1e1e]">
                  Online Payment
                </span>
              </div>
              <div className="flex justify-between mt-4">
                <h5 className="ont-san text-2xl font-normal leading-6 tracking-tight text-[#1e1e1edc]">
                  Total Amount :
                </h5>
                <h5 className="ont-san text-2xl  font-normal leading-6 tracking-tight text-[#1e1e1edc]">
                  ₹ {TotalRate}
                </h5>
              </div>
            </div>
            <div className="w-full mt-8 mb-5">
              {clientSecret ? (
                <Elements options={options} stripe={stripePromise}>
                  <CheckOutForm
                    Secret={clientSecret}
                    bookingId={_id}
                    chekInDate={ChekIn}
                    checkOut={CheckOut}
                    fee={TotalRate}
                  />
                </Elements>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
