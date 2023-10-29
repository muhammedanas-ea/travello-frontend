// Import tailwind Component section
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

// Import Style For Property Swiper Card
import "./DestinationSwiper.css";

export default function DestinationSwiper() {
  const destination = [
    {
      image: "",
      destionName: "Maharashtra",
    },
    {
      image: "",
      destionName: "",
    },
    {
      image: "",
      destionName: "",
    },
    {
      image: "",
      destionName: "",
    },
  ];

  return (
    <div className="main-sparation">
      <div className="contai-section">
        <div className="pb-6">
          <Typography variant="text" className="text-[#1e1e1e] font-fmaily">
            popular Destination
          </Typography>
        </div>
        <div className="flex gap-6">
          {destination.map((items, index) => {

            const {image,destionName} = items

            return (
              <Card
                shadow={false}
                key={index}
                className="relative mt-5 grid  h-[23rem] w-full max-w-[300px] items-end justify-center overflow-hidden text-center"
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className={`absolute inset-0 m-0 h-full w-full rounded-none bg-[url(${image})] bg-cover bg-center`}
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
      </div>
    </div>
  );
}
