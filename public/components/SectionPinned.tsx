"use client";

import Image from "next/image";
import { TiPin } from "react-icons/ti";
import Section10 from "../assets/Section10-Image.svg";

export default function SectionPinnedCard() {
  return (
    <section className="w-full bg-[#F4F4F4] py-20 px-6 sm:px-10 lg:px-20 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F1D40] leading-snug">
            LOREM IPSUM DOLOR SIT <br /> AMET CONSECTETUR. <br /> DIGNISSIM
            TELLUS.
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed max-w-lg">
            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi
            blandit lorem urna sapien quam pulvinar. Dolor aliquet est tortor
            tincidunt ultricies feugiat mauris.
          </p>

          <button className="mt-6 bg-[#1959AC] text-white px-6 py-3 rounded-md text-[15px] font-medium shadow hover:bg-[#164c91] transition flex items-center gap-2">
            Lorem Ipsum →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end relative">
          <Image
            src={Section10}
            alt="Service"
            className="w-full max-w-xl shadow-lg object-cover rounded-md"
          />
        </div>

        {/* FLOATING PINNED CARD */}
        <div
          className="
            absolute
            left-1/2 lg:left-6
            -translate-x-1/2 lg:translate-x-0
            top-[100%] sm:top-[96%] md:top-[94%] lg:top-[90%]
            z-30
            flex justify-center lg:justify-start
            w-full
            px-4
          "
        >
          <div
            className="
              relative
              bg-white shadow-xl rounded-lg
              p-4 sm:p-5 md:p-6
              max-w-[270px] sm:max-w-xs md:max-w-sm lg:max-w-sm
              transition-all duration-500
            "
          >
            {/* PIN FIXED TOP-RIGHT */}
            <span className="absolute top-2 right-2 text-red-500 text-2xl">
              <TiPin />
            </span>

            <h3 className="font-semibold text-[15px] text-[#0F1D40]">
              Lorem ipsum dolor sit
            </h3>

            <p className="text-gray-600 text-[13px] mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Habitant vestibulum
              vitae amet habitasse semper.
            </p>

            <p className="text-gray-600 text-[13px] mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Egestas congue turpis
              elit placerat vitae amet suspendisse fermentum velit.
            </p>

            <p className="text-gray-600 text-[13px] mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Hac netus consectetur
              amet quisque scelerisque facilisi.
            </p>
          </div>
        </div>
      </div>

      {/* GRADIENT BAR */}
      <div className="w-full mt-48 sm:mt-40 md:mt-36 lg:mt-32">
        <div className="h-6 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041]"></div>
      </div>
    </section>
  );
}
