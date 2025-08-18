import { Link } from "react-router-dom"
import { ScrollLink } from "../lib/ScrollLink";

export const ContactUs = () => {

    return( 
        <div className="bg-neutral-light ">

    <div id="contact" className="flex  flex-col  border-t-5 border-b-5 border-secondary md:flex-row  w-full pb-8 scroll-m-80 my-40">

                <div  className=" w-full flex my-container text-center md:text-center text-primary  py-16 flex-col gap-8 pb-4 ">
                    <h1 className="text-3xl md:text-4xl md:text-4xl   font-bold">Let's talk through the details together!</h1>
                    <p className="text-xl text-neutral-dark text-left font-medium">Whether you're seeking exceptional talent or exploring your next career move in the world of luxury hospitality or private households — we're here for you.
                        At EnkaMax, we understand discretion, ambition, and the power of a perfect match. Reach out to us for a confidential conversation — no pressure, just possibilities.</p>
                    <div className="flex flex-col gap-8 " >
                        <div>
                            <span className="text-lg md:text-2xl text-neutral-dark">Mail us:  </span>
                            <span className="text-lg md:text-2xl text-neutral-dark font-medium">info@enkamax.com </span>
                        </div>
                        <div className="flex w-full  justify-center "><a href="mailto:info@enkamax.com" ><h1 className="  bg-tertiary hover:bg-secondary transition-colors duration-300 font-medium border-hover-secondary border-2 rounded-xl  p-2">Contact Now</h1></a></div>
                    </div>
                </div>
                </div>

        </div>
)}