import React from "react";
import Image from "next/image";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <div className="curb mb-10 p-1 lg:p-16">
      <div className="container">
        <div className="grid grid-cols-12 mt-5 md:mt-20 ">
          <div className="col-span-12 lg:col-span-6 mb-8">
            <h3 className="font-squarepeg font-normal text-[#FFC921] text-[32px] lg:text-[42px] leading-[48px] text-center lg:text-left mt-16 lg:mt-0 mb-1 lg:mb-2 ">
              Explore the world
            </h3>
            <h3 className="font-nunito font-extrabold text-accent text-[24px] lg:text-[48px] leading-[36px] lg:leading-[56px] text-center lg:text-left mb-9">
              We Take Care of all your Dream Tours{" "}
            </h3>
            <p className="font-nunito font-normal text-secondary text-[24px] leading-[36px] lg:leading-[38px] text-center lg:text-left">
              Let’s start your journey with us, your dream will come true...
            </p>
          </div>

          <div className="col-span-12 lg:col-span-6 mb-8">
            <img src="/assets/images/header/Hero Section.png" alt="" />
          </div>

          <div className="lg:col-span-3 col-span-6">
            <div className="flex md:gap-5 gap-2 p-1 flex-col md:flex-row items-center md:items-center justify-center md:justify-center">
              <img
                className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]"
                src="/assets/images/countdown/country.svg"
                alt=""
              />
              <div className="text-center md:text-left space-y-2">
                <CountUp
                  className="text-accent font-nunito font-extrabold lg:text-[20px] text-[16px] leading-[28px]"
                  end={100}
                />
                <span className="text-accent font-nunito font-extrabold lg:text-[20px] text-[16px] leading-[28px]">
                  +
                </span>
                <p className="text-primary font-nunito font-normal lg:text-[16px] text-[14px] leading-[20px]">
                  Countries
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 col-span-6">
            <div className="flex md:gap-5 gap-2 p-1 flex-col md:flex-row items-center md:items-center justify-center md:justify-center">
              <img
                className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]"
                src="/assets/images/countdown/country.svg"
                alt=""
              />
              <div className="text-center md:text-left space-y-2">
                <CountUp
                  className="text-accent font-nunito font-extrabold lg:text-[20px] text-[16px] leading-[28px]"
                  end={35000}
                />
                <span className="text-accent font-nunito font-extrabold lg:text-[20px] text-[16px] leading-[28px]">
                  +
                </span>
                <p className="text-primary font-nunito font-normal lg:text-[16px] text-[14px] leading-[20px]">
                  Travel Experiences
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 col-span-6">
            <div className="flex md:gap-5 gap-2 p-1 flex-col md:flex-row items-center md:items-center justify-center md:justify-center">
              <img
                className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]"
                src="/assets/images/countdown/price.svg"
                alt=""
              />
              <div className="text-center md:text-left space-y-2">
                <span className="text-accent font-nunito font-extrabold lg:text-[20px] text-[16px] leading-[28px]">
                  Best Price
                </span>
                <p className="text-primary font-nunito font-normal lg:text-[16px] text-[14px] leading-[20px]">
                  Best Price
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 col-span-6">
            <div className="flex md:gap-5 gap-2 p-1 flex-col md:flex-row items-center md:items-center justify-center md:justify-center">
              <img
                className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]"
                src="/assets/images/countdown/member.svg"
                alt=""
              />
              <div className="text-center md:text-left space-y-2">
                <CountUp
                  className="text-accent font-nunito font-extrabold lg:text-[20px] text-[16px] leading-[28px]"
                  end={54}
                />
                <span className="text-accent font-nunito font-extrabold lg:text-[20px] text-[16px] leading-[28px]">
                  {" "}
                  Million+
                </span>
                <p className="text-primary font-nunito font-normal lg:text-[16px] text-[14px] leading-[20px]">
                  User Connected
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
