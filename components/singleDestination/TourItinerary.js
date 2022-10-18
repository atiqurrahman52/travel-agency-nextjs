import { CaretDown } from "phosphor-react";
import { useState } from "react";

const TourItinerary = ({ data }) => {
  const [accordionActive, setAccordionActive] = useState(0);

  return (
    <div className="mt-10 space-y-6">
      <h3 className="md:text-left text-center text-[#393E50] md:text-[40px] text-2xl font-nunito font-extrabold mb-6 md:mb-9 leading-[48px]">
        Tour Itinerary
      </h3>
      {data.plan.map((details,i) => (
        <div
          key={i}
          onClick={() => setAccordionActive(i === accordionActive ? "" : i)}
          className={`shadow-[0px_0px_20px_0px_#FDF3F6] rounded-[10px] ${
            i === accordionActive
              ? "bg-accent text-white rounded-b-none"
              : "bg-white text-[#D41B4B]"
          }`}
        >
          <div className="flex items-center justify-between lg:text-xl py-2.5 px-5 cursor-pointer">
            <p>Day {i+1} - {data.country}</p>
            <CaretDown
              size={25}
              className={`${
                i === accordionActive &&
                "rotate-180 transition-all duration-500"
              }`}
            />
          </div>
          {i === accordionActive && (
            <p
              key={i}
              className="bg-white text-secondary text-sm lg:text-base p-5"
            >
              {details}
            </p>
          )}
        </div>
      ))}
      <hr />
    </div>
  );
};

export default TourItinerary;
