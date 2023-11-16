import React from 'react';

import { Link } from 'react-router-dom';

import PageHeader from '../components/PageHeader';
function PhotographyPage() {
  return (
    <main id="photography-page">
      <PageHeader page="photography" />
      <div className="publishers-container">
        <Link className="box-link flex-list-y" to="art">
          لقطات فنية
        </Link>
        <Link className="box-link flex-list-y" to="personal">
          صور شخصية
        </Link>
      </div>
    </main>
  );
}

export default PhotographyPage;
