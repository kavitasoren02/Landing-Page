"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Section11 from "../assets/Section7-Image.svg";

export default function SectionMoto() {
  return (
    <section className="w-full bg-white py-0 px-0">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0">

        {/* LEFT IMAGE — EXACT SAME UI */}
        <div className="w-full h-full">
          <Image
            src={Section11}
            alt="Moto Image"
            className="w-full h-[550px] md:h-[600px] lg:h-[650px] object-cover"
          />
        </div>

        {/* RIGHT CONTENT — SAME UI & ANIMATION */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full bg-[#F4F4F4] flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-16"
        >
          <p className="text-blue-600 font-semibold text-lg">Lorem Ipsum</p>

          <h2 className="text-4xl font-bold text-black leading-tight mb-4">
            LOREM IPSUM DOLOR SIT <br /> AMET CONSECTETUR. ENIM DONEC.
          </h2>

          <p className="text-gray-600 text-lg mb-6 max-w-xl">
            Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
          </p>

          <div className="grid grid-cols-2 gap-y-5 gap-x-12 text-lg font-medium text-gray-700 mb-8">
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>

          <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg text-lg font-semibold flex items-center gap-2 w-fit">
            Lorem Ipsum →
          </button>
        </motion.div>
      </div>

      {/* GRADIENT BAR — EXACT SAME UI */}
      <div className="w-full h-6 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] mt-6 mb-10"></div>
    </section>
  );
}
