import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/adminPages/DashboardPage";
import LoginPage from "../pages/adminPages/LoginPage";
import AdminLayout from "../layout/adminLayout/AdminLayout";
import UserListPage from "../pages/adminPages/UserListPage";
import AdminPublic from "../protected/AdminPublic";
import AdminProtected from "../protected/AdminProtected";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route element={<AdminProtected />}>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/userlist" element={<UserListPage />} />
        </Route>
      </Route>

      <Route element={<AdminPublic />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
