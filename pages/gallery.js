import Link from "next/link";
import { useState, useEffect } from "react";
import { MagnifyingGlass } from "phosphor-react";

// components
import Layout from "../components/layout/Layout";
import GalleryCard from "../components/gallery/GalleryCard";
import Loader from "../components/shared/Loader";

// data
import { galleryData } from "../public/assets/data/gallery/galleryData";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setData(galleryData);
    if (data.length > 0) {
      setTimeout(() => {
        setIsLoading(false);
      }, [1000]);
    }
  }, [data, isLoading]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Layout head="Gallery">
          <div className="pt-20 lg:pt-28">
            <div className="container">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <h3 className="lg:text-left text-center text-[#393E50]  font-extrabold md:text-[40px] text-2xl leading-[48px]">
                  GALLERY
                </h3>

                <div className="relative flex w-[300px] flex-wrap items-stretch md:mt-0 mt-5">
                  <input
                    type="text"
                    placeholder="Search Destination"
                    className="focus-visible:outline-none px-3 py-4 font-semibold text-sm leading-[16px] text-[#747474] relative bg-[#F8F8F8] rounded-lg w-full pr-10"
                  />
                  <span className="z-10 h-full leading-snug font-normal text-center text-[#7C7B7B] absolute bg-transparent items-center justify-center w-10 right-0 pr-3 py-4">
                    <MagnifyingGlass
                      size={22}
                      className="absolute mr-[334px]"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="container pt-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-[80px] mt-[50px]">
              {data.map((item, i) => (
                <GalleryCard key={i} data={item} />
              ))}
            </div>

            <div className="flex justify-center items-center mb-[80px] md:mb-[118px]">
              <Link href="#">
                <a className="font-nunito font-semibold text-sm text-white bg-[#D00338E5] px-[61px] py-[14px] rounded-[10px] mt-[44px] md:mt-[74px]">
                  Load More
                </a>
              </Link>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default Gallery;
