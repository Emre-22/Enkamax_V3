import RealEstate from "@/assets/RealEstate.jpg"
import LargeHouse from "@/assets/LargeHouse.jpg"
import Pattern from "@/assets/Pattern.jpg"
import { ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";
const statistics = [
    {
        title:"Candidates still working at where they started",
        value:"352",
    },
    {
        title:"Clients",
        value:"150+",
    },
    {
        title:"Years of industry experience",
        value:"3",
    },
    {
        title:"Placements per month",
        value:"100+",
    },
    
]

export const AboutSection = () =>{
    return(
        <section className="overflow-x-hidden">
            <div id="about" className="py-40 container flex flex-col gap-16  items-center align-center ">
                <h1 className="text-3xl font-bold mask-radial-from-75 text-teal-900">
                    Bespoke recruitment services for luxury sectors  </h1>
                <p className="text-lg ">
                    The Achieve team builds strong partnerships and fundamentally understands our clients’ vision, culture and plans for expansion. Achieve Hospitality supports the bespoke recruitment needs of Luxury Hospitality, Private Households & Estates, UHNW community, Luxury Brands, Yachts, Villas, Chalets & Jets. With global offices and remote consultants operating across multiple time zones internationally, we provide a detailed and tailored service while offering around-the-clock support. Achieving excellence by delivering exceptional service will always be at the forefront of what we do. We believe that success is only measured by the quality of people within your home and/or business.
                </p>


            </div>

            <div className=" w-full h-140 flex   lg:flex-row flex-col lg:h-70 items-center justify-center shadow-md">
                <a href="#services" className="w-full flex flex-col  bg h-full ">
                    <div style={{ backgroundImage: `url(${LargeHouse})`, }} className="bg-amber-400 hover:brightness-110 transition-all duration-300 bg-cover bg-no-repeat bg-center w-full h-full"></div>
                    <div className="bg-yellow-400  flex items-center w-full h-15"><h1  className="text-bold decoration-transparent  hover:decoration-white duration-300 underline underline-offset-4 transition-colors text-white text-lg lg:text-2xl px-10 ">Explore the industries we are in!</h1><ArrowRight size={34} className="text-white absolute right-5"/></div>
                </a>
                <a href="#services" className="w-full flex flex-col    h-full">
                    <div style={{ backgroundImage: `url(${RealEstate})` }} className="bg-amber-400 hover:brightness-110 transition-all duration-300  bg-cover bg-no-repeat bg-center w-full h-full"></div>
                    <div className="bg-gray-500 flex items-center w-full h-15"><h1  className="text-bold decoration-transparent  hover:decoration-white duration-300  underline underline-offset-4 transition-colors text-white text-lg lg:text-2xl px-10 ">Learn more about our services!</h1><ArrowRight size={34} className="text-white absolute right-5" /></div>
                </a>
            </div>

            <div className=" min-h-30 w-full flex md:flex-nowrap flex-wrap items-center gap-4 justify-center md:justify-between  container my-20 ">
            {statistics.map((item,key)=>(
                    <div key={key}  className="flex flex-col  border-l-3 justify-center  p-4 gap-2 border-yellow-400 w-50 h-30 "> 
                        <p className="text-black text-2xl font-medium ">{item.value}</p> 
                        <h1 className="text-gray-500 text-md " >{item.title}</h1>
                    </div>
            ))}
            </div>




            <div className=" justify-center items-center text-center container">
                <h1 className="text-3xl mask-radial-from-75 text-teal-900 font-medium">What Drives Us: The Core Values of Enkamax</h1>
                <div className="flex justify-between flex-col xl:flex-row py-24 gap-16">
                    <div className="flex shadow-center flex-col gap-5 rounded-4xl p-16">
                        <h1 className="text-2xl text-gray-700 font-medium">Bespoke</h1>
                        <p className="text-lg text-gray-700 font-medium">We understand that one size does not fit all when it comes to recruitment and that’s why we offer a bespoke service, tailoring all of our partners specific needs. We have a passionate and experienced team that set out to achieve excellence in all of the services we provide.</p>
                    </div>
                    <div className="flex shadow-center flex-col gap-5 rounded-4xl p-16">
                        <h1 className="text-2xl text-gray-700 font-medium">Bespoke</h1>
                        <p className="text-lg text-gray-700 font-medium">We understand that one size does not fit all when it comes to recruitment and that’s why we offer a bespoke service, tailoring all of our partners specific needs. We have a passionate and experienced team that set out to achieve excellence in all of the services we provide.</p>
                    </div>
                    <div className="flex shadow-center flex-col gap-5 rounded-4xl p-16">
                        <h1 className="text-2xl text-gray-700 font-medium">Bespoke</h1>
                        <p className="text-lg text-gray-700 font-medium">We understand that one size does not fit all when it comes to recruitment and that’s why we offer a bespoke service, tailoring all of our partners specific needs. We have a passionate and experienced team that set out to achieve excellence in all of the services we provide.</p>
                    </div>
                </div>
            </div>



       



            <div id="services" style={{backgroundImage: `url(${Pattern})`}} className="w-full scroll-m-40 flex bg-cover bg-center bg-no-repeat  max-h-auto  ">
                <div className="container  flex flex-col gap-16 p-16">

                    <h1 className="text-white font-bold text-3xl">Achieve your long-term goals</h1>
                    <p className="text-white text-wrap w-full text-xl ">As a specialist Private Household recruitment and Luxury Hospitality recruitment consultancy, finding a job through Achieve Hospitality has a lot of advantages. Firstly, we have built up good relationships with a lot of top employers, giving you exclusive access to their jobs. You’ll also get put forward for positions that you wouldn’t otherwise have heard about. We have a range of candidate services that help you with finding your next career move with Achieve Hospitality, a leader in Private Household recruitment and Luxury Hospitality recruitment.</p>
                    <div className="flex gap-16 flex-col flex-wrap lg:flex-nowrap items-center justify-center md:justify-normal md:flex-row">
                        <div className="w-full">
                            <h1 className="text-white font-bold text-3xl">
                                Knowledge & advice
                            </h1>
                            <p className="text-white text-wrap w-full text-xl">
                                As we are specialists in Private Household recruitment and Luxury Hospitality recruitment, we can provide you with realistic salary levels for your chosen role and advice as to which roles are suited to your skillset. We’ll also help with your CV and modify terminology to ensure your language is consistent with your chosen market.
                            </p>
                        </div>
                        <div className="w-full">
                            <h1 className="text-white font-bold text-3xl">
                                Knowledge & advice
                            </h1>
                            <p className="text-white text-wrap w-full text-xl">
                                As we are specialists in Private Household recruitment and Luxury Hospitality recruitment, we can provide you with realistic salary levels for your chosen role and advice as to which roles are suited to your skillset. We’ll also help with your CV and modify terminology to ensure your language is consistent with your chosen market.
                            </p>
                        </div>
                        <div className="w-full">
                            <h1 className="text-white font-bold text-3xl">
                                Knowledge & advice
                            </h1>
                            <p className="text-white text-wrap w-full text-xl">
                                As we are specialists in Private Household recruitment and Luxury Hospitality recruitment, we can provide you with realistic salary levels for your chosen role and advice as to which roles are suited to your skillset. We’ll also help with your CV and modify terminology to ensure your language is consistent with your chosen market.
                            </p>
                        </div>
                      
                    </div>
                </div>
            </div>

            <div id="contact" className="flex flex-col  md:flex-row container scroll-m-80 my-40">
                <div  className="h-50 w-full  flex flex-col gap-4 items-center py-4 justify-center">
                    <h1 className="text-3xl  font-medium">Let's talk through the details together!</h1>
                    <p className="text-xl text-gray-500 font-medium">Contact us if you still have any questions or feedback.</p>
                </div>
                <div className="border-t-5   md:border-l-5 md:border-t-0 border-amber-400 w-full  items-end  flex flex-col gap-4 justify-center pt-8 md:pt-0 ">
                    <div >
                        <span className="text-2xl text-gray-500">Mail us:  </span>
                        <span className="text-2xl text-gray-600 font-medium">ee@enkamax.com </span>
                    </div>
                    <div>
                        <span className="text-2xl text-gray-500">Whatsapp: </span>
                        <span className="text-2xl text-gray-600 font-medium">+90 555 333 22 11 </span>
                    </div>
                </div>
                <div className="absolute  left-1/2 -translate-x-1/2 translate-y-1/2  flex w-full h-50  justify-center  items-center"><Link to="/contact" ><h1 className=" sticky bottom-10 bg-white hover:bg-yellow-400 transition-colors duration-300 font-medium border-yellow-400 border-2 rounded-xl  p-2">Contact Now</h1></Link></div>
            </div>
            
        </section>
    )
}