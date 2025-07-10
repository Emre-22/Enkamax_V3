import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

export const RealEstate = () => {
  return <div className="">
    <Navbar/>
    <div className="h-[100vh] w-full text-3xl text-center py-50 text-black">
      This is the Real Estate page.
      
    </div>
    <Footer/>
    </div>;
};