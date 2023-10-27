import Container from "@/Components/Container/Container";

import Footer from "@/Components/Footer/Footer";
import Pricing from "@/Components/Pricing/Pricing";
import Premium from "@/Components/Premium/Premium";
import CounterSection from "@/Components/CounterSection/CounterSection";
import ContactSection from "@/Components/Contact";
import Navbar from "@/Components/Navbar";
import ExamModel from "@/Components/Shared/ExamModel";
import BannerSwiper from "@/Home/BannerSwiper/BannerSwiper";
 


// import Archive from "@/Components/Archive/Archive";
import Navbar from "@/Components/Navbar";





export default function Home() {
  return (
    <div>
      <Container>

        <Navbar></Navbar>
        
        
        <BannerSwiper></BannerSwiper>
     

        {/* exam question model */}
        <div className=" my-3">
          <CounterSection> </CounterSection>
        </div>
        <div className=" py-5">
          <Pricing></Pricing>
        </div>
        <div className=" py-5">
          <Premium></Premium>
        </div>
       
        {/* Banner */}

        <ContactSection></ContactSection>

        <Footer></Footer>
        
      </Container>

    </div>
  )
}
