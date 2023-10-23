import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { translateDateToArabicString } from '../util/helpers';

const imgExtensions = ['png', 'PNG', 'jpg', 'JPG', 'JPEG', 'jpeg'];
const pdfExtensions = ['pdf', 'PDF'];

export default function ArticlePage() {
  const {
    article,
    articleRange,
    nextArticleId,
    prevArticleId,
    articleIndex,
    file,
  } = useLoaderData();

  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    console.log(article.fileType);
    if (window.innerWidth < 600) {
      setIsMaximized(true);
    }
  }, []);

  ///////////////////////////////

  function renderDoc() {
    if (imgExtensions.includes(article.fileType)) {
      return (
        <img
          onClick={(e) => setIsMaximized(!isMaximized)}
          className={isMaximized ? 'maximized' : 'minimized'}
          src={file}
          alt={`${article.publisherEN}-${article.date}`}
        />
      );
    } else if (pdfExtensions.includes(article.fileType)) {
      return (
        <object
          data={file}
          type="application/pdf"
          className="pdf-viewer"
          width={'90%'}
          height={'700px'}
        >
          <p>
            Unable to display PDF file. <a href={file}>Download</a> instead.
          </p>
        </object>
      );
    }
  }
  ////////////////////////////////
  function renderChangePageButton(back = false) {
    // >> go right
    if (back) {
      // DISABLED - cannot go back
      if (!prevArticleId) {
        return (
          <Link
            className="article-nav disabled right"
            to={`../journalism/${article.publisherEN}/${article.categoryEN}/${prevArticleId}`}
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
            className="article-nav right"
            to={`../journalism/${article.publisherEN}/${article.categoryEN}/${prevArticleId}`}
          >
            {' '}
            {'<'}{' '}
          </Link>
        );
      }
    }
    // go lefttt
    else {
      if (!nextArticleId) {
        return (
          <Link
            className="article-nav disabled left"
            to={`../journalism/${article.publisherEN}/${article.categoryEN}/${nextArticleId}`}
          >
            {' '}
            {'>'}{' '}
          </Link>
        );
      } else {
        return (
          <Link
            className="article-nav left"
            to={`../journalism/${article.publisherEN}/${article.categoryEN}/${nextArticleId}`}
          >
            {' '}
            {'>'}{' '}
          </Link>
        );
      }
    }
  }

  return (
    <main id="article-page">
      {renderDoc()}
      <div className="article-page-header">
        <p>
          نشر في {article.publisherAR}، &nbsp;
          {translateDateToArabicString(article.date)}
        </p>
        <div className="article-nav-buttons">
          {renderChangePageButton(true)}
          <span>
            {articleRange[1]}-{articleIndex + 1}
          </span>
          {renderChangePageButton()}
        </div>
      </div>
    </main>
  );
}
