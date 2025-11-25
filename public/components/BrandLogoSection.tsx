"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// IMPORT YOUR IMAGES HERE
import Hero from "../assets/Hero_MotoCorp.svg 1.svg";
import Honda from "../assets/Honda_Logo.svg 1.svg";
import Bajaj from "../assets/Bajaj-Auto-Logo 1.svg";

import TVS from "../assets/TVS_Motor_Company_Logo 1.svg";
import RoyalEnfield from "../assets/royal-enfield-logo-2014-present-1024x742 1.svg";
import Yamaha from "../assets/YAMAHA.svg";

import Ktm from "../assets/KTM-Logo.svg 1.svg";
import Ola from "../assets/Ola-Electric 1.svg";
import Ather from "../assets/AtherLogo 1.svg";

import Revolt from "../assets/new-logo-1 1.svg";
import UltraViolet from "../assets/Ultraviolette_Logo 1.svg";
import Tork from "../assets/ANI-20221101121927 1.svg";

export default function BrandLogosSection() {
  return (
    <section className="w-full bg-white py-20">
      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#222] px-4"
      >
        LOREM IPSUM DOLOR SIT AMET <br /> CONSECTETUR. COMMODO LEO AMET.
      </motion.h2>

      {/* ROW 1 – SLIDE LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          mt-16 grid grid-cols-2 
          sm:grid-cols-3 
          lg:grid-cols-4 
          gap-6 
          px-4 sm:px-8 md:px-12 lg:px-20 
          place-items-center
        "
      >
        <motion.div initial={{ scale: 0.8 }} whileInView={{ scale: 1 }}>
          <Image src={Hero} width={100} alt="hero" />
        </motion.div>
        <motion.div initial={{ y: -50 }} whileInView={{ y: 0 }}>
          <Image src={Honda} width={110} alt="honda" />
        </motion.div>
        <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }}>
          <Image src={Bajaj} width={110} alt="bajaj" />
        </motion.div>
        <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }}>
          <Image src={TVS} width={105} alt="tvs" />
        </motion.div>
      </motion.div>

      {/* ROW 2 – SLIDE UP */}
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          mt-10 grid grid-cols-2 
          sm:grid-cols-3 
          lg:grid-cols-4 
          gap-6 
          px-4 sm:px-8 md:px-12 lg:px-20 
          place-items-center
        "
      >
        <motion.div initial={{ x: -80 }} whileInView={{ x: 0 }}>
          <Image src={RoyalEnfield} width={130} alt="Royal Enfield" />
        </motion.div>
        <motion.div initial={{ scale: 0.6 }} whileInView={{ scale: 1 }}>
          <Image src={Yamaha} width={130} alt="Yamaha" />
        </motion.div>
        <motion.div initial={{ y: 80 }} whileInView={{ y: 0 }}>
          <Image src={Ktm} width={120} alt="KTM" />
        </motion.div>
        <motion.div initial={{ x: 80 }} whileInView={{ x: 0 }}>
          <Image src={Ather} width={130} alt="Ather" />
        </motion.div>
      </motion.div>

      {/* ROW 3 – SLIDE RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          mt-10 grid grid-cols-2 
          sm:grid-cols-3 
          lg:grid-cols-4 
          gap-6
          px-4 sm:px-8 md:px-12 lg:px-20 
          place-items-center
        "
      >
        <motion.div initial={{ x: -80 }} whileInView={{ x: 0 }}>
          <Image src={Ola} width={130} alt="Ola" />
        </motion.div>
        <motion.div initial={{ scale: 0.4 }} whileInView={{ scale: 1 }}>
          <Image src={Revolt} width={130} alt="Revolt" />
        </motion.div>
        <motion.div initial={{ y: -80 }} whileInView={{ y: 0 }}>
          <Image src={UltraViolet} width={130} alt="Ultraviolette" />
        </motion.div>
        <motion.div initial={{ x: 80 }} whileInView={{ x: 0 }}>
          <Image src={Tork} width={105} alt="Tork" />
        </motion.div>
      </motion.div>
    </section>
  );
}
