import Image from "next/image";
import Slider from "react-slick";
import { MapPin } from "phosphor-react";

const TourPackageSlider = ({ data, sectionTitle }) => {
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
    <div className="container py-5 md:py-10 xl:py-16">
      <p
        className="text-center font-quentin font-normal text-[32px] md:text-[80px]
          md:leading-[90px] leading-[48px] mb-10 md:mb-16 text-transparent bg-clip-text bg-gradient-to-b from-[#F43B47] to-[#453A94]"
      >
        {sectionTitle}
      </p>
      <Slider {...settings}>
        {data.map(({ id, location, packageName, price, facilities, img }) => (
          <div key={id} className="relative gap-x-4">
            <div className="mx-2">
              <Image
                src={img}
                alt=""
                width={306}
                height={408}
                objectFit="cover"
                className="rounded-[20px]"
              />
            </div>
            <div className="flex items-center gap-2 absolute bottom-24 left-5 text-white">
              <MapPin size={16} />
              <p>{location}</p>
            </div>
            <div className="lg:text-black  text-base font-nunito font-semibold leading-5 mt-6">
              <p className="mb-[9px]">
                <span>{packageName}</span> &#124;{" "}
                <span>{facilities[0].details}</span>
              </p>
              <p>${price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TourPackageSlider;
