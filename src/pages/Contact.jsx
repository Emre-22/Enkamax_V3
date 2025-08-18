import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import ContactBG from "@/assets/mailcontact.jpeg"

import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactUs } from "@/Components/ContactUs.jsx"


export const Contact = () => {
  return <div className="bg-primary">
    <Navbar/>
          <div className="h-[calc(56.391px+8vh)]  w-full bg-primary"/>

    <div className="relative  z-15 w-full  text-tertiary  font-medium flex flex-col   gap-4">
            <div className="relative  flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat min-h-[50vh]  " style={{backgroundImage: `url(${ContactBG})`}} >
                <div className="absolute min-h-[50vh] inset-0  bg-gradient-to-r from-black/75 to-transparent z-1" />
        
                <div className="my-container flex flex-col items-center py-20 justify-center gap-4">
                   <div className="relative  flex flex-col gap-4      z-10"> 
                     <div className=" w-full  ">
     <div id="contact" className="flex flex-col  md:flex-row   gap-8 scroll-m-80">
     
                     <div  className=" w-full flex   flex-col gap-4 pb-4 ">
                         <h1 className="text-3xl md:text-4xl md:w-[80%] font-medium">Let’s Discuss Your Vision</h1>
                         <p className="text-xl md:w-[80%] text-white font-medium">At EnkaMax, every conversation begins with understanding your aspirations. Whether you have questions, ideas, or specific requirements, we are here to listen and craft tailored solutions that exceed expectations.</p>
     
                     </div>
     
     
                     <div className="border-t-2   md:border-l-5 md:border-t-0 border-secondary w-full text-center  justify-center  flex flex-col gap-4  pt-8 md:pt-0 ">
                         <div className="flex flex-col gap-8" >
                            <span>
                             <span className="text-lg md:text-2xl text-white"> Email us in confidence:  </span>
                             <span className="text-lg md:text-2xl text-white font-medium">info@enkamax.com </span>
                            </span>
                             <h1 className="text-lg md:text-2xl text-white">Discretion Guaranteed – Excellence Delivered</h1>
                            <div className="flex w-full  justify-center "><a href="mailto:info@enkamax.com" ><h1 className="   bg-secondary transition-colors duration-300 font-medium hover:text-primary border-hover-secondary border-2 rounded-xl  p-2">Send an email now</h1></a></div>

                         </div>
                     </div>
                     
     
                 </div>  
      
                    <h1 className=" text-lg md:text-2xl pt-5 text-white ">EnkaMax – Elevating Service. Redefining Excellence.<br/>
                Your trusted partner in private service & luxury estate recruitment worldwide.</h1>
                    </div>
                  </div>
                </div>
            </div>
          </div>
    
    <Footer/>
    </div>;
};