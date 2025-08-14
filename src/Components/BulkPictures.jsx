

export const BulkPictures = ({ images }) => {
  return (
    <div className="relative h-full w-full pb-15 flex justify-center items-center overflow-hidden">
      {images.map((img, index) => {
        const isMain = index === 0;
        const translate =
          isMain
            ? ""
            : index === 1
              ? "translate-y-30 translate-x-15 md:translate-x-40"
              : "translate-y-30 -translate-x-40";

        const sizeClass =
          isMain
            ? "h-[30vw] w-[30vw] min-w-[200px] min-h-[200px] max-w-[400px] max-h-[400px]"
            : "h-[15vw] w-[15vw] min-w-[120px] min-h-[120px] max-w-[270px] max-h-[270px]";

        return (
          <div
            key={index}
            className={`absolute ${translate} p-2 bg-tertiary shadow-lg`}
          >
            <div
              className={`${sizeClass} bg-cover bg-no-repeat bg-center`}
              style={{ backgroundImage: `url(${img})` }}
            />
          </div>
        );
      })}
    </div>
  );
};
