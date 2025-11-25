"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Section9 from "../assets/Section9-Image.svg";

export default function SectionResearchPlanDesign() {
  return (
    <section className="w-full py-20 px-6 sm:px-10 lg:px-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            relative 
            md:flex md:flex-col md:items-center md:text-center
            lg:items-start lg:text-left
          "
        >
          <h2 className="text-4xl font-bold text-[#0F1D40]">
            LOREM IPSUM DOLOR SIT AMET
          </h2>

          {/* TABS */}
          <div className="flex mt-6 border rounded-md overflow-hidden w-max md:mx-auto lg:mx-0">
            <button className="px-8 py-3 text-[#0F1D40] bg-[#F4F7FC] border-r">
              Research
            </button>
            <button className="px-8 py-3 text-[#0F1D40] bg-white border-r">
              Plan
            </button>
            <button className="px-8 py-3 text-[#0F1D40] bg-white">
              Design
            </button>
          </div>

          <p className="text-gray-600 text-lg max-w-xl mt-6 leading-relaxed">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque pellentesque donec et tellus ac varius tortor, bibendum.
          </p>

          <button className="mt-6 text-[#0F62FE] flex items-center gap-2 font-semibold md:mx-auto lg:mx-0">
            Check tools →
          </button>

          {/* DESKTOP DOTS */}
          <div className="absolute top-16 -right-20 hidden lg:block pointer-events-none opacity-60">
            {[...Array(6)].map((_, row) => (
              <div key={row} className="flex gap-4 my-2">
                {[...Array(6)].map((_, col) => (
                  <span
                    key={col}
                    className={`w-1.5 h-1.5 rounded-full ${
                      Math.random() > 0.7 ? "bg-[#A78BFA]" : "bg-[#D1D5DB]"
                    }`}
                  ></span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <div
          className="
            flex flex-col 
            justify-center 
            md:items-center      /* center on tablet */
            lg:items-end         /* right side on desktop */
          "
        >
          {/* TABLET DOTS */}
          <div className="w-full md:flex lg:hidden justify-center mb-6 opacity-60 pointer-events-none">
            <div>
              {[...Array(6)].map((_, row) => (
                <div key={row} className="flex gap-4 my-2 justify-center">
                  {[...Array(6)].map((_, col) => (
                    <span
                      key={col}
                      className={`w-1.5 h-1.5 rounded-full ${
                        Math.random() > 0.7 ? "bg-[#A78BFA]" : "bg-[#D1D5DB]"
                      }`}
                    ></span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={Section9}
              alt="Handshake"
              className="w-full max-w-xl shadow-lg object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
