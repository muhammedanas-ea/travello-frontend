import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUserVerification } from "../../../utils/useUserVerification";
import ProfileMenu from "../ProfileMenu";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../../redux/userSlice/UserSlice";

const HomeNavbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const params = useParams();
  const { id, token } = params;
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userLogout = () =>{
    localStorage.removeItem("userToken");
    dispatch(
      setUserDetails({
        userInfo: {},
      })
    );
    navigate("/login");
  }
  useUserVerification(id, token);
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <div
      className={`z-50 top-0 fixed left-0 right-0 ${
        scrolling
          ? "bg-white shadow-lg  text-black"
          : "bg-transparent text-white"
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
            <Link to={"/propertyList"}>Explore Property</Link>
          </li>
          {localStorage.getItem("userToken") ? (
            <ProfileMenu />
          ) : (
            <>
              <li className="cursor-pointer hover:text-[#0033E7] ">
                <Link to={"/property/login"}>List your Property</Link>
              </li>
              <Link to={"/login"}>
                <Button
                  className={`border rounded-md ${
                    scrolling
                      ? "border-black hover:bg-[#000] hover:border-[#0c0c0c] hover:text-white"
                      : "border-white text-white"
                  }`}
                  size="md"
                  variant="text"
                >
                  Log in
                </Button>
              </Link>
            </>
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
              className={`h-8 w-8 ${scrolling ? "text-black" : "text-white"}`}
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
            <Link onClick={() => setOpen(!open)} to={"/home"}>
              <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#0033E7]">
                Home
              </li>
            </Link>
            <Link onClick={() => setOpen(!open)} to={"/propertyList"}>
              <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#0033E7]">
                Property List
              </li>
            </Link>
            {localStorage.getItem("userToken") ? (
              <>
                <Link onClick={() => setOpen(!open)} to={"/userprofile"}>
                  <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#0033E7]">
                    Profile
                  </li>
                </Link>
                <Link onClick={() => setOpen(!open)} to={"/bookingsummery"}>
                  <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#0033E7]">
                    Bookings
                  </li>
                </Link>
              </>
            ) : (
              <Link onClick={() => setOpen(!open)} to={"/property/login"}>
                <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#0033E7]">
                  List your Property
                </li>
              </Link>
            )}
          </ul>
          {localStorage.getItem("userToken") ? (
            <Button
            onClick={userLogout}
              className="p-4 border text-black uppercase border-gray-800 bg-transparent hover:bg-[#f14242]  hover:text-white rounded-md"
              size="md"
            >
              Log out
            </Button>
          ) : (
            <Button
              className="p-4 border text-black uppercase border-gray-800 bg-transparent hover:bg-[#050505]  hover:text-white rounded-md"
              size="md"
              onClick={() => navigate('/login')}
            >
              Log in
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
