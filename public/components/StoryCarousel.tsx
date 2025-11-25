"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Bike1 from "../assets/Section11-Image.svg";
import Bike2 from "../assets/Bike4.svg";
import Bike3 from "../assets/Bike5.svg";

const stories = [
  {
    image: Bike1,
    title: "Artist & Investor",
    description:
      "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor.",
  },
  {
    image: Bike2,
    title: "Entrepreneur",
    description:
      "Risus elit et fringilla habitant ut facilisi. Malesuada ut aliquam.",
  },
  {
    image: Bike3,
    title: "Rider & Influencer",
    description:
      "Egestas ac arcu amet nisl quis est. Enim sagittis porttitor morbi.",
  },
];

export default function StoryCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % stories.length);
    }, 2500);

    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-12 flex flex-col items-center">

      {/* SLIDER WRAPPER */}
      <div className="relative w-full max-w-4xl">

        <div
          className="flex transition-transform duration-[600ms] ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {stories.map((slide, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 relative flex justify-center"
            >
              {/* IMAGE */}
              <Image
                src={slide.image}
                alt={slide.title}
                className="w-full max-w-2xl shadow-md object-cover rounded-md"
              />

              {/* FLOATING CARD */}
              <div
                className="
                  absolute bg-white shadow-xl rounded-lg 

                  /* Responsive padding */
                  p-4 sm:p-5 md:p-5 lg:p-4

                  /* Responsive width */
                  w-[90%] sm:w-[80%] md:w-[60%] lg:w-[45%] xl:w-[40%]

                  /* Responsive height (desktop reduced) */
                  min-h-[100px] 
                  sm:min-h-[110px]
                  md:min-h-[110px]
                  lg:min-h-[100px]

                  /* Positioning based on screen */
                  top-[58%] 
                  sm:top-[60%]
                  md:top-[62%]
                  lg:top-[48%]

                  left-1/2 -translate-x-1/2
                  lg:left-auto lg:right-12 lg:translate-x-0

                  transition-all duration-700
                "
              >
                <h3 className="font-semibold text-[16px] sm:text-[17px] md:text-[18px] text-[#0F1D40] mb-2">
                  {slide.title}
                </h3>

                <p className="text-gray-600 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed">
                  {slide.description}
                </p>

                <button className="mt-3 text-[#0F62FE] font-semibold text-[14px] sm:text-[15px] flex items-center gap-1">
                  Read Full Story →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DOTS BELOW */}
      <div className="mt-14 flex gap-3">
        {stories.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition ${
              index === i ? "bg-[#0F62FE]" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
