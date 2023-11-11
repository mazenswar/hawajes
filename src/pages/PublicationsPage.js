import React from 'react';

import { Link, useLoaderData } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

function PublicationsPage() {
  const { header } = useLoaderData();
  return (
    <main>
      <PageHeader page="publications" />
      <h1 className="page-title">اصدارات ومؤلفات</h1>

      <h2 className="page-title">مواويل</h2>
      <section className="mawwal-section publishers-container">
        <Link to="makaka" className="box-link flex-list-y">
          مكاكة عشق
        </Link>
        <Link to="mawalat" className="box-link flex-list-y">
          موالات بحرينية
        </Link>
      </section>

      <h2 className="page-title">قصص أطفال</h2>
      <section className="children-section publishers-container">
        <Link to="rainbow" className="box-link flex-list-y">
          حكاية قوس قزح
        </Link>
        <Link to="holako" className="box-link flex-list-y">
          هولاكو والأسرى الأربعة
        </Link>
      </section>
      <h1 className="page-title">أعمال لم تنفذ</h1>
      <section className="tba-section">
        <h2> قيد الإنشاء</h2>
      </section>
    </main>
  );
}

export default PublicationsPage;
