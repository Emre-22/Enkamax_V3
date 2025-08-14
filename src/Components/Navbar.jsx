
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
                <svg className="text-primary w-[177px] bg-red-400 h-[50px]">
                    <g transform="scale(1.3)">
                        <use href={EnkamaxLogo}></use>
                    </g>
                </svg>
            </ScrollLink>

            <div className="flex gap-8  items-center">

            {/* desktop nav */}
            <div className="hidden xl:flex   space-x-8 pl-10">
                {navItems.map((item,dkey)=>(
                    <div key={dkey} className="relative  group">
                        <ScrollLink to={item.href} className={
                            cn("text-gray-600 hover:text-teal-600 font-medium transition-colors  duration-300 border-b-2 border-transparent  flex items-center",
                                "justify-center text-[1.2vw] xl:text-base   gap-1",(!item.subMenu && "hover:border-amber-200"))
                            }>
                            {item.name}
                            {item.subMenu&& (<ChevronDown size={20} className=" "/>)}
                        </ScrollLink>
                        {/* Submenu */}
                         {item.subMenu && (
                            <div className="absolute -left-5  rounded-xl bg-gray-100 shadow-lg 
                                        opacity-0 pointer-events-none 
                                        group-hover:opacity-100 group-hover:pointer-events-auto 
                                        transition-all duration-300 z-20">
                                    {item.subMenu.map((sub, subKey) => (
                                        <div key={subKey} className="relative group/sub">
                                            {sub.subMenu ? (
                                                <>
                                                    <div className="px-5 py-4 text-gray-700 rounded-xl hover:bg-gray-200 flex items-center justify-between w-60">
                                                        {sub.name}
                                                        <ChevronDown size={16} />
                                                    </div>
                                                    <div className="absolute left-full top-0 mt-0  w-60 bg-gray-100 rounded-xl shadow-lg opacity-0 group-hover/sub:opacity-100 pointer-events-none group-hover/sub:pointer-events-auto transition duration-300 z-30">
                                                        {sub.subMenu.map((deep, idx) => (
                                                            <ScrollLink
                                                                key={idx}
                                                                to={deep.href}
                                                                className="block px-5 py-4 rounded-xl text-sm text-gray-700 hover:bg-gray-200"
                                                            >
                                                                {deep.name}
                                                            </ScrollLink>
                                                        ))}
                                                    </div>
                                                </>
                                            ) : (
                                                <ScrollLink
                                                    to={sub.href}
                                                    className="block px-5 py-4 w-60 text-gray-700 rounded-xl hover:bg-gray-200"
                                                >
                                                    {sub.name}
                                                </ScrollLink>
                                            )}
                                        </div>
                                    ))}
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

                <div className={cn("fixed inset-0 overflow-y-scroll w-full bg-teal-900 backdrop-blur-md z-40 flex flex-col items-center  py-30   transition-none  xl:hidden",
                                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
                    <div className="flex flex-col w-full items-center  justify-center space-y-8 text-xl">
                        {navItems.map((item, mkey) => (
                            <div key={mkey} className="w-full">
                            <button
                            onClick={() =>
                                item.subMenu
                                ? setOpenSubMenuIndex(openSubMenuIndex === mkey ? null : mkey)
                                : setisMenuOpen(false)
                            }
                            className="w-full flex items-center justify-between mx-auto text-left px-10 text-white hover:text-yellow-300  max-w-[400px] md:max-w-[300px] font-medium text-xl  py-3"
                            >
                                <ScrollLink to={item.href} className="flex items-center text-left justify-center   gap-4 ">
                                    <h1 className="text-left ">
                                        {item.name}
                                    </h1>
                                    
                                </ScrollLink>
                                {item.subMenu && (
                                    <ChevronDown
                                    size={24}
                                    className={`ml-2 transition-transform duration-300 border-2 rounded-lg animate-pulse ${
                                        openSubMenuIndex === mkey ? "rotate-180" : ""
                                    }`}
                                    />
                                )}
                            </button>

                            {item.subMenu && openSubMenuIndex === mkey && (
                                <div className="bg-teal-800/90  w-full flex flex-col items-center justify-center text-white transition-all duration-300">
                                <div className="w-full flex flex-col justify-center items-center ">
                                    <div>


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
                                        className={`    gap-4   w-full flex items-center justify-between mx-auto text-left text-base  text-white hover:text-yellow-300  max-w-[400px] md:max-w-[300px]   py-3${
                                            openSubSubMenuIndex === key ? " " : ""
                                        } `}
                                        >
                                        {msub.name}
                                        <ChevronDown
                                        size={24}
                                        className={`  transition-transform duration-300 border-2  rounded-xl animate-pulse ${
                                            openSubSubMenuIndex === key ? "rotate-180" : ""
                                        }`}
                                        />
                                    </button>

                                    {isOpen && (
                                        <div className=" translate-x-5 left-100 flex text-base w-full flex-col items-center  justify-center">
                                            <div>
                                                <div className="h-full w-[100vw] -translate-x-1/2  left-25 -z-10 absolute bg-teal-700"></div>
                                                {msub.subMenu.map((subSubItem, subSubIndex) => (
                                                    <ScrollLink
                                                        key={subSubIndex}
                                                        to={subSubItem.href}
                                                        className="block py-3  max-w-[400px] md:max-w-[300px] text-white hover:text-yellow-200"
                                                        onClick={() => setisMenuOpen(false)}
                                                    >
                                                    {subSubItem.name}
                                                    </ScrollLink>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    </>
                                ) : 
                                (

                                    <ScrollLink
                                        to={msub.href}
                                        className="block py-5 text-[1rem]  hover:text-yellow-300"
                                        onClick={() => setisMenuOpen(false)}
                                    >
                                        {msub.name}
                                    </ScrollLink>
                                )}
                                
                                </div>
                            );
                        })}
                        </div>
                                        </div>

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