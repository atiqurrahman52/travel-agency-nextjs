import Image from "next/image";

const Gift = () => {
  return (
    <div className="container py-5 md:py-10 xl:py-16">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-4">
          <p className="font-nunito font-extrabold lg:text-[45px] text-[28px] lg:text-left text-center text-primary lg:leading-[56px] leading-10 mb-[24px]">
            Gift an Experience with Tourelish
          </p>
          <p className="font-nunito font-[600] text-[#747474] text-base lg:text-left text-center leading-5 lg:mb-[24px] mb-[10px]">
            Surpirse gift card for your loved one. Surpirse gift card for your
            loved one. Surpirse gift card for your loved one. Surpirse gift card
            for your loved one.
          </p>
          <button className="lg:block hidden font-nunito font-semibold text-sm text-white bg-[#D00338E5]/90 px-[61px] py-[14px] rounded-[5px]">
            Learn more
          </button>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <Image
            className=""
            src="/assets/images/gift_card/card.png"
            alt=""
            srcSet=""
            width={855}
            height={369}
            layout="responsive"
          />
          <div className="mt-9 lg:mt-0 flex justify-center items-center">
            <button className="lg:hidden block font-nunito font-[600] text-sm text-white bg-[#D00338E5] px-[61px] py-[14px] rounded-[5px]">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
