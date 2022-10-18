import Image from "next/image";
import { MapPin } from "phosphor-react";

import { featuredItems } from "../../public/assets/data/home/featuredData";

const Featured = () => {
  return (
    <div className="mb-[60px] lg:mb-[104px]">
      <div className="container">
        <h1 className="text-center lg:text-[32px] text-2xl text-[#393E50] font-nunito font-[800] mt-0 md:mt-9">
          Featured Trips for You
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {featuredItems.map(({id,image,trips,price,country}) => (
            <div
              key={id}
              className="relative group overflow-hidden rounded-[20px]"
            >
              <div className="relative h-[216px] lg:h-[312px] w-full">
                <Image
                  className="group-hover:scale-125 transition-all duration-[2000ms]"
                  src={image}
                  layout='fill'
                  alt=""
                />
              </div>
              <div className="absolute top-[33px] left-[32px] space-y-[15px]">
                <p className="font-nunito font-[800] text-base text-white">
                  {trips}
                </p>
                <p className="font-nunito font-[800] text-base text-white">
                  {price}
                </p>
              </div>
              <div className="absolute bottom-7 left-[32px] flex items-center gap-2">
                <MapPin className="text-white" size={18} />
                <p className="font-nunito font-[600] text-sm text-white">
                  {country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;


