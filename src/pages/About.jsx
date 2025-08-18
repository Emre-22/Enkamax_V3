import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { Statistics } from "@/Components/statistics.jsx"; 
import BgImg from "@/assets/BG2.jpeg"

import { Home,ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import { ContactUs } from "@/Components/ContactUs.jsx"
import { ScrollLink } from "../lib/ScrollLink";


const Values = [
  {
    title:"Committed to Every Step of the Journey",
    paragraph:"At EnkaMax, commitment isn’t just a value — it’s the foundation of everything we do. We invest deeply in the partnerships we build, the candidates we represent, and the teams we support. Recruitment is a shared journey, and we believe success comes when all sides are equally dedicated. That’s why we honour the trust and commitment shown by our clients and candidates — and return it with unwavering focus, care, and professionalism.",
    icon:Home
    
  },
  {
    title:"Bespoke Solutions, Exceptional Results",
    paragraph:"At EnkaMax, we know that true excellence lies in the details — and that no two clients are the same. That’s why we don’t offer generic solutions. Every recruitment journey with us is tailored from the ground up to reflect your unique needs, preferences, and vision. Our experienced team works with precision and passion, crafting bespoke strategies that align perfectly with your culture, standards, and long-term goals. Because when it comes to recruiting for the world’s most discerning clients, one size simply doesn’t fit all.",
    icon:ChevronRight
  
  },
  {
    title:"Built on Trust: Transparency at Every Step",
    paragraph:"At EnkaMax, transparency is the foundation of everything we do. We believe that open and honest communication is key to building lasting relationships — with our clients, our candidates, and our team. From the first conversation to the final placement, we make sure everyone is informed, aligned, and respected. With clear processes and shared expectations, we create confidence and clarity — every step of the way.",
    icon:Home
  
  }
]

export const About = () => {
  return <div className="">
    <Navbar/>
    
    <div className="h-30 w-full bg-primary"/>
      <div className="relative bg-tertiary-foreground bg-cover flex flex-col items-center justify-center  min-h-[50vh] w-auto bg-[center_10%] bg-no-repeat  " 
              style={{ backgroundImage: `url(${BgImg})` }}>
        <div className="absolute  min-h-[50vh] inset-0 bg-gradient-to-r from-black/75 to-transparent z-1" />
      <div className="relative my-container  translate-y-60 max-w-200  z-10"> 
        <h1 className="text-tertiary/90 -translate-y-30  text-center text-3xl md:text-4xl font-bold">Enkamax: Bespoke Hospitality Recruitment for Luxury & Private Clients</h1>
        <div className="flex flex-col gap-8 w-auto rounded-[5px] bg-neutral-dark/40 backdrop-blur-2xl p-10 text-tertiary ">
          <p className=" text-lg">At EnkaMax, we specialize in sourcing exceptional hospitality professionals for the world’s most prestigious hotels, private estates, and fine-dining establishments. We understand the intricacies and expectations of luxury service — discretion, excellence, and cultural fit. Whether you're searching for executive chefs, general managers, or front-of-house specialists, our tailored recruitment solutions ensure you find the perfect match to elevate your guest experience.</p>
        </div>
      </div>
      </div>



    <div className="my-container flex flex-col mb-30 pt-80 lg:pt-70  3xl:pt-45 4xl:pt-20   gap-8"> 
        <h1 className="text-3xl md:text-4xl  font-bold text-center   text-primary">Tailored Hospitality Recruitment That Embodies Your Vision</h1>
        <p className="text-lg w-full">At EnkaMax, we believe that every hospitality environment tells its own story — from the warmth of a boutique retreat to the precision of a Michelin-starred kitchen. That’s why we don’t just fill roles — we curate talent. We take the time to understand your culture, your standards, and your aspirations. With deep industry insight and an unwavering commitment to excellence, we connect you with professionals who don’t just meet expectations — they elevate them. Because your brand deserves more than a match — it deserves a legacy.</p>
    </div>
    <Statistics/>    
    <div className="my-container flex flex-col mb-30 gap-8"> 

        <h1 className="text-3xl md:text-4xl md:text-4xl font-bold text-center   text-primary">Your Bespoke Partner in Luxury Hospitality Recruitment</h1>
        <p className="text-lg w-full">At EnkaMax, we know that excellence in hospitality begins with people. That’s why our recruitment goes far beyond CVs and checklists — it’s about intuition, cultural alignment, and a shared passion for extraordinary service. With deep roots in the luxury hospitality world, we’ve built long-standing relationships with iconic hotels, fine-dining destinations, and private estates across the globe. Our curated network and discreet approach allow us to deliver talent that not only meets your expectations, but embodies your values. Let’s shape the future of your team — with individuals who live and breathe excellence.</p>

    </div>

    <div className="my-container  flex flex-col lg:flex-row gap-8">
      <div className="w-full flex flex-col items-center">

        <div className="w-full p-20 pb-40 text-tertiary bg-secondary ">
          <h1 className="font-bold text-2xl pb-5">For Our Clients</h1>
          <p className="text-lg">At EnkaMax, we believe great partnerships are built on trust, transparency, and a deep understanding of your vision. We don’t just fill roles — we become a seamless extension of your team, aligning with your culture and long-term goals. Our bespoke recruitment and consulting services are designed to elevate your operations by delivering exceptional talent who fit perfectly, both professionally and personally. Whether you're building a team for a luxury estate, a private residence, or a five-star hotel — we're with you, every step of the way.</p>
        </div>
          <div className="relative w-[75%] p-10 bottom-0 group -translate-y-1/2 text-tertiary bg-neutral-dark">
            <h1 className="font-bold text-2xl pb-5">Your Discreet Talent Partner in the World of Luxury</h1>
            <ScrollLink to="/services" className="text-lg flex gap-4 font-bold underline ">Learn More <ChevronRight className="group-hover:translate-x-15 transition-all duration-600" size={30}/></ScrollLink>
          </div>
      </div>

      <div className="w-full flex flex-col items-center">

        <div className="w-full p-20 pb-40 text-tertiary  bg-neutral-dark ">
          <h1 className="font-bold text-2xl pb-5">For Candidates</h1>
          <p className="text-lg">Your next career step deserves more than just another job application. At Achieve Hospitality, we work with discretion and dedication to present you to top-tier clients who trust our recommendations. Instead of spending hours on endless applications, let us take the pressure off. Simply complete our quick form – and we’ll match your talent with truly exceptional opportunities.</p>
        </div>
          <div className="relative w-[75%] p-10 group -translate-y-1/2  text-tertiary bg-secondary">
            <h1 className="font-bold text-2xl pb-5"> A Trusted Career Partner for Exceptional Talent</h1>
            <ScrollLink to="/candidates" className="text-lg flex gap-4 font-bold underline ">Learn More <ChevronRight className="group-hover:translate-x-15 transition-all duration-600" size={30}/></ScrollLink>

          </div>
          
      </div>

    </div>

      <div className=" justify-center items-center text-center my-container  w-full pt-20">
        <h1 className="text-3xl md:text-4xl md:text-4xl font-bold  text-primary">Driven by Excellence: Our Core Values at EnkaMax</h1>
        <div className="flex justify-between  w-full  flex-col 2xl:flex-row pt-24 gap-16">
            {Values.map((item,key)=>{
              const Icon = item.icon
              return <div key={key} className="flex border-2  border-neutral-mid w-full  bg-gradient-to-tr  to-neutral-light  flex-col gap-2 md:gap-5 rounded-4xl  transition-all duration-300 p-4 md:p-16">
                  <div className="flex items-center  text-neutral-dark gap-8 justify-center">
                  <Icon className="shrink-0 size-10 stroke-1"/>
                  <h1 className="text-lg md:text-2xl  font-medium">{item.title}</h1>
                  </div>
                  <p className="text-sm md:text-lg text-neutral-dark font-medium">{item.paragraph}</p>
              </div>
            
            })}
        </div>
      </div>
      <div className=" justify-center items-center text-center my-container  w-full pt-20">
        <div className="flex justify-between  w-full  flex-col xl:flex-row  gap-16">
              
               <div  className="flex border-2  border-neutral-mid w-full  bg-gradient-to-tr  to-neutral-light  flex-col gap-2 md:gap-5 rounded-4xl  transition-all duration-300 p-4 md:p-16">
                  <div className="flex items-center  text-neutral-dark gap-8 justify-center">
                  <h1 className="text-lg md:text-2xl  font-medium">Integrity & Compliance at Our Core</h1>
                  </div>
                  <p className="text-sm md:text-lg text-neutral-dark font-medium">Every step we take is guided by strict compliance protocols and protected by NDAs — because trust begins with discretion.</p>
              </div>
            
        </div>
      </div>
    <ContactUs/>
    <Footer/>
    </div>;
};