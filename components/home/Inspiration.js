import Image from "next/image";

const Inspiration = ({ data }) => {
  return (
    <div className="bg-[#FBF9FA] py-5 md:py-10 xl:py-16">
      <h3 className="text-center font-quentin font-normal md:text-[80px] text-[32px] text-[#D4D4D4] lg:leading-[90px] leading-[48px] mb-[28px] md:mb-[48px]">
        Inspiration
      </h3>
      <div className="container">
        <div className="grid lg:grid-flow-col lg:grid-rows-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 xl:gap-6">
          {data.map(({ id, img, name }) => (
            <div
              key={id}
              className={`group relative rounded-[20px] overflow-hidden cursor-pointer ${
                (id === 0 &&
                  "lg:row-span-3 lg:col-span-3 h-[216px] lg:h-[477px]") ||
                ((id === 1 || id === 4 || id === 5) &&
                  "h-[216px] lg:h-[310px] lg:row-span-2") ||
                ((id === 2 || id === 3 || id === 6) && "h-[216px] lg:h-[143px]")
              }`}
            >
              <div className="group-hover:scale-110 transition duration-1000 w-full h-full object-cover">
                <Image src={img} layout="fill" objectFit="cover" alt="" />
              </div>
              <div className="absolute top-0 left-0 h-full w-full bg-black/40 flex justify-center items-center">
                <p
                  className={`text-white font-nunito font-extrabold text-2xl ${
                    id !== 0 && "lg:text-base"
                  } leading-[30px] md:leading-5`}
                >
                  {name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
