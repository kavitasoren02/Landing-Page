"use client";

import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <section className="w-full bg-white">

      {/* ===================== TOP SECTION ===================== */}
      <div className="w-full flex flex-col justify-center items-center text-center py-24 px-4">

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-200 px-6 py-2 rounded-md font-bold text-gray-900 text-sm"
        >
          LOGO
        </motion.div>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F1D40] leading-snug"
        >
          LOREM IPSUM DOLOR SIT AMET <br /> CONSECTETUR. DUI.
        </motion.h2>

        {/* PARAGRAPH */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 text-gray-600 text-sm max-w-md"
        >
          Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor
          pharetra tempor quis arcu. Ipsum nullam.
        </motion.p>

        {/* BUTTON */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-6 bg-[#1959AC] text-white px-6 py-3 rounded-md text-sm shadow hover:bg-[#164c91] transition flex items-center gap-2"
        >
          Lorem Ipsum →
        </motion.button>
      </div>

      {/* ===================== FOOTER ===================== */}
      <footer className="w-full bg-[#0F1623] text-gray-300 py-20 px-6 sm:px-12 lg:px-24">

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-12">

          {/* LEFT LOGO BOX */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 flex flex-col"
          >
            <div className="bg-gray-200 px-5 py-2 rounded-sm font-bold text-gray-900 text-sm w-fit">
              LOGO
            </div>
          </motion.div>

          {/* FOOTER COLUMNS */}
          {[1, 2, 3, 4].map((col, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 * (index + 1) }}
            >
              <h4 className="text-white font-semibold text-sm mb-4">Lorem Ipsum</h4>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </motion.div>
          ))}
        </div>
      </footer>

    </section>
  );
}
