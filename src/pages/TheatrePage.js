import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PlayTile from '../components/theatre/PlayTile';

function TheatrePage() {
  const { plays, header, headshot } = useLoaderData();
  return (
    <main>
      <div className="theatre-tiles-container flex-list-x">
        <h1 className="page-title">مسرحيات</h1>
        {plays.map((p) => (
          <Link
            key={p.nameEN}
            className="box-link flex-list-y play-tile"
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
