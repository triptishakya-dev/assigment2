// components/ProductSection.tsx
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

export default function InSection() {
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
      <div className="text-center">
        <h1 className="text-gray-800 text-2xl md:text-3xl font-normal leading-snug">
          Feel Beautiful Inside and Out <br /> with Every Product.
        </h1>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-3 mt-6 flex-wrap">
        {filters.map((filter, idx) => (
          <button
            key={idx}
            className={`px-5 py-1.5 rounded-full border text-sm font-medium transition ${
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
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200"
          >
            <div className="relative h-80">
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
                <h2 className="text-sm font-semibold text-gray-800 uppercase">
                  {product.title}
                </h2>
                <p className="text-xs text-gray-500">From {product.price}</p>
              </div>
              <button
                className={`w-10 h-10 flex items-center justify-center rounded ${
                  product.active
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-700"
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
