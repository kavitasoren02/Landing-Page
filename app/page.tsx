"use client";

import { useState } from "react";
import Image from "next/image";
import SelectIcon from "../public/assets/Vector 1.svg";
import Navbar from "@/public/components/Navbar";
import FAQComponent from "@/public/components/FAQComponent";
import Footer from "@/public/components/FooterSection";
import HeroSection from "@/public/components/HeroSection";
import FeatureSection from "@/public/components/FeatureSection";
import SectionThree from "@/public/components/SectionThree";
import FullBannerSection from "@/public/components/FullBannerSection";
import BrandLogosSection from "@/public/components/BrandLogoSection";
import CardsSection from "@/public/components/CardSection";
import BannerSection2 from "@/public/components/BannerSection2";
import QuoteSection from "@/public/components/QuoteSection";
import DownloadSection from "@/public/components/DownloadSection";
import GalleryShowcase from "@/public/components/GalleryShowCase";
import SectionMoto from "@/public/components/SectionMoto";
import SunHarvestSection from "@/public/components/SunHarvestSection";
import SectionResearchPlan from "@/public/components/SectionResearchPlan";
import SectionPinnedCard from "@/public/components/SectionPinned";
import SectionCarouselWrapper from "@/public/components/SectionCarouselWrapper";

export default function Home() {
  const [open, setOpen] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggle = (id: number) => {
    setOpen(open === id ? null : id);
  };


  return (
    <div className="min-h-screen w-full">
      {/* NAVBAR */}

      <Navbar />

      {/* MOBILE DROPDOWN */}

      <div
        className={`md:hidden bg-white w-full shadow-md border-b overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[600px] opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {[1, 2, 3].map((id) => (
            <div key={id} className="relative cursor-pointer select-none">
              <div
                className="flex items-center gap-2 text-[#1959AC] text-md font-medium"
                onClick={() => toggle(id)}
              >
                Lorem Ipsum
                <Image
                  src={SelectIcon}
                  alt="arrow"
                  className={`w-4 h-4 transition-transform duration-300 ${
                    open === id ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div
                className={`absolute left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-md p-2 w-40 mt-2 z-30 text-black transition-all duration-300 origin-top ${
                  open === id
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-75 pointer-events-none"
                }`}
              >
                <div className="px-2 py-1 hover:bg-gray-100 rounded">
                  Service X
                </div>
                <div className="px-2 py-1 hover:bg-gray-100 rounded">
                  Service Y
                </div>
              </div>
            </div>
          ))}

          <button className="px-6 py-2 text-md font-semibold border border-[#1959AC] text-[#1959AC] rounded-md hover:bg-[#1959AC] hover:text-white transition">
            Sign In
          </button>
        </div>
      </div>

      {/* HERO SECTION */}

      <HeroSection />

      {/* Section2 */}

      <FeatureSection />

      {/* Section3 */}

      <SectionThree />

      {/* Section4 */}

      <FullBannerSection />

      {/* Section5 */}

      <BrandLogosSection />

      {/* Section6 */}

      <CardsSection />

      {/* Section7 */}

      <BannerSection2 />

      {/* Section 8 */}

      <QuoteSection />

      {/* Section 9 */}

      <DownloadSection />

      {/* Section 10 */}

      <GalleryShowcase />

      {/* Section11 */}
      <SectionMoto />

      {/* Section 12 */}

      <SunHarvestSection />

      {/* Section 13 */}

      <SectionResearchPlan />

      {/* Section 14 */}

      <SectionPinnedCard />

      {/* Section 15 */}

      <SectionCarouselWrapper />

      {/* Section 16 */}

      <FAQComponent />

      {/* Footer */}
      <Footer />
    </div>
  );
}
