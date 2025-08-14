
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import EnkamaxLogo from "@/assets/EnkamaxLogoOptimized3.svg"; 
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
    <nav className={cn("fixed w-full z-50 transition-[padding,background-color]  duration-300 bg-background-foreground  flex items-center",
        isScrolled ? "py-5 bg-background-foreground/80 shadow-xs" : "py-8",
        isMenuOpen ? "" : "backdrop-blur-md" )}
    >
        <div className = "my-container mx-auto px-4 flex  items-center justify-between" >
            <ScrollLink to = "/">
                <svg className="text-primary   w-[210px]  h-[50px]">
                    <g transform="scale(1.5)">
                        <use href={EnkamaxLogo}></use>
                    </g>
                </svg>
            </ScrollLink>

            <div className="flex gap-8  items-center">

            {/* desktop nav */}
            <div className="hidden xl:flex   space-x-8 pl-10">
                {navItems.map((item,dkey)=>(
                    <div key={dkey} className="relative  group ">
                        <ScrollLink to={item.href} className={
                            cn("text-neutral-dark hover:text-hover-primary font-medium transition-colors  duration-250 border-b-2 border-transparent  flex items-center",
                                "justify-center text-[1.2vw] xl:text-base   gap-1",(!item.subMenu && "hover:border-hover-secondary"))
                            }>
                            {item.name}
                            {item.subMenu&& (<ChevronDown size={20} className=" "/>)}
                        </ScrollLink>
                        {/* Submenu */}
                         {item.subMenu && (
                            <div className=" absolute  pt-5 group-hover:pointer-events-auto pointer-events-none ">

                            
                            <div className=" -left-5 group-hover:opacity-100 group-hover:pointer-events-auto rounded-xl bg-neutral-light shadow-2xl 
                                        opacity-0 pointer-events-none  
                                        
                                        transition-all duration-300 z-20">
                                    {item.subMenu.map((sub, subKey) => (
                                        <div key={subKey} className="relative group/sub">
                                            {sub.subMenu ? (
                                                <>
                                                    <div className="px-5 py-4 text-neutral-dark rounded-xl hover:bg-neutral-mid  flex items-center justify-between w-60">
                                                        {sub.name}
                                                        <ChevronDown size={16} />
                                                    </div>
                                                    <div className="absolute left-full top-0 mt-0  w-60 bg-neutral-light rounded-xl shadow-lg opacity-0 group-hover/sub:opacity-100 pointer-events-none group-hover/sub:pointer-events-auto transition duration-300 z-30">
                                                        {sub.subMenu.map((deep, idx) => (
                                                            <ScrollLink
                                                                key={idx}
                                                                to={deep.href}
                                                                className="block px-5 py-4 rounded-xl text-sm text-neutral-dark hover:bg-neutral-mid"
                                                            >
                                                                {deep.name}
                                                            </ScrollLink>
                                                        ))}
                                                    </div>
                                                </>
                                            ) : (
                                                <ScrollLink
                                                    to={sub.href}
                                                    className="block px-5 py-4 w-60 text-neutral-dark rounded-xl hover:bg-neutral-mid"
                                                >
                                                    {sub.name}
                                                </ScrollLink>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                </div>
                            )}

                        </div>
                ))}
            </div>
            <div className="h-10  w-10 hidden  md:block ">

            <ScrollLink to = "/">
                  <svg className=" h-[40px] w-[40px] ml-2 " width="4.23mm" height="4.23mm" version="1.1" viewBox="0 0 4.23 4.23" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-.125 -.124)"><path d="m2.24 0.124v0.253h1.88v3.22h0.241v-3.47zm-2.11 0.569v3.66h2.14v-0.241h-1.89v-3.42zm2.36 0.44v0.242h0.763v0.684h-0.719v0.239h0.719v0.781h-0.763v0.242h0.985v-2.19zm-1.43 5.2e-4v2.19h0.985v-0.242h-0.763v-0.782h0.719v-0.239h-0.719v-0.684h0.763v-0.242z" fill="var(--neutral-dark)" fillOpacity=".98" strokeWidth=".265"/></g></svg>

            </ScrollLink>
            </div>

            {/* mobile nav */}
            <button onClick={()=>setisMenuOpen((prev) => !prev)} 
                className={cn("xl:hidden p-2 z-50  text-neutral-dark")}> 
                {isMenuOpen
                    ? <X className="h-10 text-tertiary w-10" />
                    : <Menu className="h-10 w-10" />}
                </button>

                <div className={cn("fixed inset-0 overflow-y-scroll w-full bg-primary backdrop-blur-md z-40 flex flex-col items-center  py-30   transition-none  xl:hidden",
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
                            className="w-full flex items-center justify-between mx-auto text-left px-10 text-tertiary hover:neutral-mid  max-w-[400px] md:max-w-[300px] font-medium text-xl  py-3"
                            >
                                <ScrollLink to={item.href} className="flex items-center text-left justify-center   gap-4 ">
                                    <h1 className="text-left hover:text-neutral-mid ">
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
                                <div className="bg-primary-background  w-full flex flex-col items-center justify-center text-tertiary transition-all duration-300">
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
                                        className={`    gap-4   w-full flex items-center justify-between mx-auto text-left text-base  text-tertiary hover:text-neutral-mid max-w-[400px] md:max-w-[300px]   py-3${
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
                                                <div className="h-full w-[100vw] -translate-x-1/2  left-25 -z-10 absolute bg-primary-background-sub"></div>
                                                {msub.subMenu.map((subSubItem, subSubIndex) => (
                                                    <ScrollLink
                                                        key={subSubIndex}
                                                        to={subSubItem.href}
                                                        className="block py-3  max-w-[400px] md:max-w-[300px] text-tertiary hover:text-neutral-mid"
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
                                        className="block py-5 text-[1rem]  hover:text-neutral-mid"
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