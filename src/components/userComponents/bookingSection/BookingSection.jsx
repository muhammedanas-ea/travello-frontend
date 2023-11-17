import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";

export default function BookingSection() {
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
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  alt=""
                />
                <div className="flex flex-col  justify-start p-4 leading-normal">
                  <h6 className="font-san mb-1 text-xl font-normal leading-6 tracking-tight text-[#1e1e1e]">
                    PropertyName
                  </h6>
                  <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
                    City,State
                  </p>
                  <div className="flex gap-16 my-3">
                    <div>
                      <p className="font-normal  leading-3 tracking-tighter text-[#959595]">
                        Check In
                      </p>
                      <p className="mt-2">Web 1 Nov 2023</p>
                    </div>
                    <div>
                      <p className="font-normal  leading-3 tracking-tighter text-[#959595]">
                        Check Out
                      </p>
                      <p className="mt-2">Web 1 Nov 2023</p>
                    </div>
                  </div>
                  <p className="font-normal mt-2 leading-3 tracking-tighter text-[#959595]">
                    5 Bedrooms , 15 guests
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
              <div className="flex gap-2 items-center">
                <Checkbox color="blue" />
                <span className="text-xl text-gray-600">Online Payment</span>
              </div>
              <div className="flex justify-between mt-4">
                <h5 className="ont-san text-2xl font-normal leading-6 tracking-tight text-[#1e1e1edc]">
                  Total Amount :
                </h5>
                <h5 className="ont-san text-2xl  font-normal leading-6 tracking-tight text-[#1e1e1edc]">
                  ₹ 200000
                </h5>
              </div>
            </div>
            <div className="w-full mt-8 mb-5">
              <Button className="w-full leading-9" size="lg">
                Pay Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
