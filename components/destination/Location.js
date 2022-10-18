import { useState } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";
import ReactPaginate from "react-paginate";

import DestinationCard from "./DestinationCard";

const Location = ({data}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  // 0, 10, 20, 30....
  const PER_PAGE = 4;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <div className="container">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 my-10 lg:-mt-20 md:mb-20">
        {data.slice(offset, offset + PER_PAGE).map((item, i) => (
          <DestinationCard key={i} data={item} />
        ))}
      </div>

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
    </div>
  );
};

export default Location;
