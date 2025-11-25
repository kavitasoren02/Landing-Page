"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Bike1 from "../assets/Bike1.svg";
import Bike2 from "../assets/Bike2.svg";
import Bike3 from "../assets/Bike3.svg";
import Bike4 from "../assets/Bike4.svg";
import Bike5 from "../assets/Bike5.svg";
import Bike6 from "../assets/Bike6.svg";
import Bike7 from "../assets/Bike7.svg";
import Bike8 from "../assets/Bike8.svg";

export default function GalleryShowcase() {
  return (
    <section className="min-h-screen bg-gray-50 p-6 md:p-8 lg:p-12">
      <div>
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT CONTENT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-10 w-full lg:w-1/2"
          >
            <div className="flex gap-6 items-end">
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <p className="text-sm font-semibold tracking-widest text-gray-700">
                    NO LIMITS
                  </p>

                  <h1 className="mt-3 text-4xl font-bold text-black md:text-5xl lg:text-6xl">
                    LOREM IPSUM DOLOR SIT AMET
                  </h1>

                  <p className="mt-4 text-base leading-relaxed text-gray-600">
                    Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
                  </p>
                </div>

                <button className="inline-flex items-center gap-2 bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 w-fit">
                  Lorem ipsum
                  <span className="text-lg">→</span>
                </button>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  className="bg-gray-300 object-cover w-32 h-60"
                  src={Bike3}
                  alt="image6"
                />
              </motion.div>
            </div>

            {/* LEFT BOTTOM IMAGES */}
            <div className="flex gap-5 w-full h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Image className="bg-gray-300 object-cover h-80" src={Bike5} alt="Image 8" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <Image className="bg-gray-300 object-cover w-full h-80" src={Bike6} alt="Image 7" />
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE GRID */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-5 w-full lg:w-1/2"
          >
            {/* ROW 1 */}
            <div className="flex gap-5 justify-end items-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Image className="object-cover w-28 h-50" src={Bike1} alt="image1" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <Image className="object-cover h-50" src={Bike2} alt="Image2" />
              </motion.div>
            </div>

            {/* ROW 2 LARGE IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Image className="object-cover w-full h-80" src={Bike4} alt="image3" />
            </motion.div>

            {/* ROW 3 SMALL IMAGES */}
            <div className="flex gap-5">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Image className="object-cover h-24 w-full" src={Bike7} alt="Image 4" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image className="object-cover h-24 w-full" src={Bike8} alt="Image 5" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
