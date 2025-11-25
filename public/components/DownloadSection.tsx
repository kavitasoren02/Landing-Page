"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AppStore from "../assets/AppStore.svg";
import GooglePlayStore from "../assets/GooglePlayStore.svg";
import MobileImg from "../assets/Mobile.png";

export default function DownloadSection() {
  return (
    <section className="w-full bg-[#F8F8F8] pt-[100px] overflow-hidden min-h-[600px] px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="w-full flex flex-col md:flex-row justify-between gap-16 lg:gap-20 xl:gap-28 h-full">

        {/* LEFT CONTENT (ANIMATED) */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 lg:w-[40%] flex flex-col justify-center"
        >
          <p className="text-blue-600 font-semibold text-lg mb-2">
            Lorem Ipsum
          </p>

          <h2 className="text-4xl sm:text-4xl lg:text-4xl font-bold text-black leading-tight mb-4">
            Lorem Ipsum Dolor <br /> Sit Amet
          </h2>

          <p className="text-gray-600 text-[16px] mb-6 leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet
            morbi suspendisse convallis. Urna a urna lectus donec felis risus
            duis pellentesque. Pellentesque ultricies ipsum.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-6 mt-4">
            <Image
              src={GooglePlayStore}
              alt="Google Play"
              className="w-[170px] h-[80px] cursor-pointer"
            />
            <Image
              src={AppStore}
              alt="App Store"
              className="w-[170px] h-[80px] cursor-pointer"
            />
          </div>
        </motion.div>

        {/* RIGHT IMAGE (ANIMATED) */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hidden md:flex w-full md:w-1/2 lg:w-[40%] justify-center md:justify-end"
        >
          <Image
            src={MobileImg}
            alt="Mobile App Preview"
            className="w-[350px] sm:w-[420px] md:w-[480px] lg:w-[520px] xl:w-[550px] object-contain drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
