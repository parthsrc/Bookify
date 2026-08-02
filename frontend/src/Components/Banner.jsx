import React from "react";
import bannerImage from "../assets/Banner.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto md:px-10 px-4 flex flex-col md:flex-row mt-5 md:mt-10">

        {/* Left */}
        <div className="md:w-1/2 w-full mt-6 md:mt-12 order-2 md:order-1">

          <div className="space-y-10">

            <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-600">
                new everyday!!!
              </span>
            </h1>

            <p className="text-xl leading-8 text-gray-600 dark:text-gray-400">
              Upskill through challenge and project-based learning with our
              platform. Explore how we can tailor our Labs and Programs to suit
              your organizational needs.
            </p>

            {/* Email */}

            <div className="flex flex-col sm:flex-row w-full max-w-xl">

              <div className="flex items-center gap-2 flex-1 border border-gray-300 dark:border-zinc-700 rounded-l-md px-3 py-3 bg-white dark:bg-zinc-900">

                <svg
                  className="w-5 h-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                  >
                    <rect
                      width="20"
                      height="16"
                      x="2"
                      y="4"
                      rx="2"
                    />

                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </g>
                </svg>

                <input
                  type="email"
                  placeholder="mail@site.com"
                  className="w-full bg-transparent outline-none text-gray-900 dark:text-white placeholder:text-gray-500"
                />

              </div>

              <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-r-md transition cursor-pointer">
                Join
              </button>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="md:w-1/2 w-full mt-6 md:mt-0 order-1 md:order-2">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
            alt="Students Learning"
            className="w-full h-full object-cover rounded-lg"
          />

        </div>

      </div>
    </>
  );
}

export default Banner;