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
                <h1 className="text-white/90 pt-30 text-center text-2xl md:text-3xl font-bold">EnkaMax – Redefining Elite Recruitment
</h1>
                <p className="text-lg font-medium text-center ">Because the right talent doesn’t just fill a role – it transforms it.</p>
                <ScrollLink to="/contact"  className="border-1 border-teal-400    rounded-3xl hover:shadow-center hover:bg-teal-800 transition-colors duration-300">
                                    <div className="text-white  p-7 py-2 text-center font-bold" >Lets Talk</div>
                </ScrollLink>
              </div>
            </div>
        </div>
    </div>
    <div className="">
      <h1 className="text-3xl text-primary  mt-20 font-medium mb-10 text-center">EnkaMax – Where Recruitment Becomes a Signature Experience</h1>
            
            



      <div className="my-container flex flex-col gap-8 pb-10">
        <p className="text-lg text-gray-800">At EnkaMax, we redefine recruitment for the world’s most discerning clients. This is not about filling a position — it’s about curating a perfect fit, one that elevates your household, estate, yacht, chalet, boutique, or private aircraft to new heights of excellence.<br/><br/>

We operate in the rarefied spaces where privacy, precision, and perfection are absolute. Every introduction we make is guided by a meticulous process: understanding the unique culture of your environment, identifying candidates whose skills and discretion are beyond question, and ensuring that each match not only meets but anticipates your needs.<br/><br/>

From ultra-private estates to luxury hospitality, designer retail, exclusive yachts, ski chalets, and private aviation — our team brings deep industry knowledge and a global network built on trust. Every candidate is hand-selected, rigorously vetted, and personally profiled, ensuring that they embody the expertise, reliability, and loyalty you require.<br/><br/>

At EnkaMax, we believe your success is measured by the people you trust to represent you. That’s why our approach is bespoke, comprehensive, and uncompromising — every time, for every client. Because in your world, only exceptional is acceptable.</p>
      </div>

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
      <div className="w-full min-h-110 bg-gradient-to-b from-gray-700 to-teal-800/70 mb-40">
        <h1 className="text-white text-center p-8 text-3xl">Your Benefits From Using Our Services</h1>
        <div className="my-container flex flex-col md:flex-row  md:gap-16">
          {benefits.map((item,key)=>{
            const Icon=item.icon
            return <div className="flex w-full flex-col mt-12 gap-4 pb-8 items-center text-white" key = {key}>
              <Icon className="text-yellow-400" size={40}/>
              <h2 className="text-center text-2xl">{item.title}</h2>
              <p className="text-lg text-center ">{item.paragraph}</p>
            </div>
          })}
        </div>  
      
        </div>
    </div>  
    <div className="relative flex flex-col my-container pb-16 gap-8">
      <div className="mb-32 flex flex-col gap-8">
        <h1 className="text-3xl text-center font-medium text-primary">Areas Of Expertise</h1>
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