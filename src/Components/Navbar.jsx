
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import EnkamaxLogo from "@/assets/EnkamaxLogoOptimized3.svg"; 
import EnkamaxLogoEE from "@/assets/EnkamaxLogoOptimized2EE.svg"; 
import PrivateHouseholds from "@/assets/PrivateHouseholds.jpeg"; 
import { Menu,X,ChevronDown } from "lucide-react";
import { ScrollLink } from "../lib/ScrollLink";

import { navItems } from "@/constants/navItems";

export const Navbar = () =>{
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);
    const [openSubSubMenuIndex, setOpenSubSubMenuIndex] = useState(null);

    useEffect(() => {
        const handleScroll=()=>{
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll",handleScroll)
        return () => window.removeEventListener("scroll",handleScroll);
    },[])

    return (
    <nav className={cn("fixed w-full z-50 transition-[padding,background-color]  duration-300 bg-white  flex items-center",
        isScrolled ? "py-5 bg-white/80 shadow-xs" : "py-8",
        isMenuOpen ? "" : "backdrop-blur-md" )}
    >
        <div className = "my-container mx-auto px-4 flex items-center justify-between" >
            <ScrollLink to = "/">
               <img src={EnkamaxLogo} alt = "Enkamax Logo" className="h-10  w-auto "></img>
            </ScrollLink>

            <div className="flex gap-8  items-center">

            {/* desktop nav */}
            <div className="hidden xl:flex space-x-8 pl-10">
                {navItems.map((item,dkey)=>(
                    <div key={dkey} className="relative group">
                        <ScrollLink to={item.href} className={
                            cn("text-gray-600 hover:text-teal-600 font-medium transition-colors duration-300 border-b-2 border-transparent  flex items-center",
                                "justify-center text-[1.2vw] xl:text-base   gap-1",(!item.subMenu && "hover:border-amber-200"))
                            }>
                            {item.name}
                            {item.subMenu&& (<ChevronDown size={20} className=" "/>)}
                        </ScrollLink>
                        {/* Submenu */}
                        {item.subMenu && (
                            <div className="absolute left-1/2 -translate-x-1/2   rounded-xl text-center bg-gray-100 shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
                                {item.subMenu.map((sub, dsubKey) => {
                                    const key = `${dkey}-${dsubKey}`;
                                    const isOpen = openSubSubMenuIndex === key;
                                    
                                    return (
                                        <div key={key}>
                                    {sub.subMenu ? (
                                        <>
                                        <button
                                            onClick={() => setOpenSubSubMenuIndex(isOpen ? null : key)}
                                            className="w-full text-left px-16 py-6 text-gray-700 border-b  border-gray-300 hover:bg-gray-200 flex justify-between items-center"
                                            >
                                            {sub.name}
                                            <ChevronDown
                                            className={`transition-transform shrink-0 ${isOpen ? "rotate-180" : ""}`}
                                            size={16}
                                            />
                                        </button>

                                        {isOpen && (
                                            <div className="bg-gray-200/75 w-full ">
                                            {sub.subMenu.map((deep, idx) => (
                                                <ScrollLink
                                                key={idx}
                                                to={deep.href}
                                                className="block w-60 px-16 py-6  text-sm text-gray-700 hover:bg-gray-50"
                                                >
                                                {deep.name}
                                                </ScrollLink>
                                            ))}
                                            </div>
                                        )}
                                        </>
                                    ) : (
                                        <ScrollLink
                                        to={sub.href}
                                        className="block px-4 py-4 w-60 text-gray-700 border-b  border-gray-300 hover:bg-gray-200"
                                        >
                                        {sub.name}
                                        </ScrollLink>
                                    )}
                                    </div>
                                );
                            })}
                            </div>
                            )}

                        </div>
                ))}
            </div>
            <div className="h-10 w-10">

            <ScrollLink to = "/">
                <img src={EnkamaxLogoEE} alt = "Enkamax Logo" className="h-10 shrink-0 w-auto "></img>
            </ScrollLink>
            </div>

            {/* mobile nav */}
            <button onClick={()=>setisMenuOpen((prev) => !prev)} 
                className={cn("xl:hidden p-2 z-50  text-gray-500")}> 
                {isMenuOpen
                    ? <X className="h-10 w-10" />
                    : <Menu className="h-10 w-10" />}
                </button>

                <div className={cn("fixed inset-0 overflow-y-scroll w-full bg-teal-900 backdrop-blur-md z-40 flex flex-col items-center text-center py-30   transition-none  xl:hidden",
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
                                {item.subMenu.map((msub, msubKey) => {
                                    const key = `${mkey}-${msubKey}`;
                                    const isOpen = openSubSubMenuIndex === key;
                                    
                                    return (
                                        <div key={key} >
                                {msub.subMenu ? (
                                    <>
                                    <button
                                        onClick={() =>
                                            setOpenSubSubMenuIndex(isOpen ? null : key)
                                        }
                                        className={`w-full justify-center pl-7  text-base gap-4 py-3 flex items-center text-white hover:text-yellow-300 ${
                                            openSubSubMenuIndex === key ? "bg-teal-700/50 border-b-1 border-teal-800" : ""
                                        } `}
                                    >
                                        {msub.name}
                                        <ChevronDown
                                        size={24}
                                        className={`ml-2  transition-transform duration-300 border-2   animate-pulse ${
                                            openSubSubMenuIndex === key ? "rotate-180" : ""
                                        }`}
                                        />
                                    </button>

                                    {isOpen && (
                                        <div className=" bg-teal-700/50">
                                        {msub.subMenu.map((subSubItem, subSubIndex) => (
                                            <ScrollLink
                                            key={subSubIndex}
                                            to={subSubItem.href}
                                            className="block py-3 text-sm  text-white hover:text-yellow-200"
                                            onClick={() => setisMenuOpen(false)}
                                            >
                                            {subSubItem.name}
                                            </ScrollLink>
                                        ))}
                                        </div>
                                    )}
                                    </>
                                ) : (
                                    <ScrollLink
                                    to={msub.href}
                                    className="block py-5 text-[1rem] hover:text-yellow-300"
                                    onClick={() => setisMenuOpen(false)}
                                    >
                                    {msub.name}
                                    </ScrollLink>
                                )}
                                </div>
                            );
                        })}

                            </div>
                            )}
                        </div>
                        ))}
                    </div>
                </div>
                                    
                                    </div>
            </div>
        </nav>
    );
};