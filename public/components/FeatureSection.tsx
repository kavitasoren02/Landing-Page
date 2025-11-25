"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
import SectionImage from "../assets/Section1-Image.svg";
import { IoCallOutline } from "react-icons/io5";


export default function FeatureSection() {
  return (
    <section className="w-full bg-white pt-[100px] overflow-hidden min-h-[900px]">
      <div
        className="
          w-full flex flex-col 
          pl-4 sm:pl-6 md:pl-10 lg:pl-[60px]
          pr-0
          py-10
          border border-gray-200
          bg-white
        "
      >
        {/* LEFT + RIGHT CONTENT */}
        <div
          className="w-full flex flex-col md:flex-row justify-between 
            md:gap-16 lg:gap-24 xl:gap-32 "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="
              w-full md:w-1/2 lg:w-[35%]
              flex flex-col justify-center
              bg-white
              p-8
              shadow-[-25px_0_40px_rgba(0,0,0,0.15)]
            "
          >
            <p className="text-[#1959AC] text-xl mb-2 font-medium">
              Lorem ipsum dolor sit
            </p>

            <h2 className="text-4xl md:text-4xl font-bold text-[#222222] leading-tight mb-4">
              LOREM IPSUM <br /> DOLOR SIT AMET
            </h2>

            <p className="text-gray-600 text-lg mb-8">
              Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
              facilisis donec dui.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <Image
                  src={img1}
                  alt="img1"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <p className="text-gray-700 text-lg">
                  Lorem ipsum dolor sit amet consectetur. Vestibulum ornare
                  fermentum feugiat.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <Image
                  src={img2}
                  alt="img2"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <p className="text-gray-700 text-lg">
                  Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus
                  faucibus urna ullamcorper id dui cursus. Venenatis.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <Image
                  src={img3}
                  alt="img3"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <p className="text-gray-700 text-lg">
                  Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi
                  metus gravida eu facilisi enim. Ut diam auctor tortor
                  tincidunt.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="
              hidden md:block 
              w-full md:w-1/2 lg:w-[35%]
              h-[850px]
              relative overflow-hidden 
              pr-0 mr-0
            "
          >
            <Image
              src={SectionImage}
              alt="SectionImage"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* BUTTONS */}
        <div className="w-full flex items-center gap-6 mt-10">
          <button className="bg-[#1959AC] text-white px-6 py-3 rounded-lg shadow hover:bg-[#164c91] transition text-lg font-semibold flex items-center gap-1">
            Lorem Ipsum →
          </button>

          <div className="flex items-center gap-3 bg-[#eef4ff] px-6 py-3 rounded-full shadow-sm hover:shadow-md transition">
            <IoCallOutline className="text-[#043898] text-xl" />
            <span className="text-[#043898] font-semibold text-lg">
              123456789
            </span>
          </div>
        </div>

        {/* GRADIENT BAR */}
        <div className="w-full h-6 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] mt-6"></div>
      </div>
    </section>
  );
}
