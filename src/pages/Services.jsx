import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

import { ScrollLink } from "../lib/ScrollLink";
import { ContactUs } from "@/Components/ContactUs.jsx"
import { Cards } from "../Components/Cards";


import { ChevronRight} from "lucide-react";
import { Link } from "react-router-dom";
import ServiceBG from "@/assets/ServiceBG.jpeg"

import { Home } from 'lucide-react';
import { Building2 } from 'lucide-react';
import { HandPlatter } from 'lucide-react';
import { Gem } from 'lucide-react';
import { TreePalm } from 'lucide-react';
import { LampDesk } from 'lucide-react';

import { benefits } from "../Constants/benefits";
import { ServicesInfo } from "../Constants/servicesinfo";

export const Services = () => {
  return <div className="">
    <Navbar/>
    <div className="relative z-15 w-full  text-white font-medium flex flex-col   gap-4">
        <div className="relative bg-gray-100 bg-cover bg-center bg-no-repeat min-h-170  " style={{backgroundImage: `url(${ServiceBG})`}} >
            <div className="absolute min-h-170 inset-0 bg-gradient-to-r from-black/100 to-transparent z-1" />
    
            <div className="my-container flex flex-col gap-4">
               <div className="relative flex flex-col gap-4 my-container items-center pt-40 pb-10 max-w-200  z-10"> 
                <h1 className="text-white/90 pt-30 mask-radial-from-75 text-center text-2xl md:text-3xl font-bold">Achieving Excellence Through First-Rate Recruitment</h1>
                <p className="text-lg font-medium text-center ">Because it’s about time to redefine recruitment.</p>
                <ScrollLink to="/contact"  className="border-1 border-teal-400    rounded-3xl hover:shadow-center hover:bg-teal-900 transition-colors duration-300">
                                    <div className="text-white  p-7 py-2 text-center font-bold" >Lets Talk</div>
                </ScrollLink>
              </div>
            </div>
        </div>
    </div>
    <div className="">
      <h1 className="text-3xl text-teal-800  mt-20 mask-radial-from-45 font-medium text-center">Our Client Services</h1>
            
            
            <div className="relative my-20 my-container grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
              {ServicesInfo.map((item, key) => {
                const Icon = item.icon;
                return (
                  <ScrollLink
                    key={key}
                    to="/services/realestate"
                    className="border-1 relative hover:inner-shadow-center  transition-all duration-300 rounded-4xl p-10 flex flex-col h-full"
                  >
                    <div className="flex  gap-4">
                      <Icon className="text-gray-600 shrink-0" size={24} />
                      <h1 className="text-gray-600 font-bold text-xl">{item.name}</h1>
                    </div>
                    <div className="flex  justify-between  mt-6">
                      <p className="text-gray-600">{item.paragraph}</p>
                      <ChevronRight className="text-gray-600 shrink-0" size={24} />
                    </div>
                  </ScrollLink>
                );
              })}
            </div>



      <div className="my-container flex flex-col gap-8 pb-30">
        <h1 className="text-xl text-gray-800 font-medium">Because it’s about time to redefine recruitment.</h1>
        <p className="text-lg text-gray-800">Enkamax is a market leading recruitment and consultant agency who strive to be above competition and have been proven to beat any other genuine agency quote for your recruitment needs. Our team brings passion and understanding of Private Households, Hospitality, Retail, Fashion, Yachting, Chalets and Aviation, and a belief that success is only measured by the quality of people within your home and/or business.</p>
      </div>

      <div className="w-full min-h-110 bg-gradient-to-b from-gray-700 to-teal-950/70 mb-40">
        <h1 className="text-white text-center p-8 text-3xl">Your Benefits From Using Our Services</h1>
        <div className="my-container flex flex-col md:flex-row  md:gap-16">
          {benefits.map((item,key)=>{
            const Icon=item.icon
            return <div className="flex w-full flex-col mt-12 gap-4 pb-8 items-center text-white" key = {key}>
              <Icon className="text-yellow-400" size={40}/>
              <h2 className="text-2xl">{item.title}</h2>
              <p className="text-lg">{item.paragraph}</p>
            </div>
          })}
        </div>  
      
        </div>
    </div>  
    <div className="relative flex flex-col my-container pb-16 gap-8">
      <div className="mb-32 flex flex-col gap-8">
        <h1 className="text-3xl text-center font-medium text-teal-800 mask-radial-from-75">Areas Of Expertise</h1>
        <p className="text-gray-700 text-lg">
          With specialist Private Household recruitment and Luxury Hospitality recruitment consultants covering our core divisions, Achieve Hospitality combines the Private Household recruitment and Luxury Hospitality recruitment industry and market expertise of a niche supplier within Private Household recruitment and Luxury Hospitality recruitment with the capacity and resources of a national agency to deliver the right talent for the right role.
        </p>
      </div>
    </div>
    <Cards animate={false}/>
    <ContactUs/>
    <Footer/>
  </div>;
};