import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";
import BgImg from "@/assets/BG.jpg"
export const Home = () =>{
    return <>
    <Navbar />
    
    <section id="home" 
                className=" bg-green-950 bg-cover bg-center bg-no-repeat overflow-x-hidden" 
                style={{ backgroundImage: `url(${BgImg})` }}>
        <div className="absolute h-[80vh] min-h-100 inset-0 bg-gradient-to-r from-black/100 to-transparent z-10" />
        <main>
            <HeroSection/>
        </main>
    </section>
    <div className="min-h-[40vh]  bg-white"></div>
    <div className="min-h-[40vh]  bg-blue-100"></div>

    </>;
};