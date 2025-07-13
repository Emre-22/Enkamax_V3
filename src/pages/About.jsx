import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { Statistics } from "@/Components/statistics.jsx"; 
import BgImg from "@/assets/BG2.webp"

import { Home } from "lucide-react";
import { Link } from "react-router-dom";

import { ContactUs } from "@/Components/ContactUs.jsx"


const Values = [
  {
    title:"Bespoke",
    paragraph:"We understand that one size does not fit all wat’s why we offer a bespoke service, tailoring all of our partners specific needs. We have a passionate and experienced team that set out to achieve excellence in all of the services we provide.",
    icon:Home
  
  },
  {
    title:"Committed",
    paragraph:"Commitment is a two-way street and as an agency, we are heavily invested in our client partnerships, candidate relationships and team culture. For this reason, we highly appreciate the commitment we receive from everyone we support in order to ensure the smoothest possible recruitment journey for both parties.",
    icon:Home
  
  },
  {
    title:"Transparency",
    paragraph:"When you choose Achieve, you partner with an agency that fosters a culture of transparency, honesty and respect in its processes and procedures. This approach guarantees that everyone understands their position and responsibilities, maintaining a clear line of accountability.",
    icon:Home
  
  }
]

export const About = () => {
  return <div className="">
    <Navbar/>
      <div className="relative bg-black bg-cover  min-h-170 w-auto bg-center bg-no-repeat mb-60 " 
              style={{ backgroundImage: `url(${BgImg})` }}>
        <div className="absolute  min-h-170 inset-0 bg-gradient-to-r from-black/100 to-transparent z-1" />
      <div className="relative container pt-40 pb-10 translate-y-60 max-w-200  z-10"> 
        <h1 className="text-white/90 -translate-y-30 mask-radial-from-75 text-center text-3xl font-bold">Enkamax: Where Talent Meets Vision, and Opportunity Finds Home.</h1>
            <div className="flex flex-col gap-8 w-auto  bg-teal-800/80 backdrop-blur-2xl p-10 text-white ">
              <h1 className="text-xl md:text-3xl font-bold  text-white">Your Trusted Partner in Luxury Hospitality Recruitment</h1>
              <p className=" text-lg">As specialists in Enkamax recruitment, we understand that finding exceptional talent requires more than matching CVs to job descriptions. We’ve built our reputation sourcing outstanding professionals for the UK’s finest hotels, restaurants, and private estates. Our experienced team brings deep industry knowledge and a carefully curated network, ensuring we connect you with candidates who not only meet your requirements but elevate your service standards. Together, we’ll strengthen your team with professionals who share your commitment to excellence.        </p>
            </div>
      </div>
      </div>



    <div className="container"> 

      <div className="flex md:flex-row flex-col font-medium gap-8  w-full text-gray-600">
        <p className="text-lg w-full">Our vision is to be the world´s leading recruitment partner for our customers. We strive to provide excellent consultancy services to every client and candidate and to exceed their expectations. As one of the world’s leading recruitment consultancies for the hotel, catering and tourism industry, we have been building values since the foundation in 1997.
        </p>
        <p className=" text-lg w-full">
Through our philosophy and actions in accordance with these values, we prove to our clients and candidates every day, that they have made the right decision by choosing to have us at their side.        </p>
    </div>

    <Statistics/>


      <div className=" justify-center items-center text-center container pt-20">
                      <h1 className="text-3xl font-bold mask-radial-from-75 text-teal-900">What Drives Us: The Core Values of Enkamax</h1>
                      <div className="flex justify-between  flex-col xl:flex-row pt-24 gap-16">
                          {Values.map((item,key)=>{
                            
                            return <div key={key} className="flex border-2 shadow-center border-gray-300 w-full  bg-gradient-to-tr from-amber-700/15 to-teal-900/20  flex-col gap-2 md:gap-5 rounded-4xl hover:inner-shadow-center transition-all duration-300 p-4 md:p-16">
                                <div className="flex items-center  text-gray-700 gap-8 justify-center">
                                <Home/>
                                <h1 className="text-lg md:text-2xl  font-medium">{item.title}</h1>
                                </div>
                                <p className="text-sm md:text-lg text-gray-700 font-medium">{item.paragraph}</p>
                            </div>
                          
                          })}
                      </div>
                  </div>
      
    </div>
    <ContactUs/>
    <Footer/>
    </div>;
};