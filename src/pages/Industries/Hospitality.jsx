import { Navbar } from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";
import { Contact, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactUs } from "../../Components/ContactUs";

import HospitalityBG from "@/assets/IndustryHospitality.jpeg"
import FamilyOffice from "@/assets/IndustryFamilyOffice.jpeg"
import  UHNW  from "@/assets/PrivateHouseHolds.jpeg"


export const Hospitality = () => {
  return <div className="">
    <Navbar/>
    <div className="relative z-15 w-full  text-white font-medium flex flex-col   gap-4">
            <div className="relative bg-gray-100 bg-cover bg-center bg-no-repeat min-h-170  " style={{backgroundImage: `url(${HospitalityBG})`}} >
                <div className="absolute min-h-170 inset-0 bg-gradient-to-r from-black/100 to-transparent z-1" />
        
                <div className="my-container flex flex-col gap-4">
                   <div className="relative flex flex-col gap-4 my-container items-center pt-40 pb-10 max-w-200  z-10"> 
                    <h1 className="text-white/90 pt-30  text-center text-2xl md:text-3xl font-bold">Elite Talent for Private Estates & Hospitality | Precision. Discretion. Excellence.</h1>
                    <h1 className="text-white/90 pt-8 text-center text-2xl md:text-3xl font-bold">Trusted by UHNW Families & Iconic Brands. Your Global Partner for Discreet Placements in Private Residences, Yachts, Jets & Resorts</h1>
                    
                  </div>
                </div>
            </div>
          </div>
    <div className="my-container flex flex-col gap-8 pt-30">
      <h1 className="text-3xl text-teal-800 font-medium">Expert Hospitality Recruitment for Luxury Establishments</h1>
      <div className="flex flex-col md:flex-row  gap-16">
        <p className="text-lg text-gray-700 font-medium">At EnkaMax, we specialise in connecting world-class talent with prestigious hospitality environments — from five-star hotels and fine dining establishments to exclusive private members clubs, superyachts, and alpine chalets. Whether you're looking to hire exceptional professionals or take the next step in your luxury hospitality career, we ensure the perfect match.
Explore the sectors below to discover more — and let us help you open the door to excellence.</p>
      </div>
    </div>
    <ContactUs/>
    <Footer/>
    </div>;
};