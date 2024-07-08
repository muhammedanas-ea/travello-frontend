import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-[#040404eb] dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to={"/home"}>
            <h1 className="text-[#0033E7] cursor-pointer sm:text-3xl font-semibold">
              Travello
            </h1>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link
                to={"/home"}
                className="hover:underline hover:text-[#0033E7] me-4 md:me-6"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/property/login"}
                className="hover:underline hover:text-[#0033E7] me-4 md:me-6"
              >
                List your property
              </Link>
            </li>
            <li>
              <Link
                to={"/propertyList"}
                className="hover:underline hover:text-[#0033E7] me-4 md:me-6"
              >
                Expolre property
              </Link>
            </li>
            <li>
              <Link
                to={"/login"}
                className="hover:underline hover:text-[#0033E7] me-4 md:me-6"
              >
                Log in
              </Link>
            </li>
            <li>
              <Link
                to={"/signup"}
                className="hover:underline hover:text-[#0033E7]"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 Travello™ . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
export default Footer;
