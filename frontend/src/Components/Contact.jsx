import React from "react";

function Contact() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 lg:px-10 py-16">

      {/* Heading */}

      <div className="text-center max-w-3xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Contact <span className="text-pink-600">Bookify</span>
        </h1>

        <p className="mt-5 text-lg text-gray-600 dark:text-gray-400">
          We'd love to hear from you. Whether you have a question about courses,
          partnerships, technical issues, or simply want to say hello, our team
          is here to help.
        </p>

      </div>

      {/* Main Section */}

      <div className="grid lg:grid-cols-2 gap-10 mt-14">

        {/* Contact Details */}

        <div className="rounded-3xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm">

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Get in Touch
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-400 leading-7">
            Have questions regarding enrollment, course access, certificates or
            technical support? Reach out anytime and we'll respond as quickly as
            possible.
          </p>

          <div className="mt-10 space-y-8">

            <div>
              <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-500">
                Email
              </p>

              <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                support@bookify.com
              </h3>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-500">
                Phone
              </p>

              <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                +91 98765 43210
              </h3>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-500">
                Location
              </p>

              <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                Jaipur, Rajasthan, India
              </h3>
            </div>

          </div>

        </div>

        {/* Contact Form */}

        <div className="rounded-3xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm">

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Send us a Message
          </h2>

          <form className="mt-8 space-y-6">

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

            <div>

              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </label>

              <input
                type="email"
                placeholder="parth@example.com"
                className="w-full rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-3 outline-none focus:border-pink-600 transition"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                Subject
              </label>

              <input
                type="text"
                placeholder="Course Inquiry"
                className="w-full rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-3 outline-none focus:border-pink-600 transition"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-3 resize-none outline-none focus:border-pink-600 transition"
              />

            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 transition-all duration-300 hover:shadow-lg"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;