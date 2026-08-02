import React from "react";
import List from "../assets/Data/list.json";
import Cards from "./Cards";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function FreeCourses() {
  const freeCourses = List.filter((course) => course.price === 0);

  return (
    <section className="max-w-screen-2xl mx-auto px-4 lg:px-10 py-16">

      {/* Heading */}

      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">

        <div>

          <span className="text-pink-600 font-semibold uppercase tracking-widest">
            Free Learning
          </span>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Free Courses
          </h2>

          <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-400 leading-7">
            Start learning today with our collection of completely free
            programming and technology courses.
          </p>

        </div>

        <p className="mt-4 md:mt-0 text-gray-500 dark:text-gray-400">
          {freeCourses.length} Free Courses
        </p>

      </div>

      {/* Slider */}

      <div className="relative">

        {/* Previous */}

        <button
          className="course-prev hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 shadow-lg items-center justify-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition"
        >
          &#8249;
        </button>

        {/* Next */}

        <button
          className="course-next hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 shadow-lg items-center justify-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition"
        >
          &#8250;
        </button>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".course-prev",
            nextEl: ".course-next",
          }}
          pagination={{
            clickable: true,
          }}
          loop={freeCourses.length > 3}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
        >
          {freeCourses.map((item) => (
            <SwiperSlide key={item.id}>
              <Cards item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}

export default FreeCourses;