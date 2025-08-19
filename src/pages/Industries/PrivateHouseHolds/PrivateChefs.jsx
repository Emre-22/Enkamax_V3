import { Navbar } from "../../../Components/Navbar";
import { Footer } from "../../../Components/Footer";
import { Contact, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactUs } from "../../../Components/ContactUs";

import  UHNWBG  from "@/assets/privatechef.webp"
import PrivateChef from "@/assets/ServiceBG.webp"
import PrivateChef2 from "@/assets/chef2.webp"

export const Privatechefs = () => {
  return <div className="">
    <Navbar/>
    <div className="h-[calc(56.391px+8vh)]  w-full bg-primary"/>
    <div className="relative z-15 w-full  text-tertiary font-medium flex flex-col   gap-4">
            <div className="relative bg-neutral-light bg-cover flex flex-col justify-center bg-[center_90%] bg-no-repeat min-h-[50vh] " style={{backgroundImage: `url(${UHNWBG})`}} >
                <div className="absolute min-h-[50vh] inset-0 bg-gradient-to-r from-black/75 to-transparent z-1" />
        
                <div className="my-container flex flex-col gap-4">
                   <div className="relative flex flex-col gap-4 py-20  max-w-4xl  z-10"> 
                    <h1 className="text-tertiary/90   text-left text-3xl md:text-4xl font-bold">Private Family Chef Appointments | Elite Culinary Roles in Riyadh & Across the Globe</h1>
                    <p className="text-lg font-medium text-left ">Join the culinary elite serving the world’s most discerning families. At EnkaMax, we place world-class chefs into ultra-private residences, royal households, and prestigious estates where excellence is a minimum standard. These are not typical kitchen roles—these are once-in-a-lifetime opportunities to create refined dining experiences in environments that demand absolute discretion, creativity, and precision. From Riyadh to Monaco, your talent belongs on the global stage.</p>
                    
                  </div>
                </div>
            </div>
          </div>
    <div className="my-container flex flex-col gap-8 pt-30">
      <h1 className="text-3xl md:text-4xl  text-center text-primary   font-bold ">Why Choose a Private Family Chef Career?</h1>
      <div className="flex flex-col md:flex-row  gap-16">
        <p className="text-lg text-neutral-dark font-medium">
          
Step into a world where culinary mastery meets lifestyle excellence. A career as a Private Family Chef is more than just cooking — it is about creating unforgettable moments, shaping daily well-being, and becoming a trusted part of an exceptional household.<br/><br/>

At EnkaMax, we specialize in matching highly talented and experienced chefs with some of the most prestigious families and private residences worldwide. From London townhouses and Monaco penthouses to royal estates in Riyadh, these positions represent a standard of exclusivity and discretion that is rarely accessible through the public market.<br/><br/>

<span className="font-bold">
  As a Private Family Chef, you will:<br/><br/>
  </span>

 <ul className="list-disc pl-6 space-y-2 text-lg text-neutral-dark font-medium pb-5 ">
  <li>  Showcase your creativity in tailor-made menus that combine fine dining elegance with everyday comfort.
</li>
<li>
Enjoy an unparalleled work environment, where your craft directly enhances the lifestyle of your employers.

</li>
  <li>
Access extraordinary benefits, from generous compensation packages to opportunities for international travel and cultural enrichment.

  </li>
  <li>
Secure long-term stability, building trusted relationships within households that value loyalty and discretion as highly as skill.

  </li>
  </ul>





This is not just another culinary role — it is an invitation into a world of excellence, trust, and reward. If you are ready to elevate your career beyond restaurants and hotels, join us at EnkaMax and unlock opportunities reserved only for the very best.
        </p>
    </div>
    <div className="relative px-5 mt-10  py-20 border-3 border-secondary bg-cover bg-center bg-no-repeat gap-8 flex flex-col w-full " style={{backgroundImage: `url(${PrivateChef2})`}}>
      <div className="absolute  inset-0 bg-gradient-to-r from-black/75 to-transparent " />

      <h1 className="text-3xl md:text-4xl  text-tertiary font-bold z-20">Your Trusted Partner in Private Chef Recruitment</h1>
      <h1 className="text-lg text-tertiary font-medium z-20">At EnkaMax, we specialise in placing exceptional culinary professionals in the most exclusive private households and residences around the world. Whether for daily gourmet dining, high-profile entertaining, or bespoke health-focused cuisine, we match skilled private chefs with discerning families and individuals who value excellence, discretion, and creativity.<br/>
      With deep industry knowledge and a personalised approach, we ensure every placement reflects the unique lifestyle and preferences of our clients—because in private service, the perfect match is everything.</h1>
    </div>
      <h1 className="text-3xl  md:text-4xl text-center text-primary   font-bold pt-10">Why Private Chef Roles Are in High Demand</h1>
        <p className="text-lg text-neutral-dark font-medium">
          In today’s world, ultra-high-net-worth families expect more than just nourishment — they desire extraordinary dining experiences that enrich their lifestyle and reflect their identity. For this reason, private chefs have become some of the most sought-after professionals in the culinary field.<br/><br/>

As a Private Chef, you are not simply cooking meals — you are curating experiences. You will have the creative freedom to craft bespoke menus that balance innovation with tradition, wellness with indulgence, and cultural authenticity with modern refinement. Every dish you prepare becomes a reflection of your artistry and your employer’s unique lifestyle.<br/><br/>

<span className="font-bold">
  What makes these roles so exceptional?<br/><br/>
  </span>

 <ul className="list-disc pl-6 space-y-2 text-lg text-neutral-dark font-medium pb-5 ">


<li>
  Global Exposure & Travel: Accompany families to their residences and destinations worldwide — from European capitals to Middle Eastern palaces and luxurious yachts.
  </li>

<li>
  Prestige & Variety: Move seamlessly from intimate family dinners to spectacular high-profile entertaining where presentation and perfection matter most.
  </li>

<li>
  Lifestyle Impact: Cater to refined tastes, individual health philosophies, and cutting-edge dietary trends that shape the wellbeing of influential individuals.
  </li>

<li>
  Trust & Discretion: Become a highly valued member of a private household where loyalty, confidentiality, and professionalism are rewarded.
  </li>

<li>
  Long-Term Commitment & Security: Many private families build lasting, stable relationships with their chefs, providing a level of recognition and appreciation rarely found in the hospitality industry.
  </li>
        </ul>

Choosing a career as a Private Chef means stepping into a world where your skills are not only recognized but celebrated — a career that combines culinary mastery, cultural richness, and a lifestyle of prestige.
        </p>
      <h1 className="text-3xl md:text-4xl  text-center text-primary   font-bold pt-30">Benefits of a Private Chef Career</h1>
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


    <div className="my-container  mt-20 pt-20 gap-8 grid xl:grid-cols-2 grid-cols-1  w-full ">
        <div>
          <h1 className="text-3xl  md:text-4xl font-bold text-primary w-full">How to Advance Your Private Chef Career</h1>
          <p className="text-lg text-neutral-dark pt-10 font-medium">
            If you are ready to bring your culinary expertise into some of the world’s most prestigious private households, the path is straightforward but requires professionalism, preparation, and confidence.<br/><br/>

 <ul className="list-decimal pl-6 space-y-2 text-lg text-neutral-dark font-medium pb-5  ">



<li>
  <span className="font-bold">
    Submit Your CV & Food Presentation  
    </span> – Present your professional background, highlight your specialties, and include a portfolio of your dishes to demonstrate both skill and creativity. Experience in luxury hospitality or private service is particularly valued.<br/><br/>
  </li>

<li>
  <span className="font-bold">
    Client Interviews  
    </span> – Families often want to understand not only your cooking style but also your personality, approach to service, and knowledge of dietary needs. Building trust and rapport here is essential.<br/><br/>
  </li>

<li>
  <span className="font-bold">
    Trial Period  
    </span> – In some cases, a short trial is requested to ensure mutual compatibility and to showcase your ability to adapt to the household’s routines and preferences.<br/><br/>
  </li>

<li>
  <span className="font-bold">
    Secure the Role  
    </span> – Once confirmed, you will enter a highly rewarding position where your craft is recognized and excellence becomes part of everyday life.<br/><br/>
  </li>
        </ul>

          </p>

        </div>
        <div className="relative  border-3 border-secondary max-h-[90%] py-20 md:py-40 w-full h-full  bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${PrivateChef})`}}/>
          
    </div>

<p className="my-container text-lg pt-10 xl:pt-0 text-neutral-dark font-medium">
  At EnkaMax, we guide you through each step, from preparing your application to securing your placement, making sure your transition into this exclusive career path is smooth, professional, and successful.
  </p>
    <ContactUs/>
    <Footer/>
    </div>;
};