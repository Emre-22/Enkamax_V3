import RealEstate from "@/assets/services.jpg"
import LargeHouse from "@/assets/RealEstate.jpg"
import Pattern from "@/assets/Pattern.webp"
import { ArrowRight,Home } from 'lucide-react';
import { ContactUs } from "@/Components/ContactUs.jsx";
import {Statistics} from "@/Components/statistics.jsx";
import { Link } from "react-router-dom";
import { ScrollLink } from "../lib/ScrollLink";
import { Cards } from "./Cards";

export const AboutSection = () =>{
    return(
        <section className="overflow-x-hidden">
            <div id="about" className="py-20 my-container flex flex-col gap-16  items-center align-center ">
                <h1 className="text-3xl font-bold mask-radial-from-105 text-teal-900">Bespoke Recruitment & Consulting for a World Beyond Ordinary</h1>
                <p className="text-lg ">At EnkaMax, we don’t just fill positions — we shape exceptional environments. With deep expertise in the luxury sector, we offer bespoke recruitment and consulting services for UHNW individuals, VVIP families, and elite brands. From private estates, yachts, and jets to chalets and world-class hospitality venues, our approach is discreet, strategic, and relentlessly focused on quality. We work across time zones, cultures, and expectations — delivering excellence wherever you need us. Because true luxury begins with the right people — and the right partner.</p>
            </div>
                <Cards/>
            <div id="about" className="py-20 my-container flex flex-col gap-16  items-center align-center ">
                <h1 className="text-3xl font-bold mask-radial-from-105 text-teal-900">EnkaMax – Built on Trust. Driven by Excellence.</h1>
                <p className="text-lg ">Founded in 2021, EnkaMax was created with one mission: to bring precision, discretion, and integrity to the service of UHNW and VVIP clients around the globe. As an ISO-certified, sustainability-focused company, we offer bespoke recruitment and tailored consulting for private households, estates, yachts, jets, luxury hospitality, and family offices.
                    Our success is rooted in trust — and in the relationships we build. Every candidate we place and every consulting solution we offer is designed with one goal: to elevate the lives and operations of our clients. EnkaMax is more than a service — it’s a promise of excellence, delivered with care and confidence.</p>
            </div>

            <div className=" w-full h-140 flex   lg:flex-row flex-col lg:h-70 items-center justify-center shadow-md">
                <ScrollLink to="/industries" className="w-full flex flex-col  bg h-full ">
                    <div style={{ backgroundImage: `url(${LargeHouse})`, }} className="bg-amber-400 hover:brightness-110 transition-all duration-300 bg-cover bg-no-repeat flex items-end bg-[position:center_70%] w-full h-full">
                        <div className="bg-yellow-400/60 backdrop-blur-md  flex items-center w-full h-15"><h1  className="text-bold decoration-transparent  hover:decoration-white duration-300 underline underline-offset-4 transition-colors text-white text-lg lg:text-2xl px-10 ">Explore the industries we are in!</h1><ArrowRight size={34} className="text-white absolute right-5"/></div>
                    </div>
                </ScrollLink>
                <ScrollLink to="/services" className="w-full flex flex-col    h-full">
                    <div style={{ backgroundImage: `url(${RealEstate})` }} className="bg-amber-400 hover:brightness-110 transition-all duration-300  bg-cover bg-no-repeat bg-[position:center_80%] flex items-end w-full h-full">
                        <div className="bg-gray-200/60 backdrop-blur-md flex items-center w-full h-15"><h1  className="text-bold decoration-transparent  hover:decoration-white duration-300  underline underline-offset-4 transition-colors text-white text-lg lg:text-2xl px-10 ">Learn more about our services!</h1><ArrowRight size={34} className="text-white absolute right-5" /></div>
                    </div>
                </ScrollLink>
            </div>
            <Statistics/>


            <div id="services" style={{backgroundImage: `url(${Pattern})`}} className="w-full scroll-m-40 flex bg-cover bg-center bg-no-repeat  max-h-auto  ">
                <div className="my-container  flex flex-col gap-16 p-16">

                    <h1 className="text-white text-center font-bold text-3xl">Achieve Your Long-Term Career Goals with EnkaMax</h1>
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

            <ContactUs/>
            
        </section>
    )
}