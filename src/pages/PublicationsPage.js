import React from 'react';

import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';

function PublicationsPage() {
  const { header } = useLoaderData();
  return (
    <main>
      <Banner imgUrl={header} />
      <h1 className="page-title">اصدارات ومؤلفات</h1>

      <h2 className="page-title">مواويل</h2>
      <div className="mawwal-section publishers-container">
        <Link to="makaka" className="link box-link flex-list-y">
          مكاكة عشق
        </Link>
        <Link to="mawalat" className="link box-link flex-list-y">
          موالات بحرينية
        </Link>
      </div>

      <h2 className="page-title">قصص أطفال</h2>
      <div className="children-section publishers-container">
        <Link to="rainbow" className="link box-link flex-list-y">
          حكاية قوس قزح
        </Link>
        <Link to="holako" className="link box-link flex-list-y">
          هولاكو والأسرى الأربعة
        </Link>
      </div>
    </main>
  );
}

export default PublicationsPage;
