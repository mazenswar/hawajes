import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PaginatedArticles from '../components/PaginatedArticles';
import useSearch from '../components/hooks/useSearch';

export default function AlayamPage() {
  const { articles } = useLoaderData();
  const [list, setList] = useState([]);
  const { SearchComponent, filteredList, filterItems } = useSearch(list);

  useEffect(() => {
    setList(filterItems(articles));
  }, [articles]);
  // comment
  return (
    <main id="alayam-page">
      <h1 className="page-title">الأيام</h1>
      <SearchComponent />
      <PaginatedArticles data={filteredList} itemsPerPage={15} />
    </main>
  );
}
