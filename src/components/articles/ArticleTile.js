import React from 'react';
import { Link } from 'react-router-dom';
import { translateDateToArabicString } from '../../util/helpers';

export default function ArticleTile({ data: article }) {
  return (
    <Link
      to={
        '/journalism/' +
        article.publisherEN +
        '/' +
        article.categoryEN +
        '/' +
        article.id
      }
      target="_blank"
      rel="noreferer"
      className="tile article-tile clickable-box flex-list-y"
    >
      {/* <img src={imgPath} alt="article-thumbnail" /> */}
      <div className="text-container">
        <p className="publisher-text">{article.publisherAR}</p>
        <p className="category-text">{article.categoryAR}</p>
        <p className="date-text">{translateDateToArabicString(article.date)}</p>
      </div>
    </Link>
  );
}
