import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import PaginatedArticles from '../components/PaginatedArticles';

function SadaPage() {
  const { articles, publisher, header } = useLoaderData();
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(articles);
  }, [articles]);

  return (
    <main id="sada-page">
      <h1 className="page-title">صدى الأسبوع</h1>

      <PaginatedArticles data={list} itemsPerPage={15} />
    </main>
  );
}

export default SadaPage;
