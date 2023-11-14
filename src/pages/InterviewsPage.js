import React from 'react';
import { useLoaderData } from 'react-router-dom';
import YoutubePlayer from '../components/YoutubePlayer';

function InterviewsPage() {
  const interviews = useLoaderData();

  return (
    <main id="interviews-page">
      <h1 className="page-title">مقابلات</h1>
      {interviews.map((i) => {
        return (
          <section className="play-section" key={i.title}>
            <h2>{i.title}</h2>
            <YoutubePlayer videoUrl={i.file} />
          </section>
        );
      })}
      <section className="tba-section">
        <h2> قيد الإنشاء</h2>
      </section>
    </main>
  );
}

export default InterviewsPage;
