import { useState } from "react";
import { userSignUp } from "../../../api/UserApi";
import { Link, useNavigate } from "react-router-dom";
import { GenerateSuccess } from "../../../toast/Toast";
import loginImg from "../../../../public/staticImages/1991562_Freepik.jpg";

export default function SignUp() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userSignUp(value);
      if (response.data.status) {
        setTimeout(() => {
          GenerateSuccess(response.data.message);
        }, 500);
        navigate("/emailVerify");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-[60%] lg:w-10/11 shadow-xl flex">
          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl px-3 text-start">Get Started</h3>
            <Link className="px-3 pt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
              Already have an account ?
              <span
                onClick={() => navigate("/login")}
                className="text-sm font-medium text-gray-700 dark:text-gray-700"
              >
                {" "}
                Sign In
              </span>
            </Link>
            <form
              onSubmit={handleSubmit}
              className="px-3 pt-6  mb-4 bg-white rounded"
            >
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-bold text-gray-700"
                >
                  Enter Name
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-gray-500 rounded  appearance-none focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="name"
                  onChange={(e) =>
                    setValue({ ...value, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-bold text-gray-700"
                >
                  Enter Email
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-gray-500 rounded  appearance-none focus:outline-none focus:shadow-outline"
                  id="name"
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
                  className="w-full px-3 py-2 mb-2 text-sm leading-tight text-gray-700 border border-gray-500 rounded  appearance-none focus:outline-none focus:shadow-outline"
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
              <div className="mb-3 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-[#000] rounded hover:bg-[#000000de] focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
              <div>
                <hr className="mb-3 border-t" />
              </div>
              <div className="flex mb-6 justify-around items-center">
                <hr className="w-[40%] h-0.5 bg-gray-900 border-t" />
                <span>or</span>
                <hr className="w-[40%] h-0.5 bg-gray-900 border-t" />
              </div>
            </form>
            <div className="px-3">
              <button
                className="w-full mb-4 px-3 py-2 font-bold text-gray-800 bg-[#fff] rounded border border-gray-500 hover:bg-[#f8f7f7de] focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login in with Google
              </button>
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
