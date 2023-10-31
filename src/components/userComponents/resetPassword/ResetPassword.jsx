import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loginImg from '../../../../public/staticImages/5500661.jpg'

export default function ResetPassword() {
  const params = useParams();
  const [userId,setUserId] = useState()
  console.log(userId);

  useEffect(() => {
    setUserId(params.id)
  }, [params])

  return (
    <div className="flex h-screen">
      {/* Vector image */}
      <div className="w-1/2 h-screen bg-blue-500 text-white flex items-center justify-center">
        <img
          src={loginImg}
          alt="Vector Image"
          className="object-fill"
        />
      </div>

      {/* Password reset form */}
      <div className="w-1/2 bg-gray-100 p-10 flex items-center justify-center">
        <form className="w-2/3">
          <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="New Password"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}

