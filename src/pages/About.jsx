import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { Statistics } from "@/Components/statistics.jsx"; 
import BgImg from "@/assets/BG2.webp"

import { Home } from "lucide-react";
import { Link } from "react-router-dom";

import { ContactUs } from "@/Components/ContactUs.jsx"


const Values = [
  {
    title:"Committed to Every Step of the Journey",
    paragraph:"At EnkaMax, commitment isn’t just a value — it’s the foundation of everything we do. We invest deeply in the partnerships we build, the candidates we represent, and the teams we support. Recruitment is a shared journey, and we believe success comes when all sides are equally dedicated. That’s why we honour the trust and commitment shown by our clients and candidates — and return it with unwavering focus, care, and professionalism.",
    icon:Home
    
  },
  {
    title:"Bespoke Solutions, Exceptional Results",
    paragraph:"At EnkaMax, we know that true excellence lies in the details — and that no two clients are the same. That’s why we don’t offer generic solutions. Every recruitment journey with us is tailored from the ground up to reflect your unique needs, preferences, and vision. Our experienced team works with precision and passion, crafting bespoke strategies that align perfectly with your culture, standards, and long-term goals. Because when it comes to recruiting for the world’s most discerning clients, one size simply doesn’t fit all.",
    icon:Home
  
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
      <div className="relative bg-black bg-cover  min-h-170 w-auto bg-center bg-no-repeat mb-60 " 
              style={{ backgroundImage: `url(${BgImg})` }}>
        <div className="absolute  min-h-170 inset-0 bg-gradient-to-r from-black/100 to-transparent z-1" />
      <div className="relative my-container pt-40 pb-10 translate-y-60 max-w-200  z-10"> 
        <h1 className="text-white/90 -translate-y-30 mask-radial-from-75 text-center text-3xl font-bold">Enkamax: Bespoke Hospitality Recruitment for Luxury & Private Clients</h1>
        <div className="flex flex-col gap-8 w-auto rounded-[5px] bg-gray-800/40 backdrop-blur-2xl p-10 text-white ">
          <p className=" text-lg">At EnkaMax, we specialize in sourcing exceptional hospitality professionals for the world’s most prestigious hotels, private estates, and fine-dining establishments. We understand the intricacies and expectations of luxury service — discretion, excellence, and cultural fit. Whether you're searching for executive chefs, general managers, or front-of-house specialists, our tailored recruitment solutions ensure you find the perfect match to elevate your guest experience.</p>
        </div>
      </div>
      </div>



    <div className="my-container flex flex-col gap-8"> 
        <h1 className="text-3xl font-bold  text-teal-900">Tailored Hospitality Recruitment That Embodies Your Vision</h1>
        <p className="text-lg w-full">A flex flex-col gap-8t EnkaMax, we believe that every hospitality environment tells its own story — from the warmth of a boutique retreat to the precision of a Michelin-starred kitchen. That’s why we don’t just fill roles — we curate talent. We take the time to understand your culture, your standards, and your aspirations. With deep industry insight and an unwavering commitment to excellence, we connect you with professionals who don’t just meet expectations — they elevate them. Because your brand deserves more than a match — it deserves a legacy.</p>
        <h1 className="text-3xl font-bold  text-teal-900">Your Bespoke Partner in Luxury Hospitality Recruitment</h1>
        <p className="text-lg w-full">At EnkaMax, we know that excellence in hospitality begins with people. That’s why our recruitment goes far beyond CVs and checklists — it’s about intuition, cultural alignment, and a shared passion for extraordinary service. With deep roots in the luxury hospitality world, we’ve built long-standing relationships with iconic hotels, fine-dining destinations, and private estates across the globe. Our curated network and discreet approach allow us to deliver talent that not only meets your expectations, but embodies your values. Let’s shape the future of your team — with individuals who live and breathe excellence.</p>

        <Statistics/>
    </div>

    <div className="my-container flex gap-8">
      <div className="w-full bg-red-400 h-100 ">
        <h1>For Our Clients</h1>
        <p>At EnkaMax, we believe great partnerships are built on trust, transparency, and a deep understanding of your vision. We don’t just fill roles — we become a seamless extension of your team, aligning with your culture and long-term goals. Our bespoke recruitment and consulting services are designed to elevate your operations by delivering exceptional talent who fit perfectly, both professionally and personally. Whether you're building a team for a luxury estate, a private residence, or a five-star hotel — we're with you, every step of the way.</p>
        <div className="w-[80%] h-50 bg-green-500">
          <h1>Your Discreet Talent Partner in the World of Luxury</h1>
        </div>
      </div>
      <div className="w-full bg-red-400 h-100">
        <h1>For Candidates</h1>
        <p>Your next career step deserves more than just another job application. At Achieve Hospitality, we work with discretion and dedication to present you to top-tier clients who trust our recommendations. Instead of spending hours on endless applications, let us take the pressure off. Simply complete our quick form – and we’ll match your talent with truly exceptional opportunities.</p>
        <div className="w-[80%] h-50 bg-green-500">
          <h1>A Trusted Career Partner for Exceptional Talent</h1>
        </div>
      </div>

    </div>

      <div className=" justify-center items-center text-center my-container  w-full pt-20">
        <h1 className="text-3xl font-bold mask-radial-from-90 text-teal-900">Driven by Excellence: Our Core Values at EnkaMax</h1>
        <div className="flex justify-between  w-full  flex-col xl:flex-row pt-24 gap-16">
            {Values.map((item,key)=>{
              
              return <div key={key} className="flex border-2  border-gray-200 w-full  bg-gradient-to-tr  to-teal-100/10  flex-col gap-2 md:gap-5 rounded-4xl  transition-all duration-300 p-4 md:p-16">
                  <div className="flex items-center  text-gray-700 gap-8 justify-center">
                  <Home/>
                  <h1 className="text-lg md:text-2xl  font-medium">{item.title}</h1>
                  </div>
                  <p className="text-sm md:text-lg text-gray-700 font-medium">{item.paragraph}</p>
              </div>
            
            })}
        </div>
      </div>
      <div className=" justify-center items-center text-center my-container  w-full pt-20">
        <div className="flex justify-between  w-full  flex-col xl:flex-row  gap-16">
              
               <div  className="flex border-2  border-gray-200 w-full  bg-gradient-to-tr  to-teal-100/10  flex-col gap-2 md:gap-5 rounded-4xl  transition-all duration-300 p-4 md:p-16">
                  <div className="flex items-center  text-gray-700 gap-8 justify-center">
                  <h1 className="text-lg md:text-2xl  font-medium">Integrity & Compliance at Our Core</h1>
                  </div>
                  <p className="text-sm md:text-lg text-gray-700 font-medium">Every step we take is guided by strict compliance protocols and protected by NDAs — because trust begins with discretion.</p>
              </div>
            
        </div>
      </div>
    <ContactUs/>
    <Footer/>
    </div>;
};