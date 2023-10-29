import { Routes, Route } from "react-router-dom";
import UserLayout from "../layout/userLayout/UserLayout";

import SignInPage from "../pages/userPages/SignInPage";
import HomePage from "../pages/userPages/HomePage";
import SignUpPage from "../pages/userPages/SignUpPage";
import EmailVerifyPage from '../pages/userPages/EmailVerifyPage';

export default function UserRoute() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/users/:id/verify/:token" element={<EmailVerifyPage />} />
      </Route>
     
    </Routes>
  );
}
