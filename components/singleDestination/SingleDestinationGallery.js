import { useState } from "react";
import Image from "next/image";
import ImgsViewer from "react-images-viewer";
import Slider from "react-slick";

const SingleDestinationGallery = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);
  const imagesLeft = data.length - 5;

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
   
  };

  return (
    <div className="py-6 md:py-10">
      <h3 className="md:text-left text-center text-[#393E50] md:text-[40px] text-2xl font-nunito font-extrabold leading-[48px] pb-4 md:pb-10">
        Gallery 
      </h3>

      {/* <div className="hidden md:grid md:grid-flow-col md:grid-rows-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"> */}
      <div className="hidden md:grid md:grid-flow-col md:grid-rows-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {data.map((data, i) => (
          <div
            key={i}
            onClick={(e) => {
              setIsOpen(true);
              setCurrImg(i);
            }}
            className={`relative rounded-lg cursor-pointer w-full overflow-hidden ${
              i === 0
                ? "md:col-span-2 md:row-span-2 h-full"
                : "h-[192px] md:h-[130px]"
            }`}
          >
            <Image
              src={data.src}
              layout="fill"
              objectFit="cover"
              alt=""
              className="rounded-[10px]"
            />
            {i === 4 && (
              <div className="absolute top-0 left-0 h-full w-full backdrop-blur-[2px] bg-white/10 flex justify-center items-center font-bold text-white text-2xl">
                <p className="font-extrabold">{imagesLeft}</p> +
              </div>
            )}
          </div>
        ))}

        <ImgsViewer
          imgs={data}
          currImg={currImg}
          isOpen={isOpen}
          showThumbnails={true}
          onClickThumbnail={(index) => setCurrImg(index)}
          onClickPrev={(e) => setCurrImg(currImg - 1)}
          onClickNext={(e) => setCurrImg(currImg + 1)}
          onClose={() => setIsOpen(false)}
        />
      </div>

      <Slider {...settings} className="md:hidden">
        {data.map((data, i) => (
          <div key={i} className="relative h-[192px] w-full">
            <Image
              src={data.src}
              layout="fill"
              objectFit="cover"
              alt=""
              className="rounded-[10px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SingleDestinationGallery;
