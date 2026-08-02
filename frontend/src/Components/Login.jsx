import React, { useState } from "react";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-12 bg-gray-50 dark:bg-zinc-950">

      <div className="w-full max-w-md rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg p-8">

        {/* Heading */}

        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {isLogin
              ? "Login to continue your learning journey."
              : "Create your Bookify account and start learning."}
          </p>

        </div>

        {/* Toggle */}

        <div className="flex bg-gray-100 dark:bg-zinc-800 rounded-xl p-1 mb-8">

          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-2.5 rounded-lg font-medium transition ${
              isLogin
                ? "bg-pink-600 text-white shadow"
                : "text-gray-600 dark:text-gray-300"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-2.5 rounded-lg font-medium transition ${
              !isLogin
                ? "bg-pink-600 text-white shadow"
                : "text-gray-600 dark:text-gray-300"
            }`}
          >
            Sign Up
          </button>

        </div>

        {/* Form */}

        <form className="space-y-5">

          {!isLogin && (

            <div>

              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Parth Singh"
                className="w-full rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-3 outline-none focus:border-pink-600 transition"
              />

            </div>

          )}

          <div>

            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>

            <input
              type="email"
              placeholder="parth@mail.com"
              className="w-full rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-3 outline-none focus:border-pink-600 transition"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-3 outline-none focus:border-pink-600 transition"
            />

          </div>

          {!isLogin && (

            <div>

              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-3 outline-none focus:border-pink-600 transition"
              />

            </div>

          )}

          {isLogin && (

            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400">

                <input
                  type="checkbox"
                  className="accent-pink-600"
                />

                Remember me

              </label>

              <a
                href="/forgot-password"
                className="text-pink-600 hover:underline"
              >
                Forgot Password?
              </a>

            </div>

          )}

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-semibold transition cursor-pointer"          >
            {isLogin ? "Login" : "Create Account"}
          </button>

        </form>

        {/* Divider */}

        <div className="flex items-center gap-4 my-8">

          <div className="flex-1 h-px bg-gray-300 dark:bg-zinc-700"></div>

          <span className="text-sm text-gray-500">
            OR
          </span>

          <div className="flex-1 h-px bg-gray-300 dark:bg-zinc-700"></div>

        </div>

        {/* Social */}

        <div className="grid grid-cols-2 gap-4">

          <button className="py-3 rounded-xl border border-gray-300 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800 transition cursor-pointer">
            Google
          </button>

          <button className="py-3 rounded-xl border border-gray-300 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800 transition cursor-pointer">
            GitHub
          </button>

        </div>

        {/* Bottom */}

        <div className="text-center mt-8 text-gray-600 dark:text-gray-400">

          {isLogin ? (
            <>
              Don't have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-pink-600 font-semibold hover:underline cursor-pointer"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-pink-600 font-semibold hover:underline cursor-pointer"
              >
                Login
              </button>
            </>
          )}

        </div>

      </div>

    </div>
  );
}

export default Login;