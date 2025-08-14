import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactUs } from "@/Components/ContactUs.jsx"


export const Contact = () => {
  return <div className="">
    <Navbar/>
    <div className="h-[100vh] max-h-[800px] w-full py-20 md:py-20 ">
     <div id="contact" className="flex flex-col  md:flex-row my-container  gap-8 scroll-m-80 my-30">
     
                     <div  className=" w-full flex   flex-col gap-4 pb-4 ">
                         <h1 className="text-3xl md:w-[80%] font-medium">Let’s Discuss Your Vision</h1>
                         <p className="text-xl md:w-[80%] text-gray-500 font-medium">At EnkaMax, every conversation begins with understanding your aspirations. Whether you have questions, ideas, or specific requirements, we are here to listen and craft tailored solutions that exceed expectations.</p>
     
                     </div>
     
     
                     <div className="border-t-5   md:border-l-5 md:border-t-0 border-amber-400 w-full text-center  justify-center  flex flex-col gap-4  pt-8 md:pt-0 ">
                         <div className="flex flex-col gap-8" >
                            <span>
                             <span className="text-lg md:text-2xl text-gray-500"> Email us in confidence:  </span>
                             <span className="text-lg md:text-2xl text-gray-600 font-medium">info@enkamax.com </span>
                            </span>
                             <h1 className="text-lg md:text-2xl text-gray-500">Discretion Guaranteed – Excellence Delivered</h1>
                         </div>
                     </div>
                     
     
                 </div>  
      
    <h1 className="my-container text-lg md:text-2xl text-gray-500 ">EnkaMax – Elevating Service. Redefining Excellence.
Your trusted partner in private service & luxury estate recruitment worldwide.</h1>
    </div>
    <Footer/>
    </div>;
};