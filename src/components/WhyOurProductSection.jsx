// components/SkinCareSection.tsx
import Image from "next/image";

export default function WhyOurProductSection() {
  return (
    <section className="bg-[#fdfcf4] py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-8">
        {/* Button */}
        <button className="flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-gray-300 text-sm shadow-sm">
          <span className="w-2 h-2 bg-black rounded-full"></span>
          Why Our Products
        </button>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-gray-800">
          YOUR SKIN DESERVES <br /> THE BEST CARE.
        </h2>

        {/* Description */}
        <p className="text-gray-500 max-w-md leading-relaxed">
          Discover a curated collection of skincare products designed to rejuvenate,
          protect, and pamper your skin. Explore our range crafted with love backed
          by science, and inspired by nature.
        </p>

        {/* Features */}
        <div className="space-y-6">
          <div>
            <p className="flex items-center gap-2 text-lg font-medium">
              <span className="text-gray-400 text-xl font-light">01</span>
              Bio Ingredients
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Get naturally beautiful and transform with our bio ingredients creams
              for healthy, radiant skin.
            </p>
          </div>

          <div>
            <p className="flex items-center gap-2 text-lg font-medium">
              <span className="text-gray-400 text-xl font-light">02</span>
              Everything Natural
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Pure ingredients for pure skin. The perfect solution for your skin care
              needs.
            </p>
          </div>

          <div>
            <p className="flex items-center gap-2 text-lg font-medium">
              <span className="text-gray-400 text-xl font-light">03</span>
              <a href="#" className="text-blue-600 underline">
                All Handmade
              </a>
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Made with love and care. Just for you. Give your skin the tender loving
              care it deserves.
            </p>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 relative">
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/images/sec.jpg"
            alt="Skin Care"
            width={500}
            height={600}
            className="object-cover rounded-xl"
          />
        </div>

        {/* Award Badge */}
        <div className="absolute bottom-4 left-4 bg-[#f4f4e8] px-4 py-2 rounded-full flex items-center gap-2 shadow-sm text-sm">
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
                d="M15 10l4.553-2.276a1 1 0 01.894 0l1.553.776a1 1 0 01.553.894v5.212a1 1 0 01-.553.894l-1.553.776a1 1 0 01-.894 0L15 14m0 0v-4m0 4l-4 2m0 0l-4-2m4 2v4m-4-6V8m0 0l4-2m0 0l4 2"
              />
            </svg>
          </div>
          Best Skin Care Product Award Winning
        </div>

        {/* Footer Text */}
        <div className="flex justify-between text-gray-500 text-xs mt-4 px-1">
          <span>SINCE 2001</span>
          <a href="#" className="hover:underline">
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
}
