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
    <section className="bg-[#FAFAF0] ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/nec.jpg"
              alt="Product"
              width={600}
              height={600}
              className="object-cover"
            />
          </div>
          {/* Small Badge */}
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 bg-[#DDE4D4] px-4 py-2 rounded-full shadow">
            <div className="w-8 h-8 rounded-full  flex items-center justify-center text-black bg-white">
              <FiHeadphones size={16} />
            </div>
            <span className="text-sm text-gray-800 font-medium">
              24/7 We’re Here to Help You
            </span>
          </div>
        </div>

        {/* Right: FAQ */}
        <div className="flex justify-start flex-col">
          <button className="flex items-center justify-center gap-4 border border-black px-4 w-70 py-1 rounded-full text-sm mb-4 text-black">
            <span className="w-3 h-3 bg-[#13281D] rounded-full "></span>
            Frequently Asked Question
          </button>

          <h2 className="text-3xl font-medium text-gray-800 leading-snug mb-6 ">
            Answers to Your
            <br />
            Skincare Questions, All
            <br />
            in One Place.
          </h2>

          <div className="flex flex-col gap-2  ">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`border border-gray-300 rounded-md overflow-hidden`}
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
