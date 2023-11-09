import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/adminPages/DashboardPage";
import LoginPage from "../pages/adminPages/LoginPage";
import AdminLayout from "../layout/adminLayout/AdminLayout";
import UserListPage from "../pages/adminPages/UserListPage";
import AdminPublic from "../protected/AdminPublic";
import AdminProtected from "../protected/AdminProtected";
import NotificationPage from "../pages/adminPages/NotificationPage"; 
import VerifyDetailPage from "../pages/adminPages/VerifyDetailPage";
import PropertyListPage from "../pages/adminPages/PropertyListPage";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route element={<AdminProtected />}>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/userlist" element={<UserListPage />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/verifydetails" element={<VerifyDetailPage />} />
          <Route path="/propertylist" element={<PropertyListPage />} />
        </Route>
      </Route>

      <Route element={<AdminPublic />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
