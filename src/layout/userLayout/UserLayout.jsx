import Navbar from "../../components/userComponents/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/userComponents/Footer";

export default function UserLayout() {
  return (
    <>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </>
  );
}


