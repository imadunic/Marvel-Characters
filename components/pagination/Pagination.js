import { useState } from "react";
import styles from "./Pagination.module.css";
import { PAGE_SIZE } from "../../constants/index.js";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ numOfResults, handlePageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(numOfResults / PAGE_SIZE);

  // Is the next/previous page unavailable?
  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
  const prevDisabled = parseInt(currentPage, 10) === 1;

  // Implement page change
  const pageChange = (newPageNumber) => {
    setCurrentPage(newPageNumber);
    handlePageChange(newPageNumber);
  };

  return (
    <div className="flex place-content-center mb-12  mt-12">
      <span>
        {prevDisabled && (
          <span className="text-center p-1 m-2 sm:text-5xl text-3xl ">
            <FaArrowLeft className="mr-3 opacity-60" />
          </span>
        )}
        {!prevDisabled && (
          <a
            className="text-center p-1 m-2 sm:text-5xl text-3xl"
            aria-label="Left arrow"
          >
            <FaArrowLeft
              className="mr-3"
              onClick={() => pageChange(currentPage - 1)}
            />
          </a>
        )}
      </span>
      <span className="self-center sm:text-xl text-lg">
        Page {currentPage} of {totalPages}
      </span>
      <span>
        {nextDisabled && (
          <span className="text-center p-1 m-2 sm:text-5xl text-3xl ">
            <FaArrowRight className="ml-3 opacity-60" />
          </span>
        )}
        {!nextDisabled && (
          <a
            className="text-center  p-1 m-2 sm:text-5xl text-4xl "
            aria-label="Right arrow"
          >
            <FaArrowRight
              className="ml-3"
              onClick={() => pageChange(currentPage + 1)}
            />
          </a>
        )}
      </span>
    </div>
  );
};
export default Pagination;
