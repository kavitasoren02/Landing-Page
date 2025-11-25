"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Logo from "../assets/Frame 80.svg";
import Banner from "../assets/Banner1-Image.svg";

export default function FullBannerSection() {
  return (
    <section className="relative w-full min-h-[1000px] mt-20">
      {/* BACKGROUND IMAGE */}
      <Image src={Banner} alt="banner" fill className="object-cover" />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* TOP-LEFT LOGO — SLIDES FROM LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-6 left-6 sm:top-10 sm:left-10 z-20"
      >
        <Image
          src={Logo}
          alt="logo"
          className="w-[70px] sm:w-[90px] md:w-[100px]"
        />
      </motion.div>

      {/* CENTER CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-12 sm:px-16 md:px-24 lg:px-[150px] xl:px-[190px]">

        {/* HEADING — SLIDE LEFT */}
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-7xl"
        >
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS
          EGESTAS ALIQUAM VIVERRA MI.
        </motion.h1>

        {/* PARAGRAPH — SLIDE LEFT */}
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="mt-6 lg:text-2xl sm:text-lg max-w-7xl"
        >
          Lorem ipsum dolor sit amet consectetur. Mattis justo euismod
          volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis
          justo pellentesque id sed. Id tellus id luctus id. At quis nunc
          libero urna arcu vulputate sed ut. Nisi porta massa diam condimentum
          nulla quam. 
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec
          condimentum ultrices non. Ornare semper in tincidunt pellentesque
          cras mauris in vitae.
        </motion.p>

        {/* BUTTON — SLIDE LEFT */}
        <motion.button
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.6 }}
          className="bg-white text-[#164c91] px-6 py-3 rounded-lg shadow transition text-lg font-semibold flex items-center gap-1 mt-20"
        >
          Lorem Ipsum →
        </motion.button>
      </div>
    </section>
  );
}
