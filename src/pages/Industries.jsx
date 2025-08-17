import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { ContactUs } from "@/Components/ContactUs.jsx"
import { cn } from "@/lib/utils";

import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import {cardinfo} from "@/components/Cards"

import { ScrollLink } from "../lib/ScrollLink";
import ServiceBG from "@/assets/ServiceBG.jpeg"

import Pattern from "@/assets/IndustriesBG.jpeg"

import { useState, useEffect } from "react";



export const Industries = () => {
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    let resizeTimer;

    const handleResize = () => {
      setIsResizing(true);
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setIsResizing(false);
      }, 200); 
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div className=" ">
    <Navbar/>
    <div className="relative z-15 w-full  text-tertiary  flex flex-col   gap-4">
      <div className="relative bg-neutral-light bg-cover bg-center bg-no-repeat min-h-[90vh] " style={{backgroundImage: `url(${Pattern})`}} >
        <div className="absolute min-h-[90vh] inset-0 bg-gradient-to-r from-black/75 to-transparent z-1" />

        <div className="my-container flex  flex-col gap-4">
           <div className="relative flex flex-col gap-4 my-container pt-40 pb-10 max-w-200  z-10"> 
            <h1 className="text-tertiary/90 pt-30  text-center text-2xl md:text-3xl font-bold">Areas of Expertise</h1>
            <p className="text-lg text-center font-medium  pb-15">At EnkaMax Recruiting & Consulting, our dedicated specialists bring deep expertise across our core divisions — Private Households & Estates, Luxury Hospitality, and Lifestyle & Retail. We combine the precision of a boutique agency with the reach and resources of a global partner, ensuring that every placement is a seamless match between talent and opportunity. Whether for a private estate, a luxury resort, or an exclusive retail brand, we deliver exceptional professionals tailored to your world.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
        
        <div  className=" grid grid-cols-1  pt-30">
        {cardinfo.map((item, key)=>{
          const Icon = item.icon
          return <div  key={key} className={cn("flex group  py-8 md:p-0  ",
              key%2==1 ? "md:flex-row-reverse":""
            )}>
              <ScrollLink to={item.href} 
              className={cn(`flex group  border-r-2 border-l-2 w-full flex-col md:flex-row ${key % 2 !== 0 ? "md:flex-row-reverse border-l-primary" : "border-r-primary"}
              md:saturate-0 hover:saturate-100  border-transparent  transition-all  duration-300`,isResizing?"transition-none":"")}>

              <div className={cn(key%2==1 ? "mask-l-from-0 to-100% md:-translate-x-1/2 transition-all  md:group-hover:translate-x-0":"mask-r-from-0 to-100% md:translate-x-1/2 transition-all  md:group-hover:translate-x-0",
                 "relative  bg-cover duration-600 min-h-100 w-full bg-center bg-no-repeat ",isResizing?"transition-none":"")} style={{ backgroundImage: `url(${item.img})` }}></div>

              <div className={cn(key%2==1 ? "md:translate-x-1/2 transition-all  md:group-hover:translate-x-0":"md:-translate-x-1/2 transition-all group-hover:translate-x-0",
                " relative shadow-center text-tertiary-foreground   duration-600 bg-secondary/50 backdrop-blur-[200px] min-h-100 w-full   ",isResizing?"transition-none":"" )}>
                <div className={cn("text-2xl font-medium flex items-center",key%2==0?"  md:flex-row-reverse":"")}>
                  <Icon className="relative md:pl-0 pl-4  md:w-20 md:m-4 z-4 transition-colors duration-300  text-neutral-dark group-hover:text-primary" size={40} />
                  <h1 className={cn("text-2xl p-10 font-medium text-")}>{item.title}</h1> 
                </div>
                <p className=" p-10 text-lg py-5">{item.paragraph} </p>
              </div>
            </ScrollLink>
         </div>
        })}
        </div>
        
        
      </div>
        <ContactUs/>

        <Footer/>
    </div>;
};