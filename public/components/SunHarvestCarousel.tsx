"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { LuCloudLightning } from "react-icons/lu";
import { TbStars, TbChessRookFilled } from "react-icons/tb";
import { CiCircleInfo } from "react-icons/ci";

import UserThumb1 from "../assets/User Thumb1.svg";
import UserThumb2 from "../assets/User Thumb 2.svg";
import UserThumb3 from "../assets/User Thumb 3.svg";
import UserThumb4 from "../assets/User Thumb 4.svg";

const cards = [
  {
    icon: <LuCloudLightning className="text-6xl text-[#0A4ECF]" />,
    text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla.",
    user: UserThumb1,
    name: "Jane Cooper",
  },
  {
    icon: <TbStars className="text-6xl text-[#0A4ECF]" />,
    text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus.",
    user: UserThumb2,
    name: "Ralph Edwards",
  },
  {
    icon: <TbChessRookFilled className="text-6xl text-[#0A4ECF]" />,
    text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien.",
    user: UserThumb3,
    name: "Courtney Henry",
  },
  {
    icon: <CiCircleInfo className="text-6xl text-[#0A4ECF]" />,
    text: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis.",
    user: UserThumb4,
    name: "Cameron Williamson",
  },
];

export default function SunHarvestCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
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
          {cards.map((c, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 relative flex justify-center"
            >
              {/* CARD */}
              <div className="bg-white p-6 rounded-xl shadow-md h-[380px] w-full max-w-xl flex flex-col justify-between">
                <div>
                  <div className="mb-6">{c.icon}</div>
                  <p className="text-gray-700 leading-relaxed text-[20px]">
                    {c.text}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-4">
                  <Image
                    src={c.user}
                    alt="thumb"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <p className="font-semibold text-gray-900 text-lg">{c.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="mt-10 flex gap-3">
        {cards.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition ${
              index === i ? "bg-white" : "bg-white/50"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
