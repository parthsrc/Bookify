import React from "react";
import { Link } from "react-router-dom";

function About() {
  const features = [
    {
      title: "Curated Courses",
      description:
        "High-quality learning paths covering programming, AI, cloud, placement preparation, and modern development.",
    },
    {
      title: "Hands-on Projects",
      description:
        "Build real-world projects that strengthen your portfolio and prepare you for interviews.",
    },
    {
      title: "Industry Ready",
      description:
        "Learn tools, workflows, and technologies used by modern software companies.",
    },
    {
      title: "Lifetime Learning",
      description:
        "Regularly updated courses ensure you stay current with the latest technologies.",
    },
  ];

  const stats = [
    {
      value: "20+",
      label: "Premium Courses",
    },
    {
      value: "10K+",
      label: "Active Learners",
    },
    {
      value: "95%",
      label: "Learner Satisfaction",
    },
    {
      value: "24/7",
      label: "Support",
    },
  ];

  return (
    <section className="max-w-screen-2xl mx-auto px-4 lg:px-10 py-16">

      {/* Hero */}

      <div className="max-w-4xl">

        <p className="uppercase tracking-[0.3em] font-semibold text-pink-600 mb-4">
          About Bookify
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
          Learn Skills.
          <br />
          Build Projects.
          <br />
          Grow Your Career.
        </h1>

        <p className="mt-8 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-3xl">
          Bookify is a modern online learning platform built for students,
          developers, and professionals who want practical, career-focused
          education. Every course is designed to transform knowledge into
          real-world skills through structured learning and hands-on projects.
        </p>

      </div>

      {/* Story */}

      <div className="grid lg:grid-cols-2 gap-14 mt-24">

        <div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our Story
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-8 mb-6">
            Online education has made learning more accessible than ever, but
            finding well-structured, practical content remains a challenge.
            Bookify was created to solve that problem.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-8">
            We focus on helping learners understand concepts, apply them
            through projects, and build confidence for real interviews and
            professional software development.
          </p>

        </div>

        <div className="rounded-3xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm">

          <div className="space-y-8">

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Practical Learning
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-400 leading-7">
                Every course focuses on implementation instead of passive video
                watching.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Career Focused
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-400 leading-7">
                Learn technologies and workflows companies actually use.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Learn at Your Pace
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-400 leading-7">
                Access courses anytime and revisit lessons whenever you need.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Features */}

      <div className="mt-24">

        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          What Makes Bookify Different
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-7">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

        {stats.map((stat) => (

          <div
            key={stat.label}
            className="text-center rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm"
          >

            <h2 className="text-4xl md:text-5xl font-bold text-pink-600">
              {stat.value}
            </h2>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              {stat.label}
            </p>

          </div>

        ))}

      </div>

      {/* CTA */}

      <div className="mt-24 rounded-3xl bg-gradient-to-r from-red-500 to-pink-900 p-12 text-center text-white">

        <h2 className="text-4xl font-bold">
          Ready to Start Learning?
        </h2>

        <p className="max-w-2xl mx-auto mt-5 leading-8 text-indigo-100">
          Explore our growing collection of practical courses and begin building
          the skills that matter for your future career.
        </p>

        <Link
          to="/courses"
          className="inline-block mt-8 px-8 py-3 rounded-xl bg-white text-red-700 font-semibold hover:bg-gray-100 transition"
        >
          Explore Courses
        </Link>

      </div>

    </section>
  );
}

export default About;