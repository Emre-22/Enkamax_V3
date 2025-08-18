import { Navbar } from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";
import { Contact, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactUs } from "../../Components/ContactUs";

import RealestatemanagementBG from "@/assets/Castle2.jpg"


export const Realestatemanagement = () => {
  return <div className="">
    <Navbar/>
<div className="h-[calc(56.391px+8vh)]  w-full bg-primary"/>
    <div className="relative z-15 w-full  text-tertiary font-medium flex flex-col   gap-4">
            <div className="flex flex-col justify-center py-20 relative bg-neutral-light bg-cover bg-center bg-no-repeat min-h-[50vh] " style={{backgroundImage: `url(${RealestatemanagementBG})`}} >
                <div className="absolute min-h-[50vh] inset-0 bg-gradient-to-r from-black/75 to-transparent z-1" />
        
                <div className="my-container flex flex-col gap-4">
                   <div className="relative flex flex-col gap-4  max-w-4xl py-20  z-10"> 
                    <h1 className="text-tertiary/90  text-left text-3xl md:text-4xl font-bold">EnkaMax Redefines the Standard in Bespoke Estate Management Services</h1>
                    <p className="text-lg font-medium text-left ">It conveys exclusivity, authority, and a market-leading position—while still being adaptable for both web and print.</p>
                    
                  </div>
                </div>
            </div>
          </div>
    <div className="my-container flex flex-col gap-8 pt-30">
      <h1 className="text-3xl  md:text-4xl text-primary font-bold text-center">Elevating Private Estate Management to an Art Form
</h1>
      <div className="flex flex-col md:flex-row  gap-16">
        <p className="text-lg text-neutral-dark font-medium">At EnkaMax, we recognise that a truly exceptional household is more than simply well-staffed—it is flawlessly orchestrated. Our Estate Management service has been designed to meet the long-standing need for tailored, expert guidance in operating private households at the highest level of excellence.<br/><br/>

From the initial assessment of your estate’s unique requirements to the seamless implementation of bespoke staffing structures, we provide a wealth of knowledge and precision-driven solutions. Every recommendation is informed by our deep understanding of ultra-high-net-worth lifestyles, ensuring your household operates with effortless efficiency, unwavering discretion, and refined sophistication.<br/><br/>

To accommodate the individuality of each property and Principal, we offer a tiered selection of packages: Bronze, Silver, Gold, and our entirely Bespoke Package. Whether you require targeted advisory on staff selection, a complete review of operational protocols, or an end-to-end estate management strategy, each package is designed to:<br/><br/>
<ul className="list-disc pl-6 space-y-2 text-lg text-neutral-dark font-medium  ">
          <li>           Optimise daily household operations without compromising on luxury or privacy.<br/>




          </li>
          <li>      Ensure every member of staff is impeccably trained, discreet, and aligned with your household’s values.<br/>




          </li>
          <li>       Introduce systems that preserve harmony, efficiency, and the distinctive personality of your home.<br/>



          </li>
          
 
        </ul>

<br/>

For Principals who demand nothing less than perfection, EnkaMax becomes not just a service provider, but a trusted strategic partner—delivering peace of mind, operational mastery, and the finest talent the world has to offer.</p>
      </div>
    </div>
    <ContactUs/>
    <Footer/>
    </div>;
};