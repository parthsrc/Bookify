import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";


function Navbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [mobileSearch, setMobileSearch] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();

    const keyword = search.trim();

    if (!keyword) return;

    navigate(`/search?q=${encodeURIComponent(keyword)}`);
    setSearch("");
  };

  return (
    <>
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl border-b border-gray-200 dark:border-zinc-800">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-10">
      {mobileSearch ? (

  <div className="flex items-center h-20 gap-3">

    <button
      onClick={() => setMobileSearch(false)}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>

    <form
      onSubmit={(e) => {
        handleSearch(e);
        setMobileSearch(false);
      }}
      className="flex-1"
    >
      <input
        autoFocus
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search courses..."
        className="w-full h-11 rounded-xl border border-gray-300 dark:border-zinc-700 px-4 outline-none bg-white dark:bg-zinc-900"
      />
    </form>

  </div>

      ) : (

        <div className="flex items-center justify-between h-20">

          {/* Left */}

          <div className="flex items-center gap-6">

            {/* Mobile Menu */}

            <button
  onClick={() => setMobileMenu(true)}
  className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-gray-800 dark:text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
</button>

            {/* Logo */}

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

          </div>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-2">

            {navItems.map((item) => (

              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl font-medium transition ${
                    isActive
                      ? "bg-pink-100 text-pink-700 dark:bg-pink-600/20 dark:text-pink-400"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-zinc-800"
                  }`
                }
              >
                {item.name}
              </NavLink>

            ))}

          </nav>

          {/* Right */}

          <div className="flex items-center gap-3">

            {/* Search */}

            <form
              onSubmit={handleSearch}
              className="hidden md:flex"
            >

              <div className="flex items-center gap-3 h-11 px-4 rounded-full border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900">

                <button type="submit">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="8"
                      strokeWidth="2"
                    />

                    <path
                      d="m21 21-4.3-4.3"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                  </svg>

                </button>

                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search courses..."
                  className="bg-transparent outline-none w-52 lg:w-72 text-gray-800 dark:text-white placeholder:text-gray-500"
                />

              </div>

            </form>

            {/* Mobile Search */}

<button
  onClick={() => setMobileSearch(true)}
  className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800"
>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-700 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="8"
                  strokeWidth="2"
                />

                <path
                  d="m21 21-4.3-4.3"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

              </svg>

            </button>

            {/* Theme */}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-11 h-11 rounded-xl flex items-center justify-center hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
            >

              {darkMode ? (

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0L16.95 7.05M7.05 16.95l-1.414 1.414M12 7a5 5 0 100 10 5 5 0 000-10z"
                  />
                </svg>

              ) : (

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64 13A9 9 0 1111 2.36a7 7 0 0010.64 10.64z" />
                </svg>

              )}

            </button>

            {/* Login */}

            <Link
              to="/login"
              className="hidden sm:flex items-center justify-center h-11 px-6 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-semibold transition"
            >
              Login
            </Link>

          </div>

        </div>

      )}

      </div>
      </header>
    <div>
      {mobileMenu && (
  <>
    {/* Overlay */}

    <div
      onClick={() => setMobileMenu(false)}
      className="fixed inset-0 bg-black/40 z-40"
    />

    {/* Drawer */}

    <div className="fixed top-0 left-0 h-full w-72 bg-white dark:bg-zinc-900 z-50 shadow-2xl p-6 flex flex-col animate-[slideIn_.25s_ease]">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <Link
          to="/"
          onClick={() => setMobileMenu(false)}
          className="text-3xl font-black"
        >
          Book
          <span className="text-pink-600">
            ify
          </span>
        </Link>

        <button
          onClick={() => setMobileMenu(false)}
          className="text-3xl"
        >
          ×
        </button>

      </div>

      {/* Navigation */}

      <nav className="flex flex-col gap-2">

        {navItems.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setMobileMenu(false)}
            className="px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
          >
            {item.name}
          </NavLink>

        ))}

      </nav>

      {/* Login */}

      <Link
        to="/login"
        onClick={() => setMobileMenu(false)}
        className="mt-8 text-center bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl font-semibold transition"
      >
        Login
      </Link>

    </div>
  </>
)}
   </div>
    </>
  );
}

export default Navbar;