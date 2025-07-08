
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import EnkamaxLogo from "@/assets/EnkamaxLogo.svg"; 
import { Menu,X } from "lucide-react";


const navItems = [
    {name: "Home", href:"#home"},
    {name: "About", href:"#about"},
    {name: "Industries", href:"#Industries"},
    {name: "Services", href:"#Services"},
    {name: "Contact", href:"#contact"},
]

export const Navbar = () =>{
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setisMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll=()=>{
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll",handleScroll)
        return () => window.removeEventListener("scroll",handleScroll);
    },[])

    return (
    <nav className={cn("fixed w-full h-[72px] z-40 transition-[padding,background-color]  duration-300 bg-white flex items-center",
        isScrolled ? "h-[72px] bg-white/80 shadow-xs" : "h-[72px]",
        isMenuOpen ? "" : "backdrop-blur-md" )}
    >
        <div className = "container mx-auto px-4 flex items-center justify-between" >
            <a href = "#home">
               <img src={EnkamaxLogo} alt = "Enkamax Logo" className="h-10 w-auto "></img>
            </a>


            {/* desktop nav */}
            <div className="hidden md:flex space-x-8">
                {navItems.map((item,key)=>(
                    <a key={key} href={item.href} className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-amber-200">{item.name}</a>
                ))}
            </div>
            {/* mobile nav */}
            <button onClick={()=>setisMenuOpen((prev) => !prev)} 
                className={cn("md:hidden p-2 z-50  text-gray-500")}> 
                {isMenuOpen
                    ? <X className="h-10 w-10" />
                    : <Menu className="h-10 w-10" />}
                </button>

            <div className={cn("fixed inset-0 bg-blue-950/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-none  md:hidden",
                            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item,key)=>(
                        <a 
                        key={key} 
                        href={item.href} 
                        className="text-white hover:text-yellow-300 font-medium transition-none "
                        onClick={()=>setisMenuOpen(false)}
                        >{item.name}
                        </a>

                    ))}
                </div>
            </div>
        </div>
    </nav>
    );
};