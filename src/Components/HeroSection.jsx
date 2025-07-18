import { Link } from "react-router-dom"
import { ScrollLink } from "../lib/ScrollLink";

export const HeroSection = () => {
    return <section className="relative  min-h-170 z-20 flex flex-col w-full  pt-100 container mx-auto px-4  ">
            <div className=" max-w-4xl -translate-y-30   ">
                <div className="space-y-6 ">
                    <h1  className="text-3xl md:text-4xl  font-bold text-white fade-in-left">You set the goals. We pave the way. </h1>
                    <h2 style={{ animationDelay: '.1s' }} className="sm:text-2xl md:text-3xl  text-white fade-in-left">Let's shape the future together.</h2>
                    <p style={{ animationDelay: '.2s' }} className="text-white  fade-in-left">As <span className="font-bold">Enkamax</span> we help candidates meet their dream company since 2022. It is our duty to ensure that both parties are happy. As Enkamax we help candidates meet their dream company since 2022. It is our duty to ensure that both parties are happy.</p>
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