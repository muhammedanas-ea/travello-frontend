import loginImg from '../../../../public/staticImages/1957947.jpg';

export default function SignIn() {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-[#fff] rounded-md shadow-xl lg:flex max-w-4xl p-5">
        <div className="lg:w-1/2 lg:pr-8">
          <h2 className="font-bold text-2xl text-[#171718]">Login</h2>
          <p className="text-xs mt-4 text-[#1f2020]">If you are already a member, easily log in</p>

          <form action="" className="mt-3 flex flex-col gap-4">
            <div className="mt-4 flex flex-col gap-3">
              <label htmlFor="email" className="text-sm">Enter email</label>
              <input
                className="p-2 rounded-md border border-[#14141433]"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="mt-3 flex flex-col gap-3">
              <label htmlFor="password" className="text-sm">Enter password</label>
              <input
                className="p-2 rounded-md border"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="text-xs py-4 text-[#002D74]">
              <a href="#">Forgot your password?</a>
            </div>
            <button className="bg-[#002D74] rounded-md text-white py-2 hover:scale-105 duration-300">
              Login
            </button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <button className="bg-white border py-2 w-full rounded-md mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25px"
            >
              {/* Google icon SVG */}
            </svg>
            Login with Google
          </button>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>Dont have an account? <span>Sign up</span></p>
          </div>
        </div>

        <div className="lg:w-1/2 lg:block hidden">
          <img className="rounded-2xl w-full" src={loginImg} alt="Login" />
        </div>
      </div>
    </section>
  );
}
