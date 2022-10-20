import Image from "next/image";
import Slider from "react-slick";

const Partners = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 1500,
    slidesToShow: 8,
    autoplay: true,
    arrows: false,
    rows: 2,
    speed: 8000,
    autoplaySpeed: 150,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className="mb-[60px] lg:mb-[94px]">
      <div className="container">
        <div className="text-center">
          <h3 className="font-nunito font-extrabold  lg:text-[48px] text-2xl text-primary lg:leading-[56px] leading-10 md:mb-[20px] mb-[14px]">
            Our Partners
          </h3>
          <p className="font-nunito text-center font-[600] text-tertiary text-base leading-5 md:mb-[60px] mb-10">
            We team up with the best to give you an unmatchable experience
          </p>
        </div>

        <Slider {...settings}>
          {data.map(({ id, img }) => (
            <div key={id}>
              <div className="relative grayscale hover:grayscale-0 w-[70px] lg:w-[100px] h-[20px] lg:h-[56px] mx-auto my-4">
                <Image src={img} alt="" layout="fill" objectFit="contain" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
