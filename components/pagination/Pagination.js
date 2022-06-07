import { useState } from "react";
import styles from "./Pagination.module.css";
import { PAGE_SIZE } from "../../constants/index.js";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";

const Pagination = ({ numOfResults, handlePageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [numOfResults]);

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
    <div className={styles.paginationContainer}>
      <span>
        {prevDisabled && (
          <span>
            <FaArrowLeft className={styles.arrowDisabled} />
          </span>
        )}
        {!prevDisabled && (
          <a aria-label="Left arrow">
            <FaArrowLeft onClick={() => pageChange(currentPage - 1)} />
          </a>
        )}
      </span>
      <span className={styles.paginationText}>
        Page {currentPage} of {totalPages}
      </span>
      <span>
        {nextDisabled && (
          <span>
            <FaArrowRight className={styles.arrowDisabled} />
          </span>
        )}
        {!nextDisabled && (
          <a aria-label="Right arrow">
            <FaArrowRight onClick={() => pageChange(currentPage + 1)} />
          </a>
        )}
      </span>
    </div>
  );
};
export default Pagination;
