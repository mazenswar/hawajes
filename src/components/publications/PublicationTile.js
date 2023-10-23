import React from 'react';

const PublicationTile = ({ data: publication }) => {
  return (
    <div className="publication-tile">
      <img src={publication.img_url} alt={publication.title} />
      <p>{publication.description}</p>
    </div>
  );
};

export default PublicationTile;
