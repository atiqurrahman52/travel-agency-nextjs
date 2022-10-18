import { Calendar } from "phosphor-react";
import { HiMapPin } from "react-icons/hi2";

const SingleDestinationFacilities = ({ data }) => {
  const { country, location, facilities, price } = data;

  return (
    <>
      <div className="mb-10">
        <h3 className="text-[#393E50] font-nunito font-extrabold lg:text-[40px] text-xl lg:leading-[48px] leading-[28px] mb-4">
          {location} | {facilities[0].details}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HiMapPin className="text-accent text-xl" />
            <p className="text-[#393E50] lg:text-base text-sm font-nunito font-semibold leading-[20px]">
              {country}
            </p>
          </div>
          <div>
            <p className="text-[#D00338E5] lg:text-[32px] text-base font-nunito font-extrabold lg:leading-10 leading-[22px]">
              ${price}
            </p>
          </div>
        </div>
      </div>
      <hr />

      <div className="grid grid-cols-12 gap-6 my-[45px]">
        {facilities.map(({ id, title, details }) => (
          <div key={id} className="lg:col-span-3 col-span-6">
            <div className="flex gap-1.5 p-1 flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
              <Calendar className="text-accent" size={32} />
              <div className="text-center md:text-left space-y-3">
                <h3 className="text-[#393E50] text-base font-nunito font-extrabold leading-[20px]">
                  {title}
                </h3>
                <p className="text-[#747474] lg:text-base text-sm font-nunito font-semibold lg:leading-[20px] leading-[16px]">
                  {details}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </>
  );
};

export default SingleDestinationFacilities;
