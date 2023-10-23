import React from 'react';
import { useLoaderData } from 'react-router-dom';

import PaginatedMawwal from '../components/PaginatedMawwal';

function MawwalListPage() {
  const { category, list } = useLoaderData();
  const titleAr = {
    aak: 'أخبار الخليج',
    social: 'مواقع التواصل الاجتماعية',
  };
  return (
    <main>
      <h1 className="page-title">مواويل {titleAr[category]}</h1>
      <PaginatedMawwal data={list} itemsPerPage={6} />
    </main>
  );
}

export default MawwalListPage;
