import BulkPicture1 from "@/assets/bulkcard1.jpeg"
import BulkPicture3 from "@/assets/bulkcard3.jpeg"

export const BulkPictures = () =>{
    return  <div className="relative h-full w-full pb-15 flex justify-center items-center">
        <div className="absolute p-2 bg-white shadow-lg">
            <div
            className="h-[30vw] min-w-[200px] max-h-[400px] max-w-[400px] min-h-[200px] w-[30vw] bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${BulkPicture1})` }}
            />
        </div>
        <div className="absolute translate-y-30 translate-x-40 p-2 bg-white shadow-md">
            <div
            className="h-[15vw] min-w-[120px] max-h-[270px] max-w-[270px] min-h-[120px] w-[15vw] bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${BulkPicture3})` }}
            />
        </div>
       
    </div>;
}