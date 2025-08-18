import { Navbar } from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";
import { Contact, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactUs } from "../../Components/ContactUs";

import RealEstateBG from "@/assets/Yachting.jpeg"
import Hospitality from "@/assets/IndustryHospitality.jpeg"
import FamilyOffice from "@/assets/IndustryFamilyOffice.jpeg"


export const Yachting = () => {
  return <div className="">
    <Navbar/>
    <div className="bg-white">

    <div className="relative z-15 w-full  text-tertiary pt-10  font-medium flex flex-col   gap-4">
            <div className="relative bg-neutral-light bg-cover bg-center bg-no-repeat min-h-[50vh]  " style={{backgroundImage: `url(${RealEstateBG})`}} >
                <div className="absolute min-h-[50vh] h-full inset-0 bg-gradient-to-r from-black/75 to-transparent z-1" />
        
                <div className="my-container flex flex-col gap-4">
                   <div className="relative flex flex-col gap-4 my-container items-center pt-40 pb-10 max-w-200  z-10"> 
                    <h1 className="text-tertiary/90 pt-30  text-center text-3xl md:text-4xl font-bold">If you’re seeking distinguished charter or private yacht recruitment services, EnkaMax is your trusted partner — connecting world-class crew with the most prestigious vessels, ensuring service excellence on every voyage.</h1>
                    
                  </div>
                </div>
            </div>
          </div>
    <div className="my-container  flex flex-col gap-8 pt-30">
      <h1 className="text-3xl  md:text-4xl text-primary font-bold text-center">EnkaMax Yacht Crew Recruitment<br/>
Bespoke Excellence for the World’s Most Prestigious Vessels
</h1>
      <div className="flex flex-col md:flex-row  gap-16">
        <p className="text-lg text-neutral-dark font-medium">At EnkaMax, our Yacht Division specialises in delivering fully certified, meticulously vetted yacht crew members for the most discerning private owners and elite charter operators worldwide. We understand that the right crew is the heartbeat of any vessel – the element that transforms a journey from exceptional to truly unforgettable.<br/><br/>

Our network spans the finest professionals in the yachting industry, including Captains, Officers, Deckhands, Bosuns, Pursers, Chief Stewardesses, Stewardesses, Chefs, and Housekeepers. Every placement is a tailored process – we take time to understand your vessel’s unique operational culture, your expectations, and the calibre of service your guests deserve.<br/><br/>

<span className="font-bold">Our Promise:<br/><br/></span>
<ul className="list-disc pl-6 space-y-2 text-lg text-neutral-dark font-medium  ">
          <li>           Bespoke candidate selection aligned with your yacht’s specific requirements<br/>



          </li>
          <li>       Verified qualifications & certificates ensuring full compliance with maritime standards<br/>



          </li>
          <li>       Uncompromising discretion & professionalism in every step of the recruitment process<br/>


          </li>
          
 
        </ul>




<br/>

On board, five-star service and flawless presentation are non-negotiable. The professionals we place are not only experts in their roles but adept at delivering exceptional guest experiences, seamlessly blending formality, warmth, and adaptability – even under the demanding conditions of long hours and constant movement.<br/><br/>

<span className="font-bold">Whether you are:<br/><br/></span>
<ul className="list-disc pl-6 space-y-2 text-lg text-neutral-dark font-medium  ">
          <li>          A Principal seeking a handpicked crew that embodies precision, elegance, and service mastery<br/>

          </li>
          <li>       Or a professional candidate ready to take your yacht career to the next level in an exclusive, high-standard environment<br/>



          </li>
          
 
        </ul>

<br/>
…EnkaMax is your trusted partner. Contact our Yacht Division today to experience recruitment as it should be – personal, precise, and anchored in excellence.</p>
      </div>
    </div>
    </div>
    <ContactUs/>
    <Footer/>
    </div>;
};