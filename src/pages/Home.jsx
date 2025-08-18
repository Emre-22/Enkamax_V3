import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { HeroSection } from "../Components/HeroSection";
import BgImg from "@/assets/castle-3.webp"
import { Cards } from "../Components/Cards";
import { AboutSection } from "../Components/AboutSection";
export const Home = () =>{
    return <>
        <Navbar />
        
        <main className="relative">
      <div className="h-[calc(56.391px+8vh)]  w-full bg-primary"/>

            <section
                id="home"
                className="relative bg-tertiary-foreground bg-cover py-20  bg-center bg-no-repeat overflow-x-hidden"
                style={{ backgroundImage: `url(${BgImg})` }}
                >
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-transparent z-0" />
                
                <HeroSection />
            </section>

            
            <AboutSection/>

        </main>
        <footer>
            <Footer/>
        </footer>
    </>;
};