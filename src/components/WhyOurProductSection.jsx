// components/SkinCareSection.tsx
import Image from "next/image";
import { FiHeadphones } from "react-icons/fi";

export default function WhyOurProductSection() {
  return (
    <section className="bg-[#fdfcf4] md:p-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row py-8 sm:py-10 lg:py-14 gap-8 sm:gap-10 lg:gap-14 px-4 sm:px-6 lg:px-0">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 flex flex-col justify-center">
          
          {/* Badge */}
          <div className="flex items-center gap-2 sm:gap-3 bg-[#FEFFF4] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg z-10 max-w-[180px] sm:max-w-[220px]">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white bg-[#2D3B36] shadow p-1.5 sm:p-2">
              <FiHeadphones size={18} className="sm:size-[22px]" />
            </div>
            <span className="text-xs sm:text-sm text-gray-800 font-medium leading-tight text-center">
              Why Our Products
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold md:font-light leading-snug text-gray-800">
            YOUR SKIN DESERVES <br /> THE BEST CARE.
          </h2>

          {/* Description */}
          <p className="text-gray-500 max-w-md text-sm sm:text-base leading-relaxed">
            Discover a curated collection of skincare products designed to rejuvenate,
            protect, and pamper your skin. Explore our range crafted with love,
            backed by science, and inspired by nature.
          </p>

          {/* Features */}
          <div className="space-y-5 sm:space-y-6">
            {[
              {
                num: "01",
                title: "Bio Ingredients",
                desc: "Get naturally beautiful skin with our bio-ingredient creams for healthy, radiant skin.",
              },
              {
                num: "02",
                title: "Everything Natural",
                desc: "Pure ingredients for pure skin. The perfect solution for your skincare needs.",
              },
              {
                num: "03",
                title: "All Handmade",
                desc: "Made with love and care. Just for you. Give your skin the tender loving care it deserves.",
              },
            ].map((item, i) => (
              <div key={i}>
                <p className="flex items-center gap-2 text-lg sm:text-xl md:text-4xl text-[#2D3B36]">
                  <span className="text-[#2D3B36] text-base sm:text-xl md:text-3xl font-light w-10 sm:w-12 md:w-16 flex-shrink-0">
                    {item.num}
                  </span>
                  {item.title}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed pl-[2.8rem] sm:pl-[3.5rem] md:pl-[4.5rem] max-w-[250px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 relative flex flex-col">
          <div className="rounded-xl overflow-hidden w-full h-[250px] sm:h-[350px] md:h-[450px]">
            <Image
              src="/images/sec.jpg"
              alt="Skin Care"
              width={1920}
              height={1080}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* Footer Text */}
          <div
            className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0
            flex items-center gap-2 sm:gap-3 bg-[#FEFFF4] px-3 sm:px-5 py-2 sm:py-3 rounded-full shadow-lg
            z-10 max-w-[200px] sm:max-w-[240px]"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white bg-[#2D3B36] shadow p-1.5 sm:p-2">
              <FiHeadphones size={18} className="sm:size-[22px]" />
            </div>
            <span className="text-xs sm:text-sm text-gray-800 font-medium leading-tight text-center">
              Best Skin Care Product <br /> Award Winning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
