"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Lorem ipsum dolor sit amet consectetur?",
      a: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
    },
    {
      q: "Lorem ipsum dolor sit amet consectetur?",
      a: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
    },
    {
      q: "Lorem ipsum dolor sit amet consectetur?",
      a: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
    },
    {
      q: "Lorem ipsum dolor sit amet consectetur?",
      a: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
    },
    {
      q: "Lorem ipsum dolor sit amet consectetur?",
      a: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
    },
  ];

  const toggleFAQ = (i:any) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full bg-[#FBFBFB] py-16 px-6 sm:px-12 lg:px-24">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1D40] mb-10">
        FREQUENTLY ASKED QUESTIONS (FAQS)
      </h2>

      <div className="border-t border-gray-300">
        {faqs.map((item, i) => (
          <div key={i} className="border-b border-gray-300 py-6 sm:py-7 lg:py-8">
            {/* Question Row */}
            <button
              className="w-full flex justify-between items-center text-left pr-2"
              onClick={() => toggleFAQ(i)}
            >
              <span className="text-[15px] sm:text-[16px] font-semibold text-gray-800">
                {item.q}
              </span>

              <span className="text-xl sm:text-2xl text-gray-700 transition-all duration-300">
                {openIndex === i ? <FiMinus /> : <FiPlus />}
              </span>
            </button>

            {/* Animated Answer */}
            <div
              className={`
                overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${openIndex === i ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}
              `}
            >
              <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed max-w-3xl pl-1 pr-6">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
