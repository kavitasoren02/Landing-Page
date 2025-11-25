"use client";

import SunHarvestCarousel from "@/public/components/SunHarvestCarousel";

export default function SunHarvestSection() {
  return (
    <section className="w-full bg-[#155ADA] py-20 px-6 sm:px-10 lg:px-20">
      
      {/* TOP TEXT */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div>
          <p className="text-white text-md font-semibold">Join other Sun harvesters</p>
          <h2 className="text-white text-4xl font-bold mt-2">LOREM IPSUM DOLOR SIT AMET</h2>
          <p className="text-white/80 text-lg max-w-2xl mt-3">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
          </p>
        </div>

        <button className="bg-white text-[#0A4ECF] px-6 py-2 rounded-md font-semibold shadow mt-6 lg:mt-0">
          Lorem Ipsum
        </button>
      </div>

      {/* CAROUSEL */}
      <SunHarvestCarousel />
    </section>
  );
}
