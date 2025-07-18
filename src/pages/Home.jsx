import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { HeroSection } from "../Components/HeroSection";
import BgImg from "@/assets/BG.webp"
import { Cards } from "../Components/Cards";
import { AboutSection } from "../Components/AboutSection";
export const Home = () =>{
    return <>
        <Navbar />

        <main>
            <section
                id="home"
                className="relative bg-black bg-cover bg-center bg-no-repeat overflow-x-hidden"
                style={{ backgroundImage: `url(${BgImg})` }}
                >
                <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-transparent z-0" />
                
                <HeroSection />
            </section>

            <Cards/>
            <AboutSection/>

        </main>
        <footer>
            <Footer/>
        </footer>
    </>;
};