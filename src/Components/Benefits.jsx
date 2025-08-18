import { benefits } from "../Constants/benefits"

export const Benefits = () => {

return <div className="w-full min-h-110 bg-gradient-to-b from-neutral-dark to-primary/70 mb-40">
        <h1 className="text-tertiary text-center p-8 text-3xl md:text-4xl">Your Benefits From Using Our Services</h1>
        <div className="my-container flex flex-col md:flex-row  md:gap-16">
          {benefits.map((item,key)=>{
            const Icon=item.icon
            return <div className="flex w-full flex-col mt-12 gap-4 pb-8  text-tertiary" key = {key}>
              <div className="flex gap-4 items-start text-left">
              <Icon className="text-secondary" size={40}/>
              <h2 className="text-2xl">{item.title}</h2>
              </div>
              <p className="text-lg">{item.paragraph}</p>
            </div>
          })}
        </div>  
      
    </div>
    }