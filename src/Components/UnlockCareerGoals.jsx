import Pattern from "@/assets/Pattern.webp"
import { ArrowRight,Home } from 'lucide-react';

export const UnlockCareerGoals = () =>{
    return(
        <div id="services" style={{backgroundImage: `url(${Pattern})`}} className="w-full scroll-m-40 border-t-2 border-secondary flex bg-cover bg-center bg-no-repeat  max-h-auto  ">
                <div className="my-container  flex flex-col gap-16 p-16">

                    <h1 className="text-tertiary text-center font-bold text-3xl md:text-4xl">Unlock Your Long-Term Career Goals with EnkaMax</h1>
                    <p className="text-tertiary text-wrap w-full text-xl ">At EnkaMax, we understand that your next career move is about more than just a job — it’s about building a future that reflects your ambition, values, and expertise. As a trusted consultancy for UHNW households and the luxury hospitality sector, we offer you access to exclusive opportunities that are rarely advertised publicly.<br/><br/>
                        Thanks to our close relationships with leading global employers, we connect exceptional talent with exceptional environments — from private estates and yachts to luxury hotels and private family offices. Discreet, bespoke, and always candidate-focused, we accompany you every step of the way — with personalised guidance, absolute confidentiality, and the highest level of professionalism.<br/><br/>
                        If you're ready to take the next step, we're ready to guide you there.</p>
                    <div className="flex gap-16 flex-col flex-wrap lg:flex-nowrap  md:flex-row">
                        
                        <div className="flex flex-col w-full gap-4">
                             <span className="flex gap-4">
                                <Home className="text-secondary size-10"/>
                                <h1 className="text-tertiary font-medium text-2xl">
                                    Access to Exclusive Opportunities
                                </h1>
                            </span>
                            <p className="text-tertiary text-wrap w-full text-xl">
                                Imagine discovering a role that never appeared on any job board — a position tailored specifically to your expertise, personality, and ambitions. At EnkaMax, this is not the exception — it’s the rule.<br/><br/>
                                Our work begins long before a vacancy opens. Through longstanding partnerships with UHNW families, private estates, luxury hospitality groups, and discreet family offices, we are the first to know when something truly special becomes available. These opportunities are rarely advertised and often entrusted exclusively to us.<br/><br/>
                                By registering with EnkaMax, you gain access to a world that remains hidden to the public eye — roles that combine prestige, challenge, and reward in equal measure. We don’t just fill vacancies. We match unique individuals with life-changing positions that align with who they are and where they’re going.                            </p>
                        </div>
                        
                        
                        
<div className="flex flex-col w-full gap-4">
                            <span className="flex gap-4">
                                <Home className="text-secondary size-10"/>
                            <h1 className="text-tertiary font-medium text-2xl">
                                Knowledge & Guidance You Can Trust
                            </h1>
                            </span>
                            <p className="text-tertiary text-wrap w-full text-xl">
                               
                               
With deep expertise in Private Household and Luxury Hospitality recruitment, we offer more than just job placement — we provide honest, informed advice tailored to your career goals. Whether you're curious about realistic salary benchmarks or unsure which roles best match your experience, we’re here to guide you.<br/> <br/>

We support you in refining your CV, aligning terminology with industry standards, and ensuring you present yourself confidently and professionally in a highly competitive market. Our approach is highly personalized, giving you the tools and insights you need to stand out among other candidates. We believe in long-term career building, not quick fixes, and always focus on securing positions that will truly elevate your professional journey.<br/> <br/>

At EnkaMax, we don’t just connect people with positions — we help shape careers with precision, insight, and care.

                               
                                 </p>
                        </div>




                        
                        <div className="flex flex-col w-full gap-4">
                             <span className="flex gap-4">
                                <Home className="text-secondary size-10"/>
                                <h1 className="text-tertiary font-medium text-2xl">
                                    Secure the Salary You Deserve
                                </h1>
                            </span>
                            <p className="text-tertiary text-wrap w-full text-xl">
                                Negotiating salary can feel uncomfortable — especially when the opportunity feels too good to risk. That’s where we come in.<br/><br/>
                                At EnkaMax, we know the luxury hospitality and private household sectors inside and out. We understand salary benchmarks, hidden benefits, and what our clients are truly prepared to offer for the right person. Because we speak both your language and theirs, we can confidently negotiate on your behalf — ensuring you receive the most competitive and fair offer without straining the relationship with your future employer.<br/><br/>
                                Our goal is simple: to position you not only for the role you deserve, but also the compensation that reflects your true worth. With us by your side, you can step into your new chapter knowing that everything has been taken care of — discreetly, professionally, and in your best interest.</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}