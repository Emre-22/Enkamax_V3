import { Navbar } from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";
import { Contact, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactUs } from "../../Components/ContactUs";

import BulkPicture1 from "@/assets/fo2.jpeg"
import BulkPicture3 from "@/assets/bulkcard3.jpeg"

import FamilyOfficesBG from "@/assets/fobg.jpeg"
import Privatehouseholds from "@/assets/PrivateHouseholds.jpeg";
import { BulkPictures } from "../../Components/BulkPictures";

export const FamilyOffices = () => {
  return <div className="">
    <Navbar/>
    <div className="relative z-15 w-full  text-tertiary font-medium flex flex-col   gap-4">
            <div className="relative bg-neutral-light bg-cover bg-top  bg-no-repeat min-h-170  " style={{backgroundImage: `url(${FamilyOfficesBG})`}} >
                <div className="absolute min-h-170 inset-0 bg-gradient-to-r from-black/75 to-transparent z-1" />
        
                <div className="my-container flex flex-col gap-4">
                   <div className="relative flex flex-col gap-4 my-container items-center pt-40 pb-10 max-w-200  z-10"> 
                    <h1 className="text-tertiary/90 pt-30  text-center text-2xl md:text-3xl font-bold">Tailored Recruitment for Private & Multi-Family Offices</h1>
                    <p className="text-lg font-medium text-center ">Discreet, high-level talent acquisition for elite family operations.</p>
                    
                  </div>
                </div>
            </div>
          </div>
  <div className="my-container grid grid-cols-1 rounded-4xl xl:grid-cols-2 gap-16 pt-20">
    
      <div className="w-full min-h-[300px] xl:w-full xl:h-full max-h-[400px]  xl:max-h-none  ">
        <BulkPictures images={[BulkPicture1,BulkPicture3]}/>{/*<div className="relative bg-neutral-light rounded-4xl bg-cover bg-center bg-no-repeat w-full h-full " style={{backgroundImage: `url(${Privatehouseholds})`}} />*/}</div>
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl  text-primary   font-bold">Discreet Talent Solutions for Private Family Offices & UHNW Leadership</h1>
        <div className="flex flex-col md:flex-row gap-16">
          <p className="text-lg text-neutral-dark font-medium ">At EnkaMax, we’ve proudly earned the trust of the world’s most discerning clients by placing exceptional talent in Private Households, Family Offices, and across the global UHNW community. Today, we extend our bespoke recruitment expertise to support CEOs, founders, and high-level executives in both private and corporate spheres — always with absolute discretion and precision.</p>
        </div>
        <h3 className="text-xl font-medium ">Tailored Family Office & Executive Search Services Include:</h3>
        <ul className="list-disc pl-6 space-y-2 text-lg text-neutral-dark font-medium  ">
          <li>Heads of Family Office (CEO, CFO, COO, CIO)</li>
          <li>Personal & Executive Assistants</li>
          <li>Investment Specialists (Real Estate, Private Equity, Hedge Funds)</li>
          <li>Trust & Wealth Managers</li>
          <li>Lifestyle & Portfolio Managers</li>
          <li>Property & Operations Managers</li>
          <li>Office & HR Professionals</li>
        </ul>

      </div>
    </div>


    <div className="my-container pt-20 gap-8 flex flex-col w-full ">
      <h1 className="text-3xl text-center text-primary   font-bold">Elite Recruitment for Visionary Leaders & Private Family Offices</h1>
      <p className="text-lg text-neutral-dark font-medium  ">
        Whether you manage a Private Family Office, operate within the UHNW sector, or lead a fast-paced organisation as a CEO, our sister agency Achieve Professionals delivers bespoke recruitment solutions designed to meet your highest expectations.<br/><br/>

        At this level, finding the right legal and financial professionals isn’t just about qualifications — it’s about chemistry, culture, and long-term vision. That’s why Achieve Professionals takes the time to deeply understand your business, values, and leadership style.<br/><br/>

        Our discreet and precise recruitment process ensures that every candidate we introduce aligns seamlessly with your operational needs, company culture, and strategic goals — empowering your team to grow with clarity, confidence, and excellence.
      </p>
    </div>
    <ContactUs/>
    <Footer/>
    </div>;
};