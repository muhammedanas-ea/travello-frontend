import { Button, Typography } from "@material-tailwind/react";
import HERO_URL from "../../assets/image/property-signin.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <img
        src={HERO_URL}
        alt="image 1"
        className="h-screen w-full object-cover"
      />
      <div className="absolute inset-0 grid h-screen w-full place-items-center bg-black/75">
        <div className="w-full text-center pt-14">
          <Typography
            variant="small"
            color="white"
            className="tracking-wide text-3xl text-[#ffffffe5]  font-normal md:text-4xl lg:text-5xl"
          >
            Escape to paradise
          </Typography>
          <div className="flex justify-center gap-2 mt-10">
            <Link to={"/propertyList"}>
              <Button
                className="border-solid tracking-wide rounded-md border border-[#fff] transition ease-in-out delay-10 bg-[#00000070]  hover:bg-[#000] hover:border-[#0c0c0c] hover:text-white duration-20"
                size="md"
                color="white"
                variant="text"
              >
                Discover more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
