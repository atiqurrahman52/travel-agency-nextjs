import Image from "next/image";
import Link from "next/link";

const DestinationCard = ({ data }) => {
  const { id, country, location, packageName, days, price, img } = data;

  return (
    <Link href={`/destination/${id}`}>
      <a>
        <div className="relative group overflow-hidden rounded-lg md:rounded-[20px] cursor-pointer h-[192px] lg:h-[250px] xl:h-[350px] w-full">
          <Image
            className="group-hover:scale-125 transition-all duration-[2000ms]"
            src={img}
            layout="fill"
            alt=""
          />

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black p-4 lg:p-11">
            <div className="h-full flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F30D60]" />
                <p className="font-nunito font-extrabold lg:text-base text-sm leading-5 text-white">
                  {country}
                </p>
              </div>

              <div>
                <div className="mb-3">
                  <p className="text-white lg:text-2xl font-nunito font-extrabold lg:leading-[30px] leading-[22px]">
                    {packageName}, {location}
                  </p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <p className="font-nunito font-extrabold text-white/60 leading-5 border-white/60 border-r-2 pr-1">
                    {days}days
                  </p>
                  <p className="font-nunito font-extrabold text-white leading-5">
                    ${price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default DestinationCard;
