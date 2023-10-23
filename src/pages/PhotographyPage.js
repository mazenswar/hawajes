import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import Banner from '../components/Banner';

import { useLoaderData } from 'react-router';
import PaginatedPhotos from '../components/PaginatedPhotos';
function PhotographyPage() {
  const { list, header, headshot } = useLoaderData();
  console.log(list);
  return (
    <main>
      <Banner imgUrl={header} />
      <HeroSection
        img={headshot}
        text={`لقد كنت مصوراً فوتوغرافياً قبل أن أكون أي شيء آخر..\n\n الكاميرا لا تجامل.. ولا تهادن!`}
      />

      <div className="photo-section">
        <h1 className="page-title">لقطات فنية</h1>
        <PaginatedPhotos data={list} itemsPerPage={6} />
      </div>
    </main>
  );
}

export default PhotographyPage;
