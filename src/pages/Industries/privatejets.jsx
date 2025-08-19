import { Navbar } from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";
import { Contact, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactUs } from "../../Components/ContactUs";
import  Jet  from "@/assets/IndustryJet2.webp"
import  Jet2  from "@/assets/IndustryJet.webp"



export const Privatejets = () => {
  return <div className="">
    <Navbar/>
    <div className="h-[calc(56.391px+8vh)]  w-full bg-primary"/>

    <div className="relative z-15 w-full  text-tertiary font-medium flex flex-col   gap-4">
            <div className="relative bg-neutral-light flex flex-col justify-center bg-cover bg-center bg-no-repeat min-h-[50vh] " style={{backgroundImage: `url(${Jet})`}} >
                <div className="absolute min-h-[50vh] inset-0 bg-gradient-to-r from-black/75 to-transparent z-1" />
        
                <div className="my-container flex flex-col items-center gap-4">
                   <div className="relative flex flex-col gap-4 text-center  max-w-4xl py-20  z-10"> 
                    <h1 className="text-tertiary/90  text-3xl md:text-4xl font-bold">Elevating Excellence: <br/>Bespoke Luxury Staffing for the Skies</h1>
                    
                  </div>
                </div>
            </div>
          </div>
    <div className="my-container flex flex-col gap-8 pt-30">
      <h1 className="text-3xl  md:text-4xl text-primary font-bold text-center ">Bespoke Private Aviation Staffing – Elevating Excellence Above the Clouds
</h1>
      <div className="flex flex-col ">
        <p className="text-lg text-neutral-dark font-medium">At EnkaMax, we understand that in the world of private aviation, every detail matters. The calibre of your onboard team is a direct reflection of your service standards, your brand, and the experience your guests will remember. That is why we go far beyond traditional recruitment – delivering hand-selected, highly trained, and impeccably presented professionals who embody discretion, skill, and world-class hospitality.<br/><br/>
        </p>
        <div className="relative  py-30 2xl:py-55 3xl:py-70 mb-8 px-5 2xl:px-20 3xl:px-40 border-3 border-secondary bg-cover bg-center bg-no-repeat gap-8 flex flex-col w-full " style={{backgroundImage: `url(${Jet2})`}}>
              <div className="absolute  inset-0 bg-gradient-to-r from-black/75 to-transparent " />
              <div className="z-10">

        <p className="text-lg text-white font-medium"> 

          Whether staffing your private jet, corporate aircraft, or VIP charter, we take the time to understand your precise operational requirements, passenger profiles, and personal preferences. This bespoke approach allows us to identify and place candidates who are not only technically proficient, but also seamlessly align with your service philosophy – ensuring safe, smooth, and exceptional journeys every time.<br/><br/>

          <span className="font-bold">Our Private Aviation Expertise Includes:<br/><br/></span>
          <ul className="list-disc pl-6 space-y-2 text-lg text-white font-medium  ">
          <li>        <span className="font-bold"> Pilots & Captains </span>– Fully licensed, rigorously vetted, and compliant with all regulatory requirements.<br/>


          </li>
          <li>       <span className="font-bold">Flight Attendants </span>– Trained in elite service delivery, safety, and security protocols, with the ability to anticipate needs before they arise.<br/>
          </li>
          <li>       <span className="font-bold">VIP Cabin Crew – </span>Specialists in luxury hospitality, offering discreet and personalised service for high-profile passengers.<br/>

          </li>
          
 
        </ul>
        </p>
              </div>
        </div>
        
          <p className="text-lg text-neutral-dark font-medium"> 
        

        <br/>
                       Every candidate undergoes extensive background verification, licence authentication, and service-standard assessment before joining your team. We work exclusively with professionals who demonstrate flexibility, resilience, and the ability to thrive in demanding, fast-paced aviation environments.<br/><br/>

            For professionals, private aviation offers more than just a career – it offers an unparalleled lifestyle of prestige, travel, and personal growth. At EnkaMax, we provide access to exclusive, unadvertised roles within the world’s most distinguished private fleets, matching talent to opportunity with precision.<br/><br/>

            Whether you are a client seeking the finest crew members or a candidate looking to take your career to new heights, our dedicated consultants are here to guide you every step of the way.<br/><br/>

            EnkaMax – Curating Excellence, Above the Clouds.
          </p>
      </div>
    </div>
    <ContactUs/>
    <Footer/>
    </div>;
};