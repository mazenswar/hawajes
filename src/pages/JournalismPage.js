import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

export default function JournalismPage() {
  const { headshot, header } = useLoaderData();
  return (
    <main id="journalism-page">
      <div className="publishers-container">
        <Link className="box-link flex-list-y" to="sada">
          صدى الأسبوع
        </Link>
        <Link className="box-link flex-list-y" to="panorama">
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
