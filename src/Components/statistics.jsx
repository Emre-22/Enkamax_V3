export const Statistics = () => {
     const statistics = [
    {
        title:"Candidates still employed",
        value:"352",
    },
    {
        title:"Clients",
        value:"50+",
    },
    {
        title:"Years of industry experience",
        value:"3",
    },
    {
        title:"Placements per month",
        value:"100+",
    },
]
    return <div className=" min-h-30 w-full flex md:flex-nowrap flex-wrap items-center gap-4 justify-center md:justify-between  container my-20 ">
                {statistics.map((item,key)=>(
                        <div key={key}  className="flex flex-col  border-l-3   p-4 gap-2 border-yellow-400 w-50 h-30 "> 
                            <p className="text-black text-2xl font-medium ">{item.value}</p> 
                            <h1 className="text-gray-500 text-md " >{item.title}</h1>
                        </div>
                ))}
    </div>
}