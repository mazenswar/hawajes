import React from 'react';

import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

function MawwalPage() {
  return (
    <main>
      <PageHeader page="mawwal" />
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
