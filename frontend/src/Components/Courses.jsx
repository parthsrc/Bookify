import React, { useState } from "react";
import Cards from "./Cards";
import List from "../assets/data/list.json";

function Courses() {
  const categories = [
  "All Courses",
  ...new Set(List.map((course) => course.category)),
];

  const [activeCategory, setActiveCategory] = useState("All Courses");

  const filterData =
    activeCategory === "All Courses"
      ? List
      : List.filter((item) => item.category === activeCategory);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 lg:px-10 py-10">

      {/* Heading */}

      <div className="mb-8">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Explore Courses
        </h1>

        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Learn new skills from carefully curated courses.
        </p>

      </div>

      {/* Categories */}

      <div className="flex gap-3  overflow-x-auto whitespace-nowrap pb-4 scrollbar-hide">

        {categories.map((category) => (

          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`shrink-0 px-5 py-2.5 rounded-full font-medium transition-all cursor-pointer duration-300 border

            ${
              activeCategory === category
                ? "bg-pink-600 text-white border-pink-600 shadow-md"
                : "bg-white dark:bg-zinc-900 border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-pink-600 hover:text-white hover:border-pink-600"
            }`}
          >
            {category}
          </button>

        ))}

      </div>

      {/* Result Count */}

      <div className="mt-6 flex items-center justify-between">

        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {activeCategory}
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          {filterData.length} Course{filterData.length !== 1 && "s"}
        </p>

      </div>

      {/* Courses */}

      {filterData.length > 0 ? (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-8">

          {filterData.map((item) => (
            <Cards key={item.id} item={item} />
          ))}

        </div>

      ) : (

        <div className="mt-20 text-center">

          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            No courses found
          </h3>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Try selecting another category.
          </p>

        </div>

      )}

    </div>
  );
}

export default Courses;