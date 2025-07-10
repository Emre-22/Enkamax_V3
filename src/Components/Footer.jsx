import { navItems } from "@/constants/navItems";
import { Link } from "react-router-dom";


export const Footer = () => {
    return (<div className=" w-full bg-gradient-to-b from-gray-500 to-gray-600 overflow-x-hidden flex gap-10 flex-col ">
        <div className="flex justify-around lg:pt-10 container lg:flex-row flex-col">
           

            <div className="flex w-full flex-col items-center pb-4 gap-4 ">
                <h1 className="text-2xl  py-5 text-white font-light ">Industries</h1>
                
                {navItems[3]?.subMenu?.map((sub,subkey)=>(
                    <div key={subkey}>
                        <Link  to={sub.href} className="text-white hover:text-teal-400 hover:underline underline-offset-4 decoration-yellow-400 font-medium">  
                            {sub.name} 
                        </Link>
                    </div>
                ))}
             </div>
             <div className="flex w-full lg:border-l-2 lg:border-r-2 border-gray-400 border-t-2 lg:border-t-0 border-b-2 lg:border-b-0 flex-col items-center pb-4 gap-4 ">
                <h1 className="text-2xl py-5 text-white font-light ">Services</h1>
                
                {navItems[2]?.subMenu?.map((sub,subkey)=>(
                    <div key={subkey}>
                        <Link  to={sub.href} className="text-white hover:text-teal-400 hover:underline underline-offset-4 decoration-yellow-400 font-medium">  
                            {sub.name} 
                        </Link>
                    </div>
                ))}
             </div>
            <div className="flex w-full  flex-col items-center justify-center gap-4 ">
                <h1 className="text-2xl py-5 text-white font-light ">Contact now!</h1>
                <a className="text-white font-medium">  
                    Whatsapp 
                </a>
                <a className="text-white font-medium">  
                    Email 
                </a>
            </div>
        </div>
        <div className="flex justify-center items-end ">
        
            <p className="text-white  pb-5 border-t-2 border-gray-400 bg-gray-500 pt-5 w-full h-full text-center">  
                &copy;{new Date().getFullYear()} Enkamax, All rights reserved.  
            </p>
        </div>
    </div>
    );
}