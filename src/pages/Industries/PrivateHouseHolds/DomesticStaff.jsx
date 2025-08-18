import { Navbar } from "../../../Components/Navbar";
import { Footer } from "../../../Components/Footer";
import { Contact, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactUs } from "../../../Components/ContactUs";

import FamilyOffice from "@/assets/IndustryFamilyOffice.jpeg"
import  UHNWBG  from "@/assets/domeststaff.jpeg"
import Privatehouseholds from "@/assets/domeststaff2.jpeg";


export const DomesticStaff = () => {
  return <div className="">
    <Navbar/>
<div className="h-[calc(56.391px+8vh)]  w-full bg-primary"/>
    <div className="relative z-15 w-full  text-tertiary font-medium flex flex-col   gap-4">
            <div className="flex flex-col justify-center py-20 relative bg-neutral-light bg-cover bg-center bg-no-repeat min-h-[50vh] " style={{backgroundImage: `url(${UHNWBG})`}} >
                <div className="absolute min-h-[50vh] inset-0 bg-gradient-to-r from-black/75 to-transparent z-1" />
        
                <div className="my-container flex flex-col gap-4">
                   <div className="relative flex flex-col gap-8  max-w-4xl   z-10"> 
                    <h1 className="text-tertiary/90  text-left text-3xl md:text-4xl font-bold">EnkaMax | Trusted Domestic Staff Agency for Discerning Clients Worldwide</h1>
                    <p className="text-lg font-medium text-left ">Whether you're managing a busy family household, a private estate, or simply seeking support to enhance your daily life, EnkaMax connects you with carefully vetted, experienced domestic professionals who understand discretion, excellence, and service.<br/><br/>

From housekeepers, nannies, and governesses to laundresses, butlers, and private chefs – we offer bespoke staffing solutions tailored to the unique lifestyles of high-net-worth families, private individuals, and global homeowners.<br/><br/>

Our mission is simple: to ensure your household runs with ease, grace, and absolute trust – no matter where in the world you call home.</p>
                    
                  </div>
                </div>
            </div>
          </div>
    <div className=" my-container grid grid-cols-1 rounded-4xl  xl:grid-cols-1 gap-16 pt-20">
        
       
          
          
          <div className="flex  gap-8">
            <div>
              <h1 className="text-3xl md:text-4xl   text-primary  pb-10 font-bold">Looking for Outstanding Household Staff?</h1>
              <div className="flex flex-col md:flex-row gap-16">
                <p className="text-lg text-neutral-dark font-medium ">At EnkaMax, we specialise in sourcing exceptional domestic professionals for high-net-worth households, private estates, and residences around the world. We know that your home is more than just a place—it’s a reflection of your lifestyle, standards, and values.<br/><br/>
                That’s why we go beyond simply filling roles. Through our meticulous recruitment and vetting process, we introduce you only to candidates who meet the highest standards of experience, discretion, and dedication—whether you need a seasoned housekeeper, a qualified nanny, a governess, or a complete household team.</p>
              </div>
            </div>
           </div>

            <div className="relative bg-neutral-light rounded-4xl border-3 border-secondary bg-cover bg-center  min-h-100 bg-no-repeat w-full h-full " style={{backgroundImage: `url(${Privatehouseholds})`}} />
            
            <div>
            <h3 className="text-xl text-neutral-dark font-bold pb-4 ">Why EnkaMax:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-lg text-neutral-dark font-medium  ">
              <li>Discreet and expert recruitment for UHNW residences globally
              </li>
              <li>Tailored placements for housekeepers, nannies, governesses, and more</li>
              <li>Rigorous background checks and reference verification</li>
              <li>Flexibility for live-in, live-out, full-time, or rotational roles</li>
              <li>Ongoing support to ensure long-term success</li>
              <li>Deep understanding of the standards in luxury service environments</li>
            </ul>
    
              <p className="text-lg text-neutral-dark font-medium ">With EnkaMax, you gain more than a staffing solution—you gain a trusted partner committed to making your private household run effortlessly.</p>
          </div>
        </div>
        
    <div className="my-container pt-20 gap-8 flex flex-col w-full ">
      <h1 className="text-3xl  md:text-4xl text-center text-primary  pt-10 font-bold">Complete Household Staffing – From Kitchen to Laundry
</h1>
      <p className="text-lg text-neutral-dark font-medium  ">
        At EnkaMax, we don’t just fill individual roles—we curate fully functioning, high-performing domestic teams tailored to your lifestyle. Whether you require a private chef, butler, house manager, laundress, nanny, chauffeur, or full housekeeping support, we deliver seamless staffing solutions across every area of your home.<br/><br/>

From the kitchen to the laundry room, from nursery to guest wing—our placements ensure every corner of your residence is managed with the utmost professionalism, discretion, and care. Our goal is to make your household not only operate smoothly but feel effortlessly in sync with your daily rhythm and expectations.<br/><br/>

With EnkaMax, you benefit from a single trusted partner who understands the full scope of luxury household needs and delivers excellence—consistently and confidentially.
      </p>
    </div>

    <ContactUs/>
    <Footer/>
    </div>;
};