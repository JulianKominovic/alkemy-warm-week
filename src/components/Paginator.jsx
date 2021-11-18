import React, { useEffect } from "react";
import { Pagination } from "react-bootstrap";

const Paginator = ({ setPage, currentPage, minPage }) => {
  useEffect(() => {}, [setPage]);
  return (
    // TODO correct size on mobile
    <Pagination size="lg" className="w-100 justify-content-center">
      <Pagination.First
        disabled={currentPage === minPage ? true : false}
        onClick={() => setPage(minPage)}
      />
      <Pagination.Prev
        disabled={currentPage === minPage ? true : false}
        onClick={() => setPage(currentPage - 1)}
      />
      <Pagination.Item
        disabled={currentPage === minPage ? true : false}
        onClick={() => setPage(currentPage - 1)}
      >
        {currentPage}
      </Pagination.Item>

      <Pagination.Item active>{currentPage + 1}</Pagination.Item>
      <Pagination.Item onClick={() => setPage(currentPage + 1)}>
        {currentPage + 2}
      </Pagination.Item>

      <Pagination.Next onClick={() => setPage(currentPage + 1)} />
      <Pagination.Last disabled />
    </Pagination>
  );
};

export default Paginator;
