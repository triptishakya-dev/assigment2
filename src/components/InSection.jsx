// components/ProductSection.tsx
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

export default function ProductSection() {
  const filters = ["New Arrival", "Cleansing", "Acne Fighter", "Anti Aging"];

  const products = [
    {
      img: "/images/pink.jpg",
      title: "Alya Skin Cleanser.",
      price: "$29.99",
      active: false,
    },
    {
      img: "/images/rit.jpg",
      title: "Ritual of Sakura.",
      price: "$23.99",
      active: true,
    },
    {
      img: "/images/nec.jpg",
      title: "The Body Lotion.",
      price: "$19.99",
      active: false,
    },
  ];

  return (
    <section className="bg-[#FAFAF0] py-12">
      {/* Heading */}
      <div className="text-center px-4">
        <h1 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl font-normal leading-snug">
          Feel Beautiful Inside and Out <br className="hidden sm:block" /> with Every Product.
        </h1>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-3 mt-6 flex-wrap px-4">
        {filters.map((filter, idx) => (
          <button
            key={idx}
            className={`px-4 sm:px-5 py-1.5 rounded-full border text-sm font-medium transition ${
              idx === 0
                ? "bg-gray-800 text-white border-gray-800"
                : "bg-transparent text-gray-800 border-gray-300 hover:border-gray-800"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition"
          >
            <div className="relative w-full h-64 sm:h-72">
              <Image
                src={product.img}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            {/* Card Footer */}
            <div className="flex justify-between items-center bg-gray-50 px-4 py-3">
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-gray-800 uppercase">
                  {product.title}
                </h2>
                <p className="text-xs text-gray-500">From {product.price}</p>
              </div>
              <button
                className={`w-10 h-10 flex items-center justify-center rounded transition ${
                  product.active
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <FiShoppingCart size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
