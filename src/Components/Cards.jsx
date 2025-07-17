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
        title:"Real Estate",
        paragraph:"Find your ideal estate effortlessly. With Enkamax",
        paragraph2:"Find your ideal estate effortlessly. With Enkamax Find your ideal estate effortlessly. With EnkamaxFind your ideal estate effortlessly. With EnkamaxFind your ideal estate effortlessly. With Enkamax Find your ideal estate effortlessly. With EnkamaxFind your ideal estate effortlessly. With EnkamaxFind your ideal estate effortlessly. With Enkamax Find your ideal estate effortlessly. With EnkamaxFind your ideal estate effortlessly. With Enkamax",
        icon:Building2,
        img:RealEstate,
        href:"/Industries/RealEstate",
    },
    {
        title:"Hospitality",
        paragraph:"Find your ideal estate effortlessly. With Enkamax",
        paragraph2:"Find your ideal estate effortlessly. With Enkamax Find your ideal estate effortlessly. With EnkamaxFind your ideal estate effortlessly. With EnkamaxFind your ideal estate effortlessly. With Enkamax Find your ideal estate effortlessly. With EnkamaxFind your ideal estate effortlessly. With EnkamaxFind your ideal estate effortlessly. With Enkamax Find your ideal estate effortlessly. With EnkamaxFind your ideal estate effortlessly. With Enkamax",
        icon:HandPlatter,
        img:Hospitality,
        href:"/Industries/Hospitality",

    },
    {
        title:"UHNW",
        paragraph:"We provide you the best hospitality with best teams.",
        paragraph2:"We provide you the best hospitality with best teams. ovide you the best hospitality with best teams.ovide you the best hospitality with best teams.We provide you the best hospitality with best teams. ovide you the best hospitality with best teams.ovide you the best hospitality with best teams.We provide you the best hospitality with best teams. ovide you the best hospitality with best teams.ovide you the best hospitality with best teams.",
        icon:Gem,
        img:UHNW,
        href:"/Industries/UHNW",

    },

    {
        title:"Family Offices",
        paragraph:"We provide you the best hospitality with best teams",
        paragraph2:"We provide you the best hospitality with best teams  provide you the best hospitality with best teams provide you the best hospitality with best teamsWe provide you the best hospitality with best teams  provide you the best hospitality with best teams provide you the best hospitality with best teamsWe provide you the best hospitality with best teams  provide you the best hospitality with best teams provide you the best hospitality with best teams",
        icon:LampDesk,
        img:FamilyOffice,
        href:"/Industries/FamilyOffices",
    }
]


export const Cards = ({animate=true}) => {
    return <div className="container relative lg:h-32 w-full z-30  -mt-15 lg:-mt-24 flex flex-col lg:flex-row gap-8 justify-between ">
            {cardinfo.map((item,key)=>{
                const Icon=item.icon;
                return <ScrollLink to={item.href} key={key} style={{ animationDelay: `${key * 0.2}s` }} className={cn("relative group",animate ? "fade-in-up" : "","px-2  bg-white/60 group-hover:bg-amber-100/60  backdrop-blur-lg lg:h-48 lg:w-48 rounded-4xl shadow-center flex flex-col items-center text-center hover:inner-shadow-center transition-colors duration-300")}>
                        <div className='flex mt-6 gap-2'> 
                            <Icon className='text-teal-800' size={24}/>
                            <h1  className="text-gray-700 font-bold text-xl ">{item.title}</h1>
                        </div>
                        <p className="text-gray-700 font-medium mt-4 mb-6">{item.paragraph}</p>
                        <img src={item.img} className='absolute top-1 -left-1 inset-0 object-cover h-full w-full blur-[2px] -z-10 rounded-4xl group-hover:opacity-20 opacity-0 transition-all duration-300 '></img>
                    </ScrollLink>

            })}
                        
                    
    </div>


}
