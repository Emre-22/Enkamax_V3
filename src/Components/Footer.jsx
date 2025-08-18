import { navItems } from "@/constants/navItems";
import { Link } from "react-router-dom";
import { ScrollLink } from "../lib/ScrollLink";


export const Footer = () => {
    return (<div className=" w-full bg-gradient-to-b from-primary to-primary-background overflow-x-hidden flex gap-10 flex-col ">
        <div className="flex justify-around md:pt-10 my-container md:flex-row flex-col">
           
                <div className="flex w-full  flex-col items-center py-5 justify-center gap-4 ">
                    <ScrollLink to="/about" className="text-2xl text-tertiary font-light border-b-2 border-secondary w-full text-center py-10 hover:text-neutral-mid">About Us</ScrollLink>
                    <ScrollLink to="/contact" className="text-2xl  text-tertiary font-light hover:text-neutral-mid ">Contact</ScrollLink>
                    <a className="text-tertiary font-normal">  
                        Email: <span className="font-medium"> info@enkamax.com </span> 
                    </a>
                    
                </div>
                
                <div className="flex w-full md:border-l-2 md:border-r-2 border-secondary border-t-2 md:border-t-0 border-b-2 md:border-b-0 flex-col items-center pb-4 gap-4 ">
                    <div className="flex pl-10  w-40 flex-col gap-4">
                    <ScrollLink to="/industries" className="text-2xl py-5 text-tertiary font-light  hover:text-neutral-mid border-b-2 border-secondary ">Industries</ScrollLink>
                    {navItems[2]?.subMenu?.map((sub,subkey)=>(
                        <div key={subkey}>
                            <ScrollLink  to={sub.href} className="text-tertiary hover:text-neutral-mid hover:underline underline-offset-4 decoration-secondary font-medium">  
                                {sub.name} 
                            </ScrollLink>
                        </div>
                    ))}
                    </div>
                 </div>

                <div className="flex w-full flex-col items-center pb-4 gap-4 ">
                    <div className="flex flex-col pl-10 w-40  gap-4">
                    <ScrollLink to="/services" className="text-2xl py-5 text-tertiary font-light  hover:text-neutral-mid border-b-2 border-secondary">Services</ScrollLink>
                    {navItems[3]?.subMenu?.map((sub,subkey)=>(
                        <div key={subkey}>
                            <ScrollLink  to={sub.href} className="text-tertiary hover:text-neutral-mid hover:underline underline-offset-4 decoration-secondary font-medium">  
                                {sub.name} 
                            </ScrollLink>
                        </div>
                    ))}
                </div>
             </div>
             
            
        </div>
        <div className="text-tertiary pb-5 border-t-2 border-secondary bg-primary-background pt-5 w-full h-full text-center">
            &copy; {new Date().getFullYear()} Enkamax, All rights reserved.  
            <p className="text-xs text-neutral-light">
                Last updated: {new Date(__BUILD_TIME__).toLocaleString()}
            </p>
        </div>
    </div>
    );
}