import BestProduct from "@/components/BestProduct";
import FaqSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

import HeroSection from "@/components/HeroSection";
import InSection from "@/components/InSection";
import Navbar from "@/components/Navbar";

import OutSideSection from "@/components/OutSideSection";

import WhyOurProductSection from "@/components/WhyOurProductSection";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <WhyOurProductSection />
      <BestProduct />
      <OutSideSection />
      <InSection/>
      <FaqSection/>
      <Footer/>
    </div>
  );
}
