import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import loginImg from "../../../../public/staticImages/5500661.jpg";
import { userRestPassword } from "../../../api/UserApi";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../../redux/userSlice/UserSlice";
import { GenerateSuccess } from "../../../toast/Toast";

export default function ResetPassword() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState({
    password: "",
    conformPassword: "",
    id: "",
  });

  useEffect(() => {
    setValue((prevValue) => ({
      ...prevValue,
      id,
    }));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userRestPassword(value);
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
        setTimeout(() => {
          GenerateSuccess(response.data.message);
        }, 500);
        navigate("/home");
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
          <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
          <div className="mb-4">
            <label htmlFor="" className="px-1">
              New password
            </label>
            <input
              className="shadow appearance-none border border-gray-600 rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="New Password"
              name="password"
              onChange={(e) =>
                setValue({ ...value, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label htmlFor="">Conform password</label>
            <input
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              name="conformPassword"
              onChange={(e) =>
                setValue({ ...value, [e.target.name]: e.target.value })
              }
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
    </div>
  );
}
