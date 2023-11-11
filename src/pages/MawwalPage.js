import React from 'react';

import { Link, useLoaderData } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

function MawwalPage() {
  const { header } = useLoaderData();
  return (
    <main>
      <PageHeader page="mawwal" />
      <h1 className="page-title">مواويل</h1>
      <div className="publishers-container">
        <Link className="box-link flex-list-y" to="aak">
          أخبار الخليج
        </Link>
        <Link className="box-link flex-list-y" to="social">
          مواقع التواصل الاجتماعية
        </Link>
      </div>
    </main>
  );
}

export default MawwalPage;
