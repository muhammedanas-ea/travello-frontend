// Import tailwind Component section
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

// Import Style For Property Swiper Card
import "./DestinationSwiper.css";
import image from '../../../../public/staticImages/abhishek-donda-7h7NCXp9eZ0-unsplash.jpg'
import image2 from '../../../../public/staticImages/ashim-d-silva-YH1sPWaQAhg-unsplash.jpg'
import image3 from '../../../../public/staticImages/giuliano-gabella-D93E_uNgaL8-unsplash.jpg'
import image4 from '../../../../public/staticImages/sylwia-bartyzel-eU4pipU_8HA-unsplash.jpg'

export default function DestinationSwiper() {
  const destination = [
    {
      image: image,
      destionName: "Himachal",
    },
    {
      image: image2,
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
  ];

  return (
    <div className="main-sparation pb-8">
      <div className="contai-section">
        <div className="pb-6">
          <Typography  className="text-[#1e1e1e] font-fmaily">
            popular Destination
          </Typography>
        </div>
        <div className="flex gap-6">
          {destination.map((items, index) => {

            const { image, destionName } = items

            return (
              <Card
                shadow={false}
                key={index}
                className="relative mt-5 grid h-[20rem] rounded-lg w-full max-w-[300px] items-end justify-center overflow-hidden text-center"
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className={`absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center`}
                  style={{ backgroundImage: `url(${image})` }} // Corrected line
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
