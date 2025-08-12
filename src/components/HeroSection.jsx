// components/GlowNaturallySection.tsx
import Image from "next/image";
import { FiHeadphones } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="bg-[#EFF5E1] h-[100vh] max-h-[100vh] py-16 px-6 md:px-20 relative overflow-hidden flex flex-col justify-between">
      {/* Top Row */}
      <div className="flex justify-between items-start">
        {/* Left Text */}
        <p className="max-w-xs text-sm text-gray-700">
          Transform your skincare routine with premium products that restore,
          protect, and enhance your natural glow every day.
        </p>

        {/* Center Heading */}
        <h1 className="text-6xl font-extrabold leading-tight text-gray-900 text-center">
          GLOW <br /> NATUR- <br /> ALLY
        </h1>

        {/* Right Product Image */}
        <div className="w-30 h-50 relative">
          <Image
            src="/images/plum.jpg"
            alt="Plum Product"
            fill
            className="object-contain rounded-3xl"
          />
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 relative">
        {/* Left Button */}
        <button className="bg-gray-800 text-white px-5 py-2 rounded-full text-sm mb-6 md:mb-0 md:absolute md:left-0">
          Shop Now
        </button>

        {/* Large Background Text */}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10rem] md:text-[12rem] font-extrabold text-black opacity-50 tracking-tight ">
          SKINCARE
        </span>

        {/* Center Image */}
        <div className="relative z-10 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/fst.jpg"
            alt="Glow Naturally"
            width={300}
            height={250}
            className="object-cover rounded-xl"
          />

          {/* Small Badge */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2
            flex items-center gap-3 bg-[#FEFFF4] px-4 py-2 rounded-full shadow-lg
            z-10 max-w-[220px]"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#2D3B36] shadow p-2">
              <FiHeadphones size={22} />
            </div>
            <span className="text-sm text-gray-800 font-medium leading-tight text-center">
              While giving you an invigorating  <br /> cleansing experience.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
