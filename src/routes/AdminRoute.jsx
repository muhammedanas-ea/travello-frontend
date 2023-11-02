import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/adminPages/DashboardPage";
import LoginPage from "../pages/adminPages/LoginPage";
import AdminLayout from "../layout/adminLayout/AdminLayout";
import UserListPage from "../pages/adminPages/UserListPage";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/userlist" element={<UserListPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
