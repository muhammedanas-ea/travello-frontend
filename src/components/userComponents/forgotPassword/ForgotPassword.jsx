import { useState } from "react";
import { userForgotPassword } from "../../../api/UserApi";
import { GenerateSuccess } from "../../../toast/Toast";
import { ToastContainer } from "react-toastify";
import loginImg from "../../../../public/staticImages/5500661.jpg";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userForgotPassword({ email });
      if (response.data.status) {
        GenerateSuccess(response.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 h-screen bg-blue-500 text-white flex items-center justify-center">
        <img src={loginImg} alt="Vector Image" className="object-fill" />
      </div>
      <div className="w-1/2 bg-gray-100 p-10 flex items-center justify-center">
        <form className="w-2/3" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-1">Forgot Password</h2>
          <span className="text-xs text-gray-500">
            We just need your registed email address to reset your password
          </span>
          <div className="pt-5 mb-4">
            <div className="pb-2">
              <label htmlFor="" className="px-1">
                Enter email
              </label>
            </div>
            <input
              className="shadow appearance-none border border-gray-600 rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="email"
              placeholder="enter email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Reset password
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
