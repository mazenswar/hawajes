import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PaginatedArticles from '../components/PaginatedArticles';
import useSearch from '../components/hooks/useSearch';
import Banner from '../components/Banner';

export default function AlwatanPage() {
  const { articles, publisher, header } = useLoaderData();
  console.log(articles);
  const [list, setList] = useState([]);
  const { SearchComponent, filteredList, filterItems } = useSearch(list);

  useEffect(() => {
    setList(filterItems(articles));
  }, [articles]);

  return (
    <main id="alwatan-page">
      <Banner imgUrl={header} />
      <h1 className="page-title">الوطن</h1>
      <SearchComponent />
      <PaginatedArticles data={filteredList} itemsPerPage={15} />
    </main>
  );
}
