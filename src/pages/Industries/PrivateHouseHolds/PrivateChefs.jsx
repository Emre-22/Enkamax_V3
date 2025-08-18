import { Navbar } from "../../../Components/Navbar";
import { Footer } from "../../../Components/Footer";
import { Contact, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactUs } from "../../../Components/ContactUs";

import FamilyOffice from "@/assets/IndustryFamilyOffice.jpeg"
import  UHNWBG  from "@/assets/privatechef.png"
import PrivateChef from "@/assets/PrivateChef.jpeg"
import PrivateChef2 from "@/assets/chef2.jpeg"

export const Privatechefs = () => {
  return <div className="">
    <Navbar/>
    <div className="relative z-15 w-full  text-tertiary font-medium flex flex-col   gap-4">
            <div className="relative bg-neutral-light bg-cover bg-[center_90%] bg-no-repeat min-h-[50vh] " style={{backgroundImage: `url(${UHNWBG})`}} >
                <div className="absolute min-h-[50vh] inset-0 bg-gradient-to-r from-black/75 to-transparent z-1" />
        
                <div className="my-container flex flex-col gap-4">
                   <div className="relative flex flex-col gap-4 my-container items-center pt-40 pb-10 max-w-200  z-10"> 
                    <h1 className="text-tertiary/90 pt-30  text-center text-3xl md:text-4xl font-bold">Private Family Chef Appointments | Elite Culinary Roles in Riyadh & Across the Globe</h1>
                    <p className="text-lg font-medium text-center ">Join the culinary elite serving the world’s most discerning families. At EnkaMax, we place world-class chefs into ultra-private residences, royal households, and prestigious estates where excellence is a minimum standard. These are not typical kitchen roles—these are once-in-a-lifetime opportunities to create refined dining experiences in environments that demand absolute discretion, creativity, and precision. From Riyadh to Monaco, your talent belongs on the global stage.</p>
                    
                  </div>
                </div>
            </div>
          </div>
    <div className="my-container flex flex-col gap-8 pt-30">
      <h1 className="text-3xl md:text-4xl  text-left text-primary   font-bold ">Why Choose a Private Family Chef Career?</h1>
      <div className="flex flex-col md:flex-row  gap-16">
        <p className="text-lg text-neutral-dark font-medium">
          Step into a world where culinary mastery meets lifestyle excellence. At EnkaMax, we match seasoned chefs with some of the most prestigious families and private households around the globe. Whether you're searching for private chef roles in London, Riyadh, or Monaco, we offer access to exclusive opportunities that rarely reach the public market.
        </p>
    </div>
      <h1 className="text-3xl  md:text-4xl text-left text-primary   font-bold pt-30">Why Private Chef Roles Are in High Demand</h1>
        <p className="text-lg text-neutral-dark font-medium">
          Today’s ultra-high-net-worth families seek more than just nourishment—they desire unforgettable dining experiences tailored to their lifestyle. As a private chef, you’ll have the creative freedom to design menus, travel internationally, and cater to the refined tastes and dietary philosophies of exceptional individuals. From intimate family dinners to high-profile entertaining, this career offers unmatched variety, flexibility, and prestige—backed by trust, discretion, and long-term commitment.
        </p>
      <h1 className="text-3xl md:text-4xl  text-left text-primary   font-bold pt-30">Benefits of a Private Chef Career</h1>
    <div>

      <li className="list-disc text-lg text-neutral-dark font-medium">
        <span className="font-bold">
          Exceptional Compensation 
          </span>
        : Enjoy highly competitive salaries, often enhanced by generous bonuses, global travel, and luxury accommodations.<br/><br/>
      
      </li>
      <li className="list-disc text-lg text-neutral-dark font-medium">
        <span className="font-bold">
          Elite Work Environments 
          </span>
          : Serve in the world’s most prestigious settings—from private estates in London to royal residences in Riyadh and beyond.<br/><br/>
      
      </li>
      <li className="list-disc text-lg text-neutral-dark font-medium">
        <span className="font-bold">
          Global Access
        </span>
        : Unlock unique career opportunities aboard yachts, in exclusive villas, and with ultra-high-net-worth families across the globe.<br/><br/>
      
      </li>
      <li className="list-disc text-lg text-neutral-dark font-medium">
        <span className="font-bold">
          Creative Freedom 
          </span>
        : Curate bespoke menus using the finest seasonal and locally sourced ingredients, with full autonomy over your culinary artistry.<br/><br/>
      
      </li>
      <li className="list-disc text-lg text-neutral-dark font-medium">
        <span className="font-bold">
          Long-Term Growth
          </span>
        : Establish lasting relationships with private clients, build your international reputation, and elevate your career to new heights in the world of private service.<br/><br/>
      
      </li>
    </div>
</div>


    <div className="relative my-container mt-20 py-20 bg-cover bg-center bg-no-repeat gap-8 flex flex-col w-full " style={{backgroundImage: `url(${PrivateChef2})`}}>
      <div className="absolute  inset-0 bg-gradient-to-r from-black/75 to-transparent " />

      <h1 className="text-3xl md:text-4xl  text-tertiary font-bold z-20">Your Trusted Partner in Private Chef Recruitment</h1>
      <h1 className="text-lg text-tertiary font-medium z-20">At EnkaMax, we specialise in placing exceptional culinary professionals in the most exclusive private households and residences around the world. Whether for daily gourmet dining, high-profile entertaining, or bespoke health-focused cuisine, we match skilled private chefs with discerning families and individuals who value excellence, discretion, and creativity.<br/>
      With deep industry knowledge and a personalised approach, we ensure every placement reflects the unique lifestyle and preferences of our clients—because in private service, the perfect match is everything.</h1>
    </div>
    <div className="my-container  mt-20 py-20 gap-8 grid grid-cols-2  w-full ">
        <div>
          <h1 className="text-3xl  md:text-4xl font-bold text-primary w-full">How to Advance Your Private Chef Career</h1>
          <p className="text-lg text-neutral-dark pt-10 font-medium">
            Ready to bring your culinary expertise into the world’s most prestigious private households? Here's how to step confidently into your next elite role:<br/><br/>
            Submit Your CV and your Food Präsentation – Showcase your culinary credentials, specialties, and experience in private service or luxury hospitality.<br/><br/>
            Client Interviews – Discuss your approach, menu style, and dietary knowledge while building rapport with discerning clients.<br/><br/>
            Trial Period – Some families may request a short trial to ensure mutual compatibility and culinary synergy.<br/><br/>
            Secure the Role – Once confirmed, you’ll step into a highly rewarding role where excellence is not just expected—it’s celebrated.<br/><br/>
            Let EnkaMax guide you through every step, ensuring a seamless journey into your next extraordinary opportunity.        
          </p>

        </div>
        <div className="relative   py-20 w-full h-full gap-8 flex bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${PrivateChef})`}}/>
          
    </div>
    <ContactUs/>
    <Footer/>
    </div>;
};