"use client";

import { useState } from "react";
import Image from "next/image";
import { SlMenu } from "react-icons/sl";
import Logo from "../assets/Frame 80.svg";
import SelectIcon from "../assets/Vector 1.svg";

export default function Navbar() {
  const [open, setOpen] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggle = (id: number) => {
    setOpen(open === id ? null : id);
  };

  return (
    <nav className="w-full h-[70px] px-4 sm:px-6 md:px-10 lg:px-[60px] flex items-center justify-between border-b sticky top-0 z-50 bg-white shadow-sm">

      {/* LOGO */}
      <Image
        src={Logo}
        alt="logo"
        className="w-[80px] sm:w-[90px] md:w-[100px]"
      />

      {/* DESKTOP LINKS */}
      <div className="flex-1 hidden md:flex justify-center gap-8 lg:gap-12 text-[#1959AC] text-lg lg:text-xl font-medium">
        {[1, 2, 3].map((id) => (
          <div key={id} className="relative cursor-pointer select-none">
            <div
              className="flex items-center gap-1"
              onClick={() => toggle(id)}
            >
              Lorem Ipsum
              <Image
                src={SelectIcon}
                alt="arrow"
                className={`w-3 h-3 transition-transform duration-300 ${
                  open === id ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* DROPDOWN MENU */}
            <div
              className={`absolute bg-white shadow-lg rounded-md p-2 w-40 mt-2 z-20 text-black transition-all duration-300 origin-top ${
                open === id
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75 pointer-events-none"
              }`}
            >
              <div className="px-2 py-1 hover:bg-gray-100 cursor-pointer">
                Feature 1
              </div>
              <div className="px-2 py-1 hover:bg-gray-100 cursor-pointer">
                Feature 2
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SIGN IN BUTTON DESKTOP */}
      <div className="hidden md:flex">
        <button className="px-5 py-2 text-lg font-semibold border border-[#1959AC] text-[#1959AC] rounded-md hover:bg-[#1959AC] hover:text-white transition">
          Sign In
        </button>
      </div>

      {/* MOBILE HAMBURGER ICON */}
      <div
        className="md:hidden text-black text-3xl cursor-pointer"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <SlMenu />
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-lg p-5 flex flex-col gap-4 md:hidden z-40">

          {[1, 2, 3].map((id) => (
            <div key={id} className="border-b pb-3">
              <div
                className="flex items-center justify-between"
                onClick={() => toggle(id)}
              >
                <span className="text-[#1959AC] font-medium">Lorem Ipsum</span>

                <Image
                  src={SelectIcon}
                  alt="arrow"
                  className={`w-3 h-3 transition-transform duration-300 ${
                    open === id ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* MOBILE DROPDOWN */}
              {open === id && (
                <div className="mt-2 pl-2 text-gray-700 space-y-1">
                  <p className="hover:text-black cursor-pointer">Feature 1</p>
                  <p className="hover:text-black cursor-pointer">Feature 2</p>
                </div>
              )}
            </div>
          ))}

          <button className="mt-2 px-5 py-2 text-lg font-semibold border border-[#1959AC] text-[#1959AC] rounded-md hover:bg-[#1959AC] hover:text-white transition">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}
