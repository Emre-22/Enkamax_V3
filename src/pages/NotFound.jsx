import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

export const NotFound = () =>{
  return <div className="">
    <Navbar/>
    <div className="h-[100vh] w-full text-3xl text-center py-50 text-black">
      This is the NotFound page.
      
    </div>
    <Footer/>
    </div>;
};