import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";
import BgImg from "@/assets/BG.jpg"
import { Cards } from "../Components/Cards";
import { AboutSection } from "../Components/AboutSection";
import { Footer } from "../Components/Footer";
export const Home = () =>{
    return <>
        <Navbar />

        <main>
            <section id="home" 
                        className=" bg-black bg-cover bg-center bg-no-repeat overflow-x-hidden" 
                        style={{ backgroundImage: `url(${BgImg})` }}>
                <div className="absolute h-[80vh] min-h-170 inset-0 bg-gradient-to-r from-black/100 to-transparent z-10" />
                    <HeroSection/>
                    
            </section>

            <Cards/>
            <AboutSection/>

        </main>
        <footer>
            <Footer/>
        </footer>
    </>;
};