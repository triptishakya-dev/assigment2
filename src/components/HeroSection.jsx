// components/GlowNaturallySection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#EFF5E1] py-16 px-6 md:px-20 relative overflow-hidden">
      {/* Top Row */}
      <div className="flex justify-between items-start">
        {/* Left Text */}
        <p className="max-w-xs text-sm text-gray-700">
          Transform your skincare routine with premium products that restore, protect, and
          enhance your natural glow every day.
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
      <div className="flex flex-col md:flex-row items-center justify-between mt-10 relative">
        {/* Left Button */}
        <button className="bg-gray-800 text-white px-5 py-2 rounded-full text-sm">
          Shop Now
        </button>

        {/* Large Background Text */}
        <span className="absolute text-[10rem] md:text-[12rem] font-extrabold text-black opacity-50 left-0 top-16 tracking-tight">
          SKINCARE
        </span>

        {/* Center Image */}
        <div className="relative z-10 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/fst.jpg"
            alt="Glow Naturally"
            width={400}
            height={450}
            className="object-cover rounded-xl  "
          />

          {/* Badge */}
          <div className="absolute bottom-4 left-4 bg-[#eef3e6] px-4 py-2 rounded-full flex items-center gap-2 shadow-sm text-sm">
            <div className="w-7 h-7 rounded-full bg-[#1f2937] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            While giving you an invigorating cleansing experience.
          </div>
        </div>
      </div>

      {/* Bottom Description */}
      <div className="mt-10 text-center md:text-left space-y-4">
        <p className="text-lg text-gray-800 font-medium leading-relaxed">
          Experience the ultimate in skincare with our expertly formulated products,
          crafted to nourish, protect, and rejuvenate your skin. Combining the finest{" "}
          <span className="font-bold">natural ingredients</span> with{" "}
          <span className="text-gray-500">advanced science</span>, our collection ensures
          every skin type can achieve a radiant, healthy glow.
        </p>
        <p className="text-gray-500 leading-relaxed">
          Embrace your beauty with confidence every day. Experience the ultimate in
          skincare with our expertly formulated products, crafted to nourish, protect,
          and rejuvenate your skin.
        </p>
      </div>
    </section>
  );
}
