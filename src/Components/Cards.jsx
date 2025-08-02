import { Building2 } from 'lucide-react';
import { HandPlatter } from 'lucide-react';
import { Gem } from 'lucide-react';
import { TreePalm } from 'lucide-react';
import { LampDesk } from 'lucide-react';

import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ScrollLink } from "../lib/ScrollLink";

import RealEstate from "@/assets/IndustryRealEstate.jpg"
import Hospitality from "@/assets/IndustryHospitality.jpeg"
import FamilyOffice from "@/assets/IndustryFamilyOffice.jpeg"
import  UHNW  from "@/assets/IndustriesUHNW.jpeg"

{"Industries"}
export const cardinfo =[ 
    {
        title:"Luxury Real Estate Advisory",
        paragraph:"We connect discerning clients with exceptional real estate opportunities — from private residences and investment properties to exclusive estates across Europe and the Middle East. Our advisory service is discreet, independent, and tailored to your individual lifestyle, family, and investment goals.",
        paragraph2:"Find your ideal estate effortled your ideal estate effortlessly. With EnkamaxFind your ideal estate effortled your ideal estate effortlessly. With EnkamaxFind your ideal estate effortled your ideal estate effortlessly. With Enkamax",
        icon:Building2,
        img:RealEstate,
        href:"/Industries/RealEstate",
    },
    {
        title:"Hospitality",
        paragraph:"We recruit exceptional talent for the world’s finest hotels, resorts, and hospitality groups. Our bespoke approach ensures every placement enhances the guest experience and reflects the highest standards of luxury and service.",
        paragraph2:"Find your ideal estate effortled your ideal estate effortlessly. With EnkamaxFind your ideal estate effortlessly. With Enkamax Find your ideal estate effortlessly. With EnkamaxFind your maxFind your ideal estate effortlessly. With Enkamax",
        icon:HandPlatter,
        img:Hospitality,
        href:"/Industries/Hospitality",

    },
    {
        title:"Private Households & Estates",
        paragraph:"We provide handpicked staff tailored to the unique preferences of each private household. From villa to estate, our bespoke recruitment ensures seamless service, discretion, and the highest level of personal attention.",
        paragraph2:"We ospitality with best teams.ovide you the best hospitality with best teams.We provide you the best hospitality with best teams. ovide you the best hospitality with best teams.ovide you ide you the best hospitality with best teams.ovide you the best hospitality with best teams.",
        icon:Gem,
        img:UHNW,
        href:"/Industries/privatehouseholds",

    },

    {
        title:"Family Offices",
        paragraph:"We understand the unique dynamics and discretion required in family office environments. Whether single or multi-family office, we provide trusted professionals who align with your values and support your legacy with precision, integrity, and complete confidentiality.",
        paragraph2:"We provide you the best hospitality provide you the best hospitality with best teamsWe provide you the best hospitality with best teams  provide  best teams provide you the best hospitality with best teams",
        icon:LampDesk,
        img:FamilyOffice,
        href:"/Industries/FamilyOffices",
    },/*
    {
        title:"Yachting",
        paragraph:"From serene sails to luxury charters, we source elite yacht crew who deliver seamless service on every sea. Whether for private ownership or charter experiences, our hand-picked professionals ensure your journey is nothing short of exceptional.",
        paragraph2:"We provide you the best hospitality provide you the best hospitality with best teamsWe provide you the best hospitality with best teams  provide  best teams provide you the best hospitality with best teams",
        icon:LampDesk,
        img:FamilyOffice,
        href:"/Industries/yachting",
    },
    {
        title:"Chalet/Villa",
        paragraph:"Whether you're staffing a private mountain retreat or a luxury villa under the sun, we provide exceptional, hand-picked professionals who transform your property into an unforgettable experience. From seasoned chalet hosts to discreet villa teams — we deliver excellence, wherever your home may be.",
        paragraph2:"We provide you the best hospitality provide you the best hospitality with best teamsWe provide you the best hospitality with best teams  provide  best teams provide you the best hospitality with best teams",
        icon:LampDesk,
        img:FamilyOffice,
        href:"/Industries/chaletvilla",
    },
    {
        title:"Jets",
        paragraph:"We provide you the best hospitality with best teams",
        paragraph2:"We provide you the best hospitality provide you the best hospitality with best teamsWe provide you the best hospitality with best teams  provide  best teams provide you the best hospitality with best teams",
        icon:LampDesk,
        img:FamilyOffice,
        href:"/Industries/jets",
    } */
]


export const Cards = ({animate=true}) => {
    return <div className="my-container relative lg:min-h-32  z-30 -mt-15 lg:-mt-24 flex flex-col lg:flex-row gap-8 justify-between ">
            {cardinfo.map((item,key)=>{
                const Icon=item.icon;
                return <ScrollLink to={item.href} key={key} style={{ animationDelay: `${key * 0.2}s` }} className={cn("relative group",animate ? "fade-in-up" : "",
                " bg-white/60 group-hover:bg-amber-100/60    backdrop-blur-lg lg:w-72 rounded-4xl shadow-center flex flex-col items-center text-center hover:inner-shadow-center transition-colors duration-300")}>
                        <div className=' flex w-full gap-4 px-4 items-center border-b-1 bg-gray-500/10 rounded-4xl border-gray-500/40 p-4'> 
                            <Icon className=' text-teal-800 w-5 h-5 stroke-1 shrink-0 ' />
                            <h1  className="text-gray-700  text-left  font-bold text-xl   ">{item.title}</h1>
                        </div>
                        <p className="text-gray-700 text-left  font-medium p-6">{item.paragraph}</p>
                        <img src={item.img} className='absolute  inset-0 object-cover h-full  -z-10  rounded-4xl  transition-all duration-300 '></img>
                    </ScrollLink>

            })}
                        
                    
    </div>


}
