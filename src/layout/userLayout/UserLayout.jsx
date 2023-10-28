import Header from "../../components/userComponents/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/userComponents/footer/footer";

export default function UserLayout() {
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
    </>
  );
}


