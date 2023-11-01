import { useState } from "react";
import loginImg from "../../../../public/staticImages/1991562_Freepik.jpg";
import "./SignIn.css";
import { userLogin } from "../../../api/UserApi";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../../redux/userSlice/UserSlice";

export default function SignIn() {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userLogin(value);
      if (response.data.status) {
        localStorage.setItem("userToken", response.data.usertoken);
        dispatch(
          setUserDetails({
            id: response.data.userData._id,
            name: response.data.userData.name,
            email: response.data.userData.email,
            is_block: response.data.userData.is_block,
            is_verified: response.data.userData.is_verified,
            is_admin: response.data.userData.is_admin,
          })
        );
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/5 lg:w-10/11 flex shadow-xl">
          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl px-3 text-start">Welcome Back!</h3>
            <span className="px-3 pt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
              Please enter login details below
            </span>
            <form
              onSubmit={handleSubmit}
              className="px-3 pt-6  mb-4 bg-white rounded"
            >
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-bold text-gray-700"
                >
                  Enter Email
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-gray-500 rounded appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  name="email"
                  onChange={(e) =>
                    setValue({ ...value, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-bold text-gray-700"
                >
                  Enter Password
                </label>
                <input
                  className="w-full px-3 py-2 mb-2 text-sm leading-tight text-gray-700 border border-gray-500 rounded appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  name="password"
                  onChange={(e) =>
                    setValue({ ...value, [e.target.name]: e.target.value })
                  }
                />
                <p className="text-xs italic text-red-500">
                  Please choose a password.
                </p>
              </div>
              <div className="mb-3 text-end">
                <Link
                  to="/forgotPassword"
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="mb-3 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-[#000] rounded hover:bg-[#000000de] focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
              <div>
                <hr className="mb-3 border-t" />
              </div>
              <div className="flex mb-6 justify-around items-center">
                <hr className="w-2/5 h-0.5 bg-gray-900 border-t" />
                <span>or</span>
                <hr className="w-2/5 h-0.5 bg-gray-900 border-t" />
              </div>
            </form>
            <div className="px-3">
              <button
                className="w-full mb-4 px-3  py-2 font-bold text-gray-800 bg-[#fff] rounded border border-gray-500 hover:bg-[#f8f7f7de] focus:outline-none focus:shadow-outline"
                type=""
              >
                Login with Google
              </button>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Don’t have an account ?
                  <Link
                    to="/signup"
                    className="text-sm font-medium text-gray-700 dark:text-gray-700"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-gray-400 hidden lg:block lg:bg-cover">
            <img className="object-cover h-full" src={loginImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
