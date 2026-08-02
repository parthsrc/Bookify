import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">

      <div className="max-w-screen-2xl mx-auto px-4 lg:px-10 py-14">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <Link
              to="/"
              className="text-3xl font-black tracking-tight"
            >
              <span className="text-gray-900 dark:text-white">
                Book
              </span>

              <span className="text-pink-600">
                ify
              </span>

            </Link>

            <p className="mt-5 text-gray-600 dark:text-gray-400 leading-7">
              Learn practical skills, build real-world projects, and grow your
              career with industry-focused online courses.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/courses"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition"
                >
                  Courses
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Categories */}

          <div>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Categories
            </h3>

            <ul className="mt-5 space-y-3">

              <li className="text-gray-600 dark:text-gray-400">
                Programming
              </li>

              <li className="text-gray-600 dark:text-gray-400">
                Frontend
              </li>

              <li className="text-gray-600 dark:text-gray-400">
                Backend
              </li>

              <li className="text-gray-600 dark:text-gray-400">
                AI & ML
              </li>

              <li className="text-gray-600 dark:text-gray-400">
                Cloud
              </li>

            </ul>

          </div>

          {/* Connect */}

          <div>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Connect
            </h3>

            <p className="mt-5 text-gray-600 dark:text-gray-400">
              support@bookify.com
            </p>

            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Jaipur, Rajasthan
            </p>

            <div className="flex gap-4 mt-6">

              {/* GitHub */}

              <a
                href="#"
                className="w-11 h-11 rounded-xl border border-gray-300 dark:border-zinc-700 flex items-center justify-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5A12 12 0 000 12.7c0 5.38 3.44 9.94 8.2 11.55.6.12.82-.27.82-.58v-2.05c-3.34.75-4.04-1.44-4.04-1.44-.55-1.44-1.33-1.82-1.33-1.82-1.09-.76.08-.75.08-.75 1.2.09 1.84 1.28 1.84 1.28 1.07 1.9 2.8 1.35 3.48 1.03.11-.81.42-1.35.76-1.66-2.67-.31-5.47-1.38-5.47-6.15 0-1.36.47-2.48 1.24-3.36-.13-.31-.54-1.57.12-3.27 0 0 1.01-.33 3.3 1.28a11.2 11.2 0 016 0c2.29-1.61 3.3-1.28 3.3-1.28.66 1.7.25 2.96.12 3.27.77.88 1.24 2 1.24 3.36 0 4.79-2.81 5.84-5.49 6.14.43.39.81 1.13.81 2.29v3.39c0 .32.22.7.82.58A12.22 12.22 0 0024 12.7 12 12 0 0012 .5z" />
                </svg>
              </a>

              {/* LinkedIn */}

              <a
                href="#"
                className="w-11 h-11 rounded-xl border border-gray-300 dark:border-zinc-700 flex items-center justify-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5A2.48 2.48 0 012.5 6 2.48 2.48 0 010 3.5 2.48 2.48 0 012.5 1 2.48 2.48 0 014.98 3.5zM.5 8h4V24h-4zM8 8h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4 0 4.75 2.63 4.75 6.04V24h-4v-8.25c0-1.97-.03-4.5-2.75-4.5-2.76 0-3.18 2.15-3.18 4.37V24H8z" />
                </svg>
              </a>

              {/* Twitter/X */}

              <a
                href="#"
                className="w-11 h-11 rounded-xl border border-gray-300 dark:border-zinc-700 flex items-center justify-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.9 2H22l-6.8 7.8L23 22h-6.3l-4.9-6.4L6.2 22H3l7.3-8.4L1 2h6.5l4.5 5.9L18.9 2z" />
                </svg>
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Bookify. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Built by <span className="font-semibold text-pink-600">Parth Singh</span>
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;