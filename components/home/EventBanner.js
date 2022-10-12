import Image from "next/image";

const EventBanner = () => {
  return (
    <div className="mb-[30px] lg:mb-[44px] mt-16 md:mt-32">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="event-banner bg-cover bg-no-repeat lg:bg-center bg-right rounded-[20px] p-0 md:p-9">
              <div className="pl-0 md:pl-[20%]">
                <p className="font-nunite font-[200] md:text-left text-center md:text-[52px] text-[24px] leading-[50px] md:mb-[22px] mb-[15px] text-[#4F4F4C]">
                  Experience
                </p>
                <h3 className="font-nunito font-medium md:text-[52px] text-[16px] lg:leading-[50px] leading-[32px] md:tracking-[13px] tracking-[10px] md:text-left text-center text-[#4F4F4C]">
                  The Anicent Egypt
                </h3>
              </div>
              {/* <img className="mx-auto md:ml-0" src={logo} alt="" srcSet="" /> */}
              {/* <Image className="mx-auto md:ml-0" src='../../public/assets/images/event/Logo.png' width={142} height={50} alt="" srcSet="" /> */}
              {/* <Image className="mx-auto md:ml-0" src="/assets/images/event/Logo.png" width={142} height={50} alt="" srcSet="" /> */}
              <Image className="flex md:justify-start justify-center" src="/assets/images/event/Logo.png" width={142} height={50} alt="" srcSet="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;
