import { Navbar } from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";
import { Contact, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactUs } from "../../Components/ContactUs";

import RealEstateBG from "@/assets/Yachting.webp"
import Yachting2 from "@/assets/Yachting2.webp"
import Yachting3 from "@/assets/Yachting3.webp"
import Hospitality from "@/assets/IndustryHospitality.webp"
import { BulkPictures } from "../../Components/BulkPictures";


const images = [
  Yachting3,
  Yachting2, 
];

export const Yachting = () => {
  return <div className="">
    <Navbar/>
    <div className="h-[calc(56.391px+8vh)]  w-full bg-primary"/>    
    <div className="bg-white">

    <div className="relative z-15 w-full  text-tertiary   font-medium flex  flex-col   gap-4">
            <div className="relative bg-neutral-light bg-cover bg-[center_60%] flex flex-col  justify-center bg-no-repeat min-h-[50vh]  " style={{backgroundImage: `url(${RealEstateBG})`}} >
                <div className="absolute min-h-[50vh] h-full inset-0 bg-gradient-to-r from-black/75 to-transparent z-1" />
        
                <div className="my-container flex flex-col gap-4 items-center">
                   <div className="relative flex flex-col gap-4  text-center   py-20  z-10"> 
                    <h1 className="text-tertiary/90  text-3xl  md:text-4xl font-bold">If you’re seeking distinguished charter or private yacht recruitment services, EnkaMax is your trusted partner — connecting world-class crew with the most prestigious vessels, ensuring service excellence on every voyage.</h1>
                    
                  </div>
                </div>
            </div>
          </div>
    <div className="my-container  flex flex-col gap-8 pt-30">
      <h1 className="text-3xl  md:text-4xl text-primary font-bold text-center">EnkaMax Yacht Crew Recruitment<br/>
      Bespoke Excellence for the World’s Most Prestigious Vessels
      </h1>
      <div className="flex flex-col xl:flex-col  gap-16">
        <p className="text-lg text-neutral-dark font-medium">At EnkaMax, our Yacht Division specialises in delivering fully certified, meticulously vetted yacht crew members for the most discerning private owners and elite charter operators worldwide. We understand that the right crew is the heartbeat of any vessel – the element that transforms a journey from exceptional to truly unforgettable.<br/><br/>

          Our network spans the finest professionals in the yachting industry, including Captains, Officers, Deckhands, Bosuns, Pursers, Chief Stewardesses, Stewardesses, Chefs, and Housekeepers. Every placement is a tailored process – we take time to understand your vessel’s unique operational culture, your expectations, and the calibre of service your guests deserve.<br/><br/>

        </p>
        <div className="flex items-center flex-col  2xl:flex-row ">

          <p className="text-lg text-neutral-dark font-medium">
    
          <span className="font-bold">Our Promise:<br/><br/></span>
          <ul className="list-disc pl-6 space-y-2 text-lg text-neutral-dark font-medium  ">
            <li>           Bespoke candidate selection aligned with your yacht’s specific requirements<br/>



            </li>
            <li>       Verified qualifications & certificates ensuring full compliance with maritime standards<br/>



            </li>
            <li>       Uncompromising discretion & professionalism in every step of the recruitment process<br/>


            </li>
            
  
          </ul>

          <br/>

          On board, five-star service and flawless presentation are non-negotiable. The professionals we place are not only experts in their roles but adept at delivering exceptional guest experiences, seamlessly blending formality, warmth, and adaptability – even under the demanding conditions of long hours and constant movement.<br/><br/>
          </p>         
         <div className="w-full min-w-0   mt-20 2xl:mt-0 2xl:ml-40 3xl:ml-0 md:min-w-[500px] 3xl:min-w-[900px]  py-25 md:py-50 3xl:py-30  xl:w-full xl:h-full   xl:max-h-none  ">
           <div className="relative h-full w-full pb-15 flex justify-center items-center ">
              
              {images.map((img, index) => {
                const isMain = index === 0;
                const translate =
                  isMain
                    ? "-translate-x-4 3xl:translate-y-8"
                    : index === 1
                      ? "translate-y-30  translate-x-20 md:translate-x-60 lg:translate-x-70 2xl:translate-x-45 md:translate-y-50 md:translate-x-50 2xl:translate-y-50 3xl:translate-x-40 3xl:translate-y-55"
                      : "translate-y-30 -translate-x-40";

                const sizeClass =
                  isMain
                    ? "lg:h-[500px] lg:w-[700px]  2xl:h-[30vw] h-[50vw] 2xl:w-[30vw] w-[70vw] min-w-[200px] min-h-[200px] max-w-[400px] max-h-[400px] 3xl:max-h-[400px] 3xl: max-w-[1000px] max-h-[500px] "
                    : "h-[15vw] w-[30vw] min-w-[120px] min-h-[120px] max-w-[270px] max-h-[270px] 2xl:max-h-[200px] 3xl:max-h-[100px]";

                return (
                  <div
                    key={index}
                    className={`absolute ${translate} p-1 bg-secondary shadow-lg`}
                  >
                    <div
                      className={`${sizeClass} bg-cover bg-no-repeat bg-center`}
                      style={{ backgroundImage: `url(${img})` }}
                    />
                  </div>
                );
              })}
            </div>
        </div>
        </div>
          <p className="text-lg text-neutral-dark font-medium">

          <span className="font-bold">Whether you are:<br/><br/></span>
          <ul className="list-disc pl-6 space-y-2 text-lg text-neutral-dark font-medium  ">
            <li>          A Principal seeking a handpicked crew that embodies precision, elegance, and service mastery<br/>

            </li>
            <li>       Or a professional candidate ready to take your yacht career to the next level in an exclusive, high-standard environment<br/>

            </li>
  
          </ul>

          <br/>
            …EnkaMax is your trusted partner. Contact our Yacht Division today to experience recruitment as it should be – personal, precise, and anchored in excellence.
          </p>
      </div>
    </div>
    </div>
    <ContactUs/>
    <Footer/>
    </div>;
};