import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import MawwalTile from './MawwalTile';

function Mawwaeel({ currentItems }) {
  return (
    currentItems &&
    currentItems.map((a) => <MawwalTile key={`mawwal-${a}`} data={a} />)
  );
}

export default function PaginatedMawwal({ data, itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    setItemOffset(0);
  }, [data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <div id="paginated-container">
      <Mawwaeel currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        activeClassName="active"
        pageLinkClassName="page-link"
        pageClassName="page-item"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
      />
    </div>
  );
}
