import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { Button } from "@material-tailwind/react"
import { Link } from "react-router-dom"
import ProfileMenu from "../ProfileMenu"
import { useState } from "react"

const Navbar = () =>{
    const [open, setOpen] = useState(false);
    return(
        <div
      className={`z-50 top-0 sticky left-0 right-0 bg-white shadow-lg  text-black
      }`}
    >
      <header className="flex items-center justify-between h-20 max-w-screen-xl mx-auto p-2">
        <Link to={"/home"}>
          <h1 className="text-[#0033E7] cursor-pointer sm:text-3xl font-semibold">
            Travello
          </h1>
        </Link>
        <ul className="hidden lg:flex items-center gap-8">
          <li className="cursor-pointer hover:text-[#0033E7] ">
            <Link to={"/home"}>Home</Link>
          </li>
          <li className="cursor-pointer hover:text-[#0033E7] ">
            <Link to={"/property/login"}>List your Property</Link>
          </li>
          <li className="cursor-pointer hover:text-[#0033E7] ">
            <Link to={"/propertyList"}>Explore Property</Link>
          </li>
          {localStorage.getItem("userToken") ? (
            <ProfileMenu />
          ) : (
            <Link to={"/login"}>
              <Button
                className={`border rounded-md border-black hover:bg-[#000] hover:border-[#0c0c0c] hover:text-white
                }`}
                size="md"
                variant="text"
              >
                Log in
              </Button>
            </Link>
          )}
        </ul>
        <div
          onClick={() => setOpen(!open)}
          className="lg:hidden cursor-pointer"
        >
          {open ? (
            <XMarkIcon className="h-8 w-8 text-black" />
          ) : (
            <Bars3CenterLeftIcon
              className={`h-8 w-8 text-black}`}
            />
          )}
        </div>
      </header>

      <div
        className={`fixed inset-x-0 top-0 h-screen bg-white transform transition-transform duration-500 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-8">
          <Link to={"/login"}>
            <h1 className="text-[#0033E7] cursor-pointer sm:text-3xl font-semibold">
              Travello
            </h1>
          </Link>
          <div onClick={() => setOpen(!open)} className="cursor-pointer">
            {open ? (
              <XMarkIcon className="h-8 w-8 text-black" />
            ) : (
              <Bars3CenterLeftIcon className="h-8 w-8 text-black" />
            )}
          </div>
        </div>
        <div className="flex flex-col justify-between h-[82vh] p-4">
          <ul className="text-black uppercase">
            <Link onClick={() => setOpen(!open)}  to={"/home"}>
              <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#0033E7]">
                Home
              </li>
            </Link>
            <Link onClick={() => setOpen(!open)}  to={"/propertyList"}>
              <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#0033E7]">
                Property List
              </li>
            </Link>
            {localStorage.getItem("userToken") ? (
              <>
                <Link onClick={() => setOpen(!open)}  to={"/userprofile"}><li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#0033E7]">
                  Profile
                </li>
                </Link>
                <Link onClick={() => setOpen(!open)}  to={"/bookingsummery"}>
                <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#0033E7]">
                  Bookings
                </li>
                </Link>
              </>
            ) : (
              <Link onClick={() => setOpen(!open)}  to={"/property/login"}>
                <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#0033E7]">
                  List your Property
                </li>
              </Link>
            )}
          </ul>
          {localStorage.getItem("userToken") ? (
            <Button
              className="p-4 border text-black uppercase border-gray-800 bg-transparent hover:bg-[#f14242]  hover:text-white rounded-md"
              size="md"
            >
              Log out
            </Button>
          ) : (
            <Link onClick={() => setOpen(!open)}  to={"/login"}>
              <Button
                className="p-4 border text-black uppercase border-gray-800 bg-transparent hover:bg-[#050505]  hover:text-white rounded-md"
                size="md"
              >
                Log in
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
    )
}
export default Navbar