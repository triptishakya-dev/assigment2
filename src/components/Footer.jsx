import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2B3631] text-[#D1D9D0] relative overflow-hidden py-16 md:py-10">
      {/* Background Large Text */}
      <div className="absolute md:bottom-[-30px] bottom-[-10px] left-0 w-full text-center text-[5rem] md:text-[8rem] lg:text-[8rem] font-bold text-white/5 tracking-widest select-none leading-none">
        SKINCARE
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10 md:py-20 flex flex-col md:flex-row justify-between relative z-10 gap-10 md:gap-16 mb-10 md:mb-20">
        {/* Left Side */}
        <div className="flex flex-col justify-between items-center md:items-start text-center md:text-left">
          <div>
            <h2 className="text-[22px] sm:text-[26px] md:text-[28px] leading-snug font-normal">
              Join The Skincare <br className="hidden sm:block" /> Community Now.
            </h2>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-10 mt-10 md:mt-20 text-sm items-center">
            <a
              href="#"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <FaFacebookF size={14} /> Facebook
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <FaInstagram size={14} /> Instagram
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <FaYoutube size={14} /> YouTube
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center md:items-end justify-between text-center md:text-right">
          <div>
            <p className="text-sm">Get in Touch</p>
            <p className="text-[18px] sm:text-[20px] md:text-[22px] mt-1 font-normal">
              contact.skincare.com
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-6 sm:gap-10 text-sm mt-10 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
