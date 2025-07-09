import { Building2 } from 'lucide-react';
import { HandPlatter } from 'lucide-react';
import { Gem } from 'lucide-react';
import { TreePalm } from 'lucide-react';
import { LampDesk } from 'lucide-react';

import { Link } from "react-router-dom";

const cardinfo =[
    {
        title:"Real Estate",
        paragraph:"Find your ideal estate effortlessly. With Enkamax",
        icon:Building2,
        href:"Industries/RealEstate",
    },
    {
        title:"Hospitality",
        paragraph:"Find your ideal estate effortlessly. With Enkamax",
        icon:HandPlatter,
        href:"Industries/Hospitality",

    },
    {
        title:"UHNW",
        paragraph:"We provide you the best hospitality with best teams.",
        icon:Gem,
        href:"Industries/UHNW",

    },
    {
        title:"Tourism",
        paragraph:"We provide you the best hospitality with best teams",
        icon:TreePalm,
        href:"Industries/Tourism",

    },
    {
        title:"Family Offices",
        paragraph:"We provide you the best hospitality with best teams",
        icon:LampDesk,
        href:"Industries/FamilyOffices",
    }
]


export const Cards = () => {
    return <div className="container relative lg:h-32 w-full z-11  -mt-15 lg:-mt-24 flex flex-col lg:flex-row gap-8 justify-between ">
            {cardinfo.map((item,key)=>{
                const Icon=item.icon;
                return <Link to={item.href} key={key} style={{ animationDelay: `${key * 0.2}s` }} className="px-2 fade-in-up bg-white lg:h-48 lg:w-48 rounded-4xl shadow-center flex flex-col items-center text-center hover:inner-shadow-center transition-shadow duration-300">
                        <div className='flex mt-6 gap-2'> 
                            <Icon size={24}/>
                            <h1  className="text-gray-700 font-bold text-xl ">{item.title}</h1>
                        </div>
                        <p className="text-gray-700 font-medium mt-4 mb-6">{item.paragraph}</p>
                    </Link>

            })}
                        
                    
    </div>


}
