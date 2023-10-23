import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { translateDateToArabicString } from '../util/helpers';

const imgExtensions = ['png', 'PNG', 'jpg', 'JPG', 'JPEG', 'jpeg'];
const pdfExtensions = ['pdf', 'PDF'];

export default function PhotoPage() {
  const { id, photo, photoRange, nextPhotoId, prevPhotoId, photoIndex, file } =
    useLoaderData();

  const [isMaximized, setIsMaximized] = useState(false);

  function renderChangePageButton(back = false) {
    // >> go right
    if (back) {
      // DISABLED - cannot go back
      if (!prevPhotoId) {
        return (
          <Link
            className="photo-nav disabled right"
            to={`../photography/${prevPhotoId}`}
          >
            {' '}
            {'<'}{' '}
          </Link>
        );
      }
      // ENABLED - can go back
      else {
        return (
          <Link
            className="photo-nav right"
            to={`../photography/${prevPhotoId}`}
          >
            {' '}
            {'<'}{' '}
          </Link>
        );
      }
    }
    // go lefttt
    else {
      if (!nextPhotoId) {
        return (
          <Link
            className="photo-nav disabled left"
            to={`../photography/${nextPhotoId}`}
          >
            {' '}
            {'>'}{' '}
          </Link>
        );
      } else {
        return (
          <Link className="photo-nav left" to={`../photography/${nextPhotoId}`}>
            {' '}
            {'>'}{' '}
          </Link>
        );
      }
    }
  }

  useEffect(() => {
    if (window.innerWidth < 600) {
      setIsMaximized(true);
    }
  }, []);

  ///////////////////////////////

  return (
    <main id="photo-page">
      <img src={file} alt={id} />
      <div className="photo-page-header">
        <div className="photo-nav-buttons">
          {renderChangePageButton(true)}
          <span>
            {photoRange[1]}-{photoIndex + 1}
          </span>
          {renderChangePageButton()}
        </div>
      </div>
    </main>
  );
}
