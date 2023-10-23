import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Banner from '../components/Banner';
import PaginatedArticles from '../components/PaginatedArticles';

function PanoramaPage() {
  const { articles, publisher, header } = useLoaderData();
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(articles);
  }, [articles]);

  return (
    <main id="panorama-page">
      <Banner imgUrl={header} />
      <h1 className="page-title">بانوراما الخليج</h1>

      <PaginatedArticles data={list} itemsPerPage={15} />
    </main>
  );
}

export default PanoramaPage;
