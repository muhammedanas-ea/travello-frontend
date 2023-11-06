import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";

import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

// Import Logo Components
import { Logo } from "../../commonComponents/CommonComponets";

import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPropertyOwnerDetails } from "../../../redux/userSlice/PropertySlice";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const closeMenu = () => setIsMenuOpen(false);
  const dispatch = useDispatch();

  const userLogout = () => {
    localStorage.removeItem("propertyToken");
    dispatch(
      setPropertyOwnerDetails({
        id: "",
        name: "",
        email: "",
        number: "",
      })
    );
    navigate("/property/login");
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              {label === "Sign Out" ? (
                <button
                  className={`font-normal ${
                    isLastItem ? "text-red" : "text-blue-gray-900"
                  } hover:underline`}
                  onClick={userLogout}
                >
                  {label}
                </button>
              ) : label === "Edit Profile" ? (
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              ) : (
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              )}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default function Header() {
  const { name } = useSelector((state) => state.owner);

  return (
    <Navbar className="z-50 shadow-lg bg-white  rounded-none max-w-none mx-auto lg:pl-6 sticky top-0 left-0 right-0">
      <div className="container">
        <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center gap-8">
            <Logo />
            <span>Dashboard</span>
            <span>Bookings</span>
            <span>Property</span>
          </div>
          <div className="flex items-center gap-7">
            <span>{name}</span>
            <ProfileMenu />
          </div>
        </div>
      </div>
    </Navbar>
  );
}
