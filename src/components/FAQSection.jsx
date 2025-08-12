"use client";
import Image from "next/image";
import { FiPlus, FiMinus, FiHeadphones } from "react-icons/fi";
import { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(1);
  const faqs = [
    {
      question: "Are your products safe for sensitive skin?",
      answer:
        "Yes! Our products are formulated with gentle, high-quality ingredients and are dermatologically tested to be safe for sensitive skin. However, we recommend doing a patch test before first use.",
    },
    {
      question: "Are your products cruelty-free?",
      answer:
        "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
    },
    {
      question: "What's your return policy?",
      answer:
        "We offer a hassle-free return policy within 14 days of delivery, provided the product is unused, unopened, and in its original packaging. Please contact our support team to initiate a return.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes! We ship worldwide. International shipping charges and delivery times vary based on location. You can view estimated delivery timelines during checkout.",
    },
    {
      question: "How do I choose the right product?",
      answer:
        "You can use our product filters and descriptions to find the best match for your needs. If you’re unsure, our customer support team is happy to provide personalized recommendations.",
    },
  ];

  return (
    <section className="bg-[#FAFAF0] py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative h-full hidden md:block">
          {/* Show only on mobile & desktop, hide on tablet */}
          <div
            className="block md:hidden lg:block relative rounded-2xl overflow-hidden mx-auto lg:mx-0
                          h-[300px] lg:h-[450px] w-full max-w-[500px]"
          >
            <Image
              src="/images/nec.jpg"
              alt="Product"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />

            {/* Small Badge (Only when image visible) */}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2
  flex items-center gap-3 bg-[#FEFFF4] px-4 py-2 rounded-full shadow-lg
  z-10 max-w-[220px]"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#2D3B36] shadow p-2">
                <FiHeadphones size={22} />
              </div>
              <span className="text-sm text-gray-800 font-medium leading-tight text-center">
                24/7 We’re Here <br /> to Help You
              </span>
            </div>
          </div>
        </div>

        {/* Right: FAQ */}
        <div className="flex flex-col justify-center gap-8 px-4 lg:px-0">
          {/* Tag */}
          <button className="flex items-center justify-center lg:justify-start gap-4 border border-black px-4 py-1 rounded-full text-sm text-black w-fit">
            <span className="w-3 h-3 bg-[#13281D] rounded-full"></span>
            Frequently Asked Question
          </button>

          {/* Heading */}
          <h2 className="text-2xl lg:text-3xl font-medium text-gray-800 leading-snug">
            Answers to Your
            <br />
            Skincare Questions, All
            <br />
            in One Place.
          </h2>

          {/* FAQ List */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-300 rounded-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                  className="flex justify-between items-center w-full px-4 py-3 text-sm font-medium text-gray-800"
                >
                  {faq.question}
                  {openIndex === idx ? (
                    <FiMinus size={18} />
                  ) : (
                    <FiPlus size={18} />
                  )}
                </button>
                {openIndex === idx && faq.answer && (
                  <div className="px-4 pb-4 text-xs text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
