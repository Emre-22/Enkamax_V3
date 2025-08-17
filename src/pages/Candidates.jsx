import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

import { ScrollLink } from "../lib/ScrollLink";
import { ContactUs } from "@/Components/ContactUs.jsx"
import { Cards } from "../Components/Cards";


import Pattern from "@/assets/Pattern.webp"


import { UnlockCareerGoals } from "../Components/UnlockCareerGoals";

import ServiceBG from "@/assets/ServiceBG.jpeg"

import { Home } from 'lucide-react';
import { Building2 } from 'lucide-react';
import { HandPlatter } from 'lucide-react';
import { Gem } from 'lucide-react';
import { TreePalm } from 'lucide-react';
import { LampDesk } from 'lucide-react';

import { benefits } from "../Constants/benefits";
import { ServicesInfo } from "../Constants/servicesinfo";
import { AreasOfExpertise } from "../Components/AreasOfExpertise";

export const Candidates = () => {
  return <div className="">
    <Navbar/>
    <div className="relative z-15 w-full  text-tertiary font-medium flex flex-col   gap-4">
        <div className="relative  bg-cover bg-center bg-no-repeat min-h-[90vh] " style={{backgroundImage: `url(${ServiceBG})`}} >
            <div className="absolute min-h-[90vh] inset-0 bg-gradient-to-r from-black/75 to-transparent z-1" />
    
            <div className="my-container flex flex-col gap-4">
               <div className="relative flex flex-col gap-4 my-container items-start pt-40 pb-10 max-w-200  z-10"> 
                <h1 className="text-tertiary/90 pt-30  text-left text-2xl md:text-3xl font-bold">Discover Elite Careers in Global Luxury Hospitality
</h1>
                <p className="text-lg font-medium text-left ">At EnkaMax, we specialise in connecting the finest hospitality talent with prestigious opportunities across the globe. From world-class five-star hotels and award-winning fine dining restaurants to private estates, luxury yachts, and exclusive alpine chalets, we place skilled professionals in roles where their expertise, dedication, and artistry truly shine.<br/><br/>

Our network extends to some of the most distinguished properties and private residences worldwide, ensuring every placement is a perfect match between talent and environment. Whether you are a seasoned professional seeking your next challenge or a rising star ready to step into the world of luxury hospitality, EnkaMax opens doors to roles that redefine career possibilities.</p>
                <ScrollLink to="/contact"  className="border-1 border-hover-secondary   rounded-3xl hover:shadow-center hover:bg-secondary transition-colors duration-300">
                                    <div className="text-tertiary  p-7 py-2 text-center font-bold" >Lets Talk</div>
                </ScrollLink>
              </div>
            </div>
        </div>
      </div>
    <div className="">
      <h1 className="text-3xl text-primary mt-20 mb-10  font-bold text-center">Take the Next Step in Your Hospitality Career with EnkaMax
</h1>
     

      <div className="my-container flex flex-col gap-8 pb-30">
        <p className="text-lg text-neutral-dark">At EnkaMax, we specialise in opening doors to the most prestigious and exclusive hospitality opportunities worldwide. Our network spans iconic luxury hotels, Michelin-starred restaurants, private estates, superyachts, and opulent villas—ensuring that your skills and talent are showcased in environments where excellence is the standard. Whether you aspire to step into a senior management position, secure a high-profile front-of-house role, or lead a world-class kitchen, we are here to guide you toward the next defining chapter of your career.<br/><br/>
<span className="font-bold ">
A Tailored Approach for Exceptional Talent<br/><br/>
</span>
We understand that no two professionals—or careers—are alike. Our experienced consultants take the time to understand your aspirations, strengths, and values before matching you with roles that align perfectly with your expertise and ambitions. From high-pressure, performance-driven Michelin kitchens to the refined discretion of a private estate, we ensure you are positioned where your talent can truly shine.<br/><br/>
<span className="font-bold ">

Global Opportunities, Lasting Careers<br/><br/>
</span>
Drawing on deep industry insight, we connect you with opportunities that offer more than just a job—they offer stability, growth, and the chance to become part of the world’s most elite hospitality teams. We work with principals, owners, and brands who value dedication, professionalism, and excellence, ensuring that your career path leads to both personal fulfilment and professional success.<br/><br/>
<span className="font-bold ">

Ready to Elevate Your Career?<br/><br/>
</span>
Your next role could be the one that transforms your professional journey. Explore our latest openings and discover how EnkaMax can connect you to opportunities that redefine your future in hospitality.</p><br/><br/>
      </div>

      <div className="w-full min-h-110 bg-gradient-to-b from-neutral-dark to-primary/70 mb-40">
        <h1 className="text-tertiary text-center p-8 text-3xl">Your Benefits From Using Our Services</h1>
        <div className="my-container flex flex-col md:flex-row  md:gap-16">
          {benefits.map((item,key)=>{
            const Icon=item.icon
            return <div className="flex w-full flex-col mt-12 gap-4 pb-8 items-center text-tertiary" key = {key}>
              <Icon className="text-secondary" size={40}/>
              <h2 className="text-2xl">{item.title}</h2>
              <p className="text-lg">{item.paragraph}</p>
            </div>
          })}
        </div>  
      
        </div>
    </div>  
    <div className="mb-20">
      <UnlockCareerGoals/>
    </div>
    <AreasOfExpertise/>
    
    <Cards animate={false}/>
    <ContactUs/>
    <Footer/>
  </div>;
};