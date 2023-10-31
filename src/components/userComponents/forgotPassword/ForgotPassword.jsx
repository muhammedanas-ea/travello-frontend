import { useState } from "react";
import { userForgotPassword } from "../../../api/UserApi";
import { GenerateSuccess } from "../../../toast/Toast";
import { ToastContainer } from "react-toastify";

export default function ForgotPassword() {
    const [email,setEmail] = useState()
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await userForgotPassword({email})
            console.log(response);
            if(response.data.status){
              GenerateSuccess(response.data.message)
            }
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eeebeb]">
      <div className="bg-[#eceaea] p-7 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-sans font-semibold mb-2 text-[#19191a] sm:text-2xl sm:font-extralight">Forgot Password</h2>
        <span className="text-xs text-gray-500">We just need your registed email address to reset your password</span>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-4 pt-">
            <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name='email'
              className="w-full px-3 py-2  text-gray-700 border border-gray-400 rounded appearance-none focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full   py-2  font-medium text-white bg-[#0033E7] rounded hover:bg-[#0032e7ef] focus:outline-none focus:shadow-outline"
          >
            Reset Password
          </button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
}

