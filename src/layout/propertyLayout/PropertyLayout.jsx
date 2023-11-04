import { Outlet } from "react-router-dom";
import Header from "../../components/propertyComponents/header/Header"

export default function PropertyLayout() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  );
}

