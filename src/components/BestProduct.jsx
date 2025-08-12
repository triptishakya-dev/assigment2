// components/BestSellingProducts.tsx
import Image from "next/image";

export default function BestProduct() {
  const products = [
    {
      id: 1,
      name: "ALYA SKIN CLEANSER.",
      price: "FROM $29.99",
      img: "/images/pink.jpg",
    },
    {
      id: 2,
      name: "RITUAL OF SAKURA.",
      price: "FROM $27.99",
      img: "/images/rit.jpg",
    },
    {
      id: 3,
      name: "THE BODY LOTION.",
      price: "FROM $19.99",
      img: "/images/nec.jpg",
    },
  ];

  return (
    <section className="bg-[#f9f9f1] py-16 px-6 md:px-20">
      {/* Top Header */}
     <div className="max-w-6xl mx-auto w-full">
       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 ">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="w-3 h-3 rounded-full bg-gray-800"></span>
          <span className="text-gray-700 text-sm font-medium">
            Best Selling Products
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 text-center">
          Skincare That Brings Out <br /> Your Natural Radiance
        </h2>

        <div className="flex gap-4 mt-4 md:mt-0">
         <img src="/images/arrow1.svg" alt="" />
          <img src="/images/arrow2.svg" alt="" />
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm group relative"
          >
            <div className="relative w-full h-[400px]">
              <Image
                src={product.img}
                alt={product.name}
                height={500}
                width={500}
                className="object-cover"
              />
            </div>
            {/* Product Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-4 flex justify-between items-center">
              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500">{product.price}</p>
              </div>
              <button className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center hover:bg-gray-800 hover:text-white transition">
                🛒
              </button>
            </div>
          </div>
        ))}
      </div>
     </div>
    </section>
  );
}
