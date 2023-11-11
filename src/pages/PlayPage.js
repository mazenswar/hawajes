import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import externalLinkIcon from '../assets/images/icons/external.png';
import YoutubePlayer from '../components/YoutubePlayer';

export default function PlayPage() {
  const { video, images, songs, doc, cover, play } = useLoaderData();

  function renderDoc() {
    if (doc) {
      if (isMobile) {
        return (
          <section className="pdf-section mobile">
            <a href={doc} target="_blank" rel="noreferrer">
              <img src={externalLinkIcon} alt="external link icon" />
              <h2>النص المسرحي</h2>
            </a>
          </section>
        );
      } else {
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
              <p>حدث خطأ أثناء تحميل الملف، نرجوا المحاولة مجددًا بعد قليل</p>
            </object>
          </section>
        );
      }
    }
  }

  function renderVid() {
    if (video) {
      return (
        <YoutubePlayer
          videoUrl={
            'https://www.youtube.com/embed/f44hjcUwF_U?si=KTCJbXlIffbx5Zbh'
          }
        />
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
      <h1 className="page-title">
        {play.nameAR} ({play.year})
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        {renderVid()}
        {renderDoc()}
        {renderImages()}
        {renderSongs()}
      </Suspense>
    </main>
  );
}
