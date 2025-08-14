import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

import { ScrollLink } from "../lib/ScrollLink";
import { ContactUs } from "@/Components/ContactUs.jsx"
import { Cards } from "../Components/Cards";


import Pattern from "@/assets/Pattern.webp"




import ServiceBG from "@/assets/ServiceBG.jpeg"

import { Home } from 'lucide-react';
import { Building2 } from 'lucide-react';
import { HandPlatter } from 'lucide-react';
import { Gem } from 'lucide-react';
import { TreePalm } from 'lucide-react';
import { LampDesk } from 'lucide-react';

import { benefits } from "../Constants/benefits";
import { ServicesInfo } from "../Constants/servicesinfo";

export const Candidates = () => {
  return <div className="">
    <Navbar/>
    <div className="relative z-15 w-full  text-white font-medium flex flex-col   gap-4">
        <div className="relative bg-gray-100 bg-cover bg-center bg-no-repeat min-h-170  " style={{backgroundImage: `url(${ServiceBG})`}} >
            <div className="absolute min-h-170 inset-0 bg-gradient-to-r from-black/100 to-transparent z-1" />
    
            <div className="my-container flex flex-col gap-4">
               <div className="relative flex flex-col gap-4 my-container items-start pt-40 pb-10 max-w-200  z-10"> 
                <h1 className="text-white/90 pt-30  text-left text-2xl md:text-3xl font-bold">Discover Elite Careers in Global Luxury Hospitality
</h1>
                <p className="text-lg font-medium text-left ">At EnkaMax, we specialise in connecting the finest hospitality talent with prestigious opportunities across the globe. From world-class five-star hotels and award-winning fine dining restaurants to private estates, luxury yachts, and exclusive alpine chalets, we place skilled professionals in roles where their expertise, dedication, and artistry truly shine.<br/><br/>

Our network extends to some of the most distinguished properties and private residences worldwide, ensuring every placement is a perfect match between talent and environment. Whether you are a seasoned professional seeking your next challenge or a rising star ready to step into the world of luxury hospitality, EnkaMax opens doors to roles that redefine career possibilities.</p>
                <ScrollLink to="/contact"  className="border-1 border-teal-400    rounded-3xl hover:shadow-center hover:bg-teal-800 transition-colors duration-300">
                                    <div className="text-white  p-7 py-2 text-center font-bold" >Lets Talk</div>
                </ScrollLink>
              </div>
            </div>
        </div>
      </div>
    <div className="">
      <h1 className="text-3xl text-teal-800 mt-20 mb-10  font-medium text-center">Take the Next Step in Your Hospitality Career with EnkaMax
</h1>
     

      <div className="my-container flex flex-col gap-8 pb-30">
        <p className="text-lg text-gray-800">At EnkaMax, we specialise in opening doors to the most prestigious and exclusive hospitality opportunities worldwide. Our network spans iconic luxury hotels, Michelin-starred restaurants, private estates, superyachts, and opulent villas—ensuring that your skills and talent are showcased in environments where excellence is the standard. Whether you aspire to step into a senior management position, secure a high-profile front-of-house role, or lead a world-class kitchen, we are here to guide you toward the next defining chapter of your career.<br/><br/>
<span className="font-bold text-teal-800">
A Tailored Approach for Exceptional Talent<br/><br/>
</span>
We understand that no two professionals—or careers—are alike. Our experienced consultants take the time to understand your aspirations, strengths, and values before matching you with roles that align perfectly with your expertise and ambitions. From high-pressure, performance-driven Michelin kitchens to the refined discretion of a private estate, we ensure you are positioned where your talent can truly shine.<br/><br/>
<span className="font-bold text-teal-800">

Global Opportunities, Lasting Careers<br/><br/>
</span>
Drawing on deep industry insight, we connect you with opportunities that offer more than just a job—they offer stability, growth, and the chance to become part of the world’s most elite hospitality teams. We work with principals, owners, and brands who value dedication, professionalism, and excellence, ensuring that your career path leads to both personal fulfilment and professional success.<br/><br/>
<span className="font-bold text-teal-800">

Ready to Elevate Your Career?<br/><br/>
</span>
Your next role could be the one that transforms your professional journey. Explore our latest openings and discover how EnkaMax can connect you to opportunities that redefine your future in hospitality.</p><br/><br/>
      </div>

      <div className="w-full min-h-110 bg-gradient-to-b from-gray-700 to-teal-800/70 mb-40">
        <h1 className="text-white text-center p-8 text-3xl">Your Benefits From Using Our Services</h1>
        <div className="my-container flex flex-col md:flex-row  md:gap-16">
          {benefits.map((item,key)=>{
            const Icon=item.icon
            return <div className="flex w-full flex-col mt-12 gap-4 pb-8 items-center text-white" key = {key}>
              <Icon className="text-yellow-400" size={40}/>
              <h2 className="text-2xl">{item.title}</h2>
              <p className="text-lg">{item.paragraph}</p>
            </div>
          })}
        </div>  
      
        </div>
    </div>  


<div id="services" style={{backgroundImage: `url(${Pattern})`}} className="w-full scroll-m-40 mb-40 flex bg-cover bg-center bg-no-repeat  max-h-auto  ">
                <div className="my-container  flex flex-col gap-16 p-16">

                    <h1 className="text-white text-center font-bold text-3xl">Unlock Your Long-Term Career Goals with EnkaMax</h1>
                    <p className="text-white text-wrap w-full text-xl ">At EnkaMax, we understand that your next career move is about more than just a job — it’s about building a future that reflects your ambition, values, and expertise. As a trusted consultancy for UHNW households and the luxury hospitality sector, we offer you access to exclusive opportunities that are rarely advertised publicly.<br/><br/>
                        Thanks to our close relationships with leading global employers, we connect exceptional talent with exceptional environments — from private estates and yachts to luxury hotels and private family offices. Discreet, bespoke, and always candidate-focused, we accompany you every step of the way — with personalised guidance, absolute confidentiality, and the highest level of professionalism.<br/><br/>
                        If you're ready to take the next step, we're ready to guide you there.</p>
                    <div className="flex gap-16 flex-col flex-wrap lg:flex-nowrap  md:flex-row">
                        <div className="flex flex-col w-full gap-4">
                            <span className="flex gap-4">
                                <Home className="text-yellow-400 size-10"/>
                            <h1 className="text-white font-medium text-2xl">
                                Knowledge & Guidance You Can Trust
                            </h1>
                            </span>
                            <p className="text-white text-wrap w-full text-xl">
                                With deep expertise in Private Household and Luxury Hospitality recruitment, we offer more than just job placement — we provide honest, informed advice tailored to your career goals. Whether you're curious about realistic salary benchmarks or unsure which roles best match your experience, we’re here to guide you.<br/><br/>
                                We support you in refining your CV, aligning terminology with industry standards, and ensuring you present yourself confidently and professionally in a highly competitive market. At EnkaMax, we don’t just connect people with positions — we help shape careers with precision, insight, and care.
                            </p>
                        </div>
                        <div className="flex flex-col w-full gap-4">
                             <span className="flex gap-4">
                                <Home className="text-yellow-400 size-10"/>
                                <h1 className="text-white font-medium text-2xl">
                                    Access to Exclusive Opportunities
                                </h1>
                            </span>
                            <p className="text-white text-wrap w-full text-xl">
                                Imagine discovering a role that never appeared on any job board — a position tailored specifically to your expertise, personality, and ambitions. At EnkaMax, this is not the exception — it’s the rule.<br/><br/>
                                Our work begins long before a vacancy opens. Through longstanding partnerships with UHNW families, private estates, luxury hospitality groups, and discreet family offices, we are the first to know when something truly special becomes available. These opportunities are rarely advertised and often entrusted exclusively to us.<br/><br/>
                                By registering with EnkaMax, you gain access to a world that remains hidden to the public eye — roles that combine prestige, challenge, and reward in equal measure. We don’t just fill vacancies. We match unique individuals with life-changing positions that align with who they are and where they’re going.                            </p>
                        </div>
                        <div className="flex flex-col w-full gap-4">
                             <span className="flex gap-4">
                                <Home className="text-yellow-400 size-10"/>
                                <h1 className="text-white font-medium text-2xl">
                                    Secure the Salary You Deserve
                                </h1>
                            </span>
                            <p className="text-white text-wrap w-full text-xl">
                                Negotiating salary can feel uncomfortable — especially when the opportunity feels too good to risk. That’s where we come in.<br/><br/>
                                At EnkaMax, we know the luxury hospitality and private household sectors inside and out. We understand salary benchmarks, hidden benefits, and what our clients are truly prepared to offer for the right person. Because we speak both your language and theirs, we can confidently negotiate on your behalf — ensuring you receive the most competitive and fair offer without straining the relationship with your future employer.<br/><br/>
                                Our goal is simple: to position you not only for the role you deserve, but also the compensation that reflects your true worth. With us by your side, you can step into your new chapter knowing that everything has been taken care of — discreetly, professionally, and in your best interest.</p>
                        </div>
                    </div>
                </div>
            </div>

    
    <div className="relative flex flex-col my-container pb-16 gap-8">
      <div className="mb-32 flex flex-col gap-8">
        <h1 className="text-3xl text-center font-medium text-teal-800 ">Areas Of Expertise</h1>
        <p className="text-gray-700 text-lg">
          With specialist Private Household recruitment and Luxury Hospitality recruitment consultants covering our core divisions, Achieve Hospitality combines the Private Household recruitment and Luxury Hospitality recruitment industry and market expertise of a niche supplier within Private Household recruitment and Luxury Hospitality recruitment with the capacity and resources of a national agency to deliver the right talent for the right role.
        </p>
      </div>
    </div>
    <Cards animate={false}/>
    <ContactUs/>
    <Footer/>
  </div>;
};