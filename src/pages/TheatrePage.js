import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PlayTile from '../components/theatre/PlayTile';

import HeroSection from '../components/HeroSection';
import Banner from '../components/Banner';

function TheatrePage() {
  const { plays, header, headshot } = useLoaderData();
  return (
    <main>
      <Banner imgUrl={header} />
      <HeroSection
        img={headshot}
        text={`افتقدت وجود نشاط جاد لكتابة المسرحية..\n\n فكانت مسرحية البراحة التي تعدى صداها البحرين لتصل إلى دول الخليج!`}
      />

      <div className="theatre-tiles-container flex-list-x">
        <h1 className="page-title">مسرحيات</h1>
        {plays.map((p) => (
          <Link
            key={p.nameEN}
            className="link box-link flex-list-y"
            to={p.nameEN}
          >
            {p.nameAR}
          </Link>
        ))}
      </div>
    </main>
  );
}

export default TheatrePage;
