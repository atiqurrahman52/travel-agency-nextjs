import Image from "next/image";
import Slider from "react-slick";

const GalleryCard = ({ data }) => {
  const { id, country, details, img } = data;

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 4000,
    arrows: false,
    autoplay: true,
    cssEase:"linear"
    // pauseOnHover: true
    // centerPadding: "20px",
  };

  return (
    <div key={id} className="border rounded-lg p-5 col-span-1">
      <div className="flex items-center gap-2 mb-[24px]">
        <span className="w-[10px] h-[10px] rounded-full bg-[#F30D60]"></span>
        <p className="font-nunito font-extrabold lg:text-base text-sm text-[#393E50] leading-[20px]">
          {country}
        </p>
      </div>

      <p className="font-nunito font-extrabold lg:text-base text-sm text-[#393E50] leading-[20px] mb-[30px]">
        {details}
      </p>

      <Slider {...settings} className="slider-item">
        {img.map((item) => (
          <div key={item.id} className="px-1">
            <Image
              className="w-full h-full"
              src={item}
              width={196}
              height={196}
              alt=""
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GalleryCard;
