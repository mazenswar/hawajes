import React from 'react';

function Banner({ imgUrl }) {
  return (
    <div className="banner">
      <img src={imgUrl} alt="banner" />
    </div>
  );
}

export default Banner;
