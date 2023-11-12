import React, { useEffect, useState } from "react";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { MdOutlinePets } from "react-icons/md";
import { FaBath, FaSwimmingPool, FaWifi } from "react-icons/fa";
import SingleProperty from "../singleProperty/SingleProperty";
import { useLocation } from "react-router-dom";
import { UserSingleProperty } from "../../../api/UserApi";

function SinglePropertyDetails() {
  const { state } = useLocation();
  const { _id } = state;
  const [siglePropertyData, setSinglePropertyData] = useState([]);
  const {
    PropertyName,
    RoomCount,
    GuestCount,
    City,
    State,
    Image,
    Description,
    Amenities,
    Price,
  } = siglePropertyData;

  useEffect(() => {
    const showSinglePropertyData = async () => {
      try {
        const response = await UserSingleProperty(_id);
        if (response.data.status) {
          setSinglePropertyData(response.data.propertyData);
        }
      } catch (err) {
        console.log(err);
      }
    };
    showSinglePropertyData();
  }, [_id]);

  const predefinedAmenities = [
    {
      content: "pool",
      icon: <FaSwimmingPool className="h-7 w-7" />,
    },
    {
      content: "wifi",
      icon: <FaWifi className="h-7 w-7" />,
    },
    {
      content: "bathtub",
      icon: <FaBath className="h-7 w-7" />,
    },
    {
      content: "petSpace",
      icon: <MdOutlinePets className="h-7 w-7" />,
    },
  ];

  const matchingAmenities =
    Amenities && Array.isArray(Amenities)
      ? predefinedAmenities.filter((predefinedAmenity) =>
          Amenities.includes(predefinedAmenity.content.toLowerCase())
        )
      : [];

  const data = [
    {
      label: "About",
      value: 1,
    },
    {
      label: "Amenities",
      value: 2,
    },
    {
      label: "Reviews",
      value: 3,
    },
  ];

  const [activeTab, setActiveTab] = React.useState(1);

  return (
    <>
      <SingleProperty props={Image} />
      <div className="grid grid-cols-5 grid-rows-5 py-5 gap-4">
        <div className="col-span-3 row-span-5">
          <Typography
            className="font-san font-normal text-4xl leading-10 tracking-tighter  m-0 mr-16 mb-3 text-[#1e1e1e]"
            variant="h3"
          >
            {PropertyName}
          </Typography>
          <Typography className="mb-5 font-normal text-gray-700 dark:text-gray-400">
            {City},{State}
          </Typography>
          <Typography className="font-normal text-sm leading-3 tracking-tighter text-[#959595]">
            Up to {GuestCount} Guests + {RoomCount} Rooms
          </Typography>
          <div className="group mt-10 inline-flex flex-wrap items-center gap-8 w-full">
            {matchingAmenities.map((item, index) => {
              const { content, icon } = item;
              return (
                <Tooltip key={index} content={content}>
                  <span className="cursor-pointer rounded-md border border-green-200 bg-gray-900/7 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    {icon}
                  </span>
                </Tooltip>
              );
            })}
          </div>
          <div className="pt-10">
            <Tabs value={activeTab}>
              <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                indicatorProps={{
                  className:
                    "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                }}
              >
                {data.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => setActiveTab(value)}
                    className={activeTab === value ? "text-gray-900" : ""}
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                <TabPanel value={activeTab}>
                  <div
                    style={{
                      display: activeTab !== null ? "block" : "none",
                    }}
                  >
                    {activeTab === 1 ? (
                      <div>
                        <div className="mb-3">
                          <Typography
                            variant="h3"
                            className="py-5 cursor-pointer  text-gray-800 sm:text-xl sm:font-extralight"
                          >
                            Explore Your Stay
                          </Typography>
                          <span>{Description}</span>
                        </div>
                        <div className="mb-3">
                          <Typography
                            variant="h3"
                            className="py-5 cursor-pointer  text-gray-800 sm:text-xl sm:font-extralight"
                          >
                            Amenities
                          </Typography>
                          <div className="flex gap-12">
                            {matchingAmenities.map((item, index) => {
                              return (
                                <div
                                  className="flex gap-3 items-center pt-3"
                                  key={index}
                                >
                                  <span className="cursor-pointer rounded-md border border-green-200 bg-gray-900/7 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                    {item.icon}
                                  </span>
                                  <span>{item.content}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="mb-3">
                          <Typography
                            variant="h3"
                            className="py-5 cursor-pointer  text-gray-800 sm:text-xl sm:font-extralight"
                          >
                            Reviews
                          </Typography>
                        </div>
                      </div>
                    ) : activeTab === 2 ? (
                      <div>
                        <div className="mb-3">
                          <Typography
                            variant="h3"
                            className="py-5 cursor-pointer  text-gray-800 sm:text-xl sm:font-extralight"
                          >
                            Amenities
                          </Typography>
                          <div className="flex gap-12">
                            {matchingAmenities.map((item, index) => {
                              return (
                                <div
                                  className="flex gap-3 items-center pt-3"
                                  key={index}
                                >
                                  <span className="cursor-pointer rounded-md border border-green-200 bg-gray-900/7 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                    {item.icon}
                                  </span>
                                  <span>{item.content}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    ) : activeTab === 3 ? (
                      <div>wwwwwwwwwwww</div>
                    ) : (
                      <div>{Description}</div>
                    )}
                  </div>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </div>
        </div>
        <div className="col-span-2 row-span-5 col-start-4 h-[570px] sticky top-20">
          <div className="h-[150px] bg-[#EDE3E3] m-5 shadow-lg rounded-md">
            <div className="p-6 flex gap-3 items-center">
              <h5 className="ont-san text-2xl font-normal leading-6 tracking-tight text-[#1e1e1e]">
                ₹ {Price}
              </h5>
              <span className="font-normal text-xs leading-3 tracking-tighter text-[#959595]">
                Per night + Tax
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePropertyDetails;
