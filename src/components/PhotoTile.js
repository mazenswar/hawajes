import React from 'react';
import { Link } from 'react-router-dom';

function PhotoTile({ data }) {
  return (
    <Link to={data.id} className="photo-tile">
      <img src={data.file} alt="scene" />
    </Link>
  );
}

export default PhotoTile;
