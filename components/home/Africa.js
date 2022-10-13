import React from "react";

import { MapPin } from "phosphor-react";
import Slider from "react-slick";

// import { asiaData } from "../../public/assets/data/home/asiaData";
import { africaData } from "../../public/assets/data/home/africaData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Africa = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "60px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="mb-[60px] lg:mb-[124px]">
      <div className="container ">
        <h2
          className="text-center font-quentin font-normal md:text-[80px] text-[32px]
          md:leading-[90px] leading-[48px] md:mb-[64px] mb-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#F43B47]/100 to-[#453A94]/100"
        >
          {" "}
          Africa{" "}
        </h2>

        <Slider {...settings}>
          {africaData.map(({ id, city, details, price, img }) => (
            <div key={id} className="relative gap-x-4">
              <div className="mx-2">
                <Image
                  src={img}
                  alt=""
                  width={306}
                  height={408}
                  className="w-full"
                />
              </div>
              <div className="flex items-center gap-2 absolute bottom-24 left-5 text-white">
                <MapPin size={16} />
                <p>{city}</p>
              </div>
              <div className="lg:text-[#000000]  text-[16px] font-nunito font-semibold leading-[20px] mt-[24px]">
                <p className="mb-[9px]">{details}</p>
                <p>{price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Africa;
