import { Routes, Route } from "react-router-dom";
import UserLayout from "../layout/userLayout/UserLayout";

import SignInPage from "../pages/userPages/SignInPage";
import HomePage from "../pages/userPages/HomePage";
import SignUpPage from "../pages/userPages/SignUpPage";
import EmailVerifyPage from '../pages/userPages/EmailVerifyPage';
import UserPublic from "../protected/UserPublic";
import ForgotPasswordPage from "../pages/userPages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/userPages/ResetPasswordPage";
import PropertyListPage from "../pages/userPages/PropertyListPage";
import SinglePropertyPage from "../pages/userPages/SinglePropertyPage";
import UserProfilePage from "../pages/userPages/UserProfilePage";
import BookingPage from "../pages/userPages/BookingPage";
import SuccessPage from "../pages/userPages/successPage";
import BookigSummeryPage from "../pages/userPages/BookigSummeryPage";
import ErrorPage from "../pages/userPages/ErrorPage";


export default function UserRoute() {
  return (
    <Routes>
      <Route path="/emailVerify" element={<UserPublic><EmailVerifyPage /></UserPublic>} />
      <Route path="/forgotPassword" element={<UserPublic><ForgotPasswordPage /></UserPublic>} />
      <Route path="/resetPassword/:id/:token" element={<ResetPasswordPage />} />
      <Route path='/error' element={<ErrorPage/>} />
      <Route path="/" element={<UserLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/:id/:token" element={<HomePage />} />
        <Route path='/propertyList' element={<PropertyListPage/>} />
        <Route path='/userprofile' element={<UserProfilePage/>} />
        <Route path='/singleproperty' element={<SinglePropertyPage/>} />
        <Route path='/booking' element={<BookingPage/>} />
        <Route path='/success' element={<SuccessPage/>} />
        <Route path='/bookingsummery' element={<BookigSummeryPage/>} />
        <Route path="/login" element={<UserPublic><SignInPage /></UserPublic>} />
        <Route path="/signup" element={<UserPublic><SignUpPage /></UserPublic>} />
      </Route>
    </Routes>
  );
}
