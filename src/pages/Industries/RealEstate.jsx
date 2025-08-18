import { Navbar } from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";
import { Contact, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactUs } from "../../Components/ContactUs";

import RealEstateBG from "@/assets/realestate2.jpeg"
import Hospitality from "@/assets/IndustryHospitality.jpeg"
import FamilyOffice from "@/assets/IndustryFamilyOffice.jpeg"


export const RealEstate = () => {
  return <div className="">
    <Navbar/>
          <div className="h-[calc(56.391px+8vh)]  w-full bg-primary"/>

    <div className="relative z-15 w-full  text-tertiary font-medium flex flex-col   gap-4">
            <div className="relative bg-neutral-light bg-cover flex flex-col justify-center bg-[center_30%] bg-no-repeat min-h-[50vh] " style={{backgroundImage: `url(${RealEstateBG})`}} >
                <div className="absolute min-h-[50vh] inset-0 bg-gradient-to-r from-black/75 to-transparent z-1" />
        
                <div className="my-container flex flex-col  py-20 gap-4">
                   <div className="relative flex flex-col gap-7  max-w-4xl   z-10"> 
                    <h1 className="text-tertiary/90   text-left text-3xl md:text-4xl font-bold">Tailored Global Property Solutions for Private & Investment Portfolios</h1>
                    <p className="text-lg font-medium text-left ">
                      Discreetly sourcing high-value real estate across the globe — from private residences to strategic investment opportunities.<br/><br/>
                    
                      Curated real estate services for UHNWIs, family offices, and institutional investors — from private residences to high-yield investments, we secure exclusive properties around the globe with absolute discretion and precision.</p>
                    
                  </div>
                </div>
            </div>
      </div>
    <div className="my-container flex flex-col gap-8 pt-30">
      <h1 className="text-3xl  md:text-4xl text-primary font-bold text-center ">Global Property Solutions for the Discerning Few <br/>Exclusive Real Estate. Tailored to Your Vision.</h1>
      <div className="flex flex-col  gap-8">
        <p className="text-lg text-neutral-dark w-full  font-medium">At EnkaMax, we specialize in sourcing and securing premium real estate assets for ultra-high-net-worth individuals, family offices, and private investors around the globe. Our property services go far beyond conventional brokerage. We act as discreet advisors and strategic partners—providing a fully bespoke experience that reflects the exceptional standards of our clientele.</p>
        <p className="text-lg text-neutral-dark w-full font-medium">Whether you are seeking a secluded private residence, a flagship investment property, or a high-yield portfolio opportunity, we curate and negotiate off-market transactions with complete discretion. From waterfront villas in the Mediterranean to penthouses in Manhattan, luxury developments in Dubai to alpine chalets in Switzerland—every property we present is handpicked to meet the personal and financial goals of our clients.</p>
      </div>

      <h3 className="text-xl text-neutral-dark font-medium ">Our services include:</h3>
       <ul className="list-disc pl-6 space-y-2 text-lg text-neutral-dark font-medium  ">
          <li>Private Residence Acquisition (primary, secondary, or vacation homes)
</li>
          <li>Global Investment Properties (residential & commercial assets)
</li>
          <li>Off-Market Listings & Confidential Transactions
</li>
          <li>Property Portfolio Structuring & Strategic Advisory
</li>
          <li>Relocation & Lifestyle Integration Support
</li>
        </ul>
        <p className="text-lg text-neutral-dark w-full font-medium">
At EnkaMax, we understand that real estate is not just about location—it’s about vision, legacy, and trust. Our global network, market insight, and uncompromising confidentiality make us the trusted partner of those who demand nothing but the extraordinary.<br/>

Discover a world of property possibilities—crafted exclusively for you.</p>
    </div>
    <ContactUs/>
    <Footer/>
    </div>;
};