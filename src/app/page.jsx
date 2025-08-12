import BestProduct from "@/components/BestProduct";
import DescriptionSection from "@/components/DescriptionSection";
import FaqSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/InSection";
import Navbar from "@/components/Navbar";

import OutSideSection from "@/components/OutSideSection";

import WhyOurProductSection from "@/components/WhyOurProductSection";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <DescriptionSection/>
      <WhyOurProductSection />
      <BestProduct />
      <OutSideSection />
      <ProductSection/>
      <FaqSection/>
      <Footer/>
    </div>
  );
}
