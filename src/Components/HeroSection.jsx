import { Link } from "react-router-dom"
import { ScrollLink } from "../lib/ScrollLink";

export const HeroSection = () => {
    return <section className="relative  min-h-170 z-20 flex flex-col w-full  pt-100 my-container mx-auto px-4  ">
            <div className=" max-w-4xl -translate-y-30   ">
                <div className="space-y-6 ">
                    <h1  className="text-3xl md:text-4xl  font-bold text-white fade-in-left">Precision. Discretion. Excellence. <br></br></h1>
                    <h2 style={{ animationDelay: '.1s' }} className="sm:text-2xl md:text-3xl  text-white fade-in-left">Bespoke Recruiting & Consulting at Its Finest </h2>
                    <p style={{ animationDelay: '.2s' }} className="text-white  fade-in-left">EnkaMax is an ISO-certified, sustainability-driven company offering bespoke recruitment and consulting services to UHNW individuals, VVIP households, and the luxury hospitality sector. We provide tailored staffing solutions for Private Households & Estates, Hospitality, Domestic Staff, Private Chefs, Estate Management, Family Offices, Yachting, Chalets, Villas, and Private Jets. With integrity, precision, and absolute discretion, we go beyond expectations.</p>
                    <div className="flex flex-col md:flex-row gap-5">
                        <ScrollLink to="/about" style={{ animationDelay: '.3s' }} className="border-1 border-white fade-in-left w-max rounded-3xl hover:shadow-center hover:bg-teal-900 transition-colors duration-300">
                            <div className="text-white   p-7 py-2 font-bold" >Learn more</div>
                        </ScrollLink>
                        <ScrollLink to="/contact" style={{ animationDelay: '.4s' }} className="border-1 border-teal-400 fade-in-left w-max  rounded-3xl hover:shadow-center hover:bg-teal-900 transition-colors duration-300">
                            <div className="text-white   p-7 py-2 font-bold" >Contact</div>
                        </ScrollLink>
                    </div>
                </div>
            </div>
            
         </section>
}