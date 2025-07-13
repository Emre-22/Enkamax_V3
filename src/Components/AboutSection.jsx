import RealEstate from "@/assets/services.jpg"
import LargeHouse from "@/assets/RealEstate.jpg"
import Pattern from "@/assets/Pattern.webp"
import { ArrowRight } from 'lucide-react';
import { ContactUs } from "@/Components/ContactUs.jsx";
import {Statistics} from "@/Components/statistics.jsx";
import { Link } from "react-router-dom";
import { ScrollLink } from "../lib/ScrollLink";

export const AboutSection = () =>{
    return(
        <section className="overflow-x-hidden">
            <div id="about" className="py-40 container flex flex-col gap-16  items-center align-center ">
                <h1 className="text-3xl font-bold mask-radial-from-75 text-teal-900">
                    Bespoke recruitment services for luxury sectors  </h1>
                <p className="text-lg ">
                    The Enkamax team builds strong partnerships and fundamentally understands our clients’ vision, culture and plans for expansion. Achieve Hospitality supports the bespoke recruitment needs of Luxury Hospitality, Private Households & Estates, UHNW community, Luxury Brands, Yachts, Villas, Chalets & Jets. With global offices and remote consultants operating across multiple time zones internationally, we provide a detailed and tailored service while offering around-the-clock support. Achieving excellence by delivering exceptional service will always be at the forefront of what we do. We believe that success is only measured by the quality of people within your home and/or business.
                </p>


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
                <div className="container  flex flex-col gap-16 p-16">

                    <h1 className="text-white font-bold text-3xl">Achieve your long-term goals</h1>
                    <p className="text-white text-wrap w-full text-xl ">As a specialist Private Household recruitment and Luxury Hospitality recruitment consultancy, finding a job through Achieve Hospitality has a lot of advantages. Firstly, we have built up good relationships with a lot of top employers, giving you exclusive access to their jobs. You’ll also get put forward for positions that you wouldn’t otherwise have heard about. We have a range of candidate services that help you with finding your next career move with Achieve Hospitality, a leader in Private Household recruitment and Luxury Hospitality recruitment.</p>
                    <div className="flex gap-16 flex-col flex-wrap lg:flex-nowrap  md:flex-row">
                        <div className="flex flex-col w-full gap-4">
                            <h1 className="text-white font-medium text-2xl">
                                Knowledge & advice
                            </h1>
                            <p className="text-white text-wrap w-full text-xl">
                                As we are specialists in Private Household recruitme can provide you with realistic salary levels for your chosen role and advice as to which roles are suited to your skillset. We’ll also help with your CV and modify terminology to ensure your language is consistent with your chosen market.
                            </p>
                        </div>
                        <div className="flex flex-col w-full gap-4">
                            <h1 className="text-white font-medium text-2xl">
                                Knowledge & advice
                            </h1>
                            <p className="text-white text-wrap w-full text-xl">
                                As we are specialists in Private Household recruitment and Luxury Hospitality ren role and advice as to which roles are suited to your skillset. We’ll also help with your CV and modify terminology to ensure your language is consistent with your chosen market.
                            </p>
                        </div>
                        <div className="flex flex-col w-full gap-4">
                            <h1 className="text-white font-medium text-2xl">
                                Knowledge & advice
                            </h1>
                            <p className="text-white text-wrap w-full text-xl">
                                As we are specialists in Private Household recruitment and Luxury Hospitality recruitment, we can provide you with realistic salary levels for your chosen role and advice as to which roles are suited to your skillset. We’ll also help with your CV and modify terminology to ensure your language is consistent with your chosen market.
                            </p>
                        </div>
                      
                    </div>
                </div>
            </div>

            <ContactUs/>
            
        </section>
    )
}