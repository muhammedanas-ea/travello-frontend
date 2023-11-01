import { Routes, Route } from "react-router-dom";
import DashboardPage from '../pages/adminPages/DashboardPage'
import LoginPage from "../pages/adminPages/LoginPage";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path='/' element={<DashboardPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
}
