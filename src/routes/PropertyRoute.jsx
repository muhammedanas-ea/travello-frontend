import { Route, Routes } from "react-router-dom";
import PropertySignupPage from "../pages/propertyPages/PropertySignupPage";
import OtpVerificationPage from "../pages/propertyPages/OtpVerificationPage";

export default function PropertyRoute() {
  return (
    <Routes>
      <Route path="/signup" element={<PropertySignupPage />} />
      <Route path="/otpverification" element={<OtpVerificationPage />} />
    </Routes>
  );
}

