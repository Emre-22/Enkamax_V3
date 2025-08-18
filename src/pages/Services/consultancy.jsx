import { Navbar } from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";
import { Contact, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactUs } from "../../Components/ContactUs";

import ConsultancyBG from "@/assets/consultancy.webp"


export const Consultancy = () => {
  return <div className="">
    <Navbar/>
<div className="h-[calc(56.391px+8vh)]  w-full bg-primary"/>
    <div className="relative z-15 w-full  text-tertiary font-medium flex flex-col   gap-4">
            <div className="flex flex-col justify-center py-20 relative bg-neutral-light bg-cover bg-center bg-no-repeat min-h-[50vh] " style={{backgroundImage: `url(${ConsultancyBG})`}} >
                <div className="absolute min-h-[50vh] inset-0 bg-gradient-to-r from-black/75 to-transparent z-1" />
        
                <div className="my-container items-center text-center flex flex-col gap-4">
                   <div className="relative flex flex-col gap-4     z-10"> 
                    <h1 className="text-tertiary/90  text-3xl md:text-4xl font-bold">Leveraging our team’s exceptional industry expertise, we craft tailored strategies to address your most specific business challenges</h1>
                    
                  </div>
                </div>
            </div>
          </div>
    <div className="my-container flex flex-col gap-8 pt-30">
      <h1 className="text-3xl md:text-4xl  text-primary  text-center font-bold">At EnkaMax, we transform experience into impact.
</h1>
      <div className="flex flex-col md:flex-row  gap-16">
              <p className="text-lg text-neutral-dark font-medium">
We partner with you as independent consultants, integrating seamlessly into your business to understand its unique character, challenges, and ambitions. By applying our deep industry knowledge and hands-on expertise, we create bespoke strategies that elevate every aspect of your operation—from day-to-day efficiency to long-term growth.<br/><br/>

Our tailored, cost-effective solutions are designed to deliver tangible results: increased sales, enhanced profitability, and higher employee productivity. We believe success lies not only in numbers, but in the sustainable strength of your team, the satisfaction of your clients, and the reputation your brand commands.<br/><br/>

With EnkaMax by your side, you gain more than a service provider—you gain a strategic ally dedicated to pushing your business ahead of the competition, building resilience, and unlocking its full potential.</p>
      </div>
    </div>
    <ContactUs/>
    <Footer/>
    </div>;
};