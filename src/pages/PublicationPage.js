import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function PublicationPage() {
  const { file, name } = useLoaderData();
  const nameAR = {
    holako: 'هولاكو والأسرى الأربعة',
    rainbow: 'حكاية قوس قزح',
    mawalat: 'موالات بحرينية',
    makaka: 'مكاكة عشق',
  };

  return (
    <main>
      <h1 className="page-title">{nameAR[name]}</h1>
      <object
        data={file}
        type="application/pdf"
        className="pdf-viewer"
        width={'80%'}
        height={'400px'}
      >
        <p>
          Unable to display PDF file. <a href={file}>Download</a> instead.
        </p>
      </object>
    </main>
  );
}
