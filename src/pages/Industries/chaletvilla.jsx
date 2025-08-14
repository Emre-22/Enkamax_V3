import { Navbar } from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";
import { Contact, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactUs } from "../../Components/ContactUs";

import RealEstateBG from "@/assets/IndustryRealEstate.jpg"
import Hospitality from "@/assets/IndustryHospitality.jpeg"
import FamilyOffice from "@/assets/IndustryFamilyOffice.jpeg"


export const Chalets = () => {
  return <div className="">
    <Navbar/>
    <div className="relative z-15 w-full  text-white font-medium flex flex-col   gap-4">
            <div className="relative bg-gray-100 bg-cover bg-center bg-no-repeat min-h-170  " style={{backgroundImage: `url(${RealEstateBG})`}} >
                <div className="absolute min-h-170 inset-0 bg-gradient-to-r from-black/100 to-transparent z-1" />
        
                <div className="my-container flex flex-col gap-4">
                   <div className="relative flex flex-col gap-4 my-container items-center pt-40 pb-10 max-w-200  z-10"> 
                    <h1 className="text-white/90 pt-30  text-left text-2xl md:text-3xl font-bold">EnkaMax Chalet & Luxury Ski Recruitment<br/>
Tailored Excellence for the World’s Finest Mountain Retreats</h1>
                    <p className="text-lg font-medium text-left "> Whether you are staffing a privately owned alpine chalet or managing a luxury ski resort, EnkaMax specialises in placing expertly trained, highly vetted chalet staff anywhere in the world.<br/><br/>

We understand that in these rarefied environments, service is not just hospitality – it is a seamless blend of warmth, discretion, and precision. From Chalet Managers and Private Chefs to Housekeepers, Hosts, and Concierge professionals, we recruit individuals who not only excel in their craft but thrive in high-altitude, high-expectation settings.<br/><br/>

<span className="font-bold">Our Promise to You:</span><br/><br/>
<ul className="list-disc pl-6 space-y-2 text-lg font-medium  ">
          <li>           
            Bespoke candidate selection aligned with your yacht’s specific requirements<br/>
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
      <h1 className="text-3xl text-teal-800 font-bold text-center">Solving Your Recruitment Challenges

</h1>
      <div className="flex flex-col md:flex-row  gap-16">
        <p className="text-lg text-gray-700 font-medium">
          At EnkaMax, we don’t just search for talent — we already know where it is.<br/>
Through our established and ever-expanding network of high-calibre, discreet professionals, we maintain relationships with thousands of exceptional candidates worldwide. We know exactly who is open to a strategic career move and precisely what conditions will inspire them to say yes.<br/><br/>

By leveraging our insider knowledge and unparalleled access to hard-to-reach, high-value talent, we take the complexity out of recruitment for you. While you focus on scaling your organisation, we curate and connect you with individuals who will transform your team’s impact.<br/><br/>

<span className="font-bold">Why Principals & Employers Choose Us:<br/><br/></span>
<ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 font-medium  ">
          <li>          Established trust with exclusive, off-market talent<br/>


          </li>
          <li>      Insight into candidate motivations and decision triggers<br/></li>
          <li>      Bespoke approach ensuring cultural and professional alignment<br/></li>
          <li>      Proven ability to secure placements in roles of extreme discretion and prestige<br/></li>
          
 
        </ul>
<br/><br/>



With EnkaMax, recruitment is no longer a challenge — it’s a competitive advantage.
</p>
      </div>
    </div>
    <ContactUs/>
    <Footer/>
    </div>;
};