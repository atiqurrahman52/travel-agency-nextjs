import { useEffect, useState } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";
import ReactPaginate from "react-paginate";

import DestinationCard from "./DestinationCard";

const AllDestination = ({ data }) => {
  const [isActive, setIsActive] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(
      isActive === 0
        ? data.filter((item) => item.category === "europe")
        : filteredData
    );
  }, []);

  const filterItem = (item, i) => {
    setIsActive(i);
    setFilteredData(
      data.filter((currentItem) => currentItem.category === item)
    );
  };

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  // 0, 10, 20, 30....
  const PER_PAGE = 4;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(filteredData.length / PER_PAGE);

  return (
    <div className="py-10 xl:py-16">
      <div className="container">
        <p className="text-[#393E50]  font-nunito font-extrabold lg:text-[32px] text-base lg:leading-10 leading-[22px] text-center mb-[32px]">
          Find your Destination from Our Travel Bucket
        </p>
        {/* <div className="flex md:justify-center justify-start items-center gap-10  text-[#E46D8C] scroll-bar  overflow-x-auto md:overflow-x-visible scrollbar-thumb-blue-600 hover:scrollbar-thumb-red-500 "> */}
        <div className="flex justify-start md:justify-center items-center gap-10  text-[#E46D8C] scroll-bar overflow-x-auto">
          {["europe", "asia", "africa", "north america"].map((item, i) => {
            return (
              <button
                key={i}
                className={`font-nunito capitalize font-extrabold p-2.5 rounded-[5px]  leading-5 border ${
                  isActive === i
                    ? "text-white bg-[#F1B4C4] border-[#E46D8C]"
                    : "text-[#747474] bg-transparent border-transparent"
                }  cursor-pointer`}
                onClick={() => filterItem(item, i)}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-2 gap-4 md:gap-6 py-10 lg:py-16 xl:py-20">
          {filteredData.slice(offset, offset + PER_PAGE).map((item, i) => (
            <DestinationCard key={i} data={item} />
          ))}
        </div>

        {filteredData.length > PER_PAGE && (
          <ReactPaginate
            previousLabel={<CaretLeft size={22} />}
            nextLabel={<CaretRight size={22} />}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disable"}
            activeClassName={"pagination__link--active"}
          />
        )}
      </div>
    </div>
  );
};

export default AllDestination;
