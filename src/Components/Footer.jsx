import { navItems } from "@/constants/navItems";
import { Link } from "react-router-dom";
import { ScrollLink } from "../lib/ScrollLink";


export const Footer = () => {
    return (<div className=" w-full bg-gradient-to-b from-teal-950 to-[oklch(30.6%_0.063_188.416)] overflow-x-hidden flex gap-10 flex-col ">
        <div className="flex justify-around md:pt-10 my-container md:flex-row flex-col">
           
                <div className="flex w-full  flex-col items-center py-5 justify-center gap-4 ">
                    <ScrollLink to="/about" className="text-2xl text-white font-light border-b-2 border-gray-400 w-full text-center py-10 hover:text-teal-400">About Us</ScrollLink>
                    <ScrollLink to="/contact" className="text-2xl  text-white font-light hover:text-teal-400 ">Contact</ScrollLink>
                    <a className="text-white font-normal">  
                        Email: <span className="font-medium"> ee@enkamax.com </span> 
                    </a>
                    <a className="text-white font-normal">  
                        Whatsapp:  <span className="font-medium">+90 555 333 22 11 </span>
                    </a>
                </div>
                
                <div className="flex w-full md:border-l-2 md:border-r-2 border-gray-400 border-t-2 md:border-t-0 border-b-2 md:border-b-0 flex-col items-center pb-4 gap-4 ">
                    <div className="flex pl-10  w-40 flex-col gap-4">
                    <ScrollLink to="/industries" className="text-2xl py-5 text-white font-light  hover:text-teal-400 underline underline-offset-8 decoration-gray-400 ">Industries</ScrollLink>
                    {navItems[2]?.subMenu?.map((sub,subkey)=>(
                        <div key={subkey}>
                            <ScrollLink  to={sub.href} className="text-white hover:text-teal-400 hover:underline underline-offset-4 decoration-yellow-400 font-medium">  
                                {sub.name} 
                            </ScrollLink>
                        </div>
                    ))}
                    </div>
                 </div>

                <div className="flex w-full flex-col items-center pb-4 gap-4 ">
                    <div className="flex flex-col pl-10 w-40  gap-4">
                    <ScrollLink to="/services" className="text-2xl py-5 text-white font-light  hover:text-teal-400 underline underline-offset-8 decoration-gray-400">Services</ScrollLink>
                    {navItems[3]?.subMenu?.map((sub,subkey)=>(
                        <div key={subkey}>
                            <ScrollLink  to={sub.href} className="text-white hover:text-teal-400 hover:underline underline-offset-4 decoration-yellow-400 font-medium">  
                                {sub.name} 
                            </ScrollLink>
                        </div>
                    ))}
                </div>
             </div>
             
            
        </div>
        <div className="text-white pb-5 border-t-2 border-gray-400 bg-teal-950 pt-5 w-full h-full text-center">
            &copy; {new Date().getFullYear()} Enkamax, All rights reserved.  
            <p className="text-xs text-gray-400">
                Last updated: {new Date(__BUILD_TIME__).toLocaleString()}
            </p>
        </div>
    </div>
    );
}