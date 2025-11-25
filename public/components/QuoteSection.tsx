"use client";

import { motion } from "framer-motion";

const fieldAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function QuoteSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 md:px-10 lg:px-32 bg-white">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center text-3xl sm:text-4xl font-bold text-[#222]"
      >
        REQUEST A QUOTE
      </motion.h2>

      {/* Form */}
      <div className="mt-12 max-w-5xl mx-auto">
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          
          {/* NAME */}
          <motion.div
            custom={1}
            variants={fieldAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <label className="text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="border bg-[#F4F4F4] h-12 px-3 text-gray-700"
              placeholder="Your Name"
            />
          </motion.div>

          {/* EMAIL */}
          <motion.div
            custom={2}
            variants={fieldAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <label className="text-gray-700 mb-1">E-mail</label>
            <input
              type="email"
              className="border bg-[#F4F4F4] h-12 px-3 text-gray-700"
              placeholder="Your Email"
            />
          </motion.div>

          {/* PHONE NUMBER */}
          <motion.div
            custom={3}
            variants={fieldAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <label className="text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              className="border bg-[#F4F4F4] h-12 px-3 text-gray-700"
              placeholder="Your Phone Number"
            />
          </motion.div>

          {/* TIME FRAME */}
          <motion.div
            custom={4}
            variants={fieldAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <label className="text-gray-700 mb-1">
              Time Frame <span className="text-red-500">*</span>
            </label>
            <select className="border bg-[#F4F4F4] h-12 px-3 text-gray-700">
              <option>Choose Time Frame</option>
            </select>
          </motion.div>

          {/* SIZE */}
          <motion.div
            custom={5}
            variants={fieldAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <label className="text-gray-700 mb-1">
              Size <span className="text-red-500">*</span>
            </label>
            <select className="border bg-[#F4F4F4] h-12 px-3 text-gray-700">
              <option>Choose Size</option>
            </select>
          </motion.div>

          {/* QUANTITY */}
          <motion.div
            custom={6}
            variants={fieldAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <label className="text-gray-700 mb-1">
              Quantity <span className="text-red-500">*</span>
            </label>
            <select className="border bg-[#F4F4F4] h-12 px-3 text-gray-700">
              <option>Choose Quantity</option>
            </select>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.div
            custom={7}
            variants={fieldAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:col-span-2"
          >
            <label className="text-gray-700 mb-1">
              Please Describe Your Project <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={6}
              className="border bg-[#F4F4F4] p-3 text-gray-700 resize-none"
              placeholder="Choose a project type"
            ></textarea>
          </motion.div>
        </form>

        {/* Terms */}
        <motion.p
          custom={8}
          variants={fieldAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-gray-600 text-lg mt-6"
        >
          By submitting this form you agree to our{" "}
          <span className="text-blue-600 cursor-pointer">Terms of Service</span>{" "}
          and{" "}
          <span className="text-blue-600 cursor-pointer">Privacy Policy</span>.
        </motion.p>

        {/* BUTTON */}
        <motion.div
          custom={9}
          variants={fieldAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <button className="bg-[#1959AC] text-white px-8 py-3 font-semibold hover:bg-[#0e3d7f] flex items-center gap-2 text-lg">
            Lorem Ipsum →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
