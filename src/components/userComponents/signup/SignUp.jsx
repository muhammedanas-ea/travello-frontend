import { useState } from "react";
import { userSignUp } from "../../../api/UserApi";

export default function SignUp() {
    
    const [value,setValue] = useState({
        name:'', email:'',password:''
    })


    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const response = await userSignUp(value)
            console.log(response,'response exist')
        }catch(err){
            console.log(err);
        }
    }

    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-1/2 logo-main max-w-sm p-4  bg-white rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form 
         className="space-y-5"
          action="#"
          onSubmit={handleSubmit}
          >
          <h5 className="text-xl font-semibold text-gray-900 dark:text-white">Get Started</h5>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-300">Already have an account ? <span className="text-black">Sign in</span></p>
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Enter name</label>
            <input
              type="text"
              name="name"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              onChange={(e) => setValue({...value,[e.target.name]: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Enter email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              onChange={(e) => setValue({...value,[e.target.name]: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Enter password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              onChange={(e) => setValue({...value,[e.target.name]: e.target.value})}
            />
          </div>
          <button
            type="submit"
            className="w-full  text-white bg-black bg-opacity-85 hover:bg-[#000000ea] focus:ring-4 focus:outline-none font-medium rounded-lg text-base px-5 py-2.5 text-center"
          >
            Sign up
          </button>
          <div className="flex justify-around items-center">
            <hr className="w-[40%] h-0.5 bg-gray-900" />
            <span>or</span>
            <hr className="w-[40%] h-0.5 bg-gray-900" />
          </div>
          <button
            type="submit"
            className="w-full border border-black  text-black bg-[#f8f7f7] hover:bg-[#f3f2f2ea] focus:ring-4 focus:outline-none font-medium rounded-lg text-base px-5 py-2.5 text-center"
          >
            Sign up with google
          </button>
        </form>
      </div>
      </div>
    );
  }
  
  
  