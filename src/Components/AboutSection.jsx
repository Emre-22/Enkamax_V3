import RealEstate from "@/assets/services.jpg"
import LargeHouse from "@/assets/RealEstate.jpg"
import Pattern from "@/assets/Pattern.webp"
import { ArrowRight,Home } from 'lucide-react';
import { ContactUs } from "@/Components/ContactUs.jsx";
import {Statistics} from "@/Components/statistics.jsx";
import { Link } from "react-router-dom";
import { ScrollLink } from "../lib/ScrollLink";
import { Cards } from "./Cards";
import { UnlockCareerGoals } from "./UnlockCareerGoals";

export const AboutSection = () =>{
    return(
        <section className="overflow-x-hidden bg-white">
            <div id="about" className="py-20 my-container flex flex-col gap-16  items-center align-center ">
                <h1 className="text-3xl md:text-4xl font-bold  text-center lg text-primary">Bespoke Recruitment & Consulting for a World Beyond Ordinary</h1>
                <p className="text-lg ">At EnkaMax, we don’t just fill positions — we shape exceptional environments. With deep expertise in the luxury sector, we offer bespoke recruitment and consulting services for UHNW individuals, VVIP families, and elite brands. From private estates, yachts, and jets to chalets and world-class hospitality venues, our approach is discreet, strategic, and relentlessly focused on quality. We work across time zones, cultures, and expectations — delivering excellence wherever you need us. Because true luxury begins with the right people — and the right partner.</p>
            </div>
                <Cards/>
            <div id="about" className="py-20 my-container flex flex-col gap-16  items-center align-center ">
                <h1 className="text-3xl md:text-4xl font-bold  text-primary">EnkaMax – Built on Trust. Driven by Excellence.</h1>
                <p className="text-lg ">Founded in 2021, EnkaMax was created with one mission: to bring precision, discretion, and integrity to the service of UHNW and VVIP clients around the globe. As an ISO-certified, sustainability-focused company, we offer bespoke recruitment and tailored consulting for private households, estates, yachts, jets, luxury hospitality, and family offices.
                    Our success is rooted in trust — and in the relationships we build. Every candidate we place and every consulting solution we offer is designed with one goal: to elevate the lives and operations of our clients. EnkaMax is more than a service — it’s a promise of excellence, delivered with care and confidence.</p>
            </div>

            <div className=" w-full h-140 flex   lg:flex-row flex-col lg:h-70 items-center justify-center shadow-md">
                <ScrollLink to="/industries" className="w-full flex flex-col  bg h-full ">
                    <div style={{ backgroundImage: `url(${LargeHouse})`, }} className="bg-secondary hover:brightness-110 transition-all duration-300 bg-cover bg-no-repeat flex items-end bg-[position:center_70%] w-full h-full">
                        <div className="bg-secondary/60 backdrop-blur-md  flex items-center w-full h-15"><h1  className="text-bold decoration-transparent  hover:decoration-tertiary duration-300 underline underline-offset-4 transition-colors text-tertiary text-lg lg:text-2xl px-10 ">Explore the industries we are in!</h1><ArrowRight size={34} className="text-tertiary absolute right-5"/></div>
                    </div>
                </ScrollLink>
                <ScrollLink to="/services" className="w-full flex flex-col    h-full">
                    <div style={{ backgroundImage: `url(${RealEstate})` }} className="bg-secondary hover:brightness-110 transition-all duration-300  bg-cover bg-no-repeat bg-[position:center_80%] flex items-end w-full h-full">
                        <div className="bg-neutral-light/60 backdrop-blur-md flex items-center w-full h-15"><h1  className="text-bold decoration-transparent  hover:decoration-tertiary duration-300  underline underline-offset-4 transition-colors text-primary text-lg lg:text-2xl px-10 ">Learn more about our services!</h1><ArrowRight size={34} className="text-tertiary absolute right-5" /></div>
                    </div>
                </ScrollLink>
            </div>
            <Statistics/>

            <UnlockCareerGoals/>
            

            <ContactUs/>
            
        </section>
    )
}