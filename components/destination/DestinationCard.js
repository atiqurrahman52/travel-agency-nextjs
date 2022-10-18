import Image from "next/image";
import Link from "next/link";

const DestinationCard = ({ data }) => {
  const { id, country, location, days, price, img } = data;

  return (
    <div className="relative group overflow-hidden rounded-[20px] cursor-pointer">
      <Image
        className="group-hover:scale-125 transition-all duration-[2000ms] "
        src={img}
        width={696}
        height={383}
        alt=""
      />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#00000000]/0 to-[#00000000]/100 p-4 lg:p-11">
        <Link href={`/destination/${id}`}>
          <a>
            <div className="flex items-start justify-between flex-col h-full">
              <div className="flex items-center justify-center gap-2">
                <span className="w-[10px] h-[10px] rounded-full bg-[#F30D60] inline-block"></span>
                <p className="font-nunito font-extrabold lg:text-base text-sm leading-[20px] text-white">
                  {country}
                </p>
              </div>

              <div>
                <div className="mb-3">
                  <p className="text-white lg:text-2xl font-nunito font-extrabold lg:leading-[30px] leading-[22px]">
                    {location}, {country}
                  </p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <p className="font-nunito font-extrabold text-white/60 leading-[20px] border-white/60 border-r-2 pr-1">
                    {days}days
                  </p>
                  <p className="font-nunito font-extrabold text-white leading-[20px]">
                    ${price}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
