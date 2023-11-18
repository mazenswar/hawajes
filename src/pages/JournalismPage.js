import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

export default function JournalismPage() {
  return (
    <main id="journalism-page">
      <PageHeader page="journalism" />
      <div className="publishers-container">
        <Link className="box-link flex-list-y" to="sada/all">
          صدى الأسبوع
        </Link>
        <Link className="box-link flex-list-y" to="panorama/all">
          بانوراما الخليج
        </Link>
        <Link className="box-link flex-list-y" to="aak/all">
          أخبار الخليج
        </Link>
        <Link className="box-link flex-list-y" to="alayam">
          الأيام
        </Link>
        <Link className="box-link flex-list-y" to="alwatan">
          الوطن
        </Link>
      </div>
    </main>
  );
}
