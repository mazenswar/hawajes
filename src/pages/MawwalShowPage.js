import React, { useState } from 'react';
import { Link, ScrollRestoration, useLoaderData } from 'react-router-dom';

function MawwalShowPage() {
  const {
    id,
    mawwal,
    mawwalRange,
    nextMawwalId,
    prevMawwalId,
    mawwalIndex,
    file,
  } = useLoaderData();

  const [isMaximized, setIsMaximized] = useState(false);
  function renderChangePageButton(back = false) {
    // >> go right
    if (back) {
      // DISABLED - cannot go back
      if (!prevMawwalId) {
        return (
          <Link
            className="mawwal-nav disabled right"
            to={`../mawwal/${mawwal.category}/${prevMawwalId}`}
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
            className="mawwal-nav right"
            to={`../mawwal/${mawwal.category}/${prevMawwalId}`}
          >
            {' '}
            {'<'}{' '}
          </Link>
        );
      }
    }
    // go lefttt
    else {
      if (!nextMawwalId) {
        return (
          <Link
            className="mawwal-nav disabled left"
            to={`../mawwal/${mawwal.category}/${nextMawwalId}`}
          >
            {' '}
            {'>'}{' '}
          </Link>
        );
      } else {
        return (
          <Link
            className="mawwal-nav left"
            to={`../mawwal/${mawwal.category}/${nextMawwalId}`}
          >
            {' '}
            {'>'}{' '}
          </Link>
        );
      }
    }
  }
  return (
    <main id="mawwal-page">
      <ScrollRestoration />
      <img className={'show-img'} src={file} alt={id} />
      <div className="mawwal-page-header">
        <div className="mawwal-nav-buttons">
          {renderChangePageButton(true)}
          <span>
            {mawwalRange[1]}-{mawwalIndex + 1}
          </span>
          {renderChangePageButton()}
        </div>
      </div>
    </main>
  );
}

export default MawwalShowPage;
