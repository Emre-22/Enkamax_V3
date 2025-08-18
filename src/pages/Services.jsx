import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

import { ScrollLink } from "../lib/ScrollLink";
import { ContactUs } from "@/Components/ContactUs.jsx"
import { Cards } from "../Components/Cards";


import { ChevronRight} from "lucide-react";
import { Link } from "react-router-dom";
import ServiceBG from "@/assets/ServiceBG.webp"

import { Home } from 'lucide-react';
import { Building2 } from 'lucide-react';
import { HandPlatter } from 'lucide-react';
import { Gem } from 'lucide-react';
import { TreePalm } from 'lucide-react';
import { LampDesk } from 'lucide-react';

import { benefits } from "../Constants/benefits";
import { ServicesInfo } from "../Constants/servicesinfo";
import { AreasOfExpertise } from "../Components/AreasOfExpertise";
import { Benefits } from "../Components/Benefits";

export const Services = () => {
  return <div className="">
    <Navbar/>
          <div className="h-[calc(56.391px+8vh)]  w-full bg-primary"/>

    <div className="relative z-15 w-full  text-tertiary font-medium flex flex-col   gap-4">
        <div className="relative  bg-cover bg-center bg-no-repeat min-h-[50vh] flex flex-col items-center justify-center  " style={{backgroundImage: `url(${ServiceBG})`}} >
            <div className="absolute min-h-[50vh] inset-0 bg-gradient-to-r from-black/50 to-transparent z-1" />
    
            <div className="my-container flex flex-col gap-4 py-20">
               <div className="relative flex flex-col gap-4 my-container items-center   z-10"> 
                <h1 className="text-tertiary/90  text-center text-3xl md:text-4xl font-bold">EnkaMax – Redefining Elite Recruitment
</h1>
                <p className="text-lg font-medium text-center ">Because the right talent doesn’t just fill a role – it transforms it.</p>
                <a href="mailto:info@enkamax.com"  className="border-1 border-hover-secondary   rounded-3xl hover:shadow-center hover:bg-secondary transition-colors duration-300">
                                    <div className="text-tertiary  p-7 py-2 text-center font-bold" >Lets Talk</div>
                </a>
              </div>
            </div>
        </div>
    </div>
    <div className="">
      <h1 className="text-3xl  md:text-4xl text-primary  mt-20 font-bold mb-10 text-center">EnkaMax – Where Recruitment Becomes a Signature Experience</h1>
            
            



      <div className="my-container flex flex-col gap-8 pb-10">
        <p className="text-lg text-neutral-dark">At EnkaMax, we redefine recruitment for the world’s most discerning clients. This is not about filling a position — it’s about curating a perfect fit, one that elevates your household, estate, yacht, chalet, boutique, or private aircraft to new heights of excellence.<br/><br/>

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
                    to={item.to}
                    className="border-1 relative hover:inner-shadow-center  transition-all duration-300 rounded-4xl p-10 flex flex-col h-full"
                  >
                    <div className="flex  gap-4">
                      <Icon className="text-neutral-dark shrink-0" size={24} />
                      <h1 className="text-neutral-dark font-bold text-xl">{item.name}</h1>
                    </div>
                    <div className="flex  justify-between  mt-6">
                      <p className="text-neutral-dark">{item.paragraph}</p>
                      <ChevronRight className="text-neutral-dark shrink-0" size={24} />
                    </div>
                  </ScrollLink>
                );
              })}
            </div>
            <Benefits/>
    </div>  
    <AreasOfExpertise/>
    <Cards animate={false}/>
    <ContactUs/>
    <Footer/>
  </div>;
};