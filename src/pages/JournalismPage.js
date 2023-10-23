import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Banner from '../components/Banner';

export default function JournalismPage() {
  const { headshot, header } = useLoaderData();
  return (
    <main id="journalism-page">
      <Banner imgUrl={header} />
      <HeroSection
        img={headshot}
        text={
          'من يوم دعاني علي سيار للكتابة، صارت الصحافة قدري المحتوم!\n\n دخلت الصحافة من باب المراهقة السياسية، وقفزت قفزة واسعة..\nمن الكتابة على الجدران إلى الكتابة المشروعة.'
        }
      />

      <div className="publishers-container">
        <Link className="link box-link flex-list-y" to="aak/all">
          أخبار الخليج
        </Link>
        <Link className="link box-link flex-list-y" to="alwatan">
          الوطن
        </Link>
        <Link className="link box-link flex-list-y" to="sada">
          صدى الأسبوع
        </Link>
        <Link className="link box-link flex-list-y" to="alayam">
          الأيام
        </Link>
        <Link className="link box-link flex-list-y" to="panorama">
          بانوراما الخليج
        </Link>
      </div>
    </main>
  );
}
