import { Building2, Lamp, Plane } from 'lucide-react';
import { HandPlatter } from 'lucide-react';
import { Gem } from 'lucide-react';
import { TreePalm } from 'lucide-react';
import { LampDesk } from 'lucide-react';
import { ChevronLeft, ChevronRight,Ship } from "lucide-react";

import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ScrollLink } from "../lib/ScrollLink";

import RealEstate from "@/assets/realestate-bg.webp"
import Hospitality from "@/assets/hospitality-bg.webp"
import FamilyOffice from "@/assets/familyoffice.webp"
import  Jet  from "@/assets/IndustryJet2.webp"
import  Yachting from "@/assets/Yachting3.webp"
import  Chalet from "@/assets/Chalet.webp"
import  PrivateHouseHolds from "@/assets/householdestatemngmnt.webp"

import React, { useRef, useState } from 'react';

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
        img:PrivateHouseHolds,
        href:"/Industries/privatehouseholds",

    },

    {
        title:"Family Offices",
        paragraph:"We understand the unique dynamics and discretion required in family office environments. Whether single or multi-family office, we provide trusted professionals who align with your values and support your legacy with precision, integrity, and complete confidentiality.",
        paragraph2:"We provide you the best hospitality provide you the best hospitality with best teamsWe provide you the best hospitality with best teams  provide  best teams provide you the best hospitality with best teams",
        icon:LampDesk,
        img:FamilyOffice,
        href:"/Industries/FamilyOffices",
    },
    {
        title:"Yachting",
        paragraph:"From serene sails to luxury charters, we source elite yacht crew who deliver seamless service on every sea. Whether for private ownership or charter experiences, our hand-picked professionals ensure your journey is nothing short of exceptional.",
        paragraph2:"We provide you the best hospitality provide you the best hospitality with best teamsWe provide you the best hospitality with best teams  provide  best teams provide you the best hospitality with best teams",
        icon:Ship,
        img:Yachting,
        href:"/Industries/yachting",
    },
    {
        title:"Chalet/Villa",
        paragraph:"Whether you're staffing a private mountain retreat or a luxury villa under the sun, we provide exceptional, hand-picked professionals who transform your property into an unforgettable experience. From seasoned chalet hosts to discreet villa teams — we deliver excellence, wherever your home may be.",
        paragraph2:"We provide you the best hospitality provide you the best hospitality with best teamsWe provide you the best hospitality with best teams  provide  best teams provide you the best hospitality with best teams",
        icon:Lamp,
        img:Chalet,
        href:"/Industries/chalets",
    },
    {
        title:"Private Jets",
        paragraph:"Discretion, precision, and professionalism define every crew member we place. Whether for short-haul or global travel, we deliver highly experienced, polished candidates who understand the unique standards of private aviation. From flight attendants to full crew staffing, we ensure your jet is serviced by individuals who embody trust, safety, and seamless luxury.",
        paragraph2:"We provide you the best hospitality provide you the best hospitality with best teamsWe provide you the best hospitality with best teams  provide  best teams provide you the best hospitality with best teams",
        icon:Plane,
        img:Jet,
        href:"/Industries/privatejets",
    } 
    
]


export const Cards = ({animate=true}) => {
    const scrollRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);

   const scrollToIndex = (index) => {
  if (!scrollRef.current) return;
  const children = scrollRef.current.children[0]?.children?.[0]?.children;
  const target = children?.[index];
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest', // Prevents vertical scrolling
      inline: 'center', // Scroll horizontally to center
    });
    setCurrentIndex(index);
  }
};


  const scroll = (dir) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector(".card")?.offsetWidth || 300;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -cardWidth - 32 : cardWidth + 32, // 32px for gap-8
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full border-t-2 border-b-2 border-secondary bg-neutral-light px-5 py-20 md:px-20">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 lg:mx-4 border-1 border-tertiary-foreground -translate-y-1/2 z-40 bg-tertiary/70 hover:bg-tertiary p-1 lg:p-4 rounded-full shadow-md"
      >
        <ChevronLeft className="w-6 h-6 text-tertiary-foreground" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 lg:mx-4 border-1 border-tertiary-foreground -translate-y-1/2 z-40 bg-tertiary/70 hover:bg-tertiary p-1 lg:p-4 rounded-full shadow-md"
      >
        <ChevronRight className="w-6 h-6 text-tertiary-foreground" />
      </button>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto   scroll-smooth snap-x snap-mandatory scrollbar-hidden w-full"
      >
        <div className="md:my-container flex gap-8 md:px-4 py-6">
          {cardinfo.map((item, key) => {
            const Icon = item.icon;
            return (
              <ScrollLink
                to={item.href}
                key={key}
                style={{ animationDelay: `${key * 0.2}s` }}
                className={cn(
                  "card snap-center shrink-0 w-[100%] sm:w-[60%] md:w-[60%] max-w-[800px]",
                  "bg-tertiary/60  backdrop-blur-lg",
                  "shadow-center flex flex-col items-center text-center",
                  "hover:inner-shadow-center transition-colors duration-300 min-h-80 ",
                  animate ? "fade-in-up" : ""
                )}
              >
                <div className="relative w-full h-full group   ">
                  {/* Image */}
                  <img
                    src={item.img}
                    alt=""
                    className="absolute inset-0 object-cover brightness-125 w-full h-full z-0 transition-all duration-300"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-tertiary-foreground to-transparent lg:opacity-50 opacity-100 lg:group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  {/* Content */}
                  <div className="relative z-20 h-full flex flex-col ">
                    {/* Title */}
                    <div className="relative flex-col lg:flex-row min-h-[100px] lg:h-[80] w-full flex gap-4 px-4 items-center bg-neutral-dark/30 border-b border-neutral-mid/80 p-4 transform lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-500">
                      <Icon className="text-tertiary w-10 h-10 stroke-1 shrink-0" />
                      <h1 className="text-tertiary font-bold text-xl text-left">{item.title}</h1>
                    </div>

                    {/* Paragraph */}
                    <div className="lg:opacity-0 lg:group-hover:opacity-100 translate-y-4 lg:group-hover:translate-y-0 transition-all duration-500 p-6">
                      <p className="text-tertiary text-left font-medium">{item.paragraph}</p>
                    </div>
                  </div>
                </div>
              </ScrollLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}