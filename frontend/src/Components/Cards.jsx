import React from "react";

function Cards({ item }) {
  return (
    <div className="group h-full">
      <div className="flex flex-col h-full overflow-hidden rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

        {/* Course Image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Category */}
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-pink-600 text-white text-xs font-semibold shadow-md">
            {item.category}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">

          <h2 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2">
            {item.title}
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400 line-clamp-3">
            {item.description}
          </p>

          {/* Footer */}
          <div className="mt-auto pt-6 flex items-center justify-between">

            {item.price === 0 ? (
              <span className="px-4 py-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-semibold text-sm">
                FREE
              </span>
            ) : (
              <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                ₹{item.price}
              </span>
            )}

            <button className="px-5 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-medium transition-all duration-300 hover:scale-105">
              Enroll
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;