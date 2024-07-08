import "./propertySwiper/PropertySwiper.css"

const CardSkelton = () => {
  return (
    <div
      className="flex gap-5 overflow-x-auto propertyScroll"
      id="propertyScrollHandler"
    >
      <div className="sahdow flex-shrink-0 mt-5 shadow-lg bg-white border border-[#00000027] rounded-lg dark:bg-gray-800 dark:border-gray-700 w-64 sm:w-70 lg:w-72">
        <div className="rounded-t-lg w-full h-44 bg-gray-300 animate-pulse"></div>
        <div className="p-5 mt-2.5">
          <div className="h-6 bg-gray-300 rounded mb-1 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded mb-1 animate-pulse"></div>
          <div className="mt-7 flex justify-between items-center">
            <div>
              <div className="h-6 bg-gray-300 rounded mb-1 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
            </div>
            <div className="pt-3 sm:pt-0">
              <div className="h-10 w-24 bg-gray-300 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="sahdow flex-shrink-0 mt-5 shadow-lg bg-white border border-[#00000027] rounded-lg dark:bg-gray-800 dark:border-gray-700 w-64 sm:w-72 lg:w-80">
        <div className="rounded-t-lg w-full h-44 bg-gray-300 animate-pulse"></div>
        <div className="p-5 mt-2.5">
          <div className="h-6 bg-gray-300 rounded mb-1 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded mb-1 animate-pulse"></div>
          <div className="mt-7 flex justify-between items-center">
            <div>
              <div className="h-6 bg-gray-300 rounded mb-1 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
            </div>
            <div className="pt-3 sm:pt-0">
              <div className="h-10 w-24 bg-gray-300 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="sahdow flex-shrink-0 mt-5 shadow-lg bg-white border border-[#00000027] rounded-lg dark:bg-gray-800 dark:border-gray-700 w-64 sm:w-72 lg:w-80">
        <div className="rounded-t-lg w-full h-44 bg-gray-300 animate-pulse"></div>
        <div className="p-5 mt-2.5">
          <div className="h-6 bg-gray-300 rounded mb-1 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded mb-1 animate-pulse"></div>
          <div className="mt-7 flex justify-between items-center">
            <div>
              <div className="h-6 bg-gray-300 rounded mb-1 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
            </div>
            <div className="pt-3 sm:pt-0">
              <div className="h-10 w-24 bg-gray-300 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="sahdow flex-shrink-0 mt-5 shadow-lg bg-white border border-[#00000027] rounded-lg dark:bg-gray-800 dark:border-gray-700 w-64 sm:w-72 lg:w-80">
        <div className="rounded-t-lg w-full h-44 bg-gray-300 animate-pulse"></div>
        <div className="p-5 mt-2.5">
          <div className="h-6 bg-gray-300 rounded mb-1 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded mb-1 animate-pulse"></div>
          <div className="mt-7 flex justify-between items-center">
            <div>
              <div className="h-6 bg-gray-300 rounded mb-1 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
            </div>
            <div className="pt-3 sm:pt-0">
              <div className="h-10 w-24 bg-gray-300 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkelton;
