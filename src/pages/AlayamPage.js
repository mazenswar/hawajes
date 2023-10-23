import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PaginatedArticles from '../components/PaginatedArticles';
import useSearch from '../components/hooks/useSearch';
import Banner from '../components/Banner';

export default function AlayamPage() {
  const { articles, publisher, header } = useLoaderData();
  const [list, setList] = useState([]);
  const { SearchComponent, filteredList, filterItems } = useSearch(list);

  useEffect(() => {
    setList(filterItems(articles));
  }, [articles]);

  return (
    <main id="alayam-page">
      <Banner imgUrl={header} />
      <h1 className="page-title">الأيام</h1>
      <SearchComponent />
      <PaginatedArticles data={filteredList} itemsPerPage={15} />
    </main>
  );
}
