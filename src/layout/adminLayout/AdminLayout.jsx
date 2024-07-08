import { Outlet } from "react-router-dom";
import Header from "../../components/adminComponents/header/Header";
import Sidebar from "../../components/adminComponents/sidebar/Sidebar";

export default function AdminLayout() {
  return (
    <div className="bg-[#e5e2e2]">
      <Header />
      <Sidebar />
      <Outlet/>
    </div>
  );
}
