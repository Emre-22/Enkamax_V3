import { Navbar } from "../../../Components/Navbar";
import { Footer } from "../../../Components/Footer";
import { Contact, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactUs } from "../../../Components/ContactUs";

import FamilyOffice from "@/assets/IndustryFamilyOffice.jpeg"
import  UHNWBG  from "@/assets/PrivateHouseHolds.jpeg"
import Privatehouseholds from "@/assets/PrivateHouseholds.jpeg";


export const DomesticStaff = () => {
  return <div className="">
    <Navbar/>
    <div className="relative z-15 w-full  text-white font-medium flex flex-col   gap-4">
            <div className="relative bg-gray-100 bg-cover bg-center bg-no-repeat min-h-170  " style={{backgroundImage: `url(${UHNWBG})`}} >
                <div className="absolute min-h-170 inset-0 bg-gradient-to-r from-black/100 to-transparent z-1" />
        
                <div className="my-container flex flex-col gap-4">
                   <div className="relative flex flex-col gap-4 my-container items-center pt-20  pb-10 max-w-200  z-10"> 
                    <h1 className="text-white/90 pt-30  text-center text-2xl md:text-3xl font-bold">EnkaMax | Trusted Domestic Staff Agency for Discerning Clients Worldwide</h1>
                    <p className="text-lg font-medium text-center ">Whether you're managing a busy family household, a private estate, or simply seeking support to enhance your daily life, EnkaMax connects you with carefully vetted, experienced domestic professionals who understand discretion, excellence, and service.<br/><br/>

From housekeepers, nannies, and governesses to laundresses, butlers, and private chefs – we offer bespoke staffing solutions tailored to the unique lifestyles of high-net-worth families, private individuals, and global homeowners.<br/><br/>

Our mission is simple: to ensure your household runs with ease, grace, and absolute trust – no matter where in the world you call home.</p>
                    
                  </div>
                </div>
            </div>
          </div>
    <div className="my-container grid grid-cols-1 rounded-4xl xl:grid-cols-2 gap-16 pt-30">
        
          <div className="w-full min-h-[300px] xl:w-full xl:h-full max-h-[400px]  xl:max-h-none  ">
           <div className="relative bg-gray-100 rounded-4xl bg-cover bg-center bg-no-repeat w-full h-full " style={{backgroundImage: `url(${Privatehouseholds})`}} /></div>
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl text-teal-800 font-medium">Looking for Outstanding Household Staff?
</h1>
            <div className="flex flex-col md:flex-row gap-16">
              <p className="text-lg text-gray-700 font-medium ">At EnkaMax, we specialise in sourcing exceptional domestic professionals for high-net-worth households, private estates, and residences around the world. We know that your home is more than just a place—it’s a reflection of your lifestyle, standards, and values.<br/><br/>
              That’s why we go beyond simply filling roles. Through our meticulous recruitment and vetting process, we introduce you only to candidates who meet the highest standards of experience, discretion, and dedication—whether you need a seasoned housekeeper, a qualified nanny, a governess, or a complete household team.</p>
            </div>
            <h3 className="text-xl font-medium ">Why EnkaMax?
</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 font-medium  ">
              <li>Discreet and expert recruitment for UHNW residences globally
</li>
              <li>Tailored placements for housekeepers, nannies, governesses, and more</li>
              <li>Rigorous background checks and reference verification</li>
              <li>Flexibility for live-in, live-out, full-time, or rotational roles</li>
              <li>Ongoing support to ensure long-term success</li>
              <li>Deep understanding of the standards in luxury service environments</li>
            </ul>
    
              <p className="text-lg text-gray-700 font-medium ">With EnkaMax, you gain more than a staffing solution—you gain a trusted partner committed to making your private household run effortlessly.</p>
          </div>
        </div>
        
    <div className="my-container py-20 gap-8 flex flex-col w-full ">
      <h1 className="text-xl  font-medium">Complete Household Staffing – From Kitchen to Laundry
</h1>
      <p className="text-lg text-gray-700 font-medium  ">
        At EnkaMax, we don’t just fill individual roles—we curate fully functioning, high-performing domestic teams tailored to your lifestyle. Whether you require a private chef, butler, house manager, laundress, nanny, chauffeur, or full housekeeping support, we deliver seamless staffing solutions across every area of your home.<br/><br/>

From the kitchen to the laundry room, from nursery to guest wing—our placements ensure every corner of your residence is managed with the utmost professionalism, discretion, and care. Our goal is to make your household not only operate smoothly but feel effortlessly in sync with your daily rhythm and expectations.<br/><br/>

With EnkaMax, you benefit from a single trusted partner who understands the full scope of luxury household needs and delivers excellence—consistently and confidentially.
      </p>
    </div>

    <ContactUs/>
    <Footer/>
    </div>;
};