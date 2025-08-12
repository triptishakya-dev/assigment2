import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2B3631] text-[#D1D9D0] relative overflow-hidden">
      {/* Background Large Text */}
      <div className="absolute bottom-0 left-0 text-[12rem] font-bold text-white/5 tracking-widest select-none leading-none">
        SKINCARE
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-2 relative z-10">
        {/* Left Side */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-[28px] leading-snug font-normal">
              Join The Skincare <br /> Community Now.
            </h2>
          </div>

          <div className="flex gap-10 mt-20 text-sm items-center">
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
              <FaFacebookF size={14} /> Facebook
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
              <FaInstagram size={14} /> Instagram
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
              <FaYoutube size={14} /> YouTube
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-start md:items-end justify-between">
          <div>
            <p className="text-sm">Get in Touch</p>
            <p className="text-[22px] mt-1 font-normal">contact.skincare.com</p>
          </div>

          <div className="flex gap-10 text-sm mt-20 md:mt-0">
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
