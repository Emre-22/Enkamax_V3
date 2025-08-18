import { Navbar } from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";
import { Contact, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactUs } from "../../Components/ContactUs";

import RealEstateBG from "@/assets/chalet.jpeg"
import Hospitality from "@/assets/IndustryHospitality.jpeg"
import FamilyOffice from "@/assets/IndustryFamilyOffice.jpeg"


export const Chalets = () => {
  return <div className="">
    <Navbar/>
<div className="h-[calc(56.391px+8vh)]  w-full bg-primary"/>
    <div className="relative z-15 w-full  text-tertiary font-medium flex flex-col   gap-4">
            <div className="flex flex-col justify-center relative bg-neutral-light bg-cover bg-center bg-no-repeat min-h-[50vh] " style={{backgroundImage: `url(${RealEstateBG})`}} >
                <div className="absolute min-h-[50vh] inset-0 bg-gradient-to-r from-black/75 to-transparent z-1" />
        
                <div className="my-container flex flex-col gap-4">
                   <div className="relative flex flex-col gap-4  max-w-4xl py-20  z-10"> 
                    <h1 className="text-tertiary/90  text-left text-3xl md:text-4xl font-bold">EnkaMax Chalet & Luxury Ski Recruitment<br/>
Tailored Excellence for the World’s Finest Mountain Retreats</h1>
                    <p className="text-lg font-medium text-left "> Whether you are staffing a privately owned alpine chalet or managing a luxury ski resort, EnkaMax specialises in placing expertly trained, highly vetted chalet staff anywhere in the world.<br/><br/>

We understand that in these rarefied environments, service is not just hospitality – it is a seamless blend of warmth, discretion, and precision. From Chalet Managers and Private Chefs to Housekeepers, Hosts, and Concierge professionals, we recruit individuals who not only excel in their craft but thrive in high-altitude, high-expectation settings.<br/><br/>

<span className="font-bold">Our Promise to You:</span><br/><br/>
<ul className="list-disc pl-6 space-y-2 text-lg font-medium  ">
          <li>           
            Bespoke candidate selection aligned with your property’s style, standards, and guest expectations
<br/>
          </li>
          <li>
Verified experience in luxury hospitality and winter resort operations
          </li>
          <li>
Discreet, reliable professionals committed to delivering five-star service in every detail
          </li>
          
 
        </ul>

<br/>

Whether you require seasonal staff for a high-profile holiday period or a permanent team for year-round private residence management, our global reach and tailored recruitment process ensure the perfect fit – every time.<br/><br/>

If you are a principal seeking excellence or a hospitality professional ready to elevate your career in some of the world’s most breathtaking locations, EnkaMax is your trusted partner in luxury chalet recruitment.</p>

                    
                  </div>
                </div>
            </div>
          </div>
    <div className="my-container flex flex-col gap-8 pt-30">
      <h1 className="text-3xl  md:text-4xl text-primary font-bold text-center">Exclusive Chalet & Resort Staffing

</h1>
      <div className="flex flex-col md:flex-row  gap-16">
        <p className="text-lg text-neutral-dark font-medium">
          At EnkaMax, we understand that luxury chalet operations demand more than just staff — they require individuals who combine professional expertise with a passion for the alpine lifestyle.

Our specialist recruitment team sources candidates with proven hospitality and catering experience, handpicked for their ability to deliver exceptional service in the unique environment of ski resorts. Whether it’s a seasoned chalet manager, a fine-dining chef, or attentive front-of-house staff, we ensure every placement is a perfect match for both skill and character.<br/><br/>
        We know the rewards and challenges that come with working in a chalet setting, from the fast-paced service expectations to the adventure-filled surroundings. That’s why we select candidates who are not only highly capable but also adaptable, energetic, and ready to thrive in the mountains.

Whether you are seeking a new role in a world-class resort or looking to hire exceptional chalet staff, EnkaMax provides a discreet, tailored service that ensures your needs are met with precision and care.
</p>
      </div>
    </div>
    <ContactUs/>
    <Footer/>
    </div>;
};