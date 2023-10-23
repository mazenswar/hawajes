import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function PlayPage() {
  const { video, images, songs, doc, cover, play } = useLoaderData();
  function renderDoc() {
    if (doc) {
      return (
        <section className="pdf-section">
          <h1 className="page-title">النص المسرحي</h1>
          <object
            data={doc}
            type="application/pdf"
            className="pdf-viewer"
            width={'80%'}
            height={'400px'}
          >
            <p>
              Unable to display PDF file. <a href={doc}>Download</a> instead.
            </p>
          </object>
        </section>
      );
    }
  }

  function renderVid() {
    if (video) {
      return (
        <video controls>
          <source src={video} type="video/mp4" />
        </video>
      );
    }
  }

  function renderCover() {
    if (cover) {
      return <img src={cover} alt="cover" className="play-cover" />;
    }
  }

  function renderImages() {
    if (images) {
      return (
        <section className="image-section">
          <h1 className="page-title">صور</h1>
          {images.map((img, i) => (
            <img src={img} alt={`play-${i}`} key={`play-${i}`} />
          ))}
        </section>
      );
    }
  }
  function renderSongs() {
    console.log(songs);
    if (songs) {
      return (
        <section className="song-section">
          <h1 className="page-title">أغاني</h1>
          {songs.map((song, i) => {
            return (
              <audio key={`audio-${i}`} controls>
                <source src={song} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            );
          })}
        </section>
      );
    }
  }

  return (
    <main id="play-page">
      <h1 className="page-title">{play.nameAR}</h1>

      {/* {renderCover()} */}
      {renderVid()}
      {renderDoc()}
      {renderImages()}
      {renderSongs()}
    </main>
  );
}
