import Image from "next/image";

const SingleDestinationBanner = ({data}) => {
  return (
    <div className="relative w-full h-[212px] md:h-[500px] flex flex-col items-center justify-center lg:mb-16 mb-10">
      <Image src={data.banner} alt="" layout="fill" objectFit="cover" />
      <p className="absolute text-white text-2xl lg:text-[64px] font-extrabold font-nunito leading-[34px] lg:leading-[48px]">
        {data.location}
      </p>
    </div>
  );
};

export default SingleDestinationBanner;
