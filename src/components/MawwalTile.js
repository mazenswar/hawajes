import React from 'react';

function MawwalTile({ data }) {
  return (
    <div className="mawwal-tile">
      <img src={data} alt="mawwal" />
    </div>
  );
}

export default MawwalTile;
