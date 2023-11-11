import React from 'react';

function YoutubePlayer({ videoUrl }) {
  return (
    <section className="video-container">
      <iframe
        className="youtube-player"
        src={videoUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </section>
  );
}

export default YoutubePlayer;
