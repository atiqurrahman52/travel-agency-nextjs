import Image from "next/image";

const EventBanner = () => {
  return (
    <div className="container py-10">
      <div className="relative w-full bg-[url(/assets/images/event/desert2.webp)] h-[324px] bg-cover bg-no-repeat bg-right lg:bg-center rounded-[20px]">
        <div className="w-full md:w-max absolute top-2 md:top-1/3 left-1/2 -translate-x-1/2 md:-translate-y-1/3">
          <p className="font-nunito font-[200] md:text-left text-center md:text-4xl lg:text-5xl xl:text-[52px] text-2xl leading-[50px] md:mb-[22px] mb-[15px] text-[#4F4F4C]">
            Experience
          </p>
          <p className="w-full font-nunito font-medium md:text-4xl lg:text-5xl xl:text-[52px] leading-[32px] lg:leading-[50px] tracking-[10px] md:tracking-[13px] md:text-left text-center text-[#4F4F4C]">
            The Anicent Egypt
          </p>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0">
          <Image
            src="/assets/images/event/Logo.png"
            width={142}
            height={50}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default EventBanner;
