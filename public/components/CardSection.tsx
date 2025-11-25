"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Card1 from "../assets/Card1.svg";
import Card2 from "../assets/Card2.svg";
import Card3 from "../assets/Card3.svg";
import Card4 from "../assets/Card4.svg";

// CARD ANIMATION VARIANTS
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.2,
    },
  }),
};

export default function CardsSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      
      {/* TOP TEXT */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-[#1959AC] text-xl font-medium mb-2"
      >
        Lorem ipsum dolor sit amet
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-4xl font-bold text-[#222222] mb-4 leading-tight"
      >
        LOREM IPSUM DOLOR SIT
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-gray-600 text-lg mb-10 max-w-3xl"
      >
        Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
        donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in
        nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus 
        lectus.
      </motion.p>

      {/* RESPONSIVE GRID */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-14 gap-x-8 place-items-center">
        
        {[Card1, Card2, Card3, Card4].map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              border rounded-xl shadow-md bg-white overflow-hidden
              hover:shadow-2xl transition-all duration-300 hover:-translate-y-3

              w-full                
              max-w-[480px]        
              sm:max-w-[420px]      
              md:max-w-[450px]      
              lg:max-w-[480px]      

              h-[450px] sm:h-[440px] md:h-[460px] lg:h-[480px]
              flex flex-col
            "
          >
            {/* IMAGE */}
            <div className="w-full h-[55%] overflow-hidden">
              <Image
                src={card}
                alt={`card-${i}`}
                width={800}
                height={800}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 flex flex-col justify-between h-[45%]">
              <h3 className="font-bold text-xl mb-3 text-left text-black">
                Lorem ipsum dolor sit amet consectetur.
              </h3>

              <p className="text-gray-700 text-left text-[15px] leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat
                faucibus cursus nisi. Nunc montes molestie a vitae vulputate.
              </p>

              <motion.a
                whileHover={{ x: 6 }}
                href="#"
                className="text-[#0546D2] font-semibold text-left mt-3 inline-block"
              >
                Learn More →
              </motion.a>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
