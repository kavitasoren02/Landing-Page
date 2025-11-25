"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Logo from "../assets/Frame 80.svg";
import Banner2 from "../assets/Banner2.svg";

export default function BannerSection2() {
  return (
    <section className="relative w-full min-h-[600px]">
      {/* Background Image */}
      <Image src={Banner2} alt="banner" fill className="object-cover" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* TOP-LEFT LOGO WITH LEFT SLIDE ANIMATION */}
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

      {/* CENTERED CONTENT */}
      <div
        className="
          absolute inset-0 
          flex flex-col items-center justify-center 
          text-center text-white
          px-12 sm:px-16 md:px-24 lg:px-[150px] xl:px-[190px]
          z-10
        "
      >
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-7xl"
        >
          Dolor Sit Amet Consectetur. Quis Adipiscing Purus Egestas Aliquam
          Viverra mi. Dolor Sit Amet Consectetur. Quis Adipiscing
        </motion.h1>
      </div>
    </section>
  );
}
