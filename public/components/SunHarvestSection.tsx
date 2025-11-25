"use client";

import Image from "next/image";
import { LuCloudLightning } from "react-icons/lu";
import { TbStars, TbChessRookFilled } from "react-icons/tb";
import { CiCircleInfo } from "react-icons/ci";

import UserThumb1 from "../assets/User Thumb1.svg";
import UserThumb2 from "../assets/User Thumb 2.svg";
import UserThumb3 from "../assets/User Thumb 3.svg";
import UserThumb4 from "../assets/User Thumb 4.svg";

export default function SunHarvestSection() {
  return (
    <section className="w-full bg-[#155ADA] py-20 px-6 sm:px-10 lg:px-20">
      
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div>
          <p className="text-white text-md font-semibold">
            Join other Sun harvesters
          </p>

          <h2 className="text-white text-4xl font-bold mt-2">
            LOREM IPSUM DOLOR SIT AMET
          </h2>

          <p className="text-white/80 text-lg max-w-2xl mt-3">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
            Eleifend mi tristique condimentum congue fusce nunc, donec magnis
            commodo.
          </p>
        </div>

        <button className="bg-white text-[#0A4ECF] px-6 py-2 rounded-md font-semibold shadow mt-6 lg:mt-0">
          Lorem Ipsum
        </button>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

        {/* CARD 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md h-[380px] flex flex-col justify-between">
          <div>
            <div className="text-[#0A4ECF] text-2xl mb-6">
              <LuCloudLightning className="text-6xl" />
            </div>
            <p className="text-gray-700 leading-relaxed text-[20px] ">
              Purus maecenas quis elit eu, aliquet. Tellus porttitor ut
              sollicitudin sit non fringilla. Quam nunc volutpat senectus
              neque eget amet pharetra, euismod.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src={UserThumb1}
              alt="userthumb1"
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="font-semibold text-gray-900 text-lg">Jane Cooper</p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md h-[380px] flex flex-col justify-between">
          <div>
            <div className="text-[#0A4ECF] text-2xl mb-6">
              <TbStars className="text-6xl" />
            </div>
            <p className="text-gray-700 leading-relaxed text-[20px]">
              Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in
              metus, enim, ipsum morbi euismod pellentesque.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src={UserThumb2}
              alt="user thumb2"
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="font-semibold text-gray-900 text-lg">
              Ralph Edwards
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md h-[380px] flex flex-col justify-between">
          <div>
            <div className="text-[#0A4ECF] text-2xl mb-6">
              <TbChessRookFilled className="text-6xl" />
            </div>
            <p className="text-gray-700 leading-relaxed text-[20px]">
              Viverra lacus suspendisse elit, adipiscing orci, non turpis
              etiam sapien. Viverra blandit sem neque pretium.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src={UserThumb3}
              alt="user thumb3"
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="font-semibold text-gray-900 text-lg">
              Courtney Henry
            </p>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="bg-white p-6 rounded-xl shadow-md h-[380px] flex flex-col justify-between">
          <div>
            <div className="text-[#0A4ECF] text-2xl mb-6">
              <CiCircleInfo className="text-6xl" />
            </div>
            <p className="text-gray-700 leading-relaxed text-[16px]">
              Hendrerit augue ut nec, senectus quis integer netus. Sagittis
              fusce rhoncus magnis habitant amet amet.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src={UserThumb4}
              alt="userthumb4"
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="font-semibold text-gray-900 text-lg">
              Cameron Williamson
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
