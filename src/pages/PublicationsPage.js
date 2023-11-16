import React from 'react';

import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

function PublicationsPage() {
  return (
    <main>
      <PageHeader page="publications" />

      <section className="mawwal-section publishers-container">
        <Link to="makaka" className="box-link flex-list-y">
          مكاكة عشق
        </Link>
        <Link to="mawalat" className="box-link flex-list-y">
          موالات بحرينية
        </Link>
      </section>

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
