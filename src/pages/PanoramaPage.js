import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PaginatedArticles from '../components/PaginatedArticles';
import useSearch from '../components/hooks/useSearch';

const defaultTabsState = {
  inv: false,
  sout: false,
  zoom: false,
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
          to="/journalism/panorama/all"
        >
          جميع
        </Link>
        <Link
          className={setActiveStateClassName('inv')}
          to="/journalism/panorama/inv"
        >
          تحقيقات
        </Link>
        <Link
          className={setActiveStateClassName('sout')}
          to="/journalism/panorama/sout"
        >
          صوت وصورة
        </Link>
        <Link
          className={setActiveStateClassName('zoom')}
          to="/journalism/panorama/zoom"
        >
          زووم
        </Link>
      </>
    );
  }

  return (
    <main id="panorama-page">
      <h1 className="page-title">بانوراما الخليج</h1>
      <div className="panorama-links-container">{renderLinks()}</div>
      <SearchComponent />
      <PaginatedArticles data={filteredList} itemsPerPage={15} />
    </main>
  );
}
