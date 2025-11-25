"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroImage from "../assets/Hero-Image.svg";

export default function HeroSection() {
  return (
    <section className="w-full min-h-[600px] flex flex-col md:flex-row overflow-hidden">
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 h-auto flex flex-col justify-center px-4 sm:px-6 md:px-10 lg:px-[60px] py-12"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-3xl font-bold text-[#222222] mb-4 leading-tight">
          LOREM IPSUM DOLOR SIT AMET
        </h2>

        <p className="text-gray-600 text-base sm:text-lg lg:text-2xl mb-4">
          Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis
          elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea
          morbi libero imperdiet neque. Justo suspendisse tristique posuere
          quis eget viverra. Nunc euismod ultrices etiam nulla habitasse.
        </p>

        <div className="flex flex-row items-center gap-3 w-full max-w-xl mt-4">
          <input
            type="email"
            placeholder="example@mail.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />

          <button className="px-6 py-3 bg-[#1959AC] text-white rounded-md text-lg whitespace-nowrap hover:bg-[#143f7c] transition flex items-center gap-2">
            Subscribe →
          </button>
        </div>

        <div className="flex items-center gap-2 mt-4 text-[#1959AC]">
          <div className="w-6 h-6 rounded-full bg-[#1959AC] flex justify-center items-center">
            <span className="text-white text-lg">✔</span>
          </div>
          <p className="text-gray-600 text-base sm:text-lg lg:text-2xl font-medium">
            No credit required!
          </p>
        </div>
      </motion.div>

      {/* RIGHT IMAGE — ONLY DESKTOP */}
      <motion.div
        initial={{ opacity: 0, x: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="hidden lg:block w-1/2 h-[700px] xl:h-[800px] relative overflow-hidden"
      >
        <Image
          src={HeroImage}
          alt="Hero Image"
          fill
          className="object-cover rounded-lg"
        />

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/90 to-transparent"></div>
      </motion.div>
    </section>
  );
}
