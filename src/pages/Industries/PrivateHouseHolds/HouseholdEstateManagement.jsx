import { Navbar } from "../../../Components/Navbar";
import { Footer } from "../../../Components/Footer";
import { Contact, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactUs } from "../../../Components/ContactUs";

import FamilyOffice from "@/assets/IndustryFamilyOffice.jpeg"
import  UHNWBG  from "@/assets/PrivateHouseHolds.jpeg"


export const Householdestatemanagement = () => {
  return <div className="">
    <Navbar/>
    <div className="relative z-15 w-full  text-white font-medium flex flex-col   gap-4">
            <div className="relative bg-gray-100 bg-cover bg-center bg-no-repeat min-h-170  " style={{backgroundImage: `url(${UHNWBG})`}} >
                <div className="absolute min-h-170 inset-0 bg-gradient-to-r from-black/100 to-transparent z-1" />
        
                <div className="my-container flex flex-col gap-4">
                   <div className="relative flex flex-col gap-4 my-container items-center pt-40 pb-10 max-w-200  z-10"> 
                    <h1 className="text-white/90 pt-30  text-center text-2xl md:text-3xl font-bold">Enjoy Your Exclusive Perks</h1>
                    <p className="text-lg font-medium text-center ">Get rid of the constant headache of chasing. Let our passionate team handle it.</p>
                    
                  </div>
                </div>
            </div>
          </div>
    <div className="my-container flex flex-col gap-8 pt-30">
      <h1 className="text-3xl text-teal-800 font-medium">Because it’s about time to redefine Exclusive.</h1>
      <div className="flex flex-col md:flex-row  gap-16">
        <p className="text-lg text-gray-700 font-medium">Enkamax is a market leading recruitment and consultant agency who strive to be above competition and have been proven to beat any other genuine agency quote for your recruitment needs. Our team brings passion and understanding of Private Households, Hospitality, Retail, Fashion, Yachting, Chalets and Aviation, and a belief that success is only measured by the quality of people within your home and/or business.</p>
        <p className="text-lg text-gray-700 font-medium">Enkamax is a market leading recruitment and consultant agency who strive to be above competition and have been proven to beat any other genuine agency quote for your recruitment needs. Our team brings passion and understanding of Private Households, Hospitality, Retail, Fashion, Yachting, Chalets and Aviation, and a belief that success is only measured by the quality of people within your home and/or business.</p>
      </div>
    </div>
    <ContactUs/>
    <Footer/>
    </div>;
};