import loginImg from "../../../../public/staticImages/1991562_Freepik.jpg";
import "./SignIn.css";

export default function SignIn() {
  

  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 shadow-xl flex">
          <div
            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
            style={{ backgroundImage: `url(${loginImg})` }}
          ></div>
          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl px-8 text-start">Welcome Back!</h3>
            <span className="px-8 pt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
              Please enter login details below
            </span>
            <form className="px-8 pt-6 pb-2 mb-4 bg-white rounded">
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-bold text-gray-700"
                >
                  Enter Name
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-gray-500 rounded  appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
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
                />
                <p className="text-xs italic text-red-500">
                  Please choose a password.
                </p>
              </div>
              <div className="mb-3 text-end">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="mb-3 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-[#000] rounded hover:bg-[#000000de] focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In
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
              <button
                className="w-full mb-4 px-4 py-2 font-bold text-gray-800 bg-[#fff] rounded border border-gray-500 hover:bg-[#f8f7f7de] focus:outline-none focus:shadow-outline"
                type="button"
              >
                Login in with Google
              </button>
              <div className="text-center">
                <a
                  className="text-sm font-medium text-gray-500 dark:text-gray-300"
                  href="#"
                >
                  Don’t have an account?{" "}
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-700">
                    Sign UP
                  </span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
