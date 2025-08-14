export const Statistics = () => {
     const statistics = [
    {
        title:"Years of combined experience",
        value:"25",
    },
    {
        title:"Average days to hire",
        value:"5",
    },
    {
        title:"Monthly placements",
        value:"40+",
    },
    {
        title:"Recruiting globally - Aligned with client requirements",
        value:"193+",
    },
]
    return <div className=" min-h-30 w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 items-center  gap-4 justify-center md:justify-between my-container my-20 ">
                {statistics.map((item,key)=>(
                        <div key={key}  className="flex flex-col  border-l-3   p-4 gap-2 border-secondary w-full h-30 "> 
                            <p className="text-tertiary-foreground text-2xl font-medium ">{item.value}</p> 
                            <h1 className="text-neutral-dark text-md " >{item.title}</h1>
                        </div>
                ))}
    </div>
}