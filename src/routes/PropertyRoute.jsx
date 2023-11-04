import { Route, Routes } from "react-router-dom";
import PropertySignupPage from "../pages/propertyPages/PropertySignupPage";
import OtpVerificationPage from "../pages/propertyPages/OtpVerificationPage";
import DashboardPage from "../pages/propertyPages/DashboardPage";
import PropertyLoginpage from "../pages/propertyPages/PropertyLoginpage";
import PropertyLayout from "../layout/propertyLayout/PropertyLayout";
import PropertyProtected from "../protected/PropertyProtected";
import PropertyPublic from "../protected/PropertyPublic";

export default function PropertyRoute() {
  return (
    <Routes>
      <Route element={<PropertyPublic />}>
        <Route path="/signup" element={<PropertySignupPage />} />
        <Route path="/login" element={<PropertyLoginpage />} />
        <Route path="/otpverification/:id" element={<OtpVerificationPage />} />
      </Route>
      <Route element={<PropertyProtected />}>
        <Route element={<PropertyLayout />}>
          <Route path="/" element={<DashboardPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
