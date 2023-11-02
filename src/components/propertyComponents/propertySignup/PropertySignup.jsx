import { ToastContainer } from "react-toastify";
import bgImg from "../../../../public/staticImages/slider-img2.jpg";
import { propertySignUp } from "../../../api/PropertyApi";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function PropertySignup() {
    const [value,setValue] = useState({
        name:'',
        number:'',
        email:'',
        password:'',
    })
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const response = await propertySignUp(value)
            console.log(response);
        }catch(err){
            console.log(err);
        }
    }
  return (
    <section
      className="bg-gray-50 dark:bg-gray-900 w-full h-screen"
      style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}
    >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-md shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Get started
            </h1>
            <span className=" pt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
              Already have an account ?
              <Link
                to="/login"
                className="text-sm font-medium text-gray-700 dark:text-gray-700"
              >
                <span> Sign In</span>
              </Link>
            </span>
            <form 
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  name="number"
                  className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
