"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import section2icon from "../assets/section-2 icon.svg";
import Section2Image from "../assets/Section2-Image.svg";

export default function SectionThree() {
  return (
    <section className="w-full bg-white pt-[100px] overflow-hidden min-h-[1000px] px-4 sm:px-6 md:px-10 lg:px-20">
      
      <div className="w-full flex flex-col md:flex-row justify-between gap-16 lg:gap-20 xl:gap-28 h-full">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 lg:w-[40%] flex flex-col justify-center"
        >
          <p className="text-[#1959AC] text-xl font-medium mb-3">
            Lorem ipsum dolor sit amet
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-3xl font-bold text-[#222222] mb-4 leading-tight">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR.
          </h2>

          <p className="text-gray-600 text-lg mb-10 max-w-xl">
            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam
            leo eleifend condimentum in vitae faucibus.
          </p>

          {/* LIST ITEMS */}
          <div className="space-y-10">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <Image
                  src={section2icon}
                  alt="icon"
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <h3 className="text-lg font-bold mb-1 text-black">
                    Lorem ipsum dolor sit amet consectetur.
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu
                    eu non viverra. Risus quam mattis senectus vitae interdum
                    odio ornare gravida vestibulum. Donec turpis nulla felis
                    mauris eu donec. Ipsum sit ut tortor.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hidden md:block w-full md:w-1/2 lg:w-[40%] h-[800px] relative overflow-hidden shadow-xl"
        >
          <Image
            src={Section2Image}
            alt="Section Visual"
            fill
            className="object-cover"
          />
        </motion.div>

      </div>

      {/* GRADIENT BAR */}
      <div className="w-full mt-6">
        <div className="h-6 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041]"></div>
      </div>

    </section>
  );
}
