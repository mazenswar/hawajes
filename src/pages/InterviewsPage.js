import React from 'react';
import { useLoaderData } from 'react-router-dom';

function InterviewsPage() {
  const interviews = useLoaderData();

  return (
    <main id="interviews-page">
      <h1 className="page-title">مقابلات</h1>
      {interviews.map((i) => {
        return (
          <section className="play-section" key={i.title}>
            <h2>{i.title}</h2>
            <video controls>
              <source src={i.file} type="video/mp4" />
            </video>
          </section>
        );
      })}
    </main>
  );
}

export default InterviewsPage;
