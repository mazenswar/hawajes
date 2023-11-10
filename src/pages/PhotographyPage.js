import React, { useEffect } from 'react';

import { useLoaderData } from 'react-router';

import { Link } from 'react-router-dom';
import useScreenDimensions from '../components/hooks/useScreenDimensions';
function PhotographyPage() {
  const { headerSm, headerBg } = useLoaderData();
  const { dimensions } = useScreenDimensions();

  return (
    <main id="photography-page">
      <section className="page-header">
        <img src={dimensions.width < 500 ? headerSm : headerBg} alt="header" />
      </section>
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
