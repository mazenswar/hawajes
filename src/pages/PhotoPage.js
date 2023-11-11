import React, { Suspense, useEffect, useState } from 'react';
import { Await, Link, useLoaderData } from 'react-router-dom';
import { translateDateToArabicString } from '../util/helpers';
import { ThreeCircles } from 'react-loader-spinner';

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
            to={`../photography/${photo.category}/${prevPhotoId}`}
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
            to={`../photography/${photo.category}/${prevPhotoId}`}
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
            to={`../photography/${photo.category}/${nextPhotoId}`}
          >
            {' '}
            {'>'}{' '}
          </Link>
        );
      } else {
        return (
          <Link
            className="photo-nav left"
            to={`../photography/${photo.category}/${nextPhotoId}`}
          >
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
      <Suspense
        fallback={
          <main className="flex-list-y">
            <ThreeCircles
              height="100"
              width="100"
              color="#565656"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""
            />
          </main>
        }
      >
        <Await resolve={file} errorElement={'Error loading Article'}>
          {(f) => (
            <section className="photo-sec">
              <img src={f} alt={id} />
            </section>
          )}
        </Await>
      </Suspense>

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
