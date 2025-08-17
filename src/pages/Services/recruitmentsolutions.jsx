import { Navbar } from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";
import { Contact, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactUs } from "../../Components/ContactUs";

import RecruitmentsolutionsBG from "@/assets/Recruitmentsolutions.jpeg"


export const Recruitmentsolutions = () => {
  return <div className="">
    <Navbar/>
    <div className="relative z-15 w-full  text-tertiary font-medium flex flex-col   gap-4">
            <div className="relative bg-neutral-light bg-cover bg-center bg-no-repeat min-h-170  " style={{backgroundImage: `url(${RecruitmentsolutionsBG})`}} >
                <div className="absolute min-h-170 inset-0 bg-gradient-to-r from-black/75 to-transparent z-1" />
        
                <div className="my-container flex flex-col gap-4">
                   <div className="relative flex flex-col gap-4 my-container items-center pt-40 pb-10 max-w-200  z-10"> 
                    <h1 className="text-tertiary/90 pt-30  text-center text-2xl md:text-3xl font-bold">Harnessing our expertise in talent acquisition, we create recruitment strategies that connect you with the right people, right when you need them.</h1>
                    
                  </div>
                </div>
            </div>
          </div>
    <div className="my-container flex flex-col gap-8 pt-30">
      <h1 className="text-3xl text-primary font-bold text-center">Proven Global Recruitment Excellence
</h1>
      <div className="flex flex-col md:flex-row  gap-16">
        <p className="text-lg text-neutral-dark font-medium">At EnkaMax, we deliver streamlined, high-precision recruitment solutions for clients worldwide. Our process begins with a deep understanding of your requirements — collaborating with you to craft the ideal candidate profile and a tailored job description before presenting only meticulously vetted, top-tier talent.<br/><br/>

For clients seeking a more personal, hands-on service, we offer on-site recruitment support — working directly alongside private families or luxury hospitality teams to achieve exceptional results. This can include recruitment, staff training, ongoing management, and other retained services designed to optimise performance.<br/><br/>

Our approach is consultative, not transactional. Unlike “one size fits all” agencies, we provide a bespoke, market-leading service at substantially reduced rates compared to other recruitment firms — without compromising on quality. We are committed to long-term success, offering extended rebate and replacement guarantees to ensure lasting placements.<br/><br/>

We also provide a unique three-month free replacement period, covering the entire probationary stage — a level of commitment rarely seen in hospitality recruitment.<br/><br/>

With a focus on longevity, trust, and excellence, EnkaMax is your partner in building teams that define the highest standards of private service.</p>
      </div>
    </div>
    <ContactUs/>
    <Footer/>
    </div>;
};