import React from 'react';
import { useLoaderData } from 'react-router-dom';
import YoutubePlayer from '../components/YoutubePlayer';

function InterviewsPage() {
  const interviews = useLoaderData();

  return (
    <main id="interviews-page">
      {interviews.map((i) => {
        return (
          <section className="play-section" key={i.title}>
            <h2>{i.title}</h2>
            <YoutubePlayer videoUrl={i.file} />
          </section>
        );
      })}
    </main>
  );
}

export default InterviewsPage;
