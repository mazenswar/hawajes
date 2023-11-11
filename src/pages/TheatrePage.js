import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PlayTile from '../components/theatre/PlayTile';

function TheatrePage() {
  const { plays, header, headshot } = useLoaderData();
  return (
    <main>
      <h1 className="page-title">مسرحيات</h1>
      <section className="theatre-tiles-container flex-list-x">
        {plays.map((p) => (
          <Link
            key={p.nameEN}
            className="box-link flex-list-y play-tile"
            to={p.nameEN}
          >
            {p.nameAR}
          </Link>
        ))}
      </section>
      <h1 className="page-title">أعمال لم تنفذ</h1>
      <section className="tba-section">
        <h2> قيد الإنشاء</h2>
      </section>
    </main>
  );
}

export default TheatrePage;
