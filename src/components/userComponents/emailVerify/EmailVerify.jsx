import { Link } from "react-router-dom";
import veriftyImg from "../../../../public/staticImages/emailVerify-img.jpg";

function EmailVerify() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <div className="flex flex-col items-center  space-y-2">
          <img className="h-[13rem] w-[18rem]" src={veriftyImg} alt="" />
          <h1 className="text-4xl font-bold">Verify your email address.</h1>
          <p className="pb-3 text-center">
            A verification email has been sent to your email. Please check your
            inbox and verify your account. <br /> The verification link will
            expire in 2 minutes.
          </p>
          <Link
            className="px-5 py-2 text-white bg-[#000] border border-[#000]  rounded-md hover:bg-[#000000d3] focus:outline-none focus:ring"
            to="/login"
          >
            <span className="text-sm font-medium">Go to Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmailVerify;
