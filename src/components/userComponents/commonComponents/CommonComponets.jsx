import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Logo() {
  
  return (
    <Typography
      as="a"
      href="#"
      className="mr-4 ml-2 cursor-pointer py-1.5 text-[#0033E7] sm:text-3xl sm:font-extralight"
    >
     <Link to='home'>Travello</Link> 
    </Typography>
  );
}
