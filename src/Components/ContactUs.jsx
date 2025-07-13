import { Link } from "react-router-dom"
import { ScrollLink } from "../lib/ScrollLink";

export const ContactUs = () => {

    return( 
    <div id="contact" className="flex flex-col  md:flex-row container  scroll-m-80 my-40">

                <div  className=" w-full flex flex-col gap-4 pb-4 ">
                    <h1 className="text-3xl font-medium">Let's talk through the details together!</h1>
                    <p className="text-xl text-gray-500 font-medium">Contact us if you still have any questions or feedback.</p>
                    <div className="flex w-full justify-center md:justify-normal"><ScrollLink to="/contact" ><h1 className=" sticky bottom-10 bg-white hover:bg-yellow-400 transition-colors duration-300 font-medium border-yellow-400 border-2 rounded-xl  p-2">Contact Now</h1></ScrollLink></div>

                </div>


                <div className="border-t-5   md:border-l-5 md:border-t-0 border-amber-400 w-full text-center  justify-center  flex flex-col gap-4  pt-8 md:pt-0 ">
                    <div className="" >
                        <span className="text-lg md:text-2xl text-gray-500">Mail us:  </span>
                        <span className="text-lg md:text-2xl text-gray-600 font-medium">ee@enkamax.com </span>
                    </div>

                    <div className="">
                        <span className="text-lg md:text-2xl text-gray-500">Whatsapp: </span>
                        <span className="text-lg md:text-2xl text-gray-600 font-medium">+90 555 333 22 11 </span>
                    </div>
                </div>

            </div>
)}