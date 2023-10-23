import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayTile({ data: play }) {
  return (
    <Link to={'/theatre/' + play.id} className="play-tile clickable-box">
      <img src={play.img_url} alt={'play-' + play.id} />
      <div className="play-tile-text-container">
        <h3>{play.title}</h3>
        <p>{play.description}</p>
      </div>
    </Link>
  );
}
