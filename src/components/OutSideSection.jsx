// components/HeroSection.tsx
import Image from "next/image";

export default function OutSideSection() {
  return (
    <section className="relative w-full bg-[#FEFFF4] py-10">
      <div className="max-w-6xl mx-auto rounded-xl overflow-hidden bg-[#FAFAF0]">
        <div className="relative w-full h-[550px] ">
          <Image
            src="/images/leaves.jpg"
            alt="Skincare with leaves"
            fill
            className="object-fill"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Text & Button */}
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-14 text-center px-4">
          <h1 className="text-white text-2xl md:text-5xl font-normal leading-snug">
            Feel Beautiful Inside and Out <br /> with Every Product.
          </h1>
          <button className="mt-6 bg-white text-gray-900 px-6 py-1.5 rounded-full text-sm font-normal shadow hover:shadow-md transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
