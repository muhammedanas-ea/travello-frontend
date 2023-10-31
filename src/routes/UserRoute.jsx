import { Routes, Route } from "react-router-dom";
import UserLayout from "../layout/userLayout/UserLayout";

import SignInPage from "../pages/userPages/SignInPage";
import HomePage from "../pages/userPages/HomePage";
import SignUpPage from "../pages/userPages/SignUpPage";
import EmailVerifyPage from '../pages/userPages/EmailVerifyPage';
import UserPublic from "../protected/UserPublic";
import ForgotPasswordPage from "../pages/userPages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/userPages/ResetPasswordPage";

export default function UserRoute() {
  return (
    <Routes>
      <Route path="/emailVerify" element={<UserPublic><EmailVerifyPage /></UserPublic>} />
      <Route path="/forgotPassword" element={<UserPublic><ForgotPasswordPage /></UserPublic>} />
      <Route path="/resetPassword/:id/:token" element={<ResetPasswordPage />} />
      <Route path="/" element={<UserLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/:id/:token" element={<HomePage />} />
        <Route path="/login" element={<UserPublic><SignInPage /></UserPublic>} />
        <Route path="/signup" element={<UserPublic><SignUpPage /></UserPublic>} />
      </Route>
    </Routes>
  );
}
