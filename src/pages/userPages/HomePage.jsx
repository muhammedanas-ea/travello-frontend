import React, { Suspense } from "react";
import Hero from "../../components/userComponents/Hero";
import DestinationSwiper from "../../components/userComponents/destionSwiper/DsetinationSwiper";
import usePropertyData from "../../utils/usePropertyData";
import CardSkelton from "../../components/userComponents/CardSkelton";
import { Typography } from "@material-tailwind/react";
import HomeNavbar from "../../components/userComponents/navbar/HomeNavbar";
import Footer from "../../components/userComponents/Footer";
const PropertyCard = React.lazy(() =>
  import("../../components/userComponents/propertySwiper/PropertyCard")
);


export default function HomePage() {
  const propertyInfo = usePropertyData();
  return (
    <>
      <HomeNavbar />
      <Hero />
      <div className="main-sparation">
        <div className="contai-section">
          <div className="pb-6">
            <Typography className="text-[#1e1e1e] font-fmaily">
              Best rated
            </Typography>
          </div>
          <Suspense fallback={<CardSkelton />}>
            <PropertyCard propertyData={propertyInfo} />
          </Suspense>
        </div>
      </div>
      <div className="main-sparation pb-8">
        <div className="contai-section">
          <div className="pb-6">
            <Typography className="text-[#1e1e1e] font-fmaily">
              popular Destination
            </Typography>
          </div>
          <DestinationSwiper />
        </div>
      </div>
      <Footer />
    </>
  );
}
