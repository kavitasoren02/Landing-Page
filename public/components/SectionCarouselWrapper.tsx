"use client";

import StoryCarousel from "../components/StoryCarousel";

export default function SectionCarouselWrapper() {
  return (
    <section className="w-full bg-white py-20 px-6 sm:px-10 lg:px-20">

      {/* TOP CONTENT */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F1D40]">
          LOREM IPSUM DOLOR SIT AMET
        </h2>

        <p className="text-gray-900 mt-4 leading-relaxed text-[15px]">
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. 
          Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut 
          aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget 
          purus ornare. Risus elit et fringilla habitant ut facilisi.
        </p>
      </div>

      {/* IMAGE + FLOATING CARD CAROUSEL */}
      <StoryCarousel />

    </section>
  );
}
