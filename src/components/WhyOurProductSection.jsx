// components/SkinCareSection.tsx
import Image from "next/image";
import { FiHeadphones } from "react-icons/fi";

export default function WhyOurProductSection() {
  return (
    <section className="bg-[#fdfcf4]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row h-[80vh] py-10 gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 h-full space-y-8 flex flex-col justify-center ">
          {/* Button */}
          {/* Small Badge (Only when image visible) */}
          <div
            className="
  flex items-center gap-3 bg-[#FEFFF4] px-4 py-2 rounded-full shadow-lg
  z-10 max-w-[220px]"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#2D3B36] shadow p-2">
              <FiHeadphones size={22} />
            </div>
            <span className="text-sm text-gray-800 font-medium leading-tight text-center">
              Why Our Products
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold md:font-light leading-snug text-gray-800">
            YOUR SKIN DESERVES <br /> THE BEST CARE.
          </h2>

          {/* Description */}
          <p className="text-gray-500 max-w-md md:text-sm leading-relaxed">
            Discover a curated collection of skincare products designed to
            rejuvenate, protect, and pamper your skin. Explore our range crafted
            with love, backed by science, and inspired by nature.
          </p>

          {/* Features */}
          <div className="space-y-6">
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
                <p className="flex items-center gap-2 text-lg font-medium md:text-4xl text-[#2D3B36]">
                  <span className="text-[#2D3B36] text-xl md:text-3xl font-light w-12 md:w-16 flex-shrink-0">
                    {item.num}
                  </span>
                  {item.title}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed pl-[3.5rem] md:pl-[4.5rem] w-[250px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 h-full relative flex flex-col">
          <div className="rounded-xl overflow-hidden flex-1">
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
            className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0
            flex items-center gap-3 bg-[#FEFFF4] px-5 py-3 rounded-full shadow-lg
            z-10 max-w-[240px]"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#2D3B36] shadow p-2">
              <FiHeadphones size={22} />
            </div>
            <span className="text-sm text-gray-800 font-medium leading-tight text-center">
              Best Skin Care Product <br /> Award Winning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
