import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* Card Section */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Card */}
          <Link to="latestmovies">
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
              <div className="p-4 md:p-5 flex justify-between gap-x-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Total users
                  </p>
                  <div className="mt-1 flex items-center gap-x-1">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                      72,540
                    </h3>
                    <span className="flex items-center text-green-600">
                      <svg
                        className="inline-block w-7 h-7 self-center"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                        />
                      </svg>
                      <span className="inline-block text-lg">1.7%</span>
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-blue-600 text-white rounded-full dark:bg-blue-900 dark:text-blue-200">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
          {/* End Card */}

          {/* Card */}
          <Link to="upcomingmovies">
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
              <div className="p-4 md:p-5 flex justify-between gap-x-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Avg. Click Rate
                  </p>
                  <div className="mt-1 flex items-center gap-x-1">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                      56.8%
                    </h3>
                    <span className="flex items-center text-red-600">
                      <svg
                        className="inline-block w-7 h-7 self-center"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                        />
                      </svg>
                      <span className="inline-block text-lg">1.7%</span>
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-blue-600 text-white rounded-full dark:bg-blue-900 dark:text-blue-200">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v5.34l-1.2.24a1.5 1.5 0 0 0-1.196 1.636l.345 3.106a2.5 2.5 0 0 0 .405 1.11l1.433 2.15A1.5 1.5 0 0 0 6.035 16h6.385a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.632 2.632 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002z" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
          {/* End Card */}
          {/* Card */}
          <Link to="events">
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
              <div className="p-4 md:p-5 flex justify-between gap-x-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Pageviews
                  </p>
                  <div className="mt-1 flex items-center gap-x-1">
                    <h3 className="mt-1 text-xl font-medium text-gray-800 dark:text-gray-200">
                      92,913
                    </h3>
                  </div>
                </div>
                <div className="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-blue-600 text-white rounded-full dark:bg-blue-900 dark:text-blue-200">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Card Section */}
    </>
  );
}

export default Header;
