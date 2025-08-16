
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
               <svg className="w-50 h-auto " width="35.7mm" height="8.39mm" version="1.1" viewBox="0 0 35.7 8.39" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m0 3.84v-3.84h2.85v0.65h-2.07v0.851h1.93v0.647h-1.93v1.05h2.15v0.647zm8.25 0h-0.736v-1.42q0-0.451-0.0472-0.582-0.0472-0.134-0.155-0.207-0.105-0.0734-0.254-0.0734-0.191 0-0.343 0.105-0.152 0.105-0.21 0.278-0.055 0.173-0.055 0.639v1.26h-0.736v-2.78h0.684v0.409q0.364-0.472 0.917-0.472 0.244 0 0.445 0.0891 0.202 0.0865 0.304 0.223 0.105 0.136 0.144 0.309 0.0419 0.173 0.0419 0.495zm2.87 0v-3.84h0.736v2.04l0.862-0.98h0.907l-0.951 1.02 1.02 1.77h-0.794l-0.7-1.25-0.343 0.359v0.891zm5.71-1.93-0.668-0.121q0.113-0.403 0.388-0.597 0.275-0.194 0.817-0.194 0.493 0 0.734 0.118 0.241 0.115 0.338 0.296 0.0996 0.178 0.0996 0.658l-0.0079 0.859q0 0.367 0.0341 0.542 0.0367 0.173 0.134 0.372h-0.728q-0.0288-0.0734-0.0707-0.217-0.0183-0.0655-0.0262-0.0865-0.189 0.183-0.403 0.275-0.215 0.0917-0.458 0.0917-0.43 0-0.679-0.233-0.246-0.233-0.246-0.589 0-0.236 0.113-0.419 0.113-0.186 0.314-0.283 0.204-0.0996 0.587-0.173 0.516-0.0969 0.715-0.181v-0.0734q0-0.212-0.105-0.301-0.105-0.0917-0.396-0.0917-0.196 0-0.307 0.0786-0.11 0.076-0.178 0.27zm0.985 0.597q-0.141 0.0472-0.448 0.113-0.307 0.0655-0.401 0.128-0.144 0.102-0.144 0.259 0 0.155 0.115 0.267 0.115 0.113 0.293 0.113 0.199 0 0.38-0.131 0.134-0.0996 0.176-0.244 0.0288-0.0943 0.0288-0.359zm3.59 1.34v-3.84h1.16l0.697 2.62 0.689-2.62h1.16v3.84h-0.72v-3.02l-0.762 3.02h-0.747l-0.76-3.02v3.02zm7.17-1.93-0.668-0.121q0.113-0.403 0.388-0.597 0.275-0.194 0.817-0.194 0.493 0 0.734 0.118 0.241 0.115 0.338 0.296 0.0996 0.178 0.0996 0.658l-0.0079 0.859q0 0.367 0.0341 0.542 0.0367 0.173 0.134 0.372h-0.728q-0.0288-0.0734-0.0707-0.217-0.0183-0.0655-0.0262-0.0865-0.189 0.183-0.403 0.275-0.215 0.0917-0.458 0.0917-0.43 0-0.679-0.233-0.246-0.233-0.246-0.589 0-0.236 0.113-0.419 0.113-0.186 0.314-0.283 0.204-0.0996 0.587-0.173 0.516-0.0969 0.715-0.181v-0.0734q0-0.212-0.105-0.301-0.105-0.0917-0.396-0.0917-0.196 0-0.307 0.0786-0.11 0.076-0.178 0.27zm0.985 0.597q-0.141 0.0472-0.448 0.113-0.307 0.0655-0.401 0.128-0.144 0.102-0.144 0.259 0 0.155 0.115 0.267 0.115 0.113 0.293 0.113 0.199 0 0.38-0.131 0.134-0.0996 0.176-0.244 0.0288-0.0943 0.0288-0.359zm3.24 1.34 1-1.43-0.962-1.35h0.899l0.493 0.765 0.519-0.765h0.865l-0.943 1.32 1.03 1.46h-0.904l-0.566-0.862-0.571 0.862z" 
               fill="var(--primary)" strokeWidth="61.7" aria-label="EnkaMax"/><path d="m1.85 7.75h-0.386l-0.748-0.89h-0.419v0.89h-0.298v-2.24h0.627q0.203 0 0.338 0.0271 0.135 0.0255 0.243 0.0932 0.122 0.0766 0.189 0.194 0.0691 0.116 0.0691 0.295 0 0.242-0.122 0.406-0.122 0.162-0.335 0.245zm-0.696-1.61q0-0.0962-0.0346-0.17-0.0331-0.0751-0.111-0.126-0.0646-0.0436-0.153-0.0601-0.0887-0.018-0.209-0.018h-0.35v0.845h0.301q0.141 0 0.246-0.024 0.105-0.0255 0.179-0.0932 0.0676-0.0631 0.0992-0.144 0.0331-0.0827 0.0331-0.209zm2.29 0.798h-1.24q0 0.155 0.0466 0.271 0.0466 0.114 0.128 0.188 0.0781 0.0721 0.185 0.108 0.108 0.0361 0.237 0.0361 0.171 0 0.344-0.0676 0.174-0.0691 0.248-0.135h0.015v0.308q-0.143 0.0601-0.292 0.101-0.149 0.0406-0.313 0.0406-0.418 0-0.652-0.225-0.234-0.227-0.234-0.643 0-0.412 0.224-0.654 0.225-0.242 0.592-0.242 0.34 0 0.523 0.198 0.185 0.198 0.185 0.564zm-0.275-0.216q-0.0015-0.222-0.113-0.344-0.11-0.122-0.335-0.122-0.227 0-0.362 0.134-0.134 0.134-0.152 0.332zm1.94 0.921q-0.141 0.0676-0.269 0.105-0.126 0.0376-0.269 0.0376-0.182 0-0.334-0.0526-0.152-0.0541-0.26-0.162-0.11-0.108-0.17-0.274-0.0601-0.165-0.0601-0.386 0-0.412 0.225-0.646 0.227-0.234 0.598-0.234 0.144 0 0.283 0.0406 0.14 0.0406 0.255 0.0992v0.314h-0.015q-0.129-0.101-0.268-0.155-0.137-0.0541-0.268-0.0541-0.24 0-0.38 0.162-0.138 0.161-0.138 0.473 0 0.304 0.135 0.467 0.137 0.162 0.383 0.162 0.0857 0 0.174-0.0225 0.0887-0.0225 0.159-0.0586 0.0616-0.0316 0.116-0.0661 0.0541-0.0361 0.0857-0.0616h0.015zm1.41-1.27h-0.015q-0.0631-0.015-0.123-0.021-0.0586-0.00751-0.14-0.00751-0.131 0-0.252 0.0586-0.122 0.0571-0.234 0.149v1.19h-0.283v-1.68h0.283v0.248q0.168-0.135 0.296-0.191 0.129-0.0571 0.263-0.0571 0.0736 0 0.107 0.00451 0.0331 0.00301 0.0992 0.0135zm1.66 1.37h-0.283v-0.186q-0.143 0.113-0.274 0.173-0.131 0.0601-0.289 0.0601-0.264 0-0.412-0.161-0.147-0.162-0.147-0.475v-1.09h0.283v0.956q0 0.128 0.012 0.219 0.012 0.0902 0.0511 0.155 0.0406 0.0661 0.105 0.0962 0.0646 0.0301 0.188 0.0301 0.11 0 0.239-0.0571 0.131-0.0571 0.243-0.146v-1.25h0.283zm0.86-1.96h-0.319v-0.293h0.319zm-0.018 1.96h-0.283v-1.68h0.283zm1.43-0.015q-0.0796 0.021-0.174 0.0346-0.0932 0.0135-0.167 0.0135-0.257 0-0.391-0.138t-0.134-0.443v-0.893h-0.191v-0.237h0.191v-0.482h0.283v0.482h0.583v0.237h-0.583v0.765q0 0.132 0.00601 0.207 0.00601 0.0736 0.0421 0.138 0.0331 0.0601 0.0902 0.0887 0.0586 0.0271 0.177 0.0271 0.0691 0 0.144-0.0195 0.0751-0.021 0.108-0.0346h0.015zm0.645-1.94h-0.319v-0.293h0.319zm-0.018 1.96h-0.283v-1.68h0.283zm1.96 0h-0.283v-0.956q0-0.116-0.0135-0.216-0.0135-0.102-0.0496-0.159-0.0376-0.0631-0.108-0.0932-0.0706-0.0316-0.183-0.0316-0.116 0-0.242 0.0571-0.126 0.0571-0.242 0.146v1.25h-0.283v-1.68h0.283v0.186q0.132-0.11 0.274-0.171 0.141-0.0616 0.29-0.0616 0.272 0 0.415 0.164 0.143 0.164 0.143 0.472zm1.91-0.191q0 0.427-0.194 0.627-0.194 0.2-0.597 0.2-0.134 0-0.261-0.0195-0.126-0.018-0.249-0.0526v-0.289h0.015q0.0691 0.0271 0.219 0.0661 0.15 0.0406 0.301 0.0406 0.144 0 0.239-0.0346 0.0947-0.0346 0.147-0.0962 0.0526-0.0586 0.0751-0.141 0.0225-0.0827 0.0225-0.185v-0.153q-0.128 0.102-0.245 0.153-0.116 0.0496-0.296 0.0496-0.301 0-0.478-0.216-0.176-0.218-0.176-0.613 0-0.216 0.0601-0.373 0.0616-0.158 0.167-0.272 0.0977-0.107 0.237-0.165 0.14-0.0601 0.278-0.0601 0.146 0 0.243 0.0301 0.0992 0.0286 0.209 0.0887l0.018-0.0721h0.264zm-0.283-0.271v-0.915q-0.113-0.0511-0.21-0.0721-0.0962-0.0225-0.192-0.0225-0.233 0-0.367 0.156-0.134 0.156-0.134 0.454 0 0.283 0.0992 0.428t0.329 0.146q0.123 0 0.246-0.0466 0.125-0.0481 0.228-0.128zm2.83-1.33q0-0.143-0.0857-0.224-0.0842-0.0827-0.216-0.0827-0.138 0-0.225 0.0932-0.0872 0.0917-0.0872 0.225 0 0.113 0.0586 0.2 0.0601 0.0872 0.257 0.206 0.147-0.0526 0.222-0.153 0.0766-0.102 0.0766-0.264zm0.292 1.32-0.718-0.7q-0.0466 0.0225-0.0932 0.0601-0.0466 0.0361-0.0932 0.0992-0.0421 0.0586-0.0691 0.141-0.027 0.0827-0.027 0.186 0 0.219 0.128 0.355 0.129 0.134 0.365 0.134 0.14 0 0.277-0.0676 0.138-0.0691 0.231-0.207zm0.452-0.893v0.144q0 0.144-0.0376 0.325t-0.128 0.344l0.568 0.553h-0.37l-0.344-0.337q-0.173 0.213-0.353 0.299-0.18 0.0842-0.371 0.0842-0.313 0-0.52-0.182-0.206-0.183-0.206-0.479 0-0.138 0.0391-0.239 0.0391-0.101 0.0917-0.174 0.0526-0.0706 0.131-0.132 0.0782-0.0631 0.158-0.11-0.165-0.108-0.239-0.218-0.0721-0.11-0.0721-0.277 0-0.101 0.0391-0.191 0.0406-0.0917 0.12-0.167 0.0751-0.0721 0.195-0.117 0.122-0.0451 0.268-0.0451 0.26 0 0.421 0.132 0.161 0.131 0.161 0.332 0 0.0661-0.018 0.15-0.018 0.0827-0.0616 0.149-0.0481 0.0736-0.137 0.141-0.0887 0.0676-0.23 0.116l0.558 0.544q0.021-0.0601 0.0316-0.132 0.0105-0.0721 0.012-0.15 3e-3 -0.0842 0.0015-0.188 0-0.104 0-0.176zm3.41 1.2q-0.0827 0.0361-0.15 0.0676-0.0661 0.0316-0.174 0.0661-0.0917 0.0286-0.2 0.0481-0.107 0.021-0.236 0.021-0.243 0-0.443-0.0676-0.198-0.0691-0.346-0.215-0.144-0.143-0.225-0.362-0.0812-0.221-0.0812-0.512 0-0.277 0.0782-0.494t0.225-0.368q0.143-0.146 0.344-0.222 0.203-0.0766 0.449-0.0766 0.18 0 0.359 0.0436 0.18 0.0436 0.4 0.153v0.353h-0.0225q-0.185-0.155-0.367-0.225-0.182-0.0706-0.389-0.0706-0.17 0-0.307 0.0556-0.135 0.0541-0.242 0.17-0.104 0.113-0.162 0.286-0.0571 0.171-0.0571 0.397 0 0.236 0.0631 0.406 0.0646 0.17 0.165 0.277 0.105 0.111 0.245 0.165 0.141 0.0526 0.298 0.0526 0.215 0 0.403-0.0736 0.188-0.0736 0.352-0.221h0.021zm1.83-0.676q0 0.41-0.21 0.648-0.21 0.237-0.564 0.237-0.356 0-0.567-0.237-0.209-0.237-0.209-0.648 0-0.41 0.209-0.648 0.21-0.239 0.567-0.239 0.353 0 0.564 0.239 0.21 0.237 0.21 0.648zm-0.292 0q0-0.326-0.128-0.484-0.128-0.159-0.355-0.159-0.23 0-0.358 0.159-0.126 0.158-0.126 0.484 0 0.316 0.128 0.479 0.128 0.162 0.356 0.162 0.225 0 0.353-0.161 0.129-0.162 0.129-0.481zm2.13 0.839h-0.283v-0.956q0-0.116-0.0135-0.216-0.0135-0.102-0.0496-0.159-0.0376-0.0631-0.108-0.0932-0.0706-0.0316-0.183-0.0316-0.116 0-0.242 0.0571-0.126 0.0571-0.242 0.146v1.25h-0.283v-1.68h0.283v0.186q0.132-0.11 0.274-0.171 0.141-0.0616 0.29-0.0616 0.272 0 0.415 0.164 0.143 0.164 0.143 0.472zm1.74-0.484q0 0.23-0.191 0.377-0.189 0.147-0.518 0.147-0.186 0-0.343-0.0436-0.155-0.0451-0.26-0.0977v-0.317h0.015q0.134 0.101 0.298 0.161 0.164 0.0586 0.314 0.0586 0.186 0 0.292-0.0601 0.105-0.0601 0.105-0.189 0-0.0992-0.0571-0.15-0.0571-0.0511-0.219-0.0872-0.0601-0.0135-0.158-0.0316-0.0962-0.018-0.176-0.0391-0.221-0.0586-0.314-0.171-0.0917-0.114-0.0917-0.28 0-0.104 0.0421-0.195 0.0436-0.0917 0.131-0.164 0.0842-0.0706 0.213-0.111 0.131-0.0421 0.292-0.0421 0.15 0 0.304 0.0376 0.155 0.0361 0.257 0.0887v0.302h-0.015q-0.108-0.0796-0.263-0.134-0.155-0.0556-0.304-0.0556-0.155 0-0.261 0.0601-0.107 0.0586-0.107 0.176 0 0.104 0.0646 0.156 0.0631 0.0526 0.204 0.0857 0.0782 0.018 0.174 0.0361 0.0977 0.018 0.162 0.0331 0.197 0.0451 0.304 0.155 0.107 0.111 0.107 0.295zm1.8 0.484h-0.283v-0.186q-0.143 0.113-0.274 0.173-0.131 0.0601-0.289 0.0601-0.264 0-0.412-0.161-0.147-0.162-0.147-0.475v-1.09h0.283v0.956q0 0.128 0.012 0.219 0.012 0.0902 0.0511 0.155 0.0406 0.0661 0.105 0.0962 0.0646 0.0301 0.188 0.0301 0.11 0 0.239-0.0571 0.131-0.0571 0.243-0.146v-1.25h0.283zm0.842 0h-0.283v-2.34h0.283zm1.43-0.015q-0.0796 0.021-0.174 0.0346-0.0932 0.0135-0.167 0.0135-0.257 0-0.391-0.138-0.134-0.138-0.134-0.443v-0.893h-0.191v-0.237h0.191v-0.482h0.283v0.482h0.583v0.237h-0.583v0.765q0 0.132 6e-3 0.207 6e-3 0.0736 0.0421 0.138 0.0331 0.0601 0.0902 0.0887 0.0586 0.0271 0.177 0.0271 0.0691 0 0.144-0.0195 0.0751-0.021 0.108-0.0346h0.015zm0.645-1.94h-0.319v-0.293h0.319zm-0.018 1.96h-0.283v-1.68h0.283zm1.96 0h-0.283v-0.956q0-0.116-0.0135-0.216-0.0135-0.102-0.0496-0.159-0.0376-0.0631-0.108-0.0932-0.0706-0.0316-0.183-0.0316-0.116 0-0.242 0.0571t-0.242 0.146v1.25h-0.283v-1.68h0.283v0.186q0.132-0.11 0.274-0.171 0.141-0.0616 0.29-0.0616 0.272 0 0.415 0.164 0.143 0.164 0.143 0.472zm1.91-0.191q0 0.427-0.194 0.627-0.194 0.2-0.597 0.2-0.134 0-0.261-0.0195-0.126-0.018-0.249-0.0526v-0.289h0.015q0.0691 0.0271 0.219 0.0661 0.15 0.0406 0.301 0.0406 0.144 0 0.239-0.0346 0.0947-0.0346 0.147-0.0962 0.0526-0.0586 0.0751-0.141 0.0225-0.0827 0.0225-0.185v-0.153q-0.128 0.102-0.245 0.153-0.116 0.0496-0.296 0.0496-0.301 0-0.478-0.216-0.176-0.218-0.176-0.613 0-0.216 0.0601-0.373 0.0616-0.158 0.167-0.272 0.0977-0.107 0.237-0.165 0.14-0.0601 0.278-0.0601 0.146 0 0.243 0.0301 0.0992 0.0286 0.209 0.0887l0.018-0.0721h0.264zm-0.283-0.271v-0.915q-0.113-0.0511-0.21-0.0721-0.0962-0.0225-0.192-0.0225-0.233 0-0.367 0.156t-0.134 0.454q0 0.283 0.0992 0.428 0.0992 0.146 0.329 0.146 0.123 0 0.246-0.0466 0.125-0.0481 0.228-0.128z" 
               fill="var(--neutral-dark)" strokeWidth="35.4" aria-label="Recruiting &amp; Consulting"/></svg>

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