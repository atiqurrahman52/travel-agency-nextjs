import Slider from "react-slick";
import Image from "next/image";

const Combo = ({data}) => {
  const settings = {
    slidesToScroll: 1,
    speed: 2000,
    autoplay: true,
    infinite: true,
    arrows: false,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: "120px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="container py-5 md:py-10 xl:py-16">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-4">
          <h3 className="text-primary text-2xl lg:text-[48px]  font-nunito font-extrabold lg:leading-[56px] leading-10 lg:text-left text-center mb-[20px]">
            Find the Perfect Combo
          </h3>
          <p className="text-[#747474] text-base font-nunito font-[600] leading-[20px] lg:text-left text-center">
            Plan and Find your perfect package for next tour Plan and Find your
            perfect package for next tour Plan and Find your perfect package for
            next tour
          </p>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <Slider {...settings}>
            {data.map(({ id, img }) => (
              <div key={id} className="max-h-[408px] gap-2">
                <div className="mx-2 ">
                  <Image
                    src={img}
                    width={306}
                    height={408}
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Combo;
