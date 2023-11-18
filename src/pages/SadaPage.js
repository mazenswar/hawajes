import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PaginatedArticles from '../components/PaginatedArticles';
import useSearch from '../components/hooks/useSearch';

const defaultTabsState = {
  general: false,
  inv: false,
  aswag: false,
  lagta: false,
  ghurba: false,
  gabel: false,
  esharat: false,
  baloonat: false,
  kalma: false,
  all: false,
};
export default function SadaPage() {
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
          to="/journalism/sada/all"
        >
          جميع
        </Link>
        <Link
          className={setActiveStateClassName('general')}
          to="/journalism/sada/general"
        >
          عام
        </Link>
        <Link
          className={setActiveStateClassName('kalma')}
          to="/journalism/sada/kalma"
        >
          كلمة عجلى
        </Link>
        <Link
          className={setActiveStateClassName('gabel')}
          to="/journalism/sada/gabel"
        >
          قبل أن تندثر
        </Link>
        <Link
          className={setActiveStateClassName('inv')}
          to="/journalism/sada/inv"
        >
          تحقيقات
        </Link>
        <Link
          className={setActiveStateClassName('lagta')}
          to="/journalism/sada/lagta"
        >
          لقطة
        </Link>
        <Link
          className={setActiveStateClassName('ghurba')}
          to="/journalism/sada/ghurba"
        >
          غربة
        </Link>
        <Link
          className={setActiveStateClassName('baloonat')}
          to="/journalism/sada/baloonat"
        >
          بالونات
        </Link>
        <Link
          className={setActiveStateClassName('esharat')}
          to="/journalism/sada/esharat"
        >
          إشارات
        </Link>
        <Link
          className={setActiveStateClassName('aswag')}
          to="/journalism/sada/aswag"
        >
          ملحق الأسواق
        </Link>
      </>
    );
  }

  //   general: false,
  // inv: false,
  // aswag: false,
  // lagta: false,
  // ghurba: false,
  // gabel: false,
  // esharat: false,
  // baloonat: false,
  // kalma: false,
  // all: false,

  return (
    <main id="sada-page">
      <h1 className="page-title">صدى الأسبوع</h1>
      <div className="sada-links-container">{renderLinks()}</div>
      <SearchComponent />
      <PaginatedArticles data={filteredList} itemsPerPage={15} />
    </main>
  );
}
