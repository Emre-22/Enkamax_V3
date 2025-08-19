import { Navbar } from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";
import { Contact, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactUs } from "../../Components/ContactUs";

import HospitalityBG from "@/assets/IndustryHospitality.webp"
import Hospt2 from "@/assets/Hospt2.webp"
import  UHNW  from "@/assets/PrivateHouseHolds.webp"


export const Hospitality = () => {
  return <div className="">
    <Navbar/>
    <div className="h-[calc(56.391px+8vh)]  w-full bg-primary"/>

    <div className="relative z-15 w-full  text-tertiary font-medium flex flex-col   gap-4">
            <div className="relative bg-neutral-light flex flex-col justify-center py-20 bg-cover bg-center bg-no-repeat min-h-[50vh]  " style={{backgroundImage: `url(${HospitalityBG})`}} >
                <div className="absolute min-h-[50vh] inset-0 bg-gradient-to-r from-black/75 to-transparent z-1" />
        
                <div className="my-container flex flex-col gap-4">
                   <div className="relative flex flex-col gap-4   z-10"> 
                    <h1 className="text-tertiary/90   text-left text-3xl md:text-4xl font-bold">Elite Talent for Private Estates & Hospitality | Precision. Discretion. Excellence.</h1>
                    <h1 className="text-tertiary/90 pt-8 text-left text-3xl md:text-4xl font-bold">Trusted by UHNW Families & Iconic Brands. Your Global Partner for Discreet Placements in Private Residences, Yachts, Jets & Resorts</h1>
                    
                  </div>
                </div>
            </div>
          </div>
          
    <div className="my-container flex flex-col gap-8 pt-30">
      <h1 className="text-3xl md:text-4xl  text-center text-primary   font-bold">Expert Hospitality Recruitment for Luxury Establishments</h1>
      <div className="flex flex-col md:flex-row  gap-16">
        <p className="text-lg text-neutral-dark font-medium">At EnkaMax, we specialise in connecting world-class talent with prestigious hospitality environments — from five-star hotels and fine dining establishments to exclusive private members clubs, superyachts, and alpine chalets. Whether you're looking to hire exceptional professionals or take the next step in your luxury hospitality career, we ensure the perfect match.
          Explore the sectors below to discover more — and let us help you open the door to excellence.</p>
    <div className="relative  py-40 mt-20 border-3 border-secondary bg-cover bg-center bg-no-repeat gap-8 flex flex-col w-full " style={{backgroundImage: `url(${Hospt2})`}}/>
      </div>
      <h1 className="text-3xl  md:text-4xl text-center text-primary pt-20  font-bold">Solving Your Recruitment Challenges with Precision and Purpose</h1>
            <div className="flex flex-col md:flex-row  gap-16">
        <p className="text-lg text-neutral-dark font-medium">At EnkaMax, we transform your hiring hurdles into seamless success stories. Our exclusive network of thoroughly pre-vetted professionals isn’t just extensive—it’s activated. We know who’s ready to make a move, and more importantly, what it takes to motivate that move.<br/><br/>

          Reaching top-tier talent shouldn’t feel out of reach. With our bespoke and targeted recruitment strategy, we unlock access to exceptional individuals who align with your values, culture, and long-term goals. While you focus on driving strategic growth, we deliver the talent that makes it possible—swiftly, discreetly, and effectively.</p>
      </div>
    </div>
    <ContactUs/>
    <Footer/>
    </div>;
};