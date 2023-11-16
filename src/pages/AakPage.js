import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PaginatedArticles from '../components/PaginatedArticles';
import useSearch from '../components/hooks/useSearch';

const defaultTabsState = {
  general: false,
  hawajes: false,
  hawamesh: false,
  columns: false,
  all: false,
};
export default function AakPage() {
  const { category, allArticles, articlesByCategory } = useLoaderData();
  const [list, setList] = useState([]);
  const { SearchComponent, filteredList, filterItems } = useSearch(list);

  const [tabManager, setTabManager] = useState(defaultTabsState);

  function setListBasedOnCategory() {
    const newTabState = defaultTabsState;
    if ((category && category.length === 0) || category === 'all') {
      setTabManager({ ...newTabState, all: true });
      setList(filterItems(allArticles));
    } else if (articlesByCategory && category) {
      setTabManager({ ...newTabState, [category]: true });
      setList(filterItems(articlesByCategory[category]));
    }
  }

  useEffect(setListBasedOnCategory, [category]);
  function setActiveStateClassName(newCategory) {
    if (tabManager[newCategory]) {
      return 'header-link-active';
    } else {
      return 'header-link';
    }
  }
  function renderLinks() {
    return (
      <>
        <Link
          className={setActiveStateClassName('all')}
          to="/journalism/aak/all"
        >
          جميع
        </Link>
        {/* <Link
          className={setActiveStateClassName('general')}
          to="/journalism/aak/general"
        >
          عام
        </Link>
        <Link
          className={setActiveStateClassName('columns')}
          to="/journalism/aak/columns"
        >
          مقالات
        </Link> */}
        <Link
          className={setActiveStateClassName('hawajes')}
          to="/journalism/aak/hawajes"
        >
          هواجس
        </Link>
        <Link
          className={setActiveStateClassName('hawamesh')}
          to="/journalism/aak/hawamesh"
        >
          هوامش
        </Link>
      </>
    );
  }

  return (
    <main id="aak-page">
      <h1 className="page-title">أخبار الخليج</h1>
      <div className="aak-links-container">{renderLinks()}</div>
      <SearchComponent />
      <PaginatedArticles data={filteredList} itemsPerPage={15} />
    </main>
  );
}
