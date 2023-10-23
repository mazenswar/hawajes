import React from 'react';
import Banner from '../components/Banner';
import { Link, useLoaderData } from 'react-router-dom';

function MawwalPage() {
  const { header } = useLoaderData();
  return (
    <main>
      <Banner imgUrl={header} />
      <h1 className="page-title">مواويل</h1>
      <div className="publishers-container">
        <Link className="link box-link flex-list-y" to="aak">
          أخبار الخليج
        </Link>
        <Link className="link box-link flex-list-y" to="social">
          مواقع التواصل الاجتماعية
        </Link>
      </div>
    </main>
  );
}

export default MawwalPage;
