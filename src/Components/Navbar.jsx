
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import EnkamaxLogo from "@/assets/EnkamaxLogo.svg"; 
import { Menu,X,ChevronDown } from "lucide-react";
import { ScrollLink } from "../lib/ScrollLink";

import { navItems } from "@/constants/navItems";

export const Navbar = () =>{
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

    useEffect(() => {
        const handleScroll=()=>{
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll",handleScroll)
        return () => window.removeEventListener("scroll",handleScroll);
    },[])

    return (
    <nav className={cn("fixed w-full z-40 transition-[padding,background-color]  duration-300 bg-white  flex items-center",
        isScrolled ? "py-5 bg-white/80 shadow-xs" : "py-8",
        isMenuOpen ? "" : "backdrop-blur-md" )}
    >
        <div className = "container mx-auto px-4 flex items-center justify-between" >
            <ScrollLink to = "/">
               <img src={EnkamaxLogo} alt = "Enkamax Logo" className="h-10 w-auto "></img>
            </ScrollLink>


            {/* desktop nav */}
            <div className="hidden md:flex space-x-8">
                {navItems.map((item,dkey)=>(
                    <div key={dkey} className="relative group">
                        <ScrollLink to={item.href} className={
                            cn("text-gray-600 hover:text-teal-600 font-medium transition-colors duration-300 border-b-2 border-transparent  flex items-center",
                                "justify-center gap-1",(!item.subMenu && "hover:border-amber-200"))
                            }>
                            {item.name}
                            {item.subMenu&& (<ChevronDown size={20} className=" "/>)}
                        </ScrollLink>
                        {/* Submenu */}
                        {item.subMenu && (
                        <div className="absolute left-1/2 -translate-x-1/2  w-40 text-center bg-gray-100 shadow-lg pointer-events-none  opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
                                {item.subMenu.map((sub, dsubKey) => (
                                    <ScrollLink to={sub.href} 
                                    key={dsubKey}
                                    className="block px-4 py-4  text-gray-700 border-b-1 border-gray-200 hover:bg-gray-200"
                                    >
                                    {sub.name}
                                    </ScrollLink>
                                ))}
                                </div>
                            )}
                        </div>
                ))}
            </div>
            {/* mobile nav */}
            <button onClick={()=>setisMenuOpen((prev) => !prev)} 
                className={cn("md:hidden p-2 z-50  text-gray-500")}> 
                {isMenuOpen
                    ? <X className="h-10 w-10" />
                    : <Menu className="h-10 w-10" />}
                </button>

                <div className={cn("fixed inset-0 overflow-y-scroll w-full bg-teal-900 backdrop-blur-md z-40 flex flex-col items-center text-center py-30   transition-none  md:hidden",
                                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
                    <div className="flex flex-col w-full text-center items-center  justify-center space-y-8 text-xl">
                        {navItems.map((item, mkey) => (
                        <div key={mkey} className="w-full">
                            <button
                            onClick={() =>
                                item.subMenu
                                ? setOpenSubMenuIndex(openSubMenuIndex === mkey ? null : mkey)
                                : setisMenuOpen(false)
                            }
                            className="w-full flex items-center mx-auto text-white hover:text-yellow-300  max-w-[300px] font-medium text-xl pl-[50px] py-3"
                            >
                                <ScrollLink to={item.href} className="flex items-center justify-center  w-[200px] gap-4 ">
                                    {item.name}
                                    
                                </ScrollLink>
                                {item.subMenu && (
                                        <ChevronDown
                                        size={24}
                                        className={`ml-2 transition-transform duration-300 border-2  animate-pulse ${
                                            openSubMenuIndex === mkey ? "rotate-180" : ""
                                        }`}
                                        />
                                    )}
                            </button>

                            {item.subMenu && openSubMenuIndex === mkey && (
                            <div className="bg-teal-800/90  w-full text-white transition-all duration-300">
                                {item.subMenu.map((msub, msubKey) => (
                                <ScrollLink
                                    key={msubKey}
                                    to={msub.href}
                                    className="block  py-3 text-[1rem] hover:text-yellow-300"
                                    onClick={() => setisMenuOpen(false)} 
                                >
                                    {msub.name}
                                </ScrollLink>
                                ))}
                            </div>
                            )}
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};