export default function VerifyDetails() {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 rounded-lg dark:border-gray-700 mt-16">
        <div className="w-full grid grid-cols-1  sm:rounded-lg">
          <div className="w-full grid grid-cols-3  bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="p-3 ">
              <img
                className="object-cover w-full rounded-t-lg h-36 md:w-full md:rounded-none md:rounded-l-lg"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt=""
              />
            </div>
            <div className="p-3 leading-normal">
              <div>
                <h5>property name</h5>
                <span>cccccccccccc</span>
              </div>
            </div>
            <div className="p-3 leading-normal">
              <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                name
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
