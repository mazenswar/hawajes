import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import PhotoTile from './PhotoTile';

function Photos({ currentItems }) {
  return (
    currentItems &&
    currentItems.map((a) => <PhotoTile key={`photo-${a.id}`} data={a} />)
  );
}

export default function PaginatedPhotos({ data, itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    setItemOffset(0);
  }, [data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;

    setItemOffset(newOffset);
    window.scrollTo(0, 0);
  };

  return (
    <div id="paginated-container">
      <Photos currentItems={currentItems} />
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
