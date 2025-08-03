import { Link } from "react-router-dom"
import { ScrollLink } from "../lib/ScrollLink";

export const ContactUs = () => {

    return( 
        <div className="bg-gray-100">

    <div id="contact" className="flex flex-col my-container md:flex-row  w-full  scroll-m-80 my-40">

                <div  className=" w-full flex text-center md:text-center text-teal-800  p-4 flex-col gap-8 pb-4 ">
                    <h1 className="text-3xl   font-bold">Let's talk through the details together!</h1>
                    <p className="text-xl text-gray-500 text-left font-medium">Whether you're seeking exceptional talent or exploring your next career move in the world of luxury hospitality or private households — we're here for you.
                        At EnkaMax, we understand discretion, ambition, and the power of a perfect match. Reach out to us for a confidential conversation — no pressure, just possibilities.</p>
                    <div className="flex flex-col gap-8 " >
                        <div>
                            <span className="text-lg md:text-2xl text-gray-500">Mail us:  </span>
                            <span className="text-lg md:text-2xl text-gray-600 font-medium">info@enkamax.com </span>
                        </div>
                        <div className="flex w-full  justify-center "><ScrollLink to="/contact" ><h1 className="  bg-white hover:bg-yellow-400 transition-colors duration-300 font-medium border-yellow-400 border-2 rounded-xl  p-2">Contact Now</h1></ScrollLink></div>
                    </div>
                </div>
                </div>

        </div>
)}